import { Block } from "payload/types";

export const AccordionBlock: Block = {
  slug: "accordionBlock",
  fields: [
    {
      name: "heading",
      label: "Heading",
      type: "text",
    },
    {
      name: "accordion",
      label: "Accordion",
      type: "array",
      fields: [
        {
          name: "heading",
          label: "Heading",
          type: "text",
        },
        {
          name: "content",
          label: "Content",
          type: "text",
        },
      ],
    },
  ],
};
