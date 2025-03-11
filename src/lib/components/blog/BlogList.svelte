<script lang="ts">
  import { fade } from "svelte/transition";
  import BlogCard from "./BlogCard.svelte";
  import type { Blog } from "$lib/microcms";

  export type Props = {
    blogs: Blog[];
  };

  const { blogs }: Props = $props();
</script>

<div in:fade={{ duration: 400 }} class="col-span-12 grid grid-cols-12 gap-5">
  {#each blogs as blog}
    <div class="col-span-12 sm:col-span-6 lg:col-span-4">
      <BlogCard {blog} />
    </div>
  {:else}
    <p class="col-span-12 text-center pt-9">
      該当する記事が見つかりませんでした
    </p>
  {/each}
</div>

<style>
</style>
