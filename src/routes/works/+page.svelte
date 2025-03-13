<script lang="ts">
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import Heading from "$lib/components/Heading.svelte";

  let breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Works", href: "/works" },
  ];
</script>

<svelte:head>
  <title>Works | hiraaaken's blog</title>
  <meta name="description" content="制作物や手がけたサービスの一覧です。" />
  <link rel="canonical" href={`${PUBLIC_BASE_URL}/works`} />
</svelte:head>

<Breadcrumbs {breadcrumbs} />
<Heading>Works</Heading>
<p>随時更新予定... 🚧</p>
