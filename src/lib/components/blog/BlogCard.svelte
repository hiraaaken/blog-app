<script lang="ts">
  import type { Blog } from "$lib/microcms";
  import { formatDate } from "../../../utils/dateUtils";
  import TagTip from "../TagTip.svelte";
  import * as Card from "../ui/card/index";

  export type Props = {
    blog: Blog;
  };

  const { blog }: Props = $props();
</script>

<Card.Root class="w-full h-[380px] shadow-md">
  <Card.Header class="p-0 h-[45%] overflow-hidden shadow-sm">
    <a
      href="/blog/{blog.id}"
      class="block transition-transform duration-300 h-full hover:scale-105"
    >
      <img
        class="w-full h-full object-cover"
        src={blog.thumbnail?.url}
        alt="サムネイル画像"
      />
    </a>
  </Card.Header>
  <Card.Content class="h-[35%] py-2">
    <a
      href="/blog/{blog.id}"
      class="font-semibold inline-block py-1 hover:opacity-80 hover:underline transition duration-200"
      >{blog.title}</a
    >
    <p class="text-xs line-clamp-5">
      {blog.lead}
    </p>
  </Card.Content>
  <Card.Footer
    class="h-[20%] pt-2 pb-3 flex flex-col justify-center gap-2 items-start"
  >
    <div class="flex gap-2">
      {#each blog.tags as tag}
        <TagTip name={tag.name} />
      {/each}
    </div>
    <div class="text-xs flex justify-end w-full">
      <div>
        投稿日:
        {formatDate(new Date(blog.publishedAt), "YYYY.MM.DD")}
      </div>
    </div>
  </Card.Footer>
</Card.Root>
