import { getPublishedBlogs, getTags } from "$lib/microcms";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const tags = (await getTags()).contents;
  const tag = tags.find((tag) => tag.name === params.slug);
  if (!tag) {
    throw new Error(`Tag not found for slug: ${params.slug}`);
  }
  const query = {
    filters: `tags[contains]${tag.id}`,
  };

  const blogs = await getPublishedBlogs(query);

  return {
    name: tag.name,
    blogs,
  };
};
