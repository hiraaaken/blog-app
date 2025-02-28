<script lang="ts">
  type Props = {
    name: string;
    size?: "xs" | "sm" | "md" | "lg";
    link?: boolean;
  };

  let { name, size = "xs", link = true }: Props = $props();
</script>

<span
  class="text-{size} text-white bg-green-600 rounded-full shadow-sm px-4 py-1 transition duration-200 {link
    ? 'hover:shadow-md hover:opacity-90'
    : ''}"
>
  {#if link}
    <a href="/tag/{name}" class="hover:underline">{name}</a>
  {:else}
    {name}
  {/if}
</span>

<style>
</style>
