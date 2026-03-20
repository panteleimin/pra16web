const Btn = document.getElementById("Btn");
Btn.addEventListener("click", function(){
    const newText = prompt("Введіть новий текст: ");

    if(newText !== null){
        document.getElementById("text").textContent = newText;
    }
})