import { RiMacbookLine } from "react-icons/ri";
import { defineField, defineType } from "sanity";

export const product = defineType ({
  name: "product",
  title: "Product",
  type: "document",
  icon: RiMacbookLine,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "array",
      of: [{ 
        type: "image",
        options: {
          hotspot: true,
        },
      }],
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{type: 'block'}]
    }),
  ],
});
