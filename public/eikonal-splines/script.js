// Tabs that swap a figure's video, videos that play only while on screen, and the copy button.

const MAX_WIDTH = 1120, MAX_HEIGHT = 560;   // px: the largest a video is drawn

function show(figure, button) {
  const video = figure.querySelector('video'), caption = figure.querySelector('figcaption');
  const { video: name, w, h, caption: text } = button.dataset;
  figure.querySelectorAll('.tabs button').forEach(b => b.setAttribute('aria-pressed', b === button));
  video.width = w;
  video.height = h;
  video.style.setProperty('--max', Math.min(MAX_WIDTH, Math.round(MAX_HEIGHT * w / h)) + 'px');
  video.poster = `static/images/posters/${name}.jpg`;
  video.src = `static/videos/${name}.mp4`;
  if (caption && text) caption.textContent = text;
  video.play().catch(() => {});
}

document.querySelectorAll('.clip').forEach(figure =>
  figure.querySelectorAll('.tabs button').forEach(button =>
    button.addEventListener('click', () => show(figure, button))));

if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const onScreen = new IntersectionObserver(entries => entries.forEach(entry =>
    entry.isIntersecting ? entry.target.play().catch(() => {}) : entry.target.pause()), { threshold: 0.5 });
  document.querySelectorAll('.clip video').forEach(video => onScreen.observe(video));
}

document.querySelectorAll('.copy').forEach(button => button.addEventListener('click', async () => {
  await navigator.clipboard.writeText(document.querySelector(button.dataset.copy).textContent);
  button.textContent = 'Copied';
  setTimeout(() => { button.textContent = 'Copy'; }, 1500);
}));
