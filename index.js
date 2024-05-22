/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInputEl = document.getElementById("convert-input")
const convertButton = document.getElementById("convert-btn")
const conversionFactors = [
    {
        metricUnit: "meters",
        imperialUnit: "feet",
        factor: 3.281
    },
    {
        metricUnit: "liters",
        imperialUnit: "gallons",
        factor: 0.264
    },
    {
        metricUnit: "kilos",
        imperialUnit: "pounds",
        factor: 2.204
    }
]
const measurements = Object.freeze({
    METERS: "meters",
    FEET: "feet",
    LITERS: "liters",
    GALLONS: "gallons",
    KILOS: "kilos",
    POUNDS: "pounds"
})

function handleConvertButtonClick() {
    showConvertedMeasurements()
}

function showConvertedMeasurements() {
    document.getElementById("length-content").innerText = `
        ${userInputEl.value} meters = ${meterToFeet()} feet | ${userInputEl.value} feet = ${feetToMeter()} meters
    `
    document.getElementById("volume-content").innerText = `
        ${userInputEl.value} meters = ${litersToGallons()} gallons | ${userInputEl.value} gallons = ${gallonsToLiters()} liters
    `
    document.getElementById("mass-content").innerText = `
        ${userInputEl.value} kilos = ${kilogramsToPounds()} pounds | ${userInputEl.value} pounds = ${poundsToKilograms()} kilos
    `
}

function meterToFeet() {
    return (
        userInputEl.value * conversionFactors.find(conversion =>
            conversion.metricUnit === measurements.METERS
        ).factor
    ).toFixed(2)
}

function feetToMeter() {
    return (
        userInputEl.value / conversionFactors.find(conversion =>
            conversion.imperialUnit === measurements.FEET
        ).factor
    ).toFixed(2)
}

function litersToGallons() {
    return (
        userInputEl.value * conversionFactors.find(conversion =>
            conversion.metricUnit === measurements.LITERS
        ).factor
    ).toFixed(2)
}

function gallonsToLiters() {
    return (
        userInputEl.value / conversionFactors.find(conversion =>
            conversion.imperialUnit === measurements.GALLONS
        ).factor
    ).toFixed(2)
}

function kilogramsToPounds() {
    return (
        userInputEl.value * conversionFactors.find(conversion =>
            conversion.metricUnit === measurements.KILOS
        ).factor
    ).toFixed(2)
}

function poundsToKilograms() {
    return (
        userInputEl.value / conversionFactors.find(conversion =>
            conversion.imperialUnit === measurements.POUNDS
        ).factor
    ).toFixed(2)
}

convertButton.addEventListener("click", () => {
    handleConvertButtonClick()
})
