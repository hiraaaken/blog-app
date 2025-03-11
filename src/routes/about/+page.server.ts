import type { PageServerLoad } from "../$types";
import { getSkills } from "$lib/microcms";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
  // スキル一覧を取得
  const response = await getSkills();

  if (!response) {
    error(404, "Skills not found");
  }

  // displayOrderでソート
  const skills = response.contents.sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  return { skills };
};
