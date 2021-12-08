<script lang="ts">
	import "@specialdoom/proi-ui/dist/proi-ui.css";
	import Navbar from "./components/Navbar.svelte";

	export let name: string;
</script>

<main>
	<h1>IOTA Balance Tracer</h1>
	<p>Enter an IOTA address to track its balance</p>
	<Navbar />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #0c0908;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
