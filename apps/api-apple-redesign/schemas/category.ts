import { BiCategory } from "react-icons/bi";
import { defineType, defineField } from "sanity";

export const catgeory = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: BiCategory,
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
  ],
});
