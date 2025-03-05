document.addEventListener("DOMContentLoaded", () => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const findVehicleBtn = document.getElementById("findVehicle");
    const vehicleNumberInput = document.getElementById("vehicleNumber");
    const vehicleLocation = document.getElementById("vehicleLocation");

    function initMap() {
        const defaultLocation = { lat: 37.7749, lng: -122.4194 };
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: defaultLocation,
        });
        new google.maps.Marker({
            position: defaultLocation,
            map: map,
            title: "Parking Lot",
        });
    }
    
    function findVehicle() {
        const vehicleNumber = vehicleNumberInput.value.trim();
        if (vehicleNumber === "") {
            alert("Please enter your vehicle number.");
            return;
        }
        
        // Simulated backend API response
        const mockLocation = { 
            lat: 37.7749 + Math.random() * 0.01, 
            lng: -122.4194 + Math.random() * 0.01 
        };
        
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: mockLocation,
        });

        new google.maps.Marker({
            position: mockLocation,
            map: map,
            title: `Vehicle: ${vehicleNumber}`,
            animation: google.maps.Animation.DROP
        });

        vehicleLocation.textContent = `Vehicle found at: (${mockLocation.lat.toFixed(5)}, ${mockLocation.lng.toFixed(5)})`;
        vehicleLocation.classList.add("fade-in");
    }

    findVehicleBtn.addEventListener("click", findVehicle);

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    });

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
    }

    initMap();
});
