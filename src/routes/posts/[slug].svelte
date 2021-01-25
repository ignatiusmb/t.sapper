<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`posts/${params.slug}.json`);
		if (res.status !== 200) return this.error(404, 'Post not found');
		return { post: await res.json() };
	}
</script>

<script>
	export let post;
</script>

<h1>{post.title}</h1>
