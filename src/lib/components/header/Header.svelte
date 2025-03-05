<script lang="ts">
  import ToggleDarkThemeButton from "./ToggleDarkThemeButton.svelte";
  import HamburgerMenu from "./HamburgerMenu.svelte";
  import { LINKS } from "../../../utils/constants";
  import { onMount } from "svelte";
  import { beforeNavigate } from "$app/navigation";
  import { page } from "$app/state";
  import type { Link } from "../../../types";

  let currentPath = $state("");
  let menuName = $derived(currentPath.split("/").at(1) || "");
  let openMenu = $state(false);

  onMount(() => {
    currentPath = page.url.pathname;
  });

  beforeNavigate(({ to }) => {
    currentPath = to?.url.pathname || "/";
    openMenu = false;
  });
</script>

<header
  class="@container sticky top-0 backdrop-blur-lg border-b px-1 z-10 h-13"
>
  <div class="flex items-center justify-between px-1">
    <div>
      <a href="/" class="flex items-center">
        <img src="logo.svg" alt="icon" class="m-2" width="36px" height="36px" />
        <span
          class="@[500px]:text-2xl text-xl text-primary font-bold hover:text-opacity-70 duration-200"
          >hiraaaken's blog</span
        ></a
      >
    </div>
    <div>
      <nav class="hidden @[500px]:block">
        <!-- Links -->
        <div class="grid grid-flow-col gap-3 divide-x">
          <div class="flex tems-center">
            {#each LINKS as link}
              {@render pageLink(link)}
            {/each}
          </div>
          <div class="pl-1">
            <ToggleDarkThemeButton />
          </div>
        </div>
      </nav>

      <!-- Hamburger Menu -->
      <div class="@[500px]:hidden flex items-center">
        <ToggleDarkThemeButton />
        <HamburgerMenu {menuName} bind:openMenu />
      </div>
    </div>
  </div>
</header>

{#snippet pageLink(link: Link)}
  <div
    class="rounded-md hover:bg-accent duration-200 px-1 flex items-center justify-center"
  >
    <a
      href={link.href}
      class="group flex gap-1 font-semibold relative"
      class:text-primary={menuName === link.menuName}
      class:text-foreground={menuName !== link.menuName}
    >
      <div class="relative group flex flex-col items-center">
        <link.icon />
        <span
          class="@[650px]:hidden invisible group-hover:visible absolute bg-background shadow-md rounded-md p-2 text-sm font-medium top-6"
          >{link.label}</span
        >
      </div>
      <span class="hidden @[650px]:block">{link.label}</span>
    </a>
  </div>
{/snippet}

<style>
</style>
