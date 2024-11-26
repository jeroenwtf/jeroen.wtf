import { defineCollection, z } from "astro:content";

const notesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string().optional(),
		tags: z.array(z.string()).optional(), // Tags must be an array of strings
		date: z.string().optional(), // Optional date field
	}),
});

const logCollection = defineCollection({
	type: "content",
	schema: z.object({
		date: z.string(),
		location: z.string().optional(),
	}),
});

export const collections = {
	'notes': notesCollection,
	'log': logCollection
}
