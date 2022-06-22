import React, { useState, useEffect } from 'react'


const Weather = () => {

    const [City, setCity] = useState(null);
    const [Search, setSearch] = useState('');
    const [State, setState]  = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${Search}&units=metric&appid=53c3e1084d8075fb0a75aa835a46712d`;
            const response = await fetch(url);
            const responsejson = await response.json();
            setCity(responsejson.main);
            setState(responsejson.sys);
        };

        fetchData();
    }, [Search])

    return (
        <div className="container-md"  >
            <center>

                <div className="col-12 col-md-6 mt-5">
                    <div className="container">
                    <h1 className="text-white">Weather App</h1>

                        <div className="row">
                            <center>

                                <div className="col-12 col-md-6 mt-5">
                                    <input className="input"
                                        type="search"

                                        onChange={(event) => { setSearch(event.target.value) }}
                                    />
                                </div>
                            </center>

                        </div>



                        {!City ?

                            (<p className="text-white">No Data Exists!</p>)

                            : (

                                <>
                                    <div className="row">
                                        <center>

                                            <div className="col-12 col-md-6 mt-5  " >
                                                <span><i className="fa fa-street-view" aria-hidden="true"></i>
                                                    {Search} , {State.country}</span>
                                            </div>
                                        </center>

                                    </div>

                                    <div className="row">
                                        <center>

                                            <div className="col-12 col-md-6 mt-2  " >
                                                <div className="temp">
                                                    <h1>{City.temp} °C</h1>
                                                </div>
                                            </div>
                                        </center>

                                    </div>

                                
                <div className="row">
                            <center>
    
                                <div className="col-12 col-md-6 mt-2  " >
                                            <p className="text-white">Min Temp: {City.temp_min} °C | Max Temp: {City.temp_max} °C </p>
                                </div>
                            </center>
    
                        </div>


                                </>)
                        }

                    </div>

                </div>
            </center>
        </div>

    );
}

export default Weather;