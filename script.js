//Variáveis e seleção de elementos 
const apikey = "2402925ee7aa42fec96b81a6dfd3a483";

const cityInput = document.querySelector("#input_clima");
const searchBtn = document.querySelector(".addBtn");

const cityElement = document.querySelector(".temp_escrita");
const tempElement = document.querySelector("#temperatura span");
const descElement = document.querySelector("#temp_escrita");
console.log(descElement.class
    
    
    
    );


//Funções 
const getWeatherData = async (city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    return data;
};

const showWeatherData = async (city) => {
    const data =  await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
};


// Eventos 

searchBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city);
});

showWeatherData('São Paulo');

