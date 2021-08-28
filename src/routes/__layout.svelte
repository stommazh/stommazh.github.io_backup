<script lang='ts'>
	import {onMount} from 'svelte';
	import Header from '../components/header.svelte';
	import Footer from '../components/footer.svelte';
	import 'virtual:windi.css';
	import '../styles.scss';
	import { page } from '$app/stores';

</script>
<Header segment={$page.path}/>
<main class='w-full p-14 container mx-auto' data-scroll-container>
	<slot />
</main>


<Footer/>


<style lang='scss'>
</style>
