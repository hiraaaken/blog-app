<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import SkillCard from "./SkillCard.svelte";
  import type { Skill } from "$lib/microcms";
  import { CATEGORIES } from "../../../../utils/constants";

  export type Props = {
    skills: Skill[];
  };

  const { skills }: Props = $props();
</script>

<section class="grid gap-3">
  <Heading>Skill</Heading>
  {#each Object.entries(CATEGORIES) as [id, category]}
    {@const categorySkills = skills.filter(
      (skill) => skill.category[0] === category
    )}
    {#if categorySkills.length > 0}
      <h2 class="col-span-12 font-bold text-lg">{category}</h2>
      <div class="col-span-12 grid grid-cols-4 sm:grid-cols-6 gap-2 my-2">
        {#each categorySkills.sort((a, b) => a.displayOrder - b.displayOrder) as skill (skill.id)}
          <SkillCard {skill} />
        {/each}
      </div>
    {/if}
  {/each}
</section>
