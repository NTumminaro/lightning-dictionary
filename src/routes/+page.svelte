<script lang="ts">
    import Tile from "$lib/components/Tile.svelte";
    import { entities } from "$lib/data/entities";
</script>



<!-- A responsive grid to display all of the Tiles from entities.ts. All Tiles should be the same size-->
<div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-2 mb-10">
    {#each Object.values(entities) as entity}
        <Tile entityName={entity.name} />
    {/each}
</div>
