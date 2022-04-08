import './App.css';
import axios from "axios";
import React, {useState, useEffect} from "react";


  

  
function App() {
  let available=0;
  const [dataapi, setData] = useState([]); 
   
  useEffect(() => {
    console.log("257");
  const url = "https://artisant.io/api/products";
    axios
    .get(
      url,
      {
        dataType: "json",
        "Access-Control-Allow-Origin": url,
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
      }
    )
    
    .then(res => {
      setData(res.data.data.products);
     })
    },[])
  
    function withdrawRemainder(){
      console.log(123)
           return setData(dataapi.filter(item => item.quantity_available >0))
           }
  
    return (
        <div className="App">
          <h1 className='content__title'>Explore</h1>
            <p>Buy and sell digital fashion NFT art</p>
            <input type="checkbox" onChange={withdrawRemainder}/>Вывести только товары которых остаток больше ноля
          <div className='content'>
          {dataapi.map((item) => (
            <div className='content__card'>
              <div className='content__imgProduct'>
                <div className='content__titleProduct'>
                {item.name}
                </div>
                </div>
              <div className='content__info'>
              <div>  
              available
              <p><b>1 of {item.quantity_available}</b></p>
              </div>
              <div className='content__price'>
              <div class="content__price-title">  
              price
              <p class="content__price">{item.initial_price}ETH</p>
              </div>
              </div>
              </div>
              </div>
          ))}
        </div>
        </div>
    )}
export default App;
