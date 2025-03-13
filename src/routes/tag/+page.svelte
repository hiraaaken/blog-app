<script lang="ts">
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import TagTip from "$lib/components/TagTip.svelte";
  import type { PageProps } from "./$types";
  import { PUBLIC_BASE_URL } from "$env/static/public";

  let { data }: PageProps = $props();
  let { tags } = $derived(data);

  let breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tag", href: "/tag" },
  ];
</script>

<svelte:head>
  <title>Tag | hiraaaken's blog</title>
  <meta
    name="description"
    content="hiraaakenの技術ブログです。Web開発について学んだことや気づいたことを記事にしています。"
  />
  <link rel="canonical" href={`${PUBLIC_BASE_URL}/tag`} />
</svelte:head>

<Breadcrumbs {breadcrumbs} />

<section class="grid gap-3">
  <Heading>タグ一覧</Heading>
  <div class="flex flex-wrap gap-4">
    {#each tags.contents as tag}
      <TagTip name={tag.name} size="md" />
    {/each}
  </div>
</section>

<style>
</style>
