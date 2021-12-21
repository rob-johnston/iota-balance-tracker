<script>
    //inspired by https://medium.com/javascript-in-plain-english/how-to-add-customizable-svg-icons-in-svelte-js-app-488648d302c8
    export let d = "";
    export let side = "";
</script>

<svg
    class={side}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
>
    <path
        {d}
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>

<style>
    .left {
        position: absolute;
        font-size: 2rem;
        color: white;
        left: 0;
        padding: 1.2rem;
    }
    .right {
        position: absolute;
        font-size: 2rem;
        color: white;
        right: 0;
        padding: 1.2rem;
    }
</style>
