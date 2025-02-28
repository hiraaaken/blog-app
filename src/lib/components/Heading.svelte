<script lang="ts">
  let { children } = $props();
</script>

<div class="flex gap-1">
  <div class="w-1.5 bg-primary"></div>
  <h1 class="font-bold text-xl">
    {@render children?.()}
  </h1>
</div>

<style>
</style>
