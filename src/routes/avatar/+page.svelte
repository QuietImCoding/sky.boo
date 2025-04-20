<script module lang="ts">
  import AvatarStack from "./AvatarStack.svelte";
  import ControlRow from "./ControlRow.svelte";
  import "/src/lib/styles/avatar.css";

  interface Avatar {
    backdrop: number;
    ghostie: number;
    hat: number;
    glasses: number;
    photobomb: number;
  }
  export const avatarState: Avatar = $state({
    backdrop: 0,
    ghostie: 0,
    hat: 0,
    glasses: 0,
    photobomb: 0
  });
</script>

<title>AVATAR</title>

<p>Customize your avatar</p>
<div id="avatar">
  <AvatarStack />
  <div id="controls">
    <ControlRow target="backdrop" />
    <ControlRow target="ghostie" />
    <ControlRow target="hat" />
    <ControlRow target="glasses" />
    <ControlRow target="photobomb" />
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
