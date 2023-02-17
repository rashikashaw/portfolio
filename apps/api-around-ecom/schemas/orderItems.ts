import { defineField, defineType } from 'sanity';

export const orderItems = defineType({
  title: 'Order Items',
  name: 'orderItems',
  type: 'document',
  fields: [
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'orderItems',
      },
    }),
    defineField({
      title: 'Order',
      name: 'order',
      type: 'reference',
      to: [{ type: 'order' }],
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Product',
      name: 'product',
      type: 'reference',
      to: [{ type: 'product' }],
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Quantity',
      name: 'quantity',
      type: 'number',
      validation: rules => rules.required(),
    })
  ],
});
