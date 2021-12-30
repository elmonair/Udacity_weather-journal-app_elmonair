/* Global Variables */
const generateBtn = document.querySelector('#generate');
const temp = document.getElementById('temp');
const date = document.getElementById('date');
const feelings = document.getElementById('content');
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = '22d7980c9ec957151364a471a0fbeb99';
// Event listener to add function to existing HTML DOM element
const getTempData = async (postalCode) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?zip=${postalCode}&appid=${apiKey}&units=imperial`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const temp = data.main.temp;
    console.log(temp);
    return temp;
  } catch (err) {
    console.log(err);
  }
};

getTempData(11766);
