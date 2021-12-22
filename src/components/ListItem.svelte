<script>
    import { slide } from "svelte/transition";
    import { spring } from "svelte/motion";
    import { itrash } from "../Hicons";
    import SvgIcon from "../SvgIcon.svelte";
    import { iotaAddresses } from "../store/store";
    import { customSlide } from "../util/customSlide";

    export let address;
    export let balance;
    export let index;

    let coords = spring({ x: 0, y: 0 }, { stiffness: 0.05, damping: 0.5 });
    let selected;
    let current;
    let w;

    function handleSlideStart() {
        coords.stiffness = coords.damping = 1;
    }

    function handleSlideMove(event) {
        coords.update(($coords) => ({
            x: $coords.x + event.detail.dx,
            y: $coords.y + event.detail.dy,
        }));
    }

    function handleSlideEnd(event) {
        coords.stiffness = 0.05;
        coords.damping = 0.5;
        coords.set({ x: 0, y: 0 });
    }

    function deleteContact(id) {
        coords.set({ x: 0, y: 0 }, { hard: true });
        delete $iotaAddresses[id];
        $iotaAddresses = $iotaAddresses;
    }

    // delete the item if we swipe far enough
    $: {
        if ($coords.x >= (w / 2) * 1) {
            deleteContact(current);
        }
    }
</script>

<div class="list-item" out:slide={{ duration: 500 }}>
    <SvgIcon d={itrash} side="left" />
    <div
        class="container"
        bind:offsetWidth={w}
        use:customSlide
        on:slidestart={() => {
            selected = index;
            current = address;
            handleSlideStart;
        }}
        on:slidemove={handleSlideMove}
        on:slideend={handleSlideEnd}
        style="transform: translate3d({selected === index
            ? $coords.x
            : 0}px, 0, 0)"
    >
        <div>
            <div class="address">
                {address}
            </div>
            <div class="balance">
                {balance}
            </div>
        </div>
    </div>
</div>

<!-- TODO: make everything look nicer -->
<style>
    :global(body) {
        overflow-x: hidden;
    }
    .list-item {
        position: relative;
        display: flex;
        background: linear-gradient(
            90deg,
            rgba(249, 7, 7, 1) 23%,
            rgb(29, 29, 87) 100%
        );
        width: 100%;
        height: 70px;
        margin: 0.25rem;
        user-select: none;
        pointer-events: auto;
        border-radius: 1rem;
    }

    .container {
        position: absolute;
        cursor: -webkit-grab;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #3168b1;
        border-radius: 1rem;
        overflow: auto;
    }
    .container:active {
        cursor: grabbing;
    }
    .container > * {
        pointer-events: none;
    }
    .address {
        font-weight: 500;
        padding-left: 1rem;
        padding-right: 1rem;
        color: hsl(215, 100%, 94%);
    }
    .balance {
        padding-left: 1rem;
        float: left;
        font-weight: 700;
        font-size: 4vh;
        color: #f2f7ff;
    }
</style>
