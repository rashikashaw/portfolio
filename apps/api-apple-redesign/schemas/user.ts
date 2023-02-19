import { defineField, defineType } from "sanity";

export const user = defineType({
  title: 'User',
  name: 'user',
  type: 'document',
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'user',
      },
    }),
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'url',
    }),
    defineField({
      title: 'Email ID',
      name: 'email',
      type: 'string',
      validation: rule => rule.email(),
    }),
    defineField({
      title: 'Password',
      name: 'password',
      type: 'string',
      hidden: true,
    }),
    defineField({
      title: 'Accounts',
      name: 'accounts',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'account' }],
        weak: true,
      }],
      hidden: true,
    }),
    defineField({
      title: 'Sessions',
      name: 'sessions',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'session' }],
        weak: true,
      }],
      hidden: true,
    }),
  ],
});