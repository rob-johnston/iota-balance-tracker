<script>
    import { Icon } from "@specialdoom/proi-ui-icons";
    import { fetchSingleBalance } from "../api/api";
    import { iotaAddresses } from "../store/store";
    import { exportCSVFile, showToast } from "../native-bridges/native-bridges";

    let address = "";

    async function handleSubscribeToAddress() {
        address = address.trim();
        if ($iotaAddresses[address]) {
            await showToast("Address is already added");
            address = "";
            return;
        }
        const balance = await fetchSingleBalance(address);
        $iotaAddresses[address] = balance;
        address = "";
    }

    function handleExportCSV() {
        exportCSVFile($iotaAddresses);
    }
</script>

<div class="navBar">
    <input
        aria-label="Field to add the address you want to track"
        class="input"
        bind:value={address}
        type="text"
        placeholder="Enter IOTA Address"
    />
    <button
        type="submit"
        aria-label="Add the current address to the ticker"
        disabled={address.length === 0}
        color="gray"
        light
        on:click={handleSubscribeToAddress}><Icon type="plus" /></button
    >
    <button
        disabled={Object.keys($iotaAddresses).length === 0}
        aria-label="Export the current items to a csv file"
        color="gray"
        light
        on:click={handleExportCSV}><Icon type="download" /></button
    >
</div>

<style>
    .navBar {
        display: inline-flex;
    }
</style>
