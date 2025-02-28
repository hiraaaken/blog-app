<script lang="ts">
  import { PUBLIC_BASE_URL } from "$env/static/public";
  import About from "$lib/components/about/about/About.svelte";
  import Skill from "$lib/components/about/skill/Skill.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";

  let { data } = $props();

  let breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];
</script>

<svelte:head>
  <title>About</title>
  <meta
    name="description"
    content="関西で社内SEをしているhiraaakenです。学んだことや気になったことを書きます。"
  />
  <link rel="canonical" href={`${PUBLIC_BASE_URL}/about`} />
</svelte:head>

<Breadcrumbs {breadcrumbs} />
<About />
<Skill skills={data.skills} />
