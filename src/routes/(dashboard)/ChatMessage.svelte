<script lang="ts">
  import { Avatar, AvatarFallback, AvatarImage } from "$lib/components/avatar";
</script>

<a href="/#" class="flex gap-2 p-2">
  <Avatar>
    <AvatarImage src="https://api.dicebear.com/8.x/bottts-neutral/png" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <div class="flex flex-1 justify-between">
    <div>
      <div class="font-semibold">John Doe</div>
      <div class="text-sm text-muted-foreground">Hello</div>
    </div>
    <div class="text-xs text-muted-foreground">2 minutes ago</div>
  </div>
</a>
