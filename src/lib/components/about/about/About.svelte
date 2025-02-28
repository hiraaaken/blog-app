<script lang="ts">
  import Heading from "$lib/components/Heading.svelte";
  import IconGithub from "./IconGithub.svelte";
  import IconX from "./IconX.svelte";
  import IconZenn from "./IconZenn.svelte";
</script>

<section class="grid gap-3">
  <Heading>About</Heading>
  <div class="col-span-12 flex flex-col sm:flex-row gap-2">
    <div class="mx-5 text-center">
      <img src="logo.svg" alt="logo" class="w-32 h-28 rounded-full m-auto" />
      <h2 class="font-bold text-2xl text-primary">hiraaaken</h2>
      <!-- SNS -->
      <div class="flex justify-center gap-2 mt-1">
        <IconGithub size={18} />
        <IconX size={18} />
        <IconZenn size={18} />
      </div>
    </div>
    <div class="flex items-center sm:mx-0 sm:px-3 px-8">
      <div class="text-sm flex flex-col gap-2">
        <p>関西某所で社内SEとして働いています。</p>
        <p>
          主に業務アプリの開発を行っており、フロントエンドからバックエンドまで色々担当することがあります。
        </p>
        <p>主にフロントエンド周辺の技術に興味を持っています。</p>
        <p>あと、ランニングとタコスが好き 🏃‍♂️🌮</p>
      </div>
    </div>
  </div>
</section>
