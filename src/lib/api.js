const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
import EntrySchema from "@/schemas/zodSchema";
const client = require("contentful").createClient({
  space: spaceId,
  accessToken: accessToken,
  // accessToken: "cWP_gTbGR8lQ_a0f7DmN4GFZCkHPk0d36RCqgT-je7c",
  // host: "preview.contentful.com",
});

export const getPagesData = async (contentType, setData) => {
  const data = await client.getEntries({
    content_type: contentType,
    order: "-sys.createdAt",
  });
  if (data) {
    if (setData) setData(data);
    else return data;
  } else {
    console.log(`Error getting posts for ${contentType}.`);
  }
};

export async function getSlugPagData(contentType, slug) {
  const post = await client.getEntries({
    content_type: contentType,
    "fields.slug": slug,
  });
  if (post.items) return post.items;
  console.log(`Error getting post for ${contentType.name}.`);
}

export async function getFilteredBlogsData(id) {
  const post = await client.getEntries({
    content_type: "post",
    "fields.tag.sys.id": id,
  });
  if (post?.items) return post?.items;
  console.log(`Error getting post for ${contentType.name}.`);
}

export async function searchBlogsData(search) {
  if (!search?.length) {
    return [];
  }
  // const query = {
  //   content_type: "post",
  //   "fields.title[match]": search.toLowerCase(),
  // };

  // try {
  //   const post = await client.getEntries(query);
  //   if (post?.items) return post?.items;
  //   console.error(`Error getting posts for contentType: ${contentType.name}`);
  // } catch (error) {
  //   console.error(`Error fetching posts: ${error.message}`);
  // }
  const url = `https://cdn.contentful.com/spaces/${spaceId}/entries?content_type=post&query=${search}`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.statusText}`);
    }
    const data = await response.json();
    const posts = data.items || [];
    return posts;
  } catch (error) {
    console.error(`Error fetching posts: ${error.message}`);
    return [];
  }
}
