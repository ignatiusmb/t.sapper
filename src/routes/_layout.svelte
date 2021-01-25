<script>
	import { ScrollTop } from 'svelement';
	import Navigation from '$components/Navigation.svelte';
	import Footer from '$components/Footer.svelte';

	import '@ignatiusmb/aqua/lib/aqua.min.css';
	import '$styles/fonts.css';

	import { mobile } from '$utils/stores';
	let innerWidth;
	$: mobile.set(innerWidth < 600);
</script>

<svelte:window bind:innerWidth />
<ScrollTop />

<Navigation />
<slot />
<Footer />

<style>
	:global(#sapper) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		font-family: var(--aqua-default);
	}
</style>
