import { defineField, defineType } from 'sanity';

export const order = defineType({
  title: 'Order',
  name: 'order',
  type: 'document',
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'order',
      },
    }),
    defineField({
      title: 'Buyer',
      name: 'buyer',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Order Items',
      name: 'orderItems',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'orderItems' }],
        weak: true,
      }],
      hidden: true,
    }),
  ],
});
