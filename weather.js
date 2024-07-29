APIKEY = "470b95b731c840dd89b11457242007";
//http://api.weatherapi.com/v1/current.json?key=470b95b731c840dd89b11457242007&q=London&aqi=yes

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("city-name");
const country = document.getElementById("countryName");
const locTime = document.getElementById("loc-time");
const temp = document.getElementById("temp");

async function getData(APIKEY, cityInput) {
  const promise =
    await fetch(`http://api.weatherapi.com/v1/current.json?key=${APIKEY}&q=${cityInput}&aqi=yes
`);
  return await promise.json();
}
searchBtn.addEventListener("click", async () => {
  const input = cityInput.value;
  const result = await getData(APIKEY, input);
  cityName.innerText = `${result.location.name},${result.location.region}`;
  country.innerText = result.location.country;
  temp.innerText = result.current.temp_c;
  locTime.innerText = result.location.localtime;
});
