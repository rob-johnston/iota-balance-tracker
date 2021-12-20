<script>
    import { Icon } from "@specialdoom/proi-ui-icons";
    export let address;
    export let balance;
    export let handleRemoveItem;
</script>

<div class="wrapper">
    <div style="display:flex;justify-content:space-between">
        <span style="font-size:1.3vw;overf">{address}</span>
        <button on:click={handleRemoveItem}>
            <Icon type="empty" />
        </button>
    </div>
    <span style="font-size:4vw;color:green">{balance} iota</span>
</div>

<style>
    button {
        float: right;
    }
    span {
        padding: 0.2em 1em 0.3em;
    }
    .wrapper {
        text-overflow: clip;
        color: whitesmoke;
        background-color: rgb(80, 54, 173);
        border-radius: 10px;
        padding: 10px;
        margin-top: 20px;
    }
</style>
