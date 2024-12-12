<script>
    // Déclaration des props
    export let title;
    export let color;
    
    let clickCount = 0;
    
    function handleClick() {
      clickCount++;
      // Dispatch d'un événement personnalisé
      dispatch('buttonClick', {
        clickCount: 1
      });
    }
  
    // Création du dispatcher
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
  </script>
  
  <button 
    style="color: {color}"
    on:click={handleClick}
  >
    {title} (cliqué {clickCount} fois)
  </button>