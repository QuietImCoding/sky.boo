<script lang="ts">

    import {avatarState}  from "./+page.svelte";

    let layers = [
        { name: "backdrop", count: 5, layer: "bottom" },
        { name: "ghostie", count: 7, layer: "middle" },
        { name: "hat", count: 3, layer: "top" },
        { name: "glasses", count: 4, layer: "top" }
    ];

</script>

<div id="stack">
    <!-- Goes through all the layers in the array and generates the image stack-->
    {#each layers as layer }
        <img src={'/avatars/' + layer.name + '/' +
            Math.abs(avatarState[layer.name as keyof typeof avatarState] % layer.count) + ".png"} alt="" class="stacked {layer.layer}" id={layer.name}/>
    {/each}

</div>