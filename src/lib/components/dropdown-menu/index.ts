import { DropdownMenu as DropdownMenuPrimitive } from "bits-ui";
import Item from "./DropdownMenuItem.svelte";
import Content from "./DropdownMenuContent.svelte";

const Sub = DropdownMenuPrimitive.Sub;
const Root = DropdownMenuPrimitive.Root;
const Trigger = DropdownMenuPrimitive.Trigger;
const Group = DropdownMenuPrimitive.Group;

export {
  Sub,
  Root,
  Item,
  Group,
  Trigger,
  Content,
  //
  Root as DropdownMenu,
  Sub as DropdownMenuSub,
  Item as DropdownMenuItem,
  Group as DropdownMenuGroup,
  Content as DropdownMenuContent,
  Trigger as DropdownMenuTrigger,
};
