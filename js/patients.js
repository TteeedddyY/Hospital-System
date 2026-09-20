const nameInput = document.getElementById("name");
const reasonInput = document.getElementById("reason");
const list = document.getElementById("list");

function addPatient() {
    const name = nameInput.value.trim();
    const reason = reasonInput.value.trim();

    if (name === "" || reason === "") {
        alert("Please fill in both fields");
        return;
    }

    const item = document.createElement("li");
    item.textContent = name + " — " + reason;
    list.appendChild(item);

    nameInput.value = "";
    reasonInput.value = "";
}

document.getElementById("registerBtn").addEventListener("click", addPatient);