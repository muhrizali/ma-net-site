// Utilities
import { defineCollection, z } from "astro:content";

// Loaders
import { glob, file } from "astro/loaders";

// Collections
const blogPosts = defineCollection({
    loader: glob({ pattern: "**/index.md", base: "./src/pages/blog/posts" }),
    schema: z.object({
        layout: z.string(),
        title: z.string(),
        author: z.string(),
        isDraft: z.boolean(),
    })
});

export const collections = { blogPosts };
