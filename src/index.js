import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app"
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter} from "react-router-dom";



ReactDOM.render(
  <HashRouter basename = "/">
    <App />
  </HashRouter>,
  document.getElementById('root')
);

//"dist": "echo econtechnicalresources.icu > build/CNAME"