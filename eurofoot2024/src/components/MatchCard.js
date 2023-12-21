import { MatchContest } from "../components/MatchContest";

export function MatchCard({ title }) {
  return (
    <div className="m-10">
      <div className="w-80 text-yellow-500 text-2xl bg-[#002B92] p-3 font-extrabold text-center">
        {title}
      </div>
      <div className="border border-[#002B92]">
        <MatchContest  />
        <MatchContest  />
        <MatchContest  />
        <MatchContest  />
      </div>
    </div>
  );
}
