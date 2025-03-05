import type { PageServerLoad } from "../$types";
import { getSkills } from "$lib/microcms";
import { categories } from "../..//utils/constants";
import type { Skill } from "$lib/microcms";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
  const skills = await getSkills().then((res) => {
    const groupedSkills = Object.groupBy(
      res.contents,
      ({ category }) => category
    ) as { [key: string]: Skill[] };

    // skills を並び替える
    const orderedSkills: { [key: string]: Skill[] } = {};
    for (const category of Object.values(categories) as string[]) {
      if (groupedSkills[category]) {
        orderedSkills[category] = groupedSkills[category];
      }
    }

    return orderedSkills;
  });

  if (!skills) {
    error(404, "Skills not found");
  }

  return { skills };
};
