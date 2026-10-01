import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A ordem dos movimentos e fixa no componente. O schema garante que o
// aprendizado exista: a guideline chama de "opcional na API e obrigatorio na
// pratica", e aqui da para tornar obrigatorio de verdade.
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
    diagrama: z.enum(['esteira', 'reconciliacao', 'topologia', 'correlacao', 'tresfontes']).optional(),
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
    diagrama: z.enum(['esteira', 'reconciliacao', 'topologia', 'correlacao', 'tresfontes']).optional(),
    ganhos: z.array(z.string()).default([]),
    aprendizado: z.string(),
    links: z.array(z.object({ texto: z.string(), href: z.string() })).default([]),
  }),
});

const notas = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/notas' }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
  }),
});

export const collections = { casos, casosEn, notas };
