<script lang="ts">
  import type { Breadcrumb } from "../../types";

  export type Props = {
    breadcrumbs: Breadcrumb[];
  };

  let { breadcrumbs = [{ label: "Home", href: "/" }] }: Props = $props();
</script>

<div>
  <nav class="text-sm">
    <ol class="flex gap-2">
      {#each breadcrumbs as { label, href }, i}
        <li>
          {#if i === breadcrumbs.length - 1}
            <span class="font-bold">
              {label}
            </span>
          {:else}
            <a {href} class="hover:underline">
              {label}
            </a>
          {/if}
        </li>
        {#if i < breadcrumbs.length - 1}
          <li>/</li>
        {/if}
      {/each}
    </ol>
  </nav>
</div>
