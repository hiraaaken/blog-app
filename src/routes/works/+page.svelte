<script lang="ts">
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Heading from "$lib/components/Heading.svelte";

  let breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/works" },
  ];
</script>

<Breadcrumbs {breadcrumbs} />
<Heading>Works</Heading>
<p>随時更新予定... 🚧</p>
