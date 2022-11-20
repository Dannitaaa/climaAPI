import React from 'react';

const WeatherInfo = props =>{
    console.log(props)
    return(
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ?
                <div className="card card-body">
                    <p>
                        Location:{props.city},{props.country}
                    </p>
                    <p>
                        Temperature:{props.temperature} °C, {props.description}
                    </p>
                    <p>
                        Humidity:{props.humidity}
                    </p>
                    <p>
                        Wind Speed:{props.wind_speed}
                    </p>
                </div>
                :
                <div className="card car-body text-center p-5">
                    <p>No hay una petición aún</p>

                </div>
            }
            
        </div>
        
    )
}

export default WeatherInfo;