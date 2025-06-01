import { defineType, defineField } from "sanity";
import { ImageIcon } from "@sanity/icons";
import { media } from "sanity-plugin-media";
import { title } from "process";

const imageBlock = defineType({
  title: "Image Block",
  name: "imageBlock",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      title: "Active?",
      name: "active",
      type: "boolean",
      description: "Set to false if you need to remove from page but not delete",
      initialValue: true,
    }),
    defineField({
      title: "Full Screen",
      name: "fullScreen",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      title: "Anchor",
      name: "anchor",
      type: "string",
      description: "The anchor for the section. No hash symbols. Optional.",
    }),
    defineField({
      title: "Title",
      name: "title",
      type: "string",
    }),
    defineField({
      title: "Image",
      name: "image",
      type: "defaultImage",
      description: "Upload or select an image.",
    }),
  ],
  preview: {
    select: {
      active: "active",
      title: "title",
      image: "image"
    },
    prepare({ active, title, image }) {
      return {
        title: title || "Image Block",
        subtitle: `${active ? "Active" : "Not Active"}`,
        media: image,
      };
    },
  },
});

export default imageBlock;