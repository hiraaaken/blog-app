<script lang="ts">
  import BlogList from "$lib/components/blog/BlogList.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import TagTip from "$lib/components/TagTip.svelte";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  console.log(data);

  let breadcrumbs = $derived([
    { label: "Home", href: "/" },
    { label: "Tag", href: "/tag" },
    { label: data.name, href: `/tag/${data.name}` },
  ]);
</script>

<svelte:head>
  <title>Tag</title>
  <meta
    name="description"
    content="hiraaakenの技術ブログです。学んだことや気になったことを書きます。"
  />
</svelte:head>

<Breadcrumbs {breadcrumbs} />

<section>
  <Heading>
    <div class="flex items-center gap-2 pl-2">
      <TagTip name={data.name} size="md" link={false} />
      <span> の記事一覧 </span>
    </div>
  </Heading>
</section>
<section>
  <div class="grid grid-cols-12 gap-5">
    <BlogList blogs={data.blogs.contents} />
  </div>
</section>

<style>
</style>
