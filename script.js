let watsonInstance = null;

// Watson Assistant Integration
window.watsonAssistantChatOptions = {
    integrationID: "19c65339-5e65-4b54-8b19-de5558815402",
    region: "au-syd",
    serviceInstanceID: "bb8e2382-85d8-48a9-b473-47f2201570f4",
    onLoad: async (instance) => {
        watsonInstance = instance;
        await instance.render();
    }
};

setTimeout(() => {
    const script = document.createElement("script");
    script.src =
        "https://web-chat.global.assistant.watson.appdomain.cloud/versions/latest/WatsonAssistantChatEntry.js";
    document.head.appendChild(script);
});

// Show verification modal
document.getElementById("chatBtn").addEventListener("click", () => {
    document.getElementById("verificationModal").style.display = "flex";
});

// Handle form submission
document.getElementById("verificationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const ticket = document.getElementById("ticket").value.trim();

    if (name && email && ticket.length >= 5) {
        document.getElementById("verificationModal").style.display = "none";

        if (watsonInstance) {
            watsonInstance.openWindow();
            watsonInstance.focusInput();
        }
    } else {
        alert("Please enter valid details.");
    }
});