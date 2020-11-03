<div id="login">
    User { user } ? { stores }<br/>
    <input type="text" bind:value={email}>
    <input type="password" bind:value={password} class="border"> 
    <button on:click={onLogin}>Login</button>
</div>

<script context="module">
    export async function preload(page,session) {
        console.log('preload page',page)
        console.log('preload session', session)
        return { user: session.user }
    }
</script>

<script>
    import { onMount, getContext } from 'svelte'
    export let user
    export let stores
    let email = "email@local.dev"
    let password = "secret"

    function onLogin() {
        console.log('on login')
    }
        let store = getContext('__svelte__')
        console.log('store ', store)

    onMount(() => {
        console.log('on mount', $$props)

    })
</script>