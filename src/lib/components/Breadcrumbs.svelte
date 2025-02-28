<script lang="ts">
  import type { Breadcrumb } from "../../types";

  let {
    breadcrumbs = [{ label: "Home", href: "/" }],
  }: { breadcrumbs: Breadcrumb[] } = $props();
</script>

<div>
  <nav class="text-sm">
    <ol class="flex gap-2">
      {#each breadcrumbs as { label, href }, i}
        <li>
          {#if i === breadcrumbs.length}
            <span class={i === breadcrumbs.length - 1 ? "font-bold" : ""}>
              {label}
            </span>
          {:else}
            <a {href} class={i === breadcrumbs.length - 1 ? "font-bold" : ""}>
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
