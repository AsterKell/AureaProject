async function login(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/api/auth/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            }
        );

        const data = await response.json();

        if (response.ok) {

            alert("Bienvenido " + data.usuario);

            // REDIRECCIÓN
            window.location.href = "carga.html";

        } else {

            alert(data.detail);

        }

    } catch (error) {

        console.error(error);
        alert("Error de conexión");

    }
}

function register(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    const lastname = document.getElementById("lastname").value;

    const email = document.getElementById("registerEmail").value;

    const username = document.getElementById("username").value;

    const password = document.getElementById("registerPassword").value;

    if (name === "" || lastname === "" || email === "" || username === "" || password === "") {
        alert("Completa todos los campos");

        return;
    }

    alert("Cuenta creada correctamente");

    window.location.href = "login.html";
}



function logout() {

    localStorage.removeItem("token");

    alert("Sesión cerrada");

    window.location.href = "login.html";

}



function selectFile() {
    document.getElementById("fileInput").click();
}



function handleFile(event) {
    const file = event.target.files[0];

    if (file) {
        alert("Archivo seleccionado: " + file.name);
    }
}



function togglePassword(id, icon) {
    const input = document.getElementById(id);

    if (input.type === "password") {
        input.type = "text";

        icon.classList.remove("fa-eye");

        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";

        icon.classList.remove("fa-eye-slash");

        icon.classList.add("fa-eye");
    }
}



function showSection(id, element) {
    const sections = document.querySelectorAll(".server-section");

    sections.forEach((section) => {
        section.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

    const tabs = document.querySelectorAll(".tab-btn");

    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });

    element.classList.add("active");
}



function testConnection() {
    alert("Conexión exitosa con SQL Server");
}

async function saveServer() {

    const nombre = document.getElementById("nombre").value;
    const host = document.getElementById("host").value;
    const database = document.getElementById("database").value;
    const usuario = document.getElementById("usuario").value;
    const password = document.getElementById("password").value;

    if (
        nombre === "" ||
        host === "" ||
        database === "" ||
        usuario === "" ||
        password === ""
    ) {
        alert("Completa todos los campos");
        return;
    }

    try {

        const response = await fetch(
            "http://127.0.0.1:8000/api/servidores/",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nombre: nombre,
                    host: host,
                    name_bd: database,
                    user_bd: usuario,
                    pass_bd: password
                })
            }
        );

        const data = await response.json();
        console.log(JSON.stringify(data, null, 2));

        if (response.ok) {

            alert("Servidor guardado correctamente");

            window.location.href = "configurar.html";

        } else {

            alert(data.detail || "Error al guardar");

        }

    } catch (error) {

        console.error(error);

        alert("Error de conexión");

    }
}



function updateServer() {
    alert("Servidor actualizado correctamente");

    window.location.href = "configurar.html";
}



function deleteServer() {
    const confirmDelete = confirm("¿Eliminar servidor?");

    if (confirmDelete) {
        alert("Servidor eliminado");

        window.location.href = "configurar.html";
    }
}