import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const esquemaCaso = z.object({
  titulo: z.string(),
  meta: z.string(),
  ordem: z.number(),
  par: z.string().optional(),
  chamada: z.string(),
  restricao: z.string(),
  decisao: z.string(),
  tradeoff: z.string().optional(),
  declarado: z.string(),
  observado: z.string(),
  reconciliado: z.string(),
  resultado: z.object({ antes: z.string().optional(), valor: z.string(), unidade: z.string().optional() }).optional(),
  diagrama: z.enum(['esteira', 'reconciliacao', 'correlacao', 'tresfontes']).optional(),
  ganhos: z.array(z.string()).default([]),
  aprendizado: z.string(),
});

export const collections = {
  casos: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/casos' }), schema: esquemaCaso }),
  casosEn: defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/casos-en' }), schema: esquemaCaso }),
};
