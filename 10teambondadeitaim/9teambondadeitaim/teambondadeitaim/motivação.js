document.querySelectorAll(".choose-plan").forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Botão clicado!");
        const targetPage = this.getAttribute("data-target");
        console.log("Redirecionando para:", targetPage);
        if (targetPage) {
            window.location.href = targetPage;
        } else {
            console.error("Atributo 'data-target' não encontrado.");
        }
    });
});
