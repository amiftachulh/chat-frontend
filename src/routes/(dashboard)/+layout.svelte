<script lang="ts">
  import { auth } from "$lib/stores/auth";
  import Input from "$lib/components/input/Input.svelte";
  import Search from "$lib/icons/Search.svelte";
  import ChatMessage from "./ChatMessage.svelte";
  import { ScrollArea } from "$lib/components/scroll-area";

  const arr = Array.from({ length: 10 }, (_, i) => i + 1);

  $: console.log($auth);
</script>

{#if $auth}
  <div class="grid grid-cols-[max(350px,25%)_1fr]">
    <div class="space-y-4 border-r">
      <div class="relative mx-4 mt-4">
        <Input placeholder="Search" autocomplete="off" />
        <button class="absolute inset-y-0 right-0 p-2">
          <Search class="size-5" />
        </button>
      </div>

      <ScrollArea class="h-[calc(100dvh-4.5rem)] overflow-y-auto pr-2">
        {#each arr as a}
          <ChatMessage />
        {/each}
      </ScrollArea>
    </div>
    <slot />
  </div>
{/if}
