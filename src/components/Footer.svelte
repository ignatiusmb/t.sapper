<script>
	import { Link } from 'svelement';
</script>

<footer>
	<slot />
	<section>
		<p>Copyright &copy; 2020 &ndash; {new Date().getFullYear()} Ignatius Bagussuputra</p>
		<p>
			Handcrafted with ❤️ using
			<Link newTab href="https://svelte.dev/">Svelte</Link>
			&plus;
			<Link newTab href="https://sapper.svelte.dev/">Sapper</Link>
			&plus;
			<Link newTab href="https://aqua.mauss.dev/">Aqua</Link>
		</p>
	</section>
</footer>

<style>
	footer {
		width: 100%;
		max-width: 53em;
		position: relative;
		display: grid;
		gap: 0.5em;
		padding: 3em 1em;
		margin: auto auto 3em;
		text-align: center;
		line-height: 1.5;
		font-family: var(--aqua-monospace);
		font-size: clamp(0.8em, 3vw, 1em);
	}
	section:last-of-type {
		display: grid;
		grid-template-rows: repeat(2, 1fr);
		place-items: center;
		gap: 0.5em;
	}
</style>
