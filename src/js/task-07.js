const inputSizeControl = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

inputSizeControl.addEventListener("input",(event) => {
     text.style.fontSize = event.currentTarget.value + "px";
  });
  