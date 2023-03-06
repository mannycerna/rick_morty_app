import React from 'react';
import {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

//Components

// import Search from "./components/Search/Search";
// import Filter from "./components/Filter/Filter";
// import Navbar from "./components/Navbar/Navbar";

import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";


function App() {

    let [pageNumber, updatePageNumber] = useState(1);
    let [getData, updateGetData] = useState([]);
    let {info, results} = getData;

    // const [recordsPerPage] = useState(10);

    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`


useEffect(() => {
    (async function () {
        let data = await fetch(api).then((res) => res.json());
        console.log(data);//displays in browser consosle to test api results
        updateGetData(data);
    })();
}, [api]);

return (
<div className="App">
  <h1 className="text-center mb-3">Rick & Morty Characters</h1>
  <div className="container">
  <div className="row">
    {/* Filter component will be placed here */}
    <Card results={results} />


    <div className="col-lg-8 col-12">
      <div className="row">
        {/* Card component will be placed here */}
      </div>
    </div>
  </div>
  </div>
  <Pagination
info={info}
pageNumber={pageNumber}
updatePageNumber={updatePageNumber}
/>
</div>


);
}

 export default  App;
