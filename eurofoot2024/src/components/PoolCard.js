import React, { useState, useEffect } from "react";

const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../images/flags/4x3/", false, /\.(png|jpe?g|svg)$/)
);

export function PoolCard({ title, data }) {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    // Effect function
    switch(title){
      case title = "CHAPEAU 1":
      fetch("http://localhost:3001/api/hat1").then((response) => response.json()).then((data) => {setTeams(data); });
        break;
    case title = "CHAPEAU 2":
        fetch("http://localhost:3001/api/hat2").then((response) => response.json()).then((data) => {setTeams(data); });
        break;
      case title = "CHAPEAU 3":
        fetch("http://localhost:3001/api/hat3").then((response) => response.json()).then((data) => { setTeams(data); });
        break;
        default: 
        return "null";
        break;
    }
    
      
  }, []);

  return (
    <div className="m-10">
      <div className="w-80 text-yellow-500 text-2xl bg-[#002B92] p-3 font-extrabold text-center">
        {title}
      </div>
      <div className="border border-1 border-blue-600 flex flex-col p-3 ">
        {teams.map((team) => (
          <div
            key={team.id}
            className="flex items-center mb-4"
          >
            <div
              className="h-10 w-10 bg-cover bg-center  rounded-full "
              style={{ backgroundImage: `url(${images.find(
                (image) => image.includes(`/${team.code}.`)
              )})` }}
            ></div>
            <div className="text-white ml-4">{team.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}