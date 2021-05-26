<script>
  import AlQuran from "$lib/icon/AlQuran.svelte";
  import Button from "$lib/shared/Button.svelte";
</script>

<main class="flex flex-col h-screen">
  <div class="my-auto flex flex-col space-y-20">
    <AlQuran class="h-72 mx-auto" />
    <nav class="flex flex-col text-white text-xs space-y-4 items-center">
      <Button class="font-bold focus:outline-none border border-white rounded-xl p-3 w-1/2"
        >Daftar Surat</Button
      >
      <Button class="font-bold focus:outline-none border border-white rounded-xl p-3 w-1/2"
        >Terakhir Dibaca</Button
      >
      <Button class="font-bold focus:outline-none border border-white rounded-xl p-3 w-1/2"
        >Pengaturan</Button
      >
    </nav>
  </div>
</main>

<style>
  main {
    background: linear-gradient(
      16.47deg,
      #04364f -13.06%,
      #f39f8c 76.24%,
      #e8907a 116.92%
    );
  }
</style>
