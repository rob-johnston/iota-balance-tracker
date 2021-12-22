<script lang="ts">
	import Navbar from "./components/Navbar.svelte";
	import List from "./components/List.svelte";
	import { TITLE } from "./constants";
</script>

<main>
	<h1>{TITLE}</h1>
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
