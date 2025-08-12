import { defineType, defineField } from 'sanity'

export const category = defineType({
  name: 'category',
  title: 'Categoria',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
    }),
    defineField({
      name: 'color',
      title: 'Cor',
      type: 'string',
      options: {
        list: [
          { title: 'Vermelho Alemão', value: '#D41B1B' },
          { title: 'Dourado Alemão', value: '#FFD500' },
          { title: 'Preto', value: '#000000' },
          { title: 'Verde', value: '#22C55E' },
          { title: 'Azul', value: '#3B82F6' },
        ],
      },
      initialValue: '#D41B1B',
    }),
  ],
})
