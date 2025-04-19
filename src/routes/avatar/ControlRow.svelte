<script lang="ts">

    import {avatarState} from "./+page.svelte";

    let { target } : {target: keyof typeof avatarState} = $props();
</script>

<div class="control-row">
    {target}
    <button onclick={() => avatarState[target]-= 1}>&lt;</button>
    <button onclick={() => avatarState[target]+= 1}>&gt;</button>
</div>