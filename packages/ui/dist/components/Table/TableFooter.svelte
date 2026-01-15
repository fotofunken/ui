<script lang="ts">
  import { ChildKey } from '../../constants.js';
  import Child from '../../internal/Child.svelte';
  import type { Snippet } from 'svelte';

  type Props = {
    class?: string;
    children: Snippet;
  };

  let { class: className, children }: Props = $props();
</script>

<Child for={ChildKey.Table} as={ChildKey.TableFooter} class={className}>
  {@render children?.()}
</Child>
