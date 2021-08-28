<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Project from '../components/project.svelte';
	import Contact from '../components/contact.svelte';
	import Characters from '../components/characters.svelte';
</script>

<svelte:head>
	<title>Thỏ 7 Màu</title>
</svelte:head>
<Characters/>
<Project/>
<Contact/>
<style lang='scss'>
</style>
