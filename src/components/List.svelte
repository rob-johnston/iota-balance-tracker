<script>
    import { iotaAddresses } from "../store/store";
    import { onMount } from "svelte";
    import { SingleNodeClient } from "@iota/iota.js";
    import { fetchSingleBalance } from "../api";
    import LineItem from "./LineItem.svelte";

    function handleRemoveItem(address) {
        return function () {
            delete $iotaAddresses[address];
            $iotaAddresses = $iotaAddresses;
        };
    }

    onMount(() => {
        const client = new SingleNodeClient(
            "https://chrysalis-nodes.iota.org/"
        );

        // iota1qrgp8fmnplmujdfv4jq2ma9x829cyr9rw76hqgr4hjvcvjh0pns4vcp6xmz
        const addy =
            "iota1qrqxtv6ldrtwffev45wj4dhpql0znrjdjza86zaxq9g95jdsjcazu20ujgm";

        async function fetchAll() {
            console.log($iotaAddresses);
            // run in series
            console.log(Object.keys($iotaAddresses));
            for (const key of Object.keys($iotaAddresses)) {
                const balance = await fetchSingleBalance(key);
                console.log("new price is.. ");
                console.log(balance);
                $iotaAddresses[key] = balance;
            }
        }
        fetchAll();
        const interval = setInterval(fetchAll, 5000);
        return () => clearInterval(interval);
    });
</script>

{#each Object.entries($iotaAddresses) as [address, balance]}
    <LineItem
        {address}
        {balance}
        handleRemoveItem={handleRemoveItem(address)}
    />
{/each}
