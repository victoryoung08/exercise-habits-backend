import { Block } from "payload/types";

export const StaticGrid: Block = {
  slug: "staticGrid",
  labels: {
    singular: "Static Grid",
    plural: "Static Grids",
  },
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
    },
  ],
};
