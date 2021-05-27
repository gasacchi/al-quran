<script>
  import SuratList from "$lib/icon/SuratList.svelte";
  export let listSurat;
</script>

<ul class="space-y-4">
  {#each listSurat as surat (surat.number)}
    <li class="flex space-x-4">
      <div class="">
        <SuratList number={surat.number} />
      </div>
      <div>
        <p class="text-al-pink font-bold">{surat.name.transliteration.id}</p>
        <span class="text-al-pink-light">
          {surat.revelation.id} | {surat.numberOfVerses} Ayat
        </span>
      </div>
    </li>
  {/each}
</ul>
