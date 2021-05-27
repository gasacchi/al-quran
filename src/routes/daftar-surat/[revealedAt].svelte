<script context="module">
  export async function load({
    fetch,
    page: {
      params: { revealedAt },
    },
  }) {
    const res = await fetch("https://api.quran.sutanlab.id/surah");

    if (res.ok) {
      const { data } = await res.json();

      if (revealedAt === "mekkah") {
        return {
          props: {
            suratList: data.filter((s) => s.revelation.id == "Makkiyyah"),
          },
        };
      }

      if (revealedAt === "madinah") {
        return {
          props: {
            suratList: data.filter((s) => s.revelation.id == "Madaniyyah"),
          },
        };
      }

      return {
        props: {
          suratList: data,
        },
      };
    }

    return {
      status: res.status,
      error: new Error("something wrong"),
    };
  }
</script>

<script>
  import ListSurat from "$lib/ListSurat.svelte";
  export let suratList;
</script>

<section class="pt-36 pb-24 ml-4">
  <ListSurat listSurat={suratList} />
<!-- FIX: add popup for tafsir per surat -->
</section>
