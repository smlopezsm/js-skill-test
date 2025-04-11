// 1.Hacer un escuchador basico
/*
<button id="btn">Haz click</button>
<script>
  const boton = document.getElementById("btn");
  boton.addEventListener("click", () => {alert("Hiciste click");});
</script>
*/

//Propagación de eventos
/*
<div id="padre" style="padding:20px; background-color:#ddd">
    Padre
    <button id="hijo">Hijo</button>
</div>

<script>
  document.getElementById("padre").addEventListener("click", () => {console.log("Click en PADRE");});
  document.getElementById("hijo").addEventListener("click", (e) => {
    console.log("Click en HIJO");
    // e.stopPropagation(); si descomento esto, la propagación se detiene. Es decir, el click no va a llegar al padre.
  });
</script>

*/
