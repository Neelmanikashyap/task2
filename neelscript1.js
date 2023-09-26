function convertToFar() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('result').textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid temperature.';
    }
}

function convertToCel() {
    const fahrenheit = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('result').textContent = `${fahrenheit}°F is equal to ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById('result').textContent = 'Please enter a valid temperature.';
    }
}
