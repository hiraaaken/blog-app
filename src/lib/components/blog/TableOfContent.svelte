<script lang="ts">
  import { slide } from "svelte/transition";
  import { ChevronDown } from "lucide-svelte";

  export type Props = {
    toc: { text: string; id: string; name: string }[];
  };

  let { toc }: Props = $props();
  let isOpen = $state(true);
</script>

<div class="bg-secondary/50 p-4 my-3 rounded-lg shadow-sm">
  <button
    type="button"
    class="flex items-center justify-between w-full cursor-pointer"
    onclick={() => (isOpen = !isOpen)}
    onkeydown={(e) => e.key === "Enter" && (isOpen = !isOpen)}
  >
    <h2 class="text-lg font-bold flex items-center gap-2">
      目次
      <ChevronDown
        size={20}
        class="transform transition-transform duration-200 {isOpen
          ? 'rotate-180'
          : ''}"
      />
    </h2>
  </button>

  {#if isOpen}
    <nav transition:slide class="mt-2">
      <ol class="space-y-2 ml-1">
        {#each toc as item}
          <li class="hover:translate-x-1 transition-transform">
            <a
              href={`#${item.id}`}
              class="text-sm text-muted-foreground hover:text-foreground transition-colors block {item.name ===
              'h1'
                ? 'font-medium'
                : item.name === 'h2'
                  ? 'ml-4'
                  : 'ml-8'}"
            >
              {item.text}
            </a>
          </li>
        {/each}
      </ol>
    </nav>
  {/if}
</div>
