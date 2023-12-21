<script lang='ts'>
    import { randomNumber } from "./helpers";
    import { createEventDispatcher, onMount } from "svelte";
    export let pokemon;
    let { id, name, sprites }: { id: number, name: string, sprites: any } = pokemon;

    const dispatch = createEventDispatcher();
    let maxTop = 0
    let maxLeft = 0
    $: posLeft = randomNumber(maxLeft - 100);
    $: posTop = randomNumber(maxTop - 100);
    
    onMount(()=>{
        const timeout = setInterval(() => {
            dispatch("disapear" );
        }, randomNumber(5000, 1000));
        
        return () => {
            clearTimeout(timeout)
        };
    });

    function catchPokemon() {
        dispatch("click");
    }
</script>

<svelte:window bind:innerHeight={maxTop} bind:innerWidth={maxLeft}></svelte:window>

<button style:top="{posTop}px" style:left="{posLeft}px" on:click={catchPokemon}>
    <img src={sprites.front_default} alt={name} />
</button>

<style>
    button{
        position: absolute;
    } 
        
</style>