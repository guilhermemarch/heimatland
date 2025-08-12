import { defineType, defineField } from 'sanity'

export const author = defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Biografia',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'role',
      title: 'Função no Grupo',
      type: 'string',
      options: {
        list: [
          { title: 'Diretor', value: 'diretor' },
          { title: 'Coordenador', value: 'coordenador' },
          { title: 'Dançarino', value: 'dancarino' },
          { title: 'Músico', value: 'musico' },
          { title: 'Colaborador', value: 'colaborador' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'role',
    },
  },
})
