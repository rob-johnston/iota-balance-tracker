<script lang="ts">
	import Navbar from "./components/Navbar.svelte";
	import List from "./components/List.svelte";
	const title = "Iota balance ticker";
</script>

<main>
	<h1>{@html title}</h1>
	<Navbar />
	<List />
</main>

<style>
	main {
		text-align: center;
		padding: 2em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ffffff;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
