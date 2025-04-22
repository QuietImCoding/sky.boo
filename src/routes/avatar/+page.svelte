<script module lang="ts">
    import AvatarStack from "./AvatarStack.svelte";
    import ControlRow from "./ControlRow.svelte";
    import { layers } from "./LayersConfig";
    import "/src/lib/styles/avatar.css";

    interface Avatar {
        backdrop: number;
        ghostie: number;
        hat: number;
        glasses: number;
        photobomb: number;
        flairright: number;
        flairleft: number;
    }

    export const avatarState: Avatar = $state({
        backdrop: 0,
        ghostie: 0,
        hat: 0,
        glasses: 0,
        photobomb: 0,
        flairright: 0,
        flairleft: 0,
    });
</script>

<title>AVATAR</title>

<p>Customize your avatar</p>
<div id="avatar" class="flex flex-row flex-wrap">
    <AvatarStack />
    <div id="controls" class="m-4 flex flex-col">
        {#each layers as layer}
            <ControlRow target={layer.name as keyof Avatar} />
        {/each}
    </div>
</div>

<a href="/avatar/submissions">Submit your own ghost pieces</a>

<style>
    a {
        background-color: magenta;
        font-size: 2em;
        padding: 5px;
        font-family: "Gaegu Bold";
        margin: 10px;
    }

    a:hover {
        background-color: pink;
        transition: 0.1s;
    }
</style>
