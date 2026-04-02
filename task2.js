function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
        alert("Please fill all fields");
        return false;
    }

    if (!email.includes("@")) {
        alert("Enter valid email");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function addTask() {
    let task = document.getElementById("taskInput").value;

    if (task == "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerText = task;

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.onclick = function () {
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}