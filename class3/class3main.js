console.log("aayo hai aayo")

const heading1 = document.getElementById("heading_1");
heading1.innerText = "New header";
const button = document.getElementById("btn_1");
const emptyDiv = document.getElementById("empty_div");

button.addEventListener("click", () => {
    heading1.innerText = "New header aayo change vayera";
    emptyDiv.id = "Change vayo ta?";
    console.log("button Clicked vayo!");
})