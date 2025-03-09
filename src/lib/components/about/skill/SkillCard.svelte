<script lang="ts">
  import type { Skill } from "$lib/microcms";
  import * as Card from "../../ui/card/index";
  import * as Popover from "../../ui/popover/index";

  const { skill }: { skill: Skill } = $props();
</script>

<Popover.Root>
  <Popover.Trigger>
    <Card.Root class="shadow-md min-w-24 hover:opacity-80">
      <Card.Content class="px-2 pt-2 pb-0 text-center">
        <img
          src={skill.image.url}
          alt={skill.name}
          class="w-16 h-16 mx-auto object-contain"
        />
        <p class="pt-2 text-xs">{skill.name}</p>
      </Card.Content>
      <Card.Footer class="p-1 justify-center font-semibold"
        >{skill.from}~</Card.Footer
      >
    </Card.Root>
  </Popover.Trigger>
  <Popover.Content class="w-60 sm:w-70">
    <div class="grid gap-2 text-xs">
      <p>{skill.comment}</p>
      <p>実務経験：{skill.usedInBusiness ? "あり" : "なし"}</p>
    </div>
  </Popover.Content>
</Popover.Root>
