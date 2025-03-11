<script lang="ts">
  import { onNavigate } from "$app/navigation";
  import Header from "$lib/components/header/Header.svelte";
  import Footer from "$lib/components/footer/Footer.svelte";
  import "../app.css";
  import type { Snippet } from "svelte";

  export type Props = {
    children: Snippet;
  };

  let { children }: Props = $props();

  // ページ遷移時にトランジションを開始する
  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <script>
    // Set theme from localStorage
    if (typeof window !== "undefined" && window.localStorage) {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  </script>
</svelte:head>

<Header />

<div
  class="container mx-auto min-h-screen-only-content px-2 pt-2 pb-4 sm:px-4 md:px-8 lg:px-12 flex flex-col gap-6"
>
  {@render children()}
</div>

<Footer />
