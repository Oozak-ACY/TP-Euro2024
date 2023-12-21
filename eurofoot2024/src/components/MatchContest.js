
import React from "react";
import { ClickIcon } from "../components/icons/ClickIcon";

export function MatchContest(team1, team2) {
    return (
<div className="flex just flex-col p-3 ">
    <div className="flex justify-between pl-10 pr-10">
        <div className="flex flex-col items-center mb-4">
            <div className="h-8 w-8 rounded-full bg-white"></div>
            <div className="text-white">Portugal</div>
        </div>
        <span className="text-white">VS</span>
        <div className="flex flex-col items-center mb-4">
            <div className="h-8 w-8 rounded-full bg-white"></div>
            <div className="text-white">France</div>
        </div>
    </div>
    <div
        className="bg-cover flex items-center justify-center"
        >
        <a
          href="/match"
          className="bg-blue-500 rounded-lg text-gray-100 font-semibold text-lg flex"
        >
          <span className="p-2">Simuler le match</span>
        </a>
      </div>
</div>
  );
}

        