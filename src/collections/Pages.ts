import { CollectionConfig } from "payload/types";
import { CenteredCTA } from "../blocks/CenteredCTA";
import { FeatureCards } from "../blocks/FeatureCards";
import { HeroBlock } from "../blocks/HeroBlock";
import { ImageWithText } from "../blocks/ImageWithText";
import { StaticGrid } from "../blocks/StaticGrid";
import { FeatureRows } from "../blocks/FeatureRows";

export const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
    },
    {
      name: "description",
      label: "description",
      type: "text",
    },
    {
      name: "slug",
      label: "Slug",
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
        StaticGrid,
        FeatureRows,
      ],
    },
  ],
};
