<script lang="ts">
	import CharacterCard from '$lib/componentes/CharacterCard.svelte';
	import PageTitle from '$lib/componentes/PageTitle.svelte';
	import type { CharacterOverview } from '../../definition';

	const apiCharacterData: CharacterOverview[] = [
		{
			name: 'Trailblazer',
			dmgType: 'Physical',
			path: 'Destruction',
			rarity: 'five',
			imageUrl:
				'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Character_Trailblazer_(Destruction)_Icon.png'
		},
		{
			name: 'March 7th',
			dmgType: 'Ice',
			path: 'Preservation',
			rarity: 'four',
			imageUrl:
				'https://static.wikia.nocookie.net/houkai-star-rail/images/d/d3/Character_March_7th_Icon.png'
		},
		{
			name: 'Dan Heng',
			dmgType: 'Wind',
			path: 'Hunt',
			rarity: 'four'
		},
		{
			name: 'Welt',
			dmgType: 'Imaginary',
			path: 'Nihility',
			rarity: 'five'
		},
		{
			name: 'Himeko',
			dmgType: 'Fire',
			path: 'Erudition',
			rarity: 'five',
			imageUrl:
				'https://static.wikia.nocookie.net/houkai-star-rail/images/0/00/Character_Himeko_Icon.png'
		},
		{
			name: 'Herta',
			dmgType: 'Ice',
			path: 'Erudition',
			rarity: 'four',
			imageUrl:
				'https://static.wikia.nocookie.net/houkai-star-rail/images/b/bf/Character_Herta_Icon.png'
		}
	];
</script>

<PageTitle>this is a page</PageTitle>

<div class="cardContainer">
	{#each apiCharacterData as characterOverview}
		<CharacterCard {characterOverview} />
	{/each}
</div>

<style>
	/* card grid */
	.cardContainer {
		display: flex;
		direction: row;
		align-items: center;
		flex-wrap: wrap;
		margin: -1rem;
	}

	.cardContainer > :global(*) {
		margin: 1rem;
	}

	.cardContainer::after {
		content: '';
		flex: 1;
	}

	/* mobile grid */
	@media screen and (max-width: 768px) {
		.cardContainer {
			justify-content: space-evenly;
		}

		.cardContainer::after {
			display: none;
		}
	}
</style>
