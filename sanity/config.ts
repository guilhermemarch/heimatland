import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'heimatland-blog',
  title: 'Heimatland Blog',
  
  projectId: 'cf0sq1lg',
  dataset: 'production',
  
  plugins: [
    deskTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
