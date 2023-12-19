import React from "react";

const importAll = (r) => r.keys().map(r);
const images = importAll(
  require.context("../images/flags/4x3/", false, /\.(png|jpe?g|svg)$/)
);

export function PoolCard({ title, teams }) {
  return (
    <div className="m-10">
      <div className="w-80 text-yellow-500 text-2xl bg-[#002B92] p-3 font-extrabold text-center">
        {title}
      </div>
      <div className="border border-1 border-blue-600 flex flex-col p-3 ">
        {teams.map((team, index) => {
          const teamImage = images.find((image) =>
            image.includes(`/${team.code}.`)
          );

          return (
            <div className="flex items-center mb-4" key={index}>
              <div
                className="h-10 w-10 bg-cover bg-center  rounded-full "
                style={{ backgroundImage: `url(${teamImage})` }}
              ></div>
              <div className="text-white ml-4">{team.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
