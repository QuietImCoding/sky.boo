<script lang="ts">
    import { avatarState } from "./+page.svelte";

    let { target }: { target: keyof typeof avatarState } = $props();
</script>

<div class="flex flex-row h-8 px-4 py-8 border-dashed border-2">
    <p class="self-center pr-2">{target}</p>
    <button
        class="border px-2 bg-gray-300 rounded-md self-center"
        onclick={() => (avatarState[target] -= 1)}>&lt;</button
    >
    <button
        class="border px-2 bg-gray-300 rounded-md self-center"
        onclick={() => (avatarState[target] += 1)}>&gt;</button
    >
</div>
