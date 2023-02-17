import { defineField, defineType } from 'sanity';

export const cart = defineType({
  title: 'Cart',
  name: 'cart',
  type: 'document',
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'cart',
      },
    }),
    defineField({
      title: 'User',
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Cart Items',
      name: 'cartItems',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'cartItems' }],
        weak: true,
      }],
      hidden: true,
    }),
  ],
});
