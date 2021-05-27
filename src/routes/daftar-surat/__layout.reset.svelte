<script>
  import BottomNav from "$lib/shared/BottomNav.svelte";
  import TopNav from "$lib/shared/TopNav.svelte";
</script>

<TopNav />
<main class="h-screen space-y-10">
  <slot />
</main>
<BottomNav />

