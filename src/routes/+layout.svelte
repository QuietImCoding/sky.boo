<script lang="ts">
	let { children } = $props();
    import "/src/lib/styles/styles.css"
</script>


<h1>welcome to boosky</h1>
<p>Your personal data spirit</p>
<hr>

{@render children()}

<footer>
<p>sky.boo property of ghostie inc</p>
<p>a subsidiary of Business Goose LLC</p>
</footer>