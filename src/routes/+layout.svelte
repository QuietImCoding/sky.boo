<script lang="ts">
    let { children } = $props();
    import "../app.css";
</script>

<div id="header" class="text-center w-full flex flex-col my-4">
    <h1 class="text-4xl">welcome to boosky</h1>
    <p class="text-sm my-4 font-thin">Your personal data spirit</p>
    <nav class="flex flex-row justify-evenly">
        <a href="/"><h3 class="text-xl">home</h3></a>
        <a href="/avatar"><h3 class="text-xl">avatar playground</h3></a>
        <a href="/plan"><h3 class="text-xl">login (coming soon)</h3></a>
    </nav>
</div>

{@render children()}

<footer>
    <p>sky.boo property of ghostie inc</p>
    <p>a subsidiary of Business Goose LLC</p>
    <p>built with support of the <a href="/directory">boosky</a> community</p>
</footer>
