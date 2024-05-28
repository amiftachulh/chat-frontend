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
  <path d="M18 6 6 18" />
  <path d="m6 6 12 12" />
</svg>
