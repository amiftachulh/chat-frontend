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
  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
  <polyline points="16 17 21 12 16 7" />
  <line x1="21" x2="9" y1="12" y2="12" />
</svg>
