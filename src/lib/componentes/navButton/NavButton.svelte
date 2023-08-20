<script lang="ts">
	import { page } from '$app/stores';
	export let route: string | null = null;
	export let navOpenState;
	export let bottom: boolean = false;
</script>

<li class:bottom>
	<button
		class="navButton"
		class:active={route && $page.url.pathname === route}
		class:navItemOpen={$navOpenState}
		on:click
	>
		<slot />
	</button>
</li>

<style>
	button.navButton {
		display: flex;
		background: none;
		border: none;
		border-radius: var(--border-radius);
		color: var(--color-50);
		align-items: center;
		width: 100%;
		font-size: 1em;
		margin-bottom: 1em;
		padding: 0.5em;
		transition: all 250ms ease-out;
	}
	button.navButton.navItemOpen {
		padding: 0.5em 1em;
	}

	button.navButton :global(span) {
		transition: all 250ms ease-out;
		padding-left: 0;
		opacity: 0;
		max-width: 0;
	}

	button.navButton :global(span.visible) {
		padding-left: 1em;
		opacity: 1;
		max-width: 250px;
	}

	button.navButton:hover {
		cursor: pointer;
		background-color: var(--color-800);
	}

	button.navButton.active {
		background-color: var(--color-400);
	}

	li.bottom {
		position: absolute;
		bottom: 0.75em;
	}
</style>
