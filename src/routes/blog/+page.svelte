<script lang="ts">
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import BlogList from "$lib/components/blog/BlogList.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import { Search } from "lucide-svelte";
  import { goto } from "$app/navigation";
  import { PUBLIC_BASE_URL } from "$env/static/public";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();

  let page = $state(1);
  let searchParams = $state(data.searchParams.q);

  let { blogs } = $derived(data);

  const handleSearch = async (e: Event) => {
    e.preventDefault();
    goto(`/blog?q=${searchParams}&p=${page}`, { replaceState: true });
  };

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
  ];
</script>

<svelte:head>
  <title>Blog | hiraaaken's blog</title>
  <meta name="description" content="投稿記事の一覧です。" />
  <link rel="canonical" href={`${PUBLIC_BASE_URL}/blog`} />
</svelte:head>

<Breadcrumbs {breadcrumbs} />
{@render head()}
{@render body()}

{#snippet head()}
  <section class="grid gap-3">
    <Heading>記事一覧</Heading>
    <div class="grid grid-cols-12 gap-5">
      <form
        class="relative col-span-12 sm:col-span-6 lg:col-span-4 flex items-center"
        onsubmit={handleSearch}
      >
        <label class="absolute text-gray-400 left-2 items-center inline-flex">
          <Search size={18} />
        </label>
        <input
          type="text"
          name="q"
          placeholder="記事を検索する..."
          autocomplete="off"
          bind:value={searchParams}
          class="w-full pl-8 pr-16 h-9 rounded-md focus:outline-none text-black"
        />
        <button
          type="submit"
          class="absolute end-1 bg-primary hover:bg-opacity-90 text-white rounded-md p-1 w-14"
          >検索
        </button>
      </form>
    </div>
  </section>
{/snippet}

{#snippet body()}
  <section>
    <BlogList blogs={blogs.contents} />
  </section>
{/snippet}
