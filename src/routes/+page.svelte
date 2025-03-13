<script lang="ts">
  import { PUBLIC_BASE_URL } from "$env/static/public";
  import LatestArticles from "$lib/components/home/LatestArticles.svelte";
  import Hero from "$lib/components/home/Hero.svelte";
  import type { PageProps } from "./$types";

  const { data }: PageProps = $props();
  const { blogs } = $derived(data);
</script>

<svelte:head>
  <title>hiraaaken's blog</title>
  <meta
    name="description"
    content="hiraaakenの技術ブログです。Web開発について学んだことや気づいたことを記事にしています。"
  />
  <link rel="canonical" href={`${PUBLIC_BASE_URL}`} />
</svelte:head>

<Hero />
<LatestArticles blogs={blogs.contents} />
