const API = "http://127.0.0.1:8000";

document.getElementById("registerForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const body = {
        nombres: document.getElementById("name").value.trim(),
        apellidos: document.getElementById("lastname").value.trim(),
        email: document.getElementById("email").value.trim(),
        username: document.getElementById("username").value.trim(),
        password: document.getElementById("password").value,
    };

    console.log("Datos enviados:");
    console.log(body);

    try {

        const res = await fetch(`${API}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        });

        const data = await res.json();

        console.log("Respuesta backend:");
        console.log(data);

        if (res.ok) {

            alert("✅ Cuenta creada correctamente");

            window.location.href = "login.html";

        } else {

            alert("❌ " + JSON.stringify(data));

        }

    } catch (error) {

        console.error("Error:", error);

        alert("❌ No se pudo conectar al servidor");

    }

});