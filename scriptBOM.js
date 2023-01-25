const paraClass = document.getElementById("para")

const getButtonByClassName = document.querySelector(".ChangeStyle")
const getButtonByIdName = document.querySelector("#ResetStyle")


function ChangerStyle (){
  paraClass.style.color = "red"
  paraClass.style.backgroundColor = "white"
  paraClass.style.border = "1px solid green"
}
function ResetStyle (){
  paraClass.style.color = "black"
  paraClass.style.backgroundColor = "transparent"
  paraClass.style.border = "none"
}

getButtonByClassName.addEventListener('click',ChangerStyle)
getButtonByIdName.addEventListener('click',ResetStyle)