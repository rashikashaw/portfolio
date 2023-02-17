import { defineField, defineType } from "sanity";

export const verificationToken = defineType({
  title: 'Verification Token',
  name: 'verificationToken',
  type: 'document',
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'verificationToken',
      },
    }),
    defineField({
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
    }),
    defineField({
      title: 'Token',
      name: 'token',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Expires',
      name: 'expires',
      type: 'datetime',
    }),
  ]
});