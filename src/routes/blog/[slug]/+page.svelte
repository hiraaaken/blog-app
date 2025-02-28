<script lang="ts">
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import "highlight.js/styles/hybrid.css";
  import { formatDate } from "../../../utils/dateUtils.js";
  import TagTip from "$lib/components/TagTip.svelte";

  const { data } = $props();

  let breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: data.title, href: `/blog/${data.id}` },
  ];
</script>

<svelte:head>
  <title>ブログ</title>
  <meta name="description" content="記事詳細" />
</svelte:head>

<Breadcrumbs {breadcrumbs} />
<section>
  <!-- Header -->
  <div class="mb-4">
    <div class="flex justify-center">
      <img src={data.thumbnail?.url} alt={data.title} class="w-2/5" />
    </div>
    <div class="grid grid-cols-12 gap-4">
      <h1 class=" text-3xl font-bold col-span-12 pt-4">{data.title}</h1>
      <p class="col-span-12 text-sm opacity-60">
        投稿日:
        {formatDate(new Date(data.publishedAt), "YYYY.MM.DD")}
      </p>
      <p class="col-span-12 text-sm opacity-60">
        {data.lead}
      </p>
      <div class="flex gap-2 col-span-12">
        {#each data.tags as tag}
          <TagTip name={tag.name} />
        {/each}
      </div>
    </div>
  </div>
  <!-- Content -->
  <div class="content">
    {@html data.content}
  </div>
  <!-- Back Link -->
  <div class="mt-4">
    <a href="/blog" class="text-blue-500">← 一覧に戻る</a>
  </div>
</section>

<style>
  :global(.content) {
    @apply text-xs sm:text-sm;
    line-height: 1.75;
  }

  :global(.content h1) {
    font-size: 1.5rem;
    font-weight: bold;
  }

  :global(.content h2) {
    font-size: 1.25rem;
    font-weight: bold;
  }

  :global(.content h3) {
    font-size: 1.125rem;
    font-weight: bold;
  }

  :global(.content h4) {
    font-size: 1rem;
    font-weight: bold;
  }

  :global(.content h5) {
    font-size: 0.875rem;
    font-weight: bold;
  }

  :global(.content h6) {
    font-size: 0.75rem;
    font-weight: bold;
  }

  :global(.content p) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  :global(.content ul) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  :global(.content ol) {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  :global(.content li) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  :global(.content blockquote) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 1rem;
    border-left: 4px solid #333;
  }

  :global(.content pre) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem;
    background-color: #1d1f21;
    border-radius: 0.5rem;
    overflow-x: auto;
  }

  :global(.content code) {
    padding: 0.25rem;
    margin: 0 0.25rem;
    background-color: #1d1f21;
    color: white;
    border-radius: 0.25rem;
  }

  :global(.content a) {
    color: #0070f3;
    text-decoration: underline;
  }

  :global(.content img) {
    max-width: 100%;
    height: auto;
  }

  :global(.content table) {
    @apply border border-foreground w-full rounded my-2;
  }

  :global(.content th) {
    @apply border bg-tableHeader border-foreground p-1 rounded;
    padding: 0.5rem;
  }

  :global(.content td) {
    @apply border bg-tableData border-foreground p-1 rounded;
  }
</style>
