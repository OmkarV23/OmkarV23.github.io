import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    period: z.string(),
    type: z.string(),
    image: z.string(),
    technologies: z.array(z.string()),
  })
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional()
  })
});

export const collections = {
  projects: projectsCollection,
  blog: blogCollection
};