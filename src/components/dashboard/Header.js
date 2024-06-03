import React from "react";
import { useEffect, useState } from "react";





const Header = () => {
  const [resData, setResData] = useState("")

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async() => {
    const data = await fetch("some-api-endpoints");
    const jsonData = await (data.json);
    console.log(jsonData);
    setResData(jsonData);
  }

  const { name, cusins, imd } = resData?.data?.cards[2]?.info;
  
  
  return (
     resData === null  ? 
      <div>No Data Found</div>
      : <div>
        Hello {name}
        <div>{ cusins}</div>
        <div>{ imd}</div>
        <ul>
          {resData.map((res) =>
            <li key={res.name}>{ res.name}</li>
            )}
        </ul>
      </div>
    
  );
};

export default Header;
