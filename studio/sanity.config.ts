import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemas';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID ?? process.env.SANITY_PROJECT_ID ?? '';
const dataset = process.env.SANITY_STUDIO_DATASET ?? process.env.SANITY_DATASET ?? 'production';

export default defineConfig({ 
  name: 'newsite-ussp-studio',
  title: 'US Sport Planes – Content',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
