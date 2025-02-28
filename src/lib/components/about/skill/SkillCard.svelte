<script lang="ts">
  import type { Skill } from "$lib/microcms";
  import * as Card from "../../ui/card/index";

  const { skill }: { skill: Skill } = $props();
</script>

<Card.Root class="shadow-md min-w-28">
  <Card.Content class="px-2 pt-2 pb-0 text-center">
    <img
      src={skill.image.url}
      alt={skill.name}
      class="w-16 h-16 mx-auto object-contain"
      class:grayscale={!skill.usedInBusiness}
    />
    <p class="pt-2 text-xs">{skill.name}</p>
  </Card.Content>
  <Card.Footer class="p-1 justify-center font-semibold"
    >{skill.from}~</Card.Footer
  >
</Card.Root>
