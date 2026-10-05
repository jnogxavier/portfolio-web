import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const casos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casos' }),
  schema: z.object({
    titulo: z.string(),
    meta: z.string(),
    ordem: z.number(),
    par: z.string().optional(),
    chamada: z.string(),
    declarado: z.string(),
    observado: z.string(),
    reconciliado: z.string(),
    resultado: z.object({ antes: z.string().optional(), valor: z.string(), unidade: z.string().optional() }).optional(),
    diagrama: z.enum(['esteira', 'reconciliacao', 'topologia', 'correlacao', 'tresfontes', 'gateway']).optional(),
    ganhos: z.array(z.string()).default([]),
    aprendizado: z.string(),
    links: z.array(z.object({ texto: z.string(), href: z.string() })).default([]),
  }),
});

const casosEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casos-en' }),
  schema: z.object({
    titulo: z.string(),
    meta: z.string(),
    ordem: z.number(),
    par: z.string().optional(),
    chamada: z.string(),
    declarado: z.string(),
    observado: z.string(),
    reconciliado: z.string(),
    resultado: z.object({ antes: z.string().optional(), valor: z.string(), unidade: z.string().optional() }).optional(),
    diagrama: z.enum(['esteira', 'reconciliacao', 'topologia', 'correlacao', 'tresfontes', 'gateway']).optional(),
    ganhos: z.array(z.string()).default([]),
    aprendizado: z.string(),
    links: z.array(z.object({ texto: z.string(), href: z.string() })).default([]),
  }),
});

export const collections = { casos, casosEn };
