<script>
    import { iotaAddresses } from "../store/store";
    import { onMount } from "svelte";
    import { fetchSingleBalance } from "../api/api";
    import ListItem from "./ListItem.svelte";
    import { FETCH_INTERVAL } from "../constants";

    onMount(() => {
        async function fetchAll() {
            for (const key of Object.keys($iotaAddresses)) {
                const balance = await fetchSingleBalance(key);
                // check to prevent a race condition where an item is deleted while being fetched
                if (key in $iotaAddresses) {
                    $iotaAddresses[key] = balance;
                }
            }
        }
        fetchAll();
        const interval = setInterval(fetchAll, FETCH_INTERVAL);
        return () => clearInterval(interval);
    });
</script>

{#each Object.entries($iotaAddresses) as [address, balance], index (address)}
    <ListItem {address} {balance} {index} />
{/each}
