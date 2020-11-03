<script>
    import Nav from '$components/Nav'
    import { session } from '../../.svelte/main/runtime/stores'

    console.log('store from root', session)
</script>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<Nav/>
<slot/>