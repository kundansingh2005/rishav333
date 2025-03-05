function initMap() {
    const parkingLocation = { lat: 37.7749, lng: -122.4194 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: parkingLocation,
    });
    new google.maps.Marker({
        position: parkingLocation,
        map: map,
        title: "Parking Lot Location",
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const parkingLot = document.getElementById("parking-lot");
    const confirmBtn = document.getElementById("confirmBooking");
    const qrCodeDiv = document.getElementById("qrCode");
    const timer = document.getElementById("timer");
    const confirmSound = document.getElementById("confirmSound");
    const darkModeToggle = document.getElementById("darkModeToggle");
    let selectedSlot = null;
    let countdown;

    function createSlots() {
        for (let i = 1; i <= 10; i++) {
            const slot = document.createElement("div");
            slot.classList.add("slot");
            slot.textContent = i;
            slot.addEventListener("click", () => selectSlot(slot));
            parkingLot.appendChild(slot);
        }
    }

    function selectSlot(slot) {
        if (selectedSlot) selectedSlot.classList.remove("selected");
        slot.classList.add("selected");
        selectedSlot = slot;
        startCountdown();
    }

    function startCountdown() {
        let timeLeft = 30;
        clearInterval(countdown);
        countdown = setInterval(() => {
            timer.textContent = `Confirm within: ${timeLeft}s`;
            if (timeLeft === 0) {
                selectedSlot.classList.remove("selected");
                selectedSlot = null;
                clearInterval(countdown);
                timer.textContent = "";
            }
            timeLeft--;
        }, 1000);
    }

    confirmBtn.addEventListener("click", () => {
        if (!selectedSlot) return alert("Please select a slot first");
        clearInterval(countdown);
        confirmSound.play();
        generateQRCode();
    });

    function generateQRCode() {
        qrCodeDiv.innerHTML = ""; // Clear previous QR code
        new QRCode(qrCodeDiv, {
            text: `Slot ${selectedSlot.textContent} booked successfully!`,
            width: 128,
            height: 128
        });
    }

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    createSlots();
    initMap(); // Ensure the map is initialized when the page loads
});