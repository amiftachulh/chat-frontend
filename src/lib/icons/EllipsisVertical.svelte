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
  <circle cx="12" cy="12" r="1" />
  <circle cx="12" cy="5" r="1" />
  <circle cx="12" cy="19" r="1" />
</svg>
