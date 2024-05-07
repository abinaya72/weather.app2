


function checkWeather() {
 
    var cityName = document.getElementById("cityname").value;
    var selectdate = document.getElementById("dateinput").value;
    
    
    var apiKey = '97b5704e275440e5e558cfd4d4d423cc';
   
    if(selectdate=="")
    {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
        
            var temperature = data.main.temp;
            var description = data.weather[0].description;
            

            document.getElementById("temperature").innerText = temperature + '°C';
            document.getElementById("cityname1").innerText =cityname.value;
            document.getElementById("description").innerText ="Weather : "+ description;
        })
        .catch(error => {
            
            document.getElementById("temperature").innerText='Error', error;
        });
}




   
      
    
    else{
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
        
            var weatherData = data.list.find(entry => {
                var entrydate= entry.dt_txt.split(' ')[0].split('-');
                var sdp=selectdate.split('-');
                
                return(
                    entrydate[1] === sdp[1] &&
                    entrydate[2] === sdp[2] &&
                    entrydate[0] === sdp[0] 
                );

            });

            if(weatherData)
            {
            var temperature = weatherData.main.temp;
            var description = weatherData.weather[0].description;

            

            document.getElementById("temperature").innerText = temperature + '°C';
            document.getElementById("cityname1").innerText =cityname.value;
            document.getElementById("description").innerText ="Weather : "+ description;


        }
        else{
            document.getElementById("temperature").innerText = "not available";

        }
    })
        .catch(error => {
            
            document.getElementById("temperature").innerText='Error', error;
        });

    }
}







           
            
