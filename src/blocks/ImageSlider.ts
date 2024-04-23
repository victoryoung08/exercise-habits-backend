import { Block } from "payload/types";

export const ImageSlider: Block = {
  slug: "imageSlider",
  fields: [
    {
      name: "heading",
      label: "Section Heading",
      type: "text",
    },
    {
      name: "slider",
      type: "array",
      labels: {
        singular: "Slide",
        plural: "Slides",
      },
      fields: [
        {
          name: "heading",
          label: "Image Heading",
          type: "text",
        },
        {
          name: "description",
          label: "Description",
          type: "text",
        },
        {
          name: "image",
          label: "Image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
