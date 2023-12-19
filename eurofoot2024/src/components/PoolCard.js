export function PoolCard({ title, teams }) {
  return (
    <div className="m-10">
      <div className="w-80 text-yellow-500 text-2xl bg-[#002B92] p-3 font-extrabold text-center">
        {title}
      </div>
      <div className="border border-1 border-blue-600 flex flex-col p-3 ">
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-white"></div>
          <div className="text-white ml-4">{teams}</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-white"></div>
          <div className="text-white ml-4">{teams}</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-white"></div>
          <div className="text-white ml-4">{teams}</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-white"></div>
          <div className="text-white ml-4">{teams}</div>
        </div>
        <div className="flex items-center mb-4">
          <div className="h-8 w-8 rounded-full bg-white"></div>
          <div className="text-white ml-4">{teams}</div>
        </div>
      </div>
    </div>
  );
}
