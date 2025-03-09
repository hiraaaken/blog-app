<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import SkillCard from "./SkillCard.svelte";
  import type { Skill } from "$lib/microcms";

  export type Props = {
    skills: { [key: string]: Skill[] };
  };

  const { skills }: Props = $props();
</script>

<section class="grid gap-3">
  <Heading>Skill</Heading>
  {#each Object.entries(skills) as [category, skillList]}
    <h2 class="col-span-12 font-bold text-lg">{category}</h2>
    <div class="col-span-12 grid grid-cols-4 sm:grid-cols-6 gap-2 my-2">
      {#each skills[category] as skill (skill.id)}
        <SkillCard skill={skill as Skill} />
      {/each}
    </div>
  {/each}
</section>
