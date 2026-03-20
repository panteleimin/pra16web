const button = document.getElementById("btn");
    const boxes = document.querySelectorAll(".container");
    let visible = true; 

    button.addEventListener("click", function() {
      visible = !visible; 
      boxes.forEach(box => {
        box.style.display = visible ? "block" : "none";
      });
      button.textContent = visible ? "Сховати елементи" : "Показати елементи";
    });
