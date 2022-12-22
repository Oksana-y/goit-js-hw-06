const textInput = document.querySelector("#validation-input");
console.log(textInput);

textInput.addEventListener("blur", () => { 
   if (textInput.value.length === Number(textInput.dataset.length)) { 
    textInput.classList.add("valid");
   }

   else {
    textInput.classList.remove("valid");
    textInput.classList.add("invalid");
   }
  });

  