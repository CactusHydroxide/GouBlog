<script lang="ts">
	import PageTitle from '$lib/components/PageTitle.svelte';
	import { IconCircleFilled } from '@tabler/icons-svelte';
	import type { LightConeOverview } from '../../definition';

	const apiLightConeData: LightConeOverview[] = [
		{
			name: 'Coggers',
			path: 'Harmony',
			rarity: 'three',
			imageUrl:
				'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Light_Cone_Meshing_Cogs.png',
			passive: {
				name: 'pogging it out',
				description:
					'After the wearer uses attacks or gets hit, additionally regenerates <value> Energy. This effect can only be triggered 1 time per turn.',
				params: {
					min: [4],
					max: [8]
				}
			},
			hp: {
				min: 0,
				max: 999
			},
			def: {
				min: 0,
				max: 999
			},
			atk: {
				min: 0,
				max: 999
			}
		},
		{
			name: 'Coggers2',
			path: 'Harmony',
			rarity: 'four',
			imageUrl:
				'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Light_Cone_Meshing_Cogs.png',
			passive: {
				name: 'pogging it out',
				description: 'testing testing <value> <value>',
				params: {
					min: [1, 2],
					max: [3, 4]
				}
			},
			hp: {
				min: 0,
				max: 999
			},
			def: {
				min: 0,
				max: 999
			},
			atk: {
				min: 0,
				max: 999
			}
		},
		{
			name: 'Peserve Kog',
			path: 'Preservation',
			rarity: 'five',
			imageUrl:
				'https://static.wikia.nocookie.net/houkai-star-rail/images/8/89/Light_Cone_Meshing_Cogs.png',
			passive: {
				name: 'pogging it out',
				description:
					'After the wearer uses attacks or gets hit, additionally regenerates <value> Energy. This effect can only be triggered 1 time per turn.',
				params: {
					min: [4],
					max: [8]
				}
			},
			hp: {
				min: 0,
				max: 999
			},
			def: {
				min: 0,
				max: 999
			},
			atk: {
				min: 0,
				max: 999
			}
		}
	];

	const lightCones = [...apiLightConeData, ...apiLightConeData, ...apiLightConeData];
	const { name, rarity, imageUrl, path } = lightCones[0];
</script>

<PageTitle>Light Cones</PageTitle>
<div class="card">
	<img src={imageUrl} alt={name} />
	<div class="label">
		<IconCircleFilled />
		<span>{name}</span>
	</div>
</div>

<style>
	.card {
		background-color: var(--color-400);
		width: 33%;
		box-sizing: content-box;
		border-radius: var(--border-radius);
		text-align: center;
	}

	.card img {
		width: 100%;
		margin: auto;
		background-image: var(--gradient-two);
		display: inline-block;
	}

	.label {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
