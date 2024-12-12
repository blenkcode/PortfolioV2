
<script>
  import Child from './Child.svelte';
  let results = [];
 function handleResult(result){
results.push(result)
 }
</script>

<div>
  <h2>Resultat : {results}</h2>
  <Child 
  on:SubmitEvent={handleResult(result)}
  />
</div>