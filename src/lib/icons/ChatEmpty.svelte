<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";
  import defaultAttributes from "./default-attributes";

  type $$Props = SVGAttributes<SVGSVGElement>;
</script>

<svg
  {...defaultAttributes}
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  {...$$props}
>
  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
</svg>
