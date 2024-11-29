import { defineCollection, z } from "astro:content";

const notesCollection = defineCollection({
	type: 'content',
	schema: z.object({
		tags: z.array(z.string()).optional(),
		created: z.date().optional(),
		modified: z.date().optional(),
		status: z.enum(['draft', 'published']).optional(),
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
