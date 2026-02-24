import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    date: z.coerce.date(),
    title: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog };
