import { getPublishedBlogs } from "$lib/microcms";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const blogs = await getPublishedBlogs({
    offset: 0,
    limit: 6,
  });

  if (!blogs) {
    error(500, "Failed to fetch data");
  }

  return {
    blogs,
  };
};

export const prerender = true;
