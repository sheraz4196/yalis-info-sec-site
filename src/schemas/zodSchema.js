import { z } from "zod";

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
    createdAt: z.string(),
    updatedAt: z.string(),
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

const SocialMediaSchema = z.array(
  z.object({
    icon: z.string(),
    link: z.string(),
  })
);

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

export const EntrySchema = z.object({
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
    createdAt: z.string(),
    updatedAt: z.string(),
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

export const AuthorSchema = z.object({
  sys: z.object({
    id: z.string(),
  }),
  fields: z.object({
    name: z.string().optional(),
    bio: z.string().optional(),
  }),
});

export const TagSchema = z.object({
  sys: z.object({
    id: z.string(),
  }),
  fields: z.object({
    name: z.string({ message: "TagSchema Error" }).optional(),
  }),
});

export const BlogPostSchema = z.object({
  metadata: z.object(
    {
      tags: z.array(z.object({})).optional(),
    },
    { message: "Metadata is Invalid" }
  ),

  sys: z.object({
    id: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
  fields: z.object({
    title: z.string().optional(),
    slug: z.string().optional(),
    image: z.object({
      metadata: z.object(
        {
          tags: z.array(z.object({})).optional(),
        },
        { message: "Metadata is Invalid" }
      ),
      sys: z
        .object({
          id: z.string(),
          createdAt: z.string(),
          updatedAt: z.string(),
          space: z.object({}).optional(),
        })
        .optional(),
      fields: z.object({
        file: z.object({
          url: z.string(),
          fileName: z.string(),
          details: z.object({}),
          contentType: z.string(),
        }),
      }),
    }),
    tableOfContent: z.any().optional(),
    description: z.any().optional(),
    authors: z.array(AuthorSchema).optional(),
    tags: z.array(TagSchema).optional(),
    seo: z.any().optional(),
  }),
});
