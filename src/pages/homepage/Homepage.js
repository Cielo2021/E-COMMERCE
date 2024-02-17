import { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import axios from "axios";
import { Cartcontext } from "../../context/Context";

const Homepage = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setdata(response.data);
      console.log(response.data); // Logging the fetched data instead of 'data' state
    };
    
    fetchData();
  }, []); // Empty dependency array to run the effect only once
  
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  return (
    <div className="Home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>${item.price}</h3>
            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
