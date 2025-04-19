<script lang="ts">
  import AvatarStack from "./AvatarStack.svelte";
  import ControlRow from "./ControlRow.svelte";
  import "/src/lib/styles/avatar.css";
</script>

<title>AVATAR</title>

<p>Customize your avatar</p>
<div id="avatar">
  <AvatarStack />
  <div id="controls">
    <ControlRow target="background" />
    <ControlRow target="ghostie" />
    <ControlRow target="hat" />
    <ControlRow target="glasses" />
  </div>
</div>
