import { CollectionConfig } from "payload/types";
import { CenteredCTA } from "../blocks/CenteredCTA";
import { FeatureCards } from "../blocks/FeatureCards";
import { HeroBlock } from "../blocks/HeroBlock";
import { ImageWithText } from "../blocks/ImageWithText";
import { ImageSlider } from "../blocks/ImageSlider";

export const Services: CollectionConfig = {
  slug: "services",
  labels: {
    singular: "Service",
    plural: "Services",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
    },
    {
      name: "slug",
      label: "slug",
      type: "text",
    },
    {
      name: "description",
      label: "Description",
      type: "text",
    },
    {
      name: "layout",
      label: "Layout",
      type: "blocks",
      blocks: [
        CenteredCTA,
        FeatureCards,
        HeroBlock,
        ImageWithText,
        ImageSlider,
      ],
    },
  ],
};
