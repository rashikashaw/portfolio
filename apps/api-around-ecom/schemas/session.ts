import { defineField, defineType } from "sanity";

export const session = defineType({
  title: 'Session',
  name: 'session',
  type: 'document',
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'session',
      },
    }),
    defineField({
      title: 'Expires',
      name: 'expires',
      type: 'datetime',
      
    }),
    defineField({
      title: 'Session Token',
      name: 'sessionToken',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'User',
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: rule => rule.required(),
    }),
  ],
});