async function getWhether() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "My_API_KEY";
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London, uk&APPID=7a2c481ec1cc49e6bc6a7525eae6b1af';

    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        const whetherInfo = document.getElementById("weatherInfo");
        weatherInfo.textContent = 'Temperature in ${city}: ${data.main.temp}A^C';
    } catch (error) {
        console.error("Error fetching weather data: ",error);
     }
}
