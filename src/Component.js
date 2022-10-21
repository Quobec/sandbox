import React,{ useEffect, useState} from "react";
import axios from "axios";

function Component() {

    const [data, setData] = useState([]);
    useEffect( () => { 
        axios.get(`http://localhost/axios.php`)
            .then(res => {
                setData(res.data);
            }
        )
    },
    []);
    
    const lista = data.map((currEle) =>
    <p key={currEle.toString()}>{currEle}</p>
    );

    lista.map((curr) => console.log(curr.key)); 

  return (
    <>
    {lista}
    </>
  );
}

export default Component;