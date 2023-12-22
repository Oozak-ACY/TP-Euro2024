import React from "react";
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../images/flags/4x3/", false, /\.(png|jpe?g|svg)$/)
);

export function ClassementCard({ title, resultats}) {
  return (
    <div className="m-10">
      <div className="w-80 text-yellow-500 text-2xl bg-[#002B92] p-3 font-extrabold text-center">
        {title}
      </div>
      <div className="border border-[#002B92]">
        {resultats.map((resultat, index) => {
          const equipe1Image = images.find((image) =>
          image.includes(`/${resultat.team}.`)
          );
        
          return(
            <div key={index} className="flex flex-col p-3">
              <div className="flex justify-between pl-10 pr-10">
                <div className="flex flex-col items-center mb-4">
                  <div className="h-8 w-8 bg-cover bg-center  rounded-full " style={{ backgroundImage: `url(${equipe1Image})` }}></div>
                </div>
                <div className="flex flex-col items-center mb-4">
                  
                  <div className="text-white">{resultat.team}</div>
                </div>
                <div className="flex flex-col items-center mb-4">
                  
                  <div className="text-white">{resultat.totalPoints}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
