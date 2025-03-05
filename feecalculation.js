document.addEventListener("DOMContentLoaded", () => {
    const vehicleType = document.getElementById("vehicleType");
    const rateDisplay = document.getElementById("rateDisplay");
    const dailyRateDisplay = document.getElementById("dailyRateDisplay");
    const weeklyRateDisplay = document.getElementById("weeklyRateDisplay");
    const monthlyRateDisplay = document.getElementById("monthlyRateDisplay");
    const durationInput = document.getElementById("duration");
    const timeUnit = document.getElementById("timeUnit");
    const calculateFeeBtn = document.getElementById("calculateFee");
    const totalCostDisplay = document.getElementById("totalCost");
    
    const rates = {
        car: { hourly: 20, daily: 150, weekly: 900, monthly: 3000 },
        bike: { hourly: 10, daily: 70, weekly: 400, monthly: 1500 },
        truck: { hourly: 50, daily: 350, weekly: 2000, monthly: 7000 }
    };
    
    function updateRates() {
        const selectedVehicle = vehicleType.value;
        rateDisplay.textContent = `Charge: ₹${rates[selectedVehicle].hourly} per hour`;
        dailyRateDisplay.textContent = `Charge: ₹${rates[selectedVehicle].daily} per day`;
        weeklyRateDisplay.textContent = `Charge: ₹${rates[selectedVehicle].weekly} per week`;
        monthlyRateDisplay.textContent = `Charge: ₹${rates[selectedVehicle].monthly} per month`;
    }
    
    function calculateFee() {
        const selectedVehicle = vehicleType.value;
        const duration = parseInt(durationInput.value);
        const unit = timeUnit.value;
        
        if (isNaN(duration) || duration <= 0) {
            totalCostDisplay.textContent = "Please enter a valid duration";
            return;
        }
        
        let cost = 0;
        switch (unit) {
            case "hour":
                cost = duration * rates[selectedVehicle].hourly;
                break;
            case "day":
                cost = duration * rates[selectedVehicle].daily;
                break;
            case "week":
                cost = duration * rates[selectedVehicle].weekly;
                break;
            case "month":
                cost = duration * rates[selectedVehicle].monthly;
                break;
        }
        
        totalCostDisplay.textContent = `Total Cost: ₹${cost.toFixed(2)}`;
    }
    
    vehicleType.addEventListener("change", updateRates);
    calculateFeeBtn.addEventListener("click", calculateFee);
    
    updateRates();
});