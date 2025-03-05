import { getPublishedBlogs, type BlogResponse } from "$lib/microcms";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { SearchParams } from "../../types";

export const load: PageServerLoad = async ({ url }) => {
  const q = url?.searchParams.get("q") || "";
  const p = Number(url?.searchParams.get("p")) || 1;
  const searchParams: SearchParams = { q, p };
  const offset = (p - 1) * 12;

  const blogs: BlogResponse = await getPublishedBlogs({
    offset,
    q,
    limit: 12,
  });

  if (!blogs) {
    error(500, "Failed to fetch data");
  }

  return {
    blogs,
    searchParams,
  };
};

export const prerender = false;
