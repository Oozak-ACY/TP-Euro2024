export function MatchCard({ title, team1, team2 }) {
  return (
    <div className="m-10">
      <div className="w-80 text-yellow-500 text-2xl bg-[#002B92] p-3 font-extrabold text-center">
        {title}
      </div>
      <div className="border border-[#002B92]">
        <div className="flex just flex-col p-3 ">
          <div className="flex justify-between pl-10 pr-10">
            <div className="flex flex-col items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-white"></div>
              <div className="text-white">{team1}</div>
            </div>
            <span className="text-white">VS</span>
            <div className="flex flex-col items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-white"></div>
              <div className="text-white">{team2}</div>
            </div>
          </div>
        </div>
        <div className="flex just flex-col p-3 ">
          <div className="flex justify-between pl-10 pr-10">
            <div className="flex flex-col items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-white"></div>
              <div className="text-white">{team1}</div>
            </div>
            <span className="text-white">VS</span>
            <div className="flex flex-col items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-white"></div>
              <div className="text-white">{team2}</div>
            </div>
          </div>
        </div>
        <div className="flex just flex-col p-3 ">
          <div className="flex justify-between pl-10 pr-10">
            <div className="flex flex-col items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-white"></div>
              <div className="text-white">{team1}</div>
            </div>
            <span className="text-white">VS</span>
            <div className="flex flex-col items-center mb-4">
              <div className="h-8 w-8 rounded-full bg-white"></div>
              <div className="text-white">{team2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
