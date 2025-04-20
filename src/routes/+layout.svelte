<script lang="ts">
	let { children } = $props();
    import "/src/lib/styles/styles.css"
</script>


<h1>welcome to boosky</h1>
<p>Your personal data spirit</p>
<nav>
    <a href="/"><h3>home</h3></a>
    <a href="/avatar"><h3>avatar playground</h3></a>
    <a href="/plan"><h3>login (coming soon)</h3></a>
</nav>

{@render children()}

<footer>
<p>sky.boo property of ghostie inc</p>
<p>a subsidiary of Business Goose LLC</p>
<p>built with support of the <a href="/directory">boosky</a> community</p>
</footer>