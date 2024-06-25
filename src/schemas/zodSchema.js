import { z } from "zod";

// Define the schema for the "image" field
const ImageSchema = z.object({
  metadata: z.object({
    tags: z.array(z.string()).default([]),
  }),
  sys: z.object({
    space: z.object({
      sys: z.object({
        type: z.literal("Link"),
        linkType: z.literal("Space"),
        id: z.string(),
      }),
    }),
    id: z.string(),
    type: z.literal("Asset"),
    createdAt: z.string(), // Consider using z.date() if it's a date string
    updatedAt: z.string(), // Consider using z.date() if it's a date string
    environment: z.object({
      sys: z.object({
        id: z.string(),
        type: z.literal("Link"),
        linkType: z.literal("Environment"),
      }),
    }),
    revision: z.number(),
    locale: z.string(),
  }),
  fields: z.object({
    title: z.string(),
    description: z.string(),
    file: z.object({
      url: z.string(),
      details: z.object({
        size: z.number(),
        image: z.object({
          width: z.number(),
          height: z.number(),
        }),
      }),
      fileName: z.string(),
      contentType: z.string(),
    }),
  }),
});

// Define the schema for the "links" field
const LinkSchema = z.object({
  links: z.array(
    z.object({
      link: z.string(),
      text: z.string(),
      target: z.string(),
    })
  ),
  title: z.string(),
});

// Define the schema for the "socialMedia" field
const SocialMediaSchema = z.array(
  z.object({
    icon: z.string(),
    link: z.string(),
  })
);

// Define the schema for the "copyright" field
const CopyrightSchema = z.object({
  nodeType: z.string(),
  data: z.object({}),
  content: z.array(
    z.object({
      nodeType: z.string(),
      data: z.object({}),
      content: z.array(
        z.object({
          nodeType: z.string(),
          value: z.string(),
          marks: z.array(z.string()),
          data: z.object({}),
        })
      ),
    })
  ),
});

// Define the main schema for the entire entry
const EntrySchema = z.object({
  metadata: z.object({
    tags: z.array(z.string()).default([]),
  }),
  sys: z.object({
    space: z.object({
      sys: z.object({
        type: z.string().optional(),
        linkType: z.string().optional(),
        id: z.string().optional(),
      }),
    }),
    id: z.string(),
    type: z.literal("Entry"),
    createdAt: z.string(), // Consider using z.date() if it's a date string
    updatedAt: z.string(), // Consider using z.date() if it's a date string
    environment: z.object({
      sys: z.object({
        id: z.string(),
        type: z.literal("Link"),
        linkType: z.literal("Environment"),
      }),
    }),
    revision: z.number(),
    contentType: z.object({
      sys: z.object({
        type: z.literal("Link"),
        linkType: z.literal("ContentType"),
        id: z.string(),
      }),
    }),
    locale: z.string(),
  }),
  fields: z.object({
    image: ImageSchema,
    links: z.array(LinkSchema).optional(),
    addressTitle: z.string().optional,
    socialMedia: SocialMediaSchema,
    copyright: CopyrightSchema,
  }),
});

export default EntrySchema;
