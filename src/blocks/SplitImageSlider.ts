import { Block } from "payload/types";

export const SplitImageSlider: Block = {
  slug: "splitImageSlider",
  fields: [
    {
      name: "sliders",
      label: "Sliders",
      type: "array",
      fields: [
        {
          name: "content",
          label: "Content",
          type: "text",
        },
        {
          name: "subText",
          label: "Sub Text",
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
