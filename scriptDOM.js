const divAjouterButton = document.querySelector("div")
divAjouterButton.style.display = "flex"
divAjouterButton.style.flexDirection = "column"



for (let i = 0; i < 10; i++) {
  let ajouterButton = document.createElement('button')
  ajouterButton.innerText = "button ajouter par js"
  ajouterButton.classList.add("buttonAddedByJS")
  divAjouterButton.appendChild(ajouterButton)
}
