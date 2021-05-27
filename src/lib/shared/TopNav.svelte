<script>
  import GoBack from "$lib/icon/GoBack.svelte";
  import { page } from "$app/stores";

  /* HACK: improve this */
  $: all =
    $page.params.revealedAt == "all" ? "font-bold text-al-pink border-b" : "";
  $: mekkah =
    $page.params.revealedAt == "mekkah"
      ? "font-bold text-al-pink border-b"
      : "";
  $: madinah =
    $page.params.revealedAt == "madinah"
      ? "font-bold text-al-pink border-b"
      : "";
</script>

<header class="fixed top-0 space-y-6 w-full backdrop-filter backdrop-blur">
  <nav class="flex space-x-4 items-center pt-10 pl-5">
    <a href="/">
      <GoBack class="h-6" />
    </a>
    <h3 class="font-semibold text-al-pink">Daftar Surat</h3>
  </nav>
  <nav class="flex justify-evenly mt text-al-grey">
    <a sveltekit:prefetch href="/daftar-surat/all" class={all}>Semua Surat</a>
    <a sveltekit:prefetch href="/daftar-surat/mekkah" class={mekkah}>Mekkah</a>
    <a sveltekit:prefetch href="/daftar-surat/madinah" class={madinah}>Madinah</a>
  </nav>
</header>

<style>
  /* header { */
    /* background-color: rgba(255, 255, 255, 0.15); */
    /* backdrop-filter: blur(5px); */
  /* } */
</style>
