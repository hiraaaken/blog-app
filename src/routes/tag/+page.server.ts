import { getTags, type TagResponse } from "$lib/microcms";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const tags: TagResponse = await getTags();

  if (!tags) {
    error(500, "Failed to fetch data");
  }

  return {
    tags,
  };
};
