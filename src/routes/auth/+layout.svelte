<script lang="ts">
  import { auth } from "$lib/stores/auth";
</script>

{#if !$auth}
  <div class="flex min-h-dvh w-full items-center justify-center py-4">
    <slot />
  </div>
{/if}
