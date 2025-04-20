<script>

    import {avatarState}  from "./+page.svelte";

    let layers = [
        { name: "backdrop", count: 5, layer: "bottom" },
        { name: "ghostie", count: 7, layer: "middle" },
        { name: "hat", count: 3, layer: "top" },
        { name: "glasses", count: 4, layer: "top" }
    ];

    let backdropURL = $derived('/avatars/background/' + avatarState.backdrop % 5 + '.png');
    let ghostieURL = $derived('/avatars/ghostie/' + avatarState.ghostie % 7 + '.png');

    //OPTIONAL
    let hatURL = $derived('/avatars/hat/' + avatarState.hat % 3 + '.png');
    let glassesURL = $derived('/avatars/glasses/' + avatarState.glasses % 4 + '.png');

</script>

<div id="stack">
    <img src={backdropURL} alt="" id="backdrop" class="stacked bottom">
    <img src={ghostieURL} alt="" id="ghostie" class="stacked middle"/>
    <img src={hatURL} alt="" id="hat" class="stacked top">
    <img src={glassesURL} alt="" id="glasses" class="stacked top">
</div>