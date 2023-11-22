<script>
    import { randomNumber } from "./helpers";
    import { createEventDispatcher, onMount } from "svelte";
    export let pokemon;
    $: ({ id, name, sprites } = pokemon);

    const dispatch = createEventDispatcher();

    onMount(()=>{
        const timeout = setInterval(() => {
            dispatch("disapear" );
        }, randomNumber(5000, 1000));

        return () => {
            clearTimeout(timeout)
        };
    });
</script>

<div>
    <a href="/pokedex/{id}">
        <img src={sprites.back_default} alt={name} />
    </a>
</div>