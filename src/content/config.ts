import { defineCollection, z } from "astro:content";

const notesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional(),
		tags: z.array(z.string()).optional(), // Tags must be an array of strings
		date: z.string().optional(), // Optional date field
	}),
});

export const collections = {
	'notes': notesCollection
}
