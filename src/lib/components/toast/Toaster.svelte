<script lang="ts">
  import { dismissToast, toasts } from "$lib/stores/toasts";
  import Toast from "./Toast.svelte";
</script>

{#if $toasts}
  <div class="fixed right-0 top-0 w-64 p-4">
    {#each $toasts as toast (toast.id)}
      <Toast on:dismiss={() => dismissToast(toast.id)}>
        {toast.message}
      </Toast>
    {/each}
  </div>
{/if}
