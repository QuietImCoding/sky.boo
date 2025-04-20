<script>

    import {avatarState}  from "./+page.svelte";

    let backdropURL = $derived('/avatars/background/' + avatarState.backdrop % 3 + '.png');
    let ghostieURL = $derived('/avatars/ghostie/' + avatarState.ghostie % 7 + '.png');
    let hatURL = $derived('/avatars/hat/' + avatarState.hat % 1 + '.png');
    let glassesURL = $derived('/avatars/glasses/' + avatarState.glasses % 2 + '.png');

</script>

<div id="stack">
    <img src={backdropURL} alt="" id="backdrop">
    <img src={ghostieURL} alt="" id="ghostie"/>
    <img src={hatURL} alt="" id="hat">
    <img src={glassesURL} alt="" id="glasses">
</div>