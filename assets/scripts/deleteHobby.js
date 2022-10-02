const deleteButton=document.getElementById("delete")
const hobbyInput=document.getElementsByClassName("hobby")

deleteButton.addEventListener("click", () => {
    hobbyInput[0].parentNode.removeChild(hobbyInput[hobbyInput.length-1])
})