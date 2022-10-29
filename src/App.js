import React, { useRef, useState } from "react";
import { getWeather } from "./api/fetchWeather";
import WeatherCard from "./components/weatherCard";
import Sun from "./images/sun.webp";
import Moon from "./images/moon.webp";

function App() {

  const inputRef = useRef();
  const [darkTheme, setDark] = useState(false);
  const [alertMsg, setAlert] = useState('');
  const [api, setData] = useState({ data: "", state: false });

  async function handleSubmit(e) {
    e.preventDefault();
    const cityName = inputRef.current.value;
    if (!cityName) {
      return;
    }
    await getWeather(cityName).then((res) => {
      if (alertMsg) {
        setAlert('');
      }
      setData({ data: res, state: true });
    }).catch((err) => {
      setAlert(err.message);
    });
  }

  const toggleTheme = () => {
    setDark(!darkTheme);
  };

  return (
    <div className={`min-vh-100 ${darkTheme ? 'bg-secondary' : 'bg-light'}`}>
      <header>
        {alertMsg && (
          <div class="alert alert-danger text-capitalize" role="alert">
            {alertMsg}
          </div>
        )}
        <nav
          className={`navbar navbar-expand-lg ${darkTheme ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
          <div className={"container sm"}>
            <h1 className={"navbar-brand"} style={{ fontSize: "2rem" }}>
              {"GetWeather"}
            </h1>
            <img
              src={darkTheme ? Sun : Moon}
              alt={"theme-toggler"}
              height={"32px"}
              width={"32px"}
              onClick={toggleTheme}
              style={{ cursor: "pointer" }}
            />
          </div>
        </nav>
      </header>
      <main className="h-100">
        <div
          className={`container-fluid py-4`}>
          <div className={"container sm"}>
            <form onSubmit={handleSubmit}>
              <div className={"form-group mb-3"}>
                <input
                  type={"text"}
                  ref={inputRef}
                  className={"form-control form-control-lg"}
                  placeholder={"Enter city"}
                />
              </div>
              <button
                className={`btn btn-lg ${darkTheme ? 'btn-outline-dark' : 'btn-outline-primary'}`}
                type={"submit"}>
                {"Get Weather"}
              </button>
            </form>
          </div>
          <div
            className={"container sm mt-3"}
            style={{
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
            {api.state && <WeatherCard data={api.data} />}
          </div>
        </div>
      </main>
      <footer className="text-center bottom-0 w-100 fs-4">
        Made with <span style={{fontSize: '150%', color: "red"}}>&hearts;</span> by Dushyant
      </footer>
    </div>
  );
}

export default App;
