import { Dialog as DialogPrimitive } from "bits-ui";

import Title from "./DialogTitle.svelte";
import Portal from "./DialogPortal.svelte";
import Footer from "./DialogFooter.svelte";
import Header from "./DialogFooter.svelte";
import Overlay from "./DialogOverlay.svelte";
import Content from "./DialogContent.svelte";
import Description from "./DialogDescription.svelte";

const Root = DialogPrimitive.Root;
const Trigger = DialogPrimitive.Trigger;
const Close = DialogPrimitive.Close;

export {
  Root,
  Title,
  Portal,
  Footer,
  Header,
  Trigger,
  Overlay,
  Content,
  Description,
  Close,
  //
  Root as Dialog,
  Title as DialogTitle,
  Portal as DialogPortal,
  Footer as DialogFooter,
  Header as DialogHeader,
  Trigger as DialogTrigger,
  Overlay as DialogOverlay,
  Content as DialogContent,
  Description as DialogDescription,
  Close as DialogClose,
};
