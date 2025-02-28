<script lang="ts">
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import TagTip from "$lib/components/TagTip.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let tags = $state(data.tags.contents);

  let breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Tag", href: "/tag" },
  ];
</script>

<svelte:head>
  <title>Tag</title>
  <meta
    name="description"
    content="hiraaakenの技術ブログです。学んだことや気になったことを書きます。"
  />
</svelte:head>

<Breadcrumbs {breadcrumbs} />

<section class="grid gap-3">
  <Heading>タグ一覧</Heading>
  <div class="flex flex-wrap gap-4">
    {#each tags as tag}
      <TagTip name={tag.name} size="md" />
    {/each}
  </div>
</section>

<style>
</style>
