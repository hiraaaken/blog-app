import { getDetail } from "$lib/microcms";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const blog = await getDetail(params.slug)
    .then((blog) => {
      return blog;
    })
    .catch((err) => {
      error(404, "Failed to fetch data");
    });

  if (!blog) {
    error(404, "Failed to fetch data");
  }

  return {
    blog,
  };
};
