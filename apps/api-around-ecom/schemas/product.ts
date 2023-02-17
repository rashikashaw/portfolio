import { defineType, defineField } from "sanity";

export const product = defineType({
  title: 'Product',
  name: 'product',
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
        source: 'product',
      },
    }),
    defineField({
      title: 'Description',
      name: 'descriptiom',
      type: 'text',
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Images',
      name: 'images',
      type: 'array',
      validation: rule => rule.required(),
      of: [{
        type: 'image',
        options: {
          hotspot: true,
        },
      }],
    }),
    defineField({
      title: 'Price',
      name: 'price',
      type: 'number',
      validation: rule => rule.required(),
    }),
    defineField({
      title: 'Category',
      name: 'category',
      type: 'reference',
      to: [{ type: 'category' }],
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
