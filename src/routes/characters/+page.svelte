<script lang="ts">
	import CharacterCard from '$lib/components/CharacterCard.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import type { CharacterOverview } from '../../definition';
	import { goto } from '$app/navigation';

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

	$: characterDataArr = [
		...apiCharacterData,
		...apiCharacterData,
		...apiCharacterData,
		...apiCharacterData
	];
</script>

<PageTitle>this is a page</PageTitle>

<div class="cardContainer">
	{#each characterDataArr as characterOverview}
		<CharacterCard {characterOverview} on:click={()=> goto(`/characters/${characterOverview.name}`)} />
	{/each}
</div>

<style>
	/* card grid */
	.cardContainer {
		display: grid;
		grid-template-columns: repeat(3, 0.9fr);
		grid-template-rows: repeat(6, auto);
		margin: -0.5rem;
	}

	.cardContainer > :global(*) {
		margin: 0.5rem;
	}

	/* media query */
	@media screen and (min-width: 478px) {
		.cardContainer {
			grid-template-columns: repeat(4, 0.9fr);
		}
	}
	@media screen and (min-width: 768px) {
		.cardContainer {
			grid-template-columns: repeat(5, 0.9fr);
		}
	}
	@media screen and (min-width: 1024px) {
		.cardContainer {
			grid-template-columns: repeat(6, 0.9fr);
		}
	}
	@media screen and (min-width: 1440px) {
		.cardContainer {
			grid-template-columns: repeat(8, 0.9fr);
			margin: -0.8vw;
		}
		.cardContainer > :global(*) {
			margin: 0.8vw;
		}
	}
	@media screen and (min-width: 1920px) {
		.cardContainer {
			grid-template-columns: repeat(9, 0.9fr);
		}
	}
</style>
