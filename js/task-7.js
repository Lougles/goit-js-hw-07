const inputRef = document.getElementById('font-size-control');
const spanRef = document.getElementById('text');
function range(event) {
  spanRef.style.fontSize = event.currentTarget.value + "px";
}
inputRef.addEventListener("input", range);
