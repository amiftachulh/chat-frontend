<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";
  import defaultAttributes from "./default-attributes";

  type $$Props = SVGAttributes<SVGSVGElement>;
</script>

<svg {...defaultAttributes} {...$$props}>
  <path
    fill="none"
    stroke="currentColor"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    d="m19.5 16l-2.475-3.396M12 17.5V14m-7.5 2l2.469-3.388M3 8c3.6 8 14.4 8 18 0"
  />
</svg>
