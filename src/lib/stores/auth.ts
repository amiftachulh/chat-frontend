import { writable } from "svelte/store";
import type { User } from "$lib/types";

function createAuthStore() {
  const { subscribe, set } = writable<User | null>(null);

  return { subscribe, set };
}

export const auth = createAuthStore();
