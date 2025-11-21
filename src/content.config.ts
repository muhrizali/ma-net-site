// Utilities
import { defineCollection, z } from "astro:content";

// Loaders
import { glob, file } from "astro/loaders";

// Collections
const blogPosts = defineCollection({
    loader: glob({ pattern: "**/index.md", base: "./src/pages/blog" }),
    schema: z.object({

        // COMMONS
        layout: z.string(),
        title: z.string(),
        authors: z.array(z.string()),
        tags: z.array(z.string()),
        description: z.string(),
        dateTimeAdded: z.string().transform((dateTimeAddedString) => new Date(dateTimeAddedString)),
        dateTimeEdited: z.string().transform((dateTimeEditedString) => new Date(dateTimeEditedString)),
        isDraft: z.boolean(),

        // BLOG
        // bannerLink: z.string(),
    })
});

const bookPosts = defineCollection({
    loader: glob({ pattern: "**/index.md", base: "./src/pages/books" }),
    schema: z.object({

        // COMMONS
        layout: z.string(),
        title: z.string(),
        authors: z.array(z.string()),
        tags: z.array(z.string()),
        description: z.string(),
        dateTimeAdded: z.string().transform((dateTimeAddedString) => new Date(dateTimeAddedString)),
        dateTimeEdited: z.string().transform((dateTimeEditedString) => new Date(dateTimeEditedString)),
        isDraft: z.boolean(),

        // BOOK
        goodreadsLink: z.string(),
        coverLink: z.string(),
    })
});

const projectPosts = defineCollection({
    loader: glob({ pattern: "**/index.md", base: "./src/pages/projects" }),
    schema: z.object({

        // COMMONS
        layout: z.string(),
        title: z.string(),
        authors: z.array(z.string()),
        tags: z.array(z.string()),
        description: z.string(),
        dateTimeAdded: z.string().transform((dateTimeAddedString) => new Date(dateTimeAddedString)),
        dateTimeEdited: z.string().transform((dateTimeEditedString) => new Date(dateTimeEditedString)),
        isDraft: z.boolean(),

        // PROJECT
        // langsUsed: z.array(z.string()),
        // toolsUsed: z.array(z.string()),

    })
});


export const collections = { blogPosts, bookPosts, projectPosts };
