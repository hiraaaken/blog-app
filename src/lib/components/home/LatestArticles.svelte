<script lang="ts">
  import type { Blog } from "$lib/microcms";
  import { Binoculars } from "lucide-svelte";
  import { Button } from "../ui/button";
  import Heading from "../Heading.svelte";
  import BlogList from "../blog/BlogList.svelte";

  let { blogs }: { blogs: Blog[] } = $props();
</script>

<section class="grid gap-3">
  <Heading>最近の記事</Heading>

  <div class="grid grid-cols-12 gap-8">
    <BlogList {blogs} />

    <div class="col-span-12">
      <Button href="/blog" class="w-full text-white">
        <Binoculars class="w-4 h-4 mr-2" />
        記事一覧へ
      </Button>
    </div>
  </div>
</section>
