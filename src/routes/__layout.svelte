<script lang='ts'>
	import Header from '../components/Header/index.svelte';
	import 'virtual:windi.css';
	import '../styles.scss';
	import { page } from '$app/stores';
</script>

<Header segment={$page.path}/>
<main class='flex column w-full p-6 container mx-auto'>
	<slot />
</main>

<footer>
</footer>

<style lang='scss'>
</style>
