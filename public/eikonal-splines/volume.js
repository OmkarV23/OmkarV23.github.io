// Interactive viewer of the reconstructions exported by scripts/export_web_volumes.py. The fragment shader marches
// |delta n| as scripts/fig_volume.py does: the same transfer function, shading, MIDA compositing and box edges.

const STEP = 0.75, MAX_STEPS = 256;   // march step in lattice nodes; the shader's loop bound
const DISTANCE = 2.4;                 // eye distance in box diagonals, as fig_volume.py
const PLAY_RATE = 0.5;                // playback against the capture: two video frames per frame, as the videos
const PIXELS = 1e6;                   // most pixels marched per frame
const ZOOM = [0.5, 8];

const VERTEX = `#version 300 es
in vec2 corner;
void main() { gl_Position = vec4(corner, 0.0, 1.0); }`;

const FRAGMENT = `#version 300 es
precision highp float;
precision highp sampler3D;
uniform sampler3D volA, volB;         // the two frames around the shown time
uniform sampler2D lut;
uniform float blend, focal, dt, sigma, power, mixing, ambient, gmin, threshold, lineScale;
uniform vec2 resolution;
uniform vec3 eye, right, up, forward, cropMin, cropSize;
uniform vec3 corners[8];              // the box corners: pixel x, y and depth along the view axis
uniform int farCorner;
out vec4 colour;

float value(vec3 p) {
  vec3 q = (p - cropMin) / cropSize;
  float a = texture(volA, q).r;
  return blend > 0.0 ? mix(a, texture(volB, q).r, blend) : a;
}

// Coverage, depth and grey of the box edge at a pixel: 1.5 px lines, the three edges at the far corner dotted and lighter.
vec3 edge(vec2 P) {
  vec3 best = vec3(0.0);
  for (int i = 0; i < 8; i++) for (int j = i + 1; j < 8; j++) {
    int bit = i ^ j;
    if (bit != 1 && bit != 2 && bit != 4) continue;
    vec2 a = corners[i].xy, ab = corners[j].xy - a;
    float s = clamp(dot(P - a, ab) / dot(ab, ab), 0.0, 1.0);
    float k = clamp(1.5 - length(P - a - s * ab) / lineScale, 0.0, 1.0);
    bool dotted = i == farCorner || j == farCorner;
    if (dotted) k = max(k - 0.2, 0.0) * float(int(floor(s * length(ab) / (4.0 * lineScale))) % 2 == 0);
    if (k > best.x) best = vec3(k, mix(corners[i].z, corners[j].z, s), dotted ? 0.6 : 0.3);
  }
  return vec3(min(best.x, 0.995), best.yz);
}

void main() {
  vec2 P = gl_FragCoord.xy, px = (P - 0.5 * resolution) / focal;
  vec3 dir = normalize(forward + px.x * right + px.y * up);
  vec3 line = edge(P);
  float tEdge = line.y / dot(dir, forward);
  bool drawn = line.x <= 0.0;
  vec3 t0 = (cropMin - eye) / dir, t1 = (cropMin + cropSize - eye) / dir, lo = min(t0, t1), hi = max(t0, t1);
  float tn = max(max(lo.x, lo.y), max(lo.z, 0.0)), tf = min(hi.x, min(hi.y, hi.z));
  vec3 C = vec3(0.0);
  float A = 0.0, m = 0.0;             // opacity; running maximum of the value
  if (tf > tn) {
    int steps = clamp(int(ceil((tf - tn) / dt)), 1, ${MAX_STEPS});
    float h = (tf - tn) / float(steps);
    vec3 light = normalize(-0.5 * right + 0.6 * up - 0.6 * forward), halfway = normalize(light - forward);
    for (int i = 0; i < ${MAX_STEPS}; i++) {
      if (i >= steps) break;
      float t = tn + (float(i) + 0.5) * h;
      if (!drawn && tEdge <= t) { C += (1.0 - A) * line.x * line.z; A += (1.0 - A) * line.x; drawn = true; }
      vec3 p = eye + dir * t;
      float v = value(p);
      float beta = 1.0 - mixing * max(v - m, 0.0);          // MIDA: a new maximum fades what hid it
      m = max(m, v);
      float ramp = clamp((v - threshold) / (1.0 - threshold), 0.0, 1.0), alpha = 0.0;
      vec3 col = vec3(0.0);
      if (ramp > 0.0 && 1.0 - beta * A > 0.004) {
        alpha = 1.0 - exp(-sigma * pow(ramp, power) * h);
        vec3 g = 0.5 * vec3(value(p + vec3(1, 0, 0)) - value(p - vec3(1, 0, 0)), value(p + vec3(0, 1, 0)) - value(p - vec3(0, 1, 0)),
                            value(p + vec3(0, 0, 1)) - value(p - vec3(0, 0, 1)));
        float slope = length(g), w = clamp(slope / gmin, 0.0, 1.0);    // flat regions stay unshaded
        vec3 normal = -g / (slope + 1e-6);
        float diffuse = 1.0 - w + w * clamp(dot(normal, light), 0.0, 1.0);
        float spec = w * pow(clamp(dot(normal, halfway), 0.0, 1.0), 40.0);
        col = texture(lut, vec2((v * 255.0 + 0.5) / 256.0, 0.5)).rgb * (ambient + (1.0 - ambient) * diffuse) + 0.2 * spec;
      }
      C = beta * C + (1.0 - beta * A) * alpha * col;
      A = beta * A + (1.0 - beta * A) * alpha;
    }
  }
  if (!drawn) { C += (1.0 - A) * line.x * line.z; A += (1.0 - A) * line.x; }
  colour = vec4(clamp(C + 1.0 - A, 0.0, 1.0), 1.0);        // on white
}`;

const sub = (a, b) => a.map((v, i) => v - b[i]), dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const unit = a => a.map(v => v / Math.hypot(...a)), clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

function viewer(figure) {
  const canvas = figure.querySelector('canvas'), status = figure.querySelector('.status');
  const slider = figure.querySelector('.time'), clock = figure.querySelector('.clock'), play = figure.querySelector('.play');
  const gl = canvas.getContext('webgl2', { antialias: false, alpha: false });
  if (!gl || !('DecompressionStream' in window)) {
    status.textContent = 'This viewer needs a browser with WebGL 2.';
    figure.classList.add('unsupported');
    return;
  }
  const home = { azim: 38, elev: 24, zoom: 1, pan: [0, 0, 0] }, view = structuredClone(home);
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let header, bytes, textures, lut, program, locations, basis, request;      // the loaded volume and the GL objects
  let position = 0, playing = !still, visible = false, queued = false, last = 0, slow = 0, quality = 1, engaged = false;

  function setup() {
    program = gl.createProgram();
    for (const [type, source] of [[gl.VERTEX_SHADER, VERTEX], [gl.FRAGMENT_SHADER, FRAGMENT]]) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(shader));
      gl.attachShader(program, shader);
    }
    gl.bindAttribLocation(program, 0, 'corner');
    gl.linkProgram(program);
    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);     // one triangle over the canvas
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    textures = new Map(), locations = new Map(), lut = null;
  }

  const at = name => locations.get(name) ?? locations.set(name, gl.getUniformLocation(program, name)).get(name);

  function texture(target, upload) {
    const made = gl.createTexture();
    gl.bindTexture(target, made);
    upload();
    for (const key of [gl.TEXTURE_MIN_FILTER, gl.TEXTURE_MAG_FILTER]) gl.texParameteri(target, key, gl.LINEAR);
    for (const key of [gl.TEXTURE_WRAP_S, gl.TEXTURE_WRAP_T, gl.TEXTURE_WRAP_R]) gl.texParameteri(target, key, gl.CLAMP_TO_EDGE);
    return made;
  }

  function frame(k) {
    const [x, y, z] = header.size;
    if (!textures.has(k)) {
      textures.set(k, texture(gl.TEXTURE_3D, () => gl.texImage3D(gl.TEXTURE_3D, 0, gl.R8, x, y, z, 0, gl.RED, gl.UNSIGNED_BYTE, bytes, k * x * y * z)));
      slow = -1;                      // a frame that uploads a texture says nothing about the marching speed
    }
    return textures.get(k);
  }

  function draw() {
    const w = canvas.width, h = canvas.height;
    gl.viewport(0, 0, w, h);
    gl.clearColor(1, 1, 1, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    if (!header) return;
    const n = header.lattice, diagonal = Math.hypot(...n), a = view.azim * Math.PI / 180, e = view.elev * Math.PI / 180;
    const centre = n.map((v, i) => v / 2 + view.pan[i]);
    const eye = centre.map((v, i) => v + DISTANCE * diagonal * [Math.sin(a) * Math.cos(e), -Math.cos(a) * Math.cos(e), Math.sin(e)][i]);
    const forward = unit(sub(centre, eye)), right = unit(cross(forward, [0, 0, 1])), up = cross(right, forward);
    const focal = view.zoom * 0.48 * Math.min(w, h) * Math.sqrt(4 * DISTANCE ** 2 - 1);            // at zoom 1 the box's sphere fills the short side
    const corners = [];
    for (let i = 0; i < 8; i++) {
      const d = sub([i & 4 ? n[0] : 0, i & 2 ? n[1] : 0, i & 1 ? n[2] : 0], eye), depth = dot(d, forward);
      corners.push(w / 2 + focal * dot(d, right) / depth, h / 2 + focal * dot(d, up) / depth, depth);
    }
    basis = { right, up, perPixel: DISTANCE * diagonal / focal * w / canvas.clientWidth };       // lattice nodes per CSS pixel at the box centre
    const k = Math.min(Math.floor(position), header.frames - 1);
    lut ??= texture(gl.TEXTURE_2D, () => gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB8, 256, 1, 0, gl.RGB, gl.UNSIGNED_BYTE, new Uint8Array(header.lut)));
    [[gl.TEXTURE_3D, frame(k)], [gl.TEXTURE_3D, frame(Math.min(k + 1, header.frames - 1))], [gl.TEXTURE_2D, lut]].forEach(([target, bound], unitIndex) => {
      gl.activeTexture(gl.TEXTURE0 + unitIndex);
      gl.bindTexture(target, bound);
    });
    ['volA', 'volB', 'lut'].forEach((name, unitIndex) => gl.uniform1i(at(name), unitIndex));
    for (const [name, v] of Object.entries({ blend: position - k, focal, dt: STEP, sigma: header.sigma, power: header.power, mixing: header.mix,
      ambient: header.ambient, gmin: header.gmin, threshold: header.threshold, lineScale: w / canvas.clientWidth })) gl.uniform1f(at(name), v);
    for (const [name, v] of Object.entries({ eye, right, up, forward, cropMin: header.offset, cropSize: header.size })) gl.uniform3fv(at(name), v);
    gl.uniform2f(at('resolution'), w, h);
    gl.uniform3fv(at('corners'), corners);
    gl.uniform1i(at('farCorner'), [0, 1, 2, 3, 4, 5, 6, 7].reduce((far, i) => corners[3 * i + 2] > corners[3 * far + 2] ? i : far, 0));
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }

  function resize() {
    const box = canvas.getBoundingClientRect();
    const scale = quality * Math.min(devicePixelRatio || 1, 2, Math.sqrt(PIXELS / Math.max(box.width * box.height, 1)));
    canvas.width = Math.max(1, Math.round(box.width * scale));
    canvas.height = Math.max(1, Math.round(box.height * scale));
    redraw();
  }

  function show() {
    slider.value = position;
    clock.textContent = header ? `${(position / header.fps).toFixed(2)} s` : '';
    play.textContent = playing ? 'Pause' : 'Play';
  }

  function tick(now) {
    queued = false;
    const elapsed = Math.min(now - last, 100);
    last = now;
    if (!visible) return;
    if (playing && header) {
      position = (position + elapsed / 1000 * header.fps * PLAY_RATE) % Math.max(header.frames - 1, 1);
      slow = elapsed > 45 ? slow + 1 : 0;
      if (slow > 12 && quality > 0.4) { quality *= 0.8; slow = 0; resize(); }      // a slow device marches fewer pixels
      redraw();
    }
    show();
    draw();
  }

  function redraw() {
    if (!queued) queued = !!requestAnimationFrame(tick);
  }

  async function load(name) {
    request?.abort();
    request = new AbortController();
    const signal = request.signal, base = `${figure.dataset.volumes}/${name}`;
    textures.forEach(made => gl.deleteTexture(made));
    textures.clear();
    header = bytes = undefined;
    status.textContent = 'Loading';
    try {
      const head = await (await fetch(base + '.json', { signal })).json(), response = await fetch(base + '.bin', { signal });
      const total = +response.headers.get('Content-Length'), reader = response.body.getReader(), chunks = [];
      for (let got = 0; ;) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        got += value.length;
        status.textContent = `Loading ${(got / 1e6).toFixed(1)}${total ? ` of ${(total / 1e6).toFixed(1)}` : ''} MB`;
      }
      const packed = new Uint8Array(chunks.reduce((sum, chunk) => sum + chunk.length, 0));
      chunks.reduce((offset, chunk) => (packed.set(chunk, offset), offset + chunk.length), 0);
      const gzipped = packed[0] === 0x1f && packed[1] === 0x8b;      // unless the server already unpacked it
      const data = gzipped ? new Uint8Array(await new Response(new Response(packed).body.pipeThrough(new DecompressionStream('gzip'))).arrayBuffer()) : packed;
      if (signal.aborted) return;
      if (data.length !== head.frames * head.size[0] * head.size[1] * head.size[2]) throw new Error('size');
      [header, bytes, position] = [head, data, 0];
      slider.max = head.frames - 1;
      status.textContent = '';
      redraw();
    } catch (error) {
      if (error.name !== 'AbortError') status.textContent = 'The volume could not be loaded.';
    }
  }

  // Pointers: one rotates (with the right button or Shift it pans), two zoom and pan.
  const pointers = new Map();
  canvas.addEventListener('pointerdown', event => {
    canvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, [event.clientX, event.clientY]);
    engaged = true;
  });
  canvas.addEventListener('pointermove', event => {
    const before = pointers.get(event.pointerId);
    if (!before || !basis) return;
    const now = [event.clientX, event.clientY], dx = now[0] - before[0], dy = now[1] - before[1];
    const pan = (x, y) => { view.pan = view.pan.map((v, i) => clamp(v + basis.perPixel * (y * basis.up[i] - x * basis.right[i]), -60, 60)); };
    if (pointers.size === 2) {
      const other = [...pointers].find(([id]) => id !== event.pointerId)[1];
      view.zoom = clamp(view.zoom * Math.hypot(now[0] - other[0], now[1] - other[1]) / Math.max(Math.hypot(before[0] - other[0], before[1] - other[1]), 1), ...ZOOM);
      pan(dx / 2, dy / 2);
    } else if (event.buttons & 2 || event.shiftKey) {
      pan(dx, dy);
    } else {
      view.azim -= 0.4 * dx;
      view.elev = clamp(view.elev + 0.4 * dy, -88, 88);
    }
    pointers.set(event.pointerId, now);
    redraw();
  });
  for (const type of ['pointerup', 'pointercancel']) canvas.addEventListener(type, event => pointers.delete(event.pointerId));
  canvas.addEventListener('pointerleave', () => { engaged = pointers.size > 0; });
  canvas.addEventListener('contextmenu', event => event.preventDefault());
  canvas.addEventListener('wheel', event => {
    if (!engaged && !event.ctrlKey && !event.metaKey) return;      // the page keeps its scroll until the view is clicked
    event.preventDefault();
    zoom(Math.exp(-0.0015 * event.deltaY));
  }, { passive: false });
  const zoom = factor => { view.zoom = clamp(view.zoom * factor, ...ZOOM); redraw(); };
  const reset = () => { Object.assign(view, structuredClone(home)); redraw(); };
  canvas.addEventListener('dblclick', reset);
  figure.querySelector('.reset').addEventListener('click', reset);
  figure.querySelector('.zoom-in').addEventListener('click', () => zoom(1.25));
  figure.querySelector('.zoom-out').addEventListener('click', () => zoom(0.8));

  play.addEventListener('click', () => { playing = !playing; last = performance.now(); redraw(); });
  slider.addEventListener('input', () => { playing = false; position = +slider.value; redraw(); });

  figure.querySelectorAll('.tabs button').forEach(button => button.addEventListener('click', () => {
    figure.querySelectorAll('.tabs button').forEach(b => b.setAttribute('aria-pressed', b === button));
    load(button.dataset.volume);
  }));

  canvas.addEventListener('webglcontextlost', event => event.preventDefault());
  canvas.addEventListener('webglcontextrestored', () => { setup(); redraw(); });
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible && !header && !request) load(figure.querySelector('.tabs button[aria-pressed="true"]').dataset.volume);    // nothing is fetched before the view is near
    last = performance.now();
    redraw();
  }, { rootMargin: '300px' }).observe(canvas);

  setup();
  figure.volume = { view, redraw, seek(to) { playing = false; position = to; redraw(); } };
}

document.querySelectorAll('.viewer').forEach(viewer);
