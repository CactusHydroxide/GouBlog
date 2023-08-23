<script>
	import { page } from '$app/stores';
	import PageTitle from '$lib/components/PageTitle.svelte';
	let { character } = $page.params;
	// look at how data is handled. If API use load, if not just call the data values from here
</script>

<PageTitle>{character}</PageTitle>
