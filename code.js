function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success)
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  
}
function success(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;

    const apiKey='2282a9794ad14a0083e123839232506';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}`;

    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
      const location=data.location.name;
      const weather=data.current.temp_c;

      document.getElementById("weather").innerHTML=`${weather}°C`;
      document.getElementById("location").innerHTML=`Location:${location}`;
    })
}

getLocation()