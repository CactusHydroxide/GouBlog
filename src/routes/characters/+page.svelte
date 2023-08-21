<script>
	import CharacterCard from '$lib/componentes/CharacterCard.svelte';
	import PageTitle from '$lib/componentes/PageTitle.svelte';
</script>

<PageTitle>this is a page</PageTitle>
gridLayout

<CharacterCard />
<div class="characterCard">
	<img src="https://cataas.com/cat/says/hehe?w=250&h=250" alt="character-name" />
	<div class="characterLabel">
		<h3>Name</h3>
		<p class="subheading">element</p>
		<p class="subheading">path</p>
	</div>
</div>

<style>
	div.characterCard {
		max-width: 200px;
		overflow: hidden;
		border-radius: var(--border-radius) 45px var(--border-radius) var(--border-radius);
		border: solid black 1px;
	}

	div.characterCard img {
		width: 100%;
		object-fit: contain;
	}

	.characterLabel {
		margin: 10px;
	}

	.characterLabel p,
	.characterLabel h3 {
		margin: 0;
		margin-bottom: 5px;
	}

	.characterLabel .subheading {
		color: var(--color-100);
		font-weight: 300;
	}
</style>
