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
        class="input"
        bind:value={address}
        type="text"
        placeholder="Enter IOTA Address"
    />
    <button
        type="submit"
        disabled={address.length === 0}
        color="gray"
        light
        on:click={handleSubscribeToAddress}><Icon type="plus" /></button
    >
    <button
        disabled={Object.keys($iotaAddresses).length === 0}
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
