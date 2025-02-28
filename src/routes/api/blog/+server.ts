import { getPublishedBlogs } from "$lib/microcms";
import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
  const searchParams = url.searchParams.get("q") ?? "";
  const res = await getPublishedBlogs({
    q: searchParams,
    offset: 0,
    limit: 12,
  });
  return new Response(JSON.stringify(res), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
