document.addEventListener("DOMContentLoaded", function () {
    var resumenBtn = document.getElementById("resumenBtn");
    var borrarBtn = document.querySelector(".BorrarResumen");
    var totalPagarElement = document.getElementById("totalPagar");
    var cantidadInput = document.getElementById("inputAddress2");
    var categoriaSelect = document.getElementById("inputState");

    // Guardar el estilo original del botón "Total a pagar"
    var estiloOriginal = totalPagarElement.innerHTML;

    resumenBtn.addEventListener("click", function () {
        var cantidad = parseInt(cantidadInput.value) || 0;
        var categoria = categoriaSelect.value;
        var descuento = 0;

        if (categoria === "Estudiante") {
            descuento = 0.8; // 80% de descuento
        } else if (categoria === "Trainee") {
            descuento = 0.5; // 50% de descuento
        } else if (categoria === "Junior") {
            descuento = 0.15; // 15% de descuento
        }

        var precioUnitario = 200;
        var totalPagar = cantidad * precioUnitario * (1 - descuento);

        // Mostrar el resultado dentro del contenedor "Total a pagar"
        totalPagarElement.innerHTML = "Total a Pagar: $" + totalPagar.toFixed(2);

        // Agregar la clase solo si no está presente
        if (!totalPagarElement.classList.contains("custom-button")) {
            totalPagarElement.classList.add("custom-button");
        }
    });

    // Agregar evento al botón "Borrar" para limpiar datos y restablecer el estilo original
    borrarBtn.addEventListener("click", function () {
        cantidadInput.value = "";
        categoriaSelect.value = "Choose...";

        // Restablecer el estilo original en el contenedor "Total a pagar"
        totalPagarElement.innerHTML = estiloOriginal;

        // Quitar la clase si está presente
        totalPagarElement.classList.remove("custom-button");
    });
});


