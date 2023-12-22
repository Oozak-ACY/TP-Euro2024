// Frontend - App.js (ou votre composant principal)

import React, { useEffect, useState } from "react";

export function Tirage() {
  const [groupStandings, setGroupStandings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/groupstandings")
      .then((response) => response.json())
      .then((data) => setGroupStandings(data));
  }, []);

  const groupedStandings = groupStandings.reduce((acc, team) => {
    if (!acc[team.phase]) {
      acc[team.phase] = [];
    }
    acc[team.phase].push(team);
    return acc;
  }, {});

  return (
    <div>
      <h1>Classement par groupe</h1>
      <div className="flex">
        {Object.entries(groupedStandings).map(([phase, teams]) => (
          <div key={phase} className="m-10">
            <h2>{` ${phase}`}</h2>
            {teams.map((team, index) => (
              <div className="flex">
                <p className="font-bold">{team.team}</p>
                <p className="ml-5">{team.totalPoints}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
