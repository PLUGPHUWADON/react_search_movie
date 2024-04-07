import { useState } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { createBrowserRouter,RouterProvider,Route,Link } from 'react-router-dom';
import Item from './component/item';
import data from "./assets/data.json";

function App() {
  const [datasearch, setdatasearch] = useState(data);
  let arr = [...data];
  
  const search = (event) => {
    arr = [];
    data.filter(e => {
        if (e.name.toLowerCase().includes(event.target.value.toLowerCase())) {
          arr.push(e);
        }
    });
    setdatasearch(arr);
  }

  return (
    <>
      <main className='main'>
          <form action="">
              <input className="search" type="text" onInput={search} placeholder='This is search' />
          </form>
          <section className="content">
              {datasearch.map((e,key) => (
                <Link to="/movie" key={key} state={e}>
                <Item key={key} data={e} />
                </Link>
              ))}
          </section>
      </main>
    </>
  )
}

export default App;
