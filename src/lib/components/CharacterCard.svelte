<script lang="ts">
	import type { CharacterOverview } from '../../definition';

	export let characterOverview: CharacterOverview;
	let { name, dmgType, path, rarity, imageUrl } = characterOverview;
	//Image fallback
	$: imageSrc = imageUrl ? imageUrl : `https://cataas.com/cat/says/${name}?w=250&h=250`;
</script>

<div class="characterCard" on:click on:keydown role="button" tabindex={0}>
	<img loading="lazy" src={imageSrc} alt={name} class={rarity} />
	<div class="characterLabel">
		<h3>{name}</h3>
		<p class="subheading">{dmgType}</p>
		<p class="subheading">{path}</p>
	</div>
</div>

<style>
	div.characterCard {
		min-width: 100px;
		max-width: 220px;
		overflow: hidden;
		border-radius: var(--border-radius) 45px var(--border-radius) var(--border-radius);
		background-color: var(--color-500);
		transition: all 100ms ease-out;
	}

	div.characterCard:hover {
		background-color: var(--color-400);
		transform: scale(105%);
	}

	div.characterCard img {
		transition: all 100ms ease-out;
		aspect-ratio: 1;
		width: 100%;
		object-fit: contain;
	}

	div.characterCard img.four {
		background-image: var(--gradient-four);
	}
	div.characterCard img.five {
		background-image: var(--gradient-five);
	}

	div.characterCard:hover img {
		transform: scale(1.1);
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

	/* layout sizing */
	@media screen and (width < 1024px) {
		div.characterCard {
			font-size: 0.75rem;
		}
	}

	@media screen and (690px < width < 768px) {
		div.characterCard {
			font-size: 1rem;
		}
	}

	@media screen and (width > 920px) {
		div.characterCard {
			font-size: 0.9rem;
		}
	}

	@media screen and (width > 1024px) {
		div.characterCard {
			font-size: 1rem;
		}
	}
</style>
