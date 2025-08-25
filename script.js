document.getElementById("createPollButton").onclick = function() {
    const pollForm = document.getElementById("pollForm");
        pollForm.style.display = pollForm.style.display === "none" ? "block" : "none";
};

    document.getElementById("form").onsubmit = function(event) {
        event.preventDefault();
        
        const formData = new FormData(event.target);
        const question = formData.get("question");
        const options = formData.get("options").split(",").map(opt = opt.trim());
        
        alert`Вопрос: ${question}\nВарианты: ${options.join(", ")}`;
    };