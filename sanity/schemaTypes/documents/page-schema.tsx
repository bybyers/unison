import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  groups: [
    {
      title: 'Page content',
      name: 'page',
    },
    {
      title: 'SEO & Settings',
      name: 'seo',
    },
  ],
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      group: 'page',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'page',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
			name: 'sections',
			type: 'sections',
      group: 'page',
			title: 'Page sections',
			description: 'Add, edit, and reorder sections',
      hidden: ({ document }) => document?.title === 'Quiz' || document?.title === 'Resources',
		}),
    defineField({
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo',
      group: 'seo',
      options: {
        collapsible: false,
        collapsed: false,
      },
      hidden: ({ document }) => document?.title === 'Home',
    }),
    {
			name: 'pageNav',
			title: 'Navigation',
			group: 'seo',
			type: 'navObject',
		},
  ],
})