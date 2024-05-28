import { writable } from "svelte/store";

type Toast = {
  id: number;
  message: string;
};

export const toasts = writable<Toast[]>([]);

let count = 0;
const duration = 2000;

export function addToast(message: string) {
  const id = count++;
  const newToast = { id, message };
  toasts.update((all) => [newToast, ...all]);
  setTimeout(() => dismissToast(id), duration);
}

export function dismissToast(id: number) {
  toasts.update((toast) => toast.filter((t) => t.id !== id));
}
