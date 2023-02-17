import { defineField, defineType } from "sanity";

export const category = defineType({
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    defineField({
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: rule => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'category',
      },
    }),
    defineField({
      title: 'Products',
      name: 'products',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'product' }],
        weak: true,
      }],
      hidden: true,
    }),
  ],
});
