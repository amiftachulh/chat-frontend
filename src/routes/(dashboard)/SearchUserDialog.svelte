<script lang="ts">
  import { Avatar, AvatarFallback } from "$lib/components/avatar";
  import { Dialog, DialogContent, DialogHeader, DialogTitle } from "$lib/components/dialog";
  import { Input } from "$lib/components/input";
  import Search from "$lib/icons/Search.svelte";
  import debounce from "$lib/utils/debounce";
  import type { User } from "$lib/types";
  import { addToast } from "$lib/stores/toasts";
  import axios from "$lib/services/axios";

  export let open = false;

  let name = "";
  let users: Omit<User, "createdAt" | "updatedAt">[] = [];

  async function searchUser() {
    if (!name) return;
    try {
      const res = await axios.get("/users", {
        params: { q: name },
      });
      users = res.data;
    } catch (error) {
      addToast("Failed to search user");
    }
  }
</script>

<Dialog bind:open>
  <DialogContent class="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Search friends</DialogTitle>
    </DialogHeader>
    <div class="relative">
      <Search class="absolute left-2 top-1/2 size-5 -translate-y-1/2" />
      <Input
        class="pl-8"
        placeholder="Search friends by username"
        autocomplete="off"
        bind:value={name}
        on:input={debounce(searchUser)}
      />
    </div>
    <div class="grid">
      {#each users as u (u._id)}
        <div class="flex items-center gap-2 rounded-lg p-2 hover:bg-primary/5">
          <Avatar>
            <AvatarFallback>{u.name[0].toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <p class="font-semibold">{u.displayName ?? u.name}</p>
            <p class="text-muted-foreground">{u.name}</p>
          </div>
        </div>
      {/each}
    </div>
  </DialogContent>
</Dialog>
