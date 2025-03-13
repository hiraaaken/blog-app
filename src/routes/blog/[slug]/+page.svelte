<script lang="ts">
  import "highlight.js/styles/hybrid.css";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import TagTip from "$lib/components/TagTip.svelte";
  import TableOfContent from "$lib/components/blog/TableOfContent.svelte";
  import { onMount } from "svelte";
  import { formatDate } from "../../../utils/dateUtils.js";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import { PUBLIC_BASE_URL } from "$env/static/public";
  import type { PageProps } from "./$types";
  import type { Blog } from "$lib/microcms.js";

  let { data }: PageProps = $props();

  let { blog } = $derived(data);
  let breadcrumbs = $derived([
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: blog.title, href: `/blog/${blog.id}` },
  ]);

  onMount(() => {
    // コピーボタンのイベントリスナーを登録
    const codeBlocks = document.querySelectorAll("pre code");
    for (let block of codeBlocks) {
      const pre = block.closest("pre");
      const copyButton: HTMLButtonElement | null = pre
        ? pre.querySelector(".copy-button")
        : null;
      copyButton?.addEventListener("click", () => {
        navigator.clipboard.writeText(block.textContent || "");
        copyButton.textContent = "Copied!";
        copyButton.classList.add("copied");
        setTimeout(() => {
          copyButton.textContent = "Copy";
          copyButton.classList.remove("copied");
        }, 2000);
      });
    }
  });
</script>

<svelte:head>
  <title>{blog.title} | hiraaaken's blog</title>
  <meta name="description" content={blog.lead} />
  <link rel="canonical" href={`${PUBLIC_BASE_URL}/blog/${blog.id}`} />
</svelte:head>

<Breadcrumbs {breadcrumbs} />
<section>
  <!-- Header -->
  <div class="py-4 border-b">
    <div class="flex justify-center">
      <img src={blog.thumbnail?.url} alt={blog.title} class="w-2/5" />
    </div>
    <div class="grid grid-cols-12 gap-4">
      <h1 class=" text-3xl font-bold col-span-12 pt-4">{blog.title}</h1>
      <p class="col-span-12 text-sm opacity-60">
        投稿日:
        {formatDate(new Date(blog.publishedAt), "YYYY.MM.DD")}
      </p>
      <p class="col-span-12 text-sm opacity-60">
        {blog.lead}
      </p>
      <div class="flex gap-2 col-span-12">
        {#each blog.tags as tag}
          <TagTip name={tag.name} />
        {/each}
      </div>
    </div>
  </div>

  <!-- Table of Contents -->
  <TableOfContent toc={blog.toc} />

  <!-- Content -->
  <div class="content">
    {@html blog.content}
  </div>

  <!-- Footer -->
  <div class="border-t py-4 flex justify-between mt-8">
    {#if blog.navigation.next}
      <a
        href={`/blog/${blog.navigation.next.id}`}
        class="flex items-center gap-2 text-secondary-foreground hover:underline"
        ><ChevronLeft />
        <div class="flex flex-col items-start">
          <span class="text-xs opacity-60">次の記事</span><span
            >{blog.navigation.next.title}
          </span>
        </div></a
      >
    {:else}
      <div></div>
    {/if}
    {#if blog.navigation.prev}
      <a
        href={`/blog/${blog.navigation.prev.id}`}
        class="flex items-center gap-2 text-secondary-foreground hover:underline"
        ><div class="flex flex-col items-end">
          <span class="text-xs opacity-60">前の記事</span><span
            >{blog.navigation.prev.title}
          </span>
        </div>
        <ChevronRight /></a
      >
    {:else}
      <div></div>
    {/if}
  </div>
</section>

<style>
  :global(.content) {
    @apply text-sm sm:text-base leading-7 py-4;
  }

  :global(.content h1) {
    @apply text-2xl font-bold my-4;
  }

  :global(.content h2) {
    @apply text-xl font-bold my-4;
  }

  :global(.content h3) {
    @apply text-lg font-bold my-4;
  }

  :global(.content h4) {
    @apply text-base font-bold my-4;
  }

  :global(.content p) {
    @apply text-base leading-7;
  }

  :global(.content ul) {
    @apply my-4;
  }

  :global(.content ol) {
    @apply my-4 list-decimal list-inside;
  }

  :global(.content li) {
    @apply my-2;
  }

  :global(.content blockquote) {
    @apply bg-blockquote border-l-4 border-gray-500 p-4 my-4;
  }

  :global(.content pre) {
    @apply relative overflow-x-auto;
  }

  :global(.content code) {
    @apply text-sm sm:text-base px-2 py-1 mx-1 bg-gray-900 text-white rounded;
  }

  :global(.content pre code) {
    @apply block text-sm sm:text-base p-4 bg-gray-900 text-white rounded;
  }

  :global(.content .copy-button) {
    @apply text-xs hover:opacity-80 py-1 px-2 text-white absolute top-1 right-1;
  }

  :global(.content .copy-button.copied) {
    @apply text-orange-400 transition duration-300 hover:cursor-default hover:opacity-100;
  }

  :global(.content a) {
    @apply text-blue-500 underline;
  }

  :global(.content img) {
    @apply my-4 max-w-full h-auto;
  }

  :global(.content table) {
    @apply border border-foreground w-full rounded my-2;
  }

  :global(.content th) {
    @apply border bg-tableHeader border-foreground p-2 rounded;
  }

  :global(.content td) {
    @apply border bg-tableData border-foreground p-2 rounded;
  }
</style>
