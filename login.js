document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Dummy registered user (Replace this with backend validation)
    const registeredEmail = "user@example.com";
    const registeredPassword = "password123";

    if (email === registeredEmail && password === registeredPassword) {
        alert("Login successful! Redirecting to dashboard...");
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        errorMessage.textContent = "Invalid email or password. Try again.";
    }
});
