<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import X from "$lib/icons/X.svelte";

  const dispatch = createEventDispatcher();
</script>

<div class="flex gap-2 rounded-lg border bg-background p-4" transition:fade>
  <div class="flex-1">
    <slot />
  </div>
  <button on:click={() => dispatch("dismiss")}>
    <X class="size-5" />
  </button>
</div>
