import "./style.css";
import { getWeather } from "./weather";

getWeather(10.12, 10.12, Intl.DateTimeFormat().resolvedOptions().timeZone).then(
  (data) => {
    console.log(data);
  }
);
