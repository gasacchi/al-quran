<script>
  import { page } from "$app/stores";
  import Bookmarks from "$lib/icon/Bookmarks.svelte";
  import Home from "$lib/icon/Home.svelte";
  import Read from "$lib/icon/Read.svelte";
  import Setting from "$lib/icon/Setting.svelte";

  /* HACK: improve this */
  $: surahList =
    $page.path == "/daftar-surat/all" ||
    $page.path == "/daftar-surat/mekkah" ||
    $page.path == "/daftar-surat/madinah";

  $: bookmarks =
    $page.path == "/bookmarks/all" || $page.path == "/bookmarks/saved"
      ? ""
      : "";

  $: settings = $page.path == "/settings" ? "" : "";
</script>

<footer class="fixed bottom-0 w-full py-4 backdrop-filter backdrop-blur">
  <nav class="flex justify-around">
    <a href="/"><Home /></a>
    <a href="/"><Read active={surahList} /></a>
    <a href="/"><Bookmarks active={bookmarks} /></a>
    <a href="/"><Setting active={settings} /></a>
  </nav>
</footer>
