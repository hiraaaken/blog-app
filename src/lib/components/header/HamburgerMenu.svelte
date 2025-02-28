<script lang="ts">
  import { fly } from "svelte/transition";
  import HamburgerIcon from "./HamburgerIcon.svelte";
  import { LINKS } from "../../../utils/constants";

  let { menuName, openMenu = $bindable() } = $props();

  const onClick = () => {
    openMenu = !openMenu;
  };
</script>

<HamburgerIcon open={openMenu} {onClick} width={36} />

{#if openMenu}
  <div
    transition:fly={{ y: -100, duration: 500 }}
    class="absolute top-[53px] right-0 w-32 rounded-md bg-background shadow-lg"
  >
    <ul>
      {#each LINKS as link}
        <li>
          <a
            href={link.href}
            class="flex items-center gap-2 p-2 hover:bg-accent rounded-md"
            class:text-primary={menuName === link.menuName}
            class:text-foreground={menuName !== link.menuName}
          >
            <link.icon class="w-5 h-5" />
            <span>{link.label}</span>
          </a>
        </li>
      {/each}
    </ul>
  </div>
{/if}
