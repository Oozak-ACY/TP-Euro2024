import React from "react";
const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../images/flags/4x3/", false, /\.(png|jpe?g|svg)$/)
);

export function MatchCard({ title, matchs, equipes}) {
  return (
    <div className="m-10">
      <div className="w-80 text-yellow-500 text-2xl bg-[#002B92] p-3 font-extrabold text-center">
        {title}
      </div>
      <div className="border border-[#002B92]">
        {matchs.map((match, index) => {
          const equipe1Image = images.find((image) =>
          image.includes(`/${match.code_equipe1}.`)
          );
          const equipe2Image = images.find((image) =>
          image.includes(`/${match.code_equipe2}.`)
          );
        
          return(
            <div key={index} className="flex flex-col p-3">
              <div className="flex justify-between pl-10 pr-10">
                <div className="flex flex-col items-center mb-4">
                  <div className="h-8 w-8 bg-cover bg-center  rounded-full " style={{ backgroundImage: `url(${equipe1Image})` }}></div>
                  <div className="text-white">{match["nom_equipe1"]}</div>
                </div>
                <span className="text-white">VS</span>
                <div className="flex flex-col items-center mb-4">
                  <div className="h-8 w-8 bg-cover bg-center  rounded-full " style={{ backgroundImage: `url(${equipe2Image})` }}></div>
                  <div className="text-white">{match["nom_equipe2"]}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
