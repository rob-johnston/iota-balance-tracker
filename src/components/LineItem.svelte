<script>
    import { slide } from "svelte/transition";
    import { spring } from "svelte/motion";
    import { itrash, isave } from "../Hicons";
    import SvgIcon from "../SvgIcon.svelte";
    import { Icon } from "@specialdoom/proi-ui-icons";
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
        console.log("trying to delete.. ", id);
        coords.set({ x: 0, y: 0 }, { hard: true });

        console.log($iotaAddresses);
        delete $iotaAddresses[id];
        $iotaAddresses = $iotaAddresses;
        console.log($iotaAddresses);
        console.log(Object.entries($iotaAddresses).length);
    }

    $: side = $coords.x >= (w / 2) * 1 ? "left" : "right";
    $: side === "left" ? deleteContact(current) : "";
</script>

<div class="list-item" out:slide={{ duration: 500 }}>
    <SvgIcon d={itrash} side="left" />
    <SvgIcon d={isave} side="right" />
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
            rgba(0, 255, 59, 1) 100%
        );
        width: 100%;
        height: 70px;
        margin: 0.25rem;
        user-select: none;
        pointer-events: auto;
    }

    .container {
        position: absolute;
        cursor: -webkit-grab;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #e2e8f0;
    }
    .container:active {
        cursor: grabbing;
    }
    .container > * {
        pointer-events: none;
    }
    .address {
        font-weight: 700;
    }
    .balance {
        color: #718096;
    }
</style>
