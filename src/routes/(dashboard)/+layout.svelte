<script lang="ts">
  import { auth } from "$lib/stores/auth";
  import { Avatar, AvatarImage, AvatarFallback } from "$lib/components/avatar";
  import { Button } from "$lib/components/button";
  import { Dialog, DialogContent, DialogHeader, DialogTitle } from "$lib/components/dialog";
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "$lib/components/dropdown-menu";
  import { Input } from "$lib/components/input";
  import { ScrollArea } from "$lib/components/scroll-area";
  import ChatEmpty from "$lib/icons/ChatEmpty.svelte";
  import EllipsisVertical from "$lib/icons/EllipsisVertical.svelte";
  import Logout from "$lib/icons/Logout.svelte";
  import Search from "$lib/icons/Search.svelte";
  import ChatMessage from "./ChatMessage.svelte";
  import axios from "$lib/services/axios";
  import { goto } from "$app/navigation";
  import { addToast } from "$lib/stores/toasts";
  import SearchUserDialog from "./SearchUserDialog.svelte";

  const arr = Array.from({ length: 0 }, (_, i) => i + 1);

  let searchUserOpen = false;

  async function logout() {
    try {
      await axios.post("/auth/logout");
      auth.set(null);
      goto("/auth/login");
    } catch (error) {
      addToast("Failed to logout");
    }
  }
</script>

{#if $auth}
  <div class="grid grid-cols-[max(350px,25%)_1fr]">
    <div class="space-y-4 border-r">
      <div class="flex h-14 items-center justify-between border-b px-4">
        <Avatar>
          <AvatarFallback>{$auth.name[0].toUpperCase()}</AvatarFallback>
        </Avatar>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <EllipsisVertical class="size-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem on:click={() => logout()}>
              <Logout class="size-5" />
              <span class="ml-2">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div class="relative mx-4">
        <Input placeholder="Search" autocomplete="off" />
        <button class="absolute inset-y-0 right-0 p-2">
          <Search class="size-5" />
        </button>
      </div>

      <ScrollArea class="h-[calc(100dvh-8rem)] overflow-y-auto pr-2">
        {#if arr.length > 0}
          {#each arr as a}
            <ChatMessage />
          {/each}
        {:else}
          <div class="grid h-[calc(100dvh-8rem)] place-content-center place-items-center">
            <ChatEmpty class="size-20" stroke-width="1" />
            <p class="text-gray-500">No messages</p>
            <Button class="mt-4 font-semibold" on:click={() => (searchUserOpen = true)}>
              Search friends
            </Button>
          </div>
        {/if}
      </ScrollArea>
    </div>
    <slot />
  </div>

  <SearchUserDialog bind:open={searchUserOpen} />
{/if}
