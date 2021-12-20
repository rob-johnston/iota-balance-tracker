<script>
    import { Icon } from "@specialdoom/proi-ui-icons";
    import { fetchSingleBalance } from "../api";
    import { iotaAddresses } from "../store/store";
    import { exportCSVFile, showToast } from "../native-brides/exportCSV";

    let address = "";

    async function handleSubscribeToAddress() {
        if ($iotaAddresses[address]) {
            console.log("already added");
            address = "";
            return;
        }
        const balance = await fetchSingleBalance(address);
        $iotaAddresses[address] = balance;
        address = "";
    }

    function handleExportCSV() {
        // TODO
        console.log("lets export the store to a csv file (:");
        exportCSVFile();
        showToast("File downloaded to Documents folder");
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
