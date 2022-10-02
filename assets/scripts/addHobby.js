const addButton=document.getElementById("add")
const inputDiv=document.getElementById("input-hobby");
let i=2;

addButton.addEventListener("click", () => {
    inputDiv.innerHTML += `
    <div id="hobby-${++i}" class="hobby">
        <input 
            type="text"
            id="hobby"
            name="hobby[]"
            class="form-control"
        >
    </div>
    `
})