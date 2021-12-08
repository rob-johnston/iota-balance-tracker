<script>
    import { Button, Input } from "@specialdoom/proi-ui";
    import { Icon } from "@specialdoom/proi-ui-icons";

    let address = "";

    function handleSubscribeToAddress() {
        // TODO
        console.log("lets subscribe to an iota address!, ", address);
    }

    function handleExportCSV() {
        // TODO
        console.log("lets export the store to a csv file (:");
    }
</script>

<div class="navBar">
    <input
        class="input"
        bind:value={address}
        type="text"
        placeholder="Enter IOTA Address"
    />
    <button class="button" on:click={handleSubscribeToAddress}
        ><Icon type="plus" /></button
    >
    <button class="button" on:click={handleSubscribeToAddress}
        ><Icon type="download" /></button
    >
</div>

<style>
    .navBar {
        display: inline-flex;
    }
</style>
