// Utilities
import { defineCollection, z } from "astro:content";

// Loaders
import { glob, file } from "astro/loaders";

// Collections
const blogPosts = defineCollection({
    loader: glob({ pattern: "**/index.md", base: "./src/pages/blog" }),
    schema: z.object({
        layout: z.string(),
        title: z.string(),
        author: z.string(),
        isDraft: z.boolean(),
    })
});

const bookPosts = defineCollection({
    loader: glob({ pattern: "**/index.md", base: "./src/pages/books" }),
    schema: z.object({
        layout: z.string(),
        title: z.string(),
        authors: z.array(z.string()),
        tags: z.array(z.string()),
        description: z.string(),
        dateTimeAdded: z.string().transform((dateTimeAddedString) => new Date(dateTimeAddedString)),
        dateTimeEdited: z.string().transform((dateTimeEditedString) => new Date(dateTimeEditedString)),
        isDraft: z.boolean(),
        goodreadsLink: z.string(),
        coverLink: z.string(),
    })
});

const projectPosts = defineCollection({
    loader: glob({ pattern: "**/index.md", base: "./src/pages/projects" }),
    schema: z.object({
        title: z.string(),
    })
});


export const collections = { blogPosts, bookPosts, projectPosts };
