<script>
    import { iotaAddresses } from "../store/store";
    import { onMount } from "svelte";
    import { SingleNodeClient } from "@iota/iota.js";
    import { fetchSingleBalance } from "../api/api";
    import LineItem from "./LineItem.svelte";

    onMount(() => {
        const client = new SingleNodeClient(
            "https://chrysalis-nodes.iota.org/"
        );

        async function fetchAll() {
            for (const key of Object.keys($iotaAddresses)) {
                const balance = await fetchSingleBalance(key);
                if (key in $iotaAddresses) {
                    $iotaAddresses[key] = balance;
                }
            }
        }
        fetchAll();
        const interval = setInterval(fetchAll, 5000);
        return () => clearInterval(interval);
    });
</script>

{#each Object.entries($iotaAddresses) as [address, balance], index (address)}
    <LineItem {address} {balance} {index} />
{/each}
