<script lang="ts">
  import type { PageData } from "./$types";
  import LatestArticles from "$lib/components/home/LatestArticles.svelte";
  import Hero from "$lib/components/home/Hero.svelte";

  const { data }: { data: PageData } = $props();
  const blogs = data.blogs.contents;
</script>

<Hero />
<LatestArticles {blogs} />
