import React from "react";

const WeatherForm = props =>{
    return(
        <div className="card card-body">
            <div>
                <h2 className="text text-center">Bienvenido</h2>
                <p className="text text-center">Ingresa el nombre de una ciudad y su pais de origen para mostrar sus datos climaticos</p>
            </div>
            <form onSubmit={props.getWeather}>
                <div className="form-group">
                    <input type="text" name="city" placeholder="Nombre de la ciudad" className="form-control" autoFocus></input>
                </div>
                <div className="form-group">
                    <input type="text" name="country" placeholder="Nombre del pais" className="form-control"></input>
                </div>
                <button className="btn btn-success btn-block">
                    Obtener clima
                </button>
            </form>
        </div>
    )
}

export default WeatherForm;