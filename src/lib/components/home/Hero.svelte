<script lang="ts">
  import { Binoculars } from "lucide-svelte";
  import Button from "../ui/button/button.svelte";
</script>

<section class="grid grid-cols-12 gap-3 py-4">
  <h1 class="col-span-12 sm:text-base text-sm">
    <a
      href="/about"
      class="text-xl sm:text-2xl font-bold hover:text-opacity-60 duration-200 text-foreground tracking-wider"
    >
      hiraaaken
    </a>
    の技術ブログ 🫠
  </h1>
  <p class="col-span-12 sm:text-base text-sm text-opacity-80">
    Web開発などについて学んだことや気になったことを記事にします。
  </p>
  <div class="md:col-span-6 sm:col-span-8 col-span-12 gap-4 flex">
    <Button href="/blog" class="text-white w-32">
      <Binoculars class="w-4 h-4 mr-2" />
      <span>記事一覧へ</span>
    </Button>
    <Button href="/about" class="w-32" variant="secondary">
      <span>About</span>
    </Button>
  </div>
</section>
