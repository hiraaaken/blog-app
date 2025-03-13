<script lang="ts">
  import BlogList from "$lib/components/blog/BlogList.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import TagTip from "$lib/components/TagTip.svelte";
  import { PUBLIC_BASE_URL } from "$env/static/public";
  import type { PageProps } from "./$types";
  import type { Blog } from "$lib/microcms.js";

  let { data }: PageProps = $props();
  let { name, blogs }: { name: string; blogs: Blog[] } = $derived(data);
  let breadcrumbs = $derived([
    { label: "Home", href: "/" },
    { label: "Tag", href: "/tag" },
    { label: name, href: `/tag/${name}` },
  ]);
</script>

<svelte:head>
  <title>#{data.name} | hiraaaken's blog</title>
  <meta name="description" content={`タグ：${name}の記事一覧です。`} />
  <link rel="canonical" href={`${PUBLIC_BASE_URL}/tag/${name}`} />
</svelte:head>

<Breadcrumbs {breadcrumbs} />

<section>
  <Heading>
    <div class="flex items-center gap-2 pl-2">
      <TagTip {name} size="md" link={false} />
      <span> の記事一覧 </span>
    </div>
  </Heading>
</section>
<section>
  <div class="grid grid-cols-12 gap-5">
    <BlogList blogs={blogs.contents} />
  </div>
</section>

<style>
</style>
