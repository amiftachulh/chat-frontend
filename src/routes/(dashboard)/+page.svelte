<script lang="ts">
  import Chat from "$lib/icons/Chat.svelte";
</script>

<svelte:head>
  <title>Chat App</title>
</svelte:head>

<div class="grid place-content-center place-items-center gap-4">
  <Chat class="size-28" />
  <div class="text-center">
    <h1 class="text-xl">Chat App</h1>
    <p class="text-muted-foreground">
      Welcome to the Chat App! Start chatting with your friends now.
    </p>
  </div>
</div>
