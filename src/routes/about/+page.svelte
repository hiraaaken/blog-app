<script lang="ts">
  import About from "$lib/components/about/about/About.svelte";
  import Skill from "$lib/components/about/skill/Skill.svelte";
  import Breadcrumbs from "$lib/components/Breadcrumbs.svelte";
  import { PUBLIC_BASE_URL } from "$env/static/public";
  import type { PageProps } from "./$types";

  let { data }: PageProps = $props();
  const { skills } = $derived(data);

  let breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
  ];
</script>

<svelte:head>
  <title>About | hiraaaken's blog</title>
  <meta
    name="description"
    content="関西某所で社内SEとして働いています。業務アプリの開発を行っており、フロントからバックエンドまで色々担当しています。主にフロントエンド周辺の技術に興味を持っています。"
  />
  <link rel="canonical" href={`${PUBLIC_BASE_URL}/about`} />
</svelte:head>

<Breadcrumbs {breadcrumbs} />
<About />
<Skill {skills} />
