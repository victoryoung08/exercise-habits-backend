import { Block } from "payload/types";

export const FeatureRows: Block = {
  slug: "featureRows",
  fields: [
    {
      name: "row",
      label: "Row",
      type: "array",
      fields: [
        {
          name: "heading",
          label: "Heading",
          type: "text",
        },
        {
          name: "description",
          label: "Description",
          type: "text",
        },
        {
          name: "buttonText",
          label: "Button Text",
          type: "text",
        },
        {
          name: "buttonURL",
          label: "Button URL",
          type: "text",
        },
        {
          name: "primaryImage",
          label: "primaryImage",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "secondImage",
          label: "Second Image",
          type: "upload",
          relationTo: "media",
        },
        {
          name: "thirdImage",
          label: "Third Image",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};
