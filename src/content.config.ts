import { defineCollection, z } from 'astro:content';
const days = defineCollection({ type: 'content', schema: z.object({ date: z.string().date(), destinationId: z.string(), title: z.string(), provisional: z.boolean().default(true) }) });
const destinations = defineCollection({ type: 'content', schema: z.object({ name: z.string(), region: z.string(), provisional: z.boolean().default(true) }) });
const monuments = defineCollection({ type: 'content', schema: z.object({ name: z.string(), destinationId: z.string(), provisional: z.boolean().default(true) }) });
const restaurants = defineCollection({ type: 'content', schema: z.object({ name: z.string(), destinationId: z.string(), provisional: z.boolean().default(true) }) });
export const collections = { days, destinations, monuments, restaurants };
