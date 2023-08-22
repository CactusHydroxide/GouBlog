<script lang="ts">
	import type { CharacterOverview } from '../../definition';

	export let characterOverview: CharacterOverview;
	let { name, dmgType, path, rarity, imageUrl } = characterOverview;
	//Image fallback
	$: imageSrc = imageUrl ? imageUrl : `https://cataas.com/cat/says/${name}?w=250&h=250`;
</script>

<div class="characterCard">
	<img src={imageSrc} alt={name} />
	<div class="characterLabel">
		<h3>{name}</h3>
		<p class="subheading">{dmgType}</p>
		<p class="subheading">{path}</p>
	</div>
</div>

<style>
	div.characterCard {
		max-width: 200px;
		overflow: hidden;
		border-radius: var(--border-radius) 45px var(--border-radius) var(--border-radius);
		background-color: var(--color-500);
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
