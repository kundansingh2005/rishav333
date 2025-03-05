document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    alert("Registration Successful! Redirecting to Login...");
    window.location.href = "login.html"; // Redirect to login page
});

// OTP Simulation
document.getElementById("sendOtpBtn").addEventListener("click", function() {
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    alert(`Your OTP is: ${generatedOtp}`);
    

});
