import { defineField, defineType } from 'sanity';

export const cartItems = defineType({
  title: 'Cart Items',
  name: 'cartItems',
  type: 'document',
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'cartItems',
      },
    }),
    defineField({
      title: 'Cart',
      name: 'cart',
      type: 'reference',
      to: [{ type: 'cart' }],
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Product',
      name: 'product',
      type: 'reference',
      to: [{ type: 'product'}],
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Quantity',
      name: 'quantity',
      type: 'number',
      validation: rules => rules.required(),
    }),
  ],
});
