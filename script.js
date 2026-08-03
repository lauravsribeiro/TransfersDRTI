const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw090fRN8xYLwM7lBEH52dV2V_iaKIYbYXQDKmmIWI7M1UTPczQoOsFSaN3b8mcVP4h/exec";

document.getElementById("transferForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const inputs = document.querySelectorAll("input");

    const data = {
        nome: inputs[0].value,
        thp: inputs[1].value,
        t1: document.querySelector("select").value,
        t1power: inputs[2].value,
        kills: inputs[3].value
    };

    fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(() => {
        document.getElementById("msg").innerHTML =
            "✅ Registration submitted successfully!";
        document.getElementById("transferForm").reset();
    })
    .catch(() => {
        document.getElementById("msg").innerHTML =
            "❌ Error sending registration.";
    });
});
