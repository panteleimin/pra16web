const Btn = document.getElementById("Btn");
Btn.addEventListener("click", function (){
    const Newdiv = document.createElement("div");
    Newdiv.textContent = "New DIV";

    Newdiv.style.background = "green";
    Newdiv.style.fontWeight = "bold";
    Newdiv.style.color = "white";

    document.querySelector(".container").appendChild(Newdiv);
}
    )