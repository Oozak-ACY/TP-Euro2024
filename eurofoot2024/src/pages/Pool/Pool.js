import { PoolCard } from "../../components/PoolCard";
import logoEuro from "../../images/logo.png";
import footerImage from "../../images/bg.png";
import { ClickIcon } from "../../components/icons/ClickIcon";


export function Pool() {

  return (
    <div className="bg-[#143DDB] h-full">
      <div className="flex items-center justify-center">
        <img src={logoEuro} className="h-60" alt="logo euro" />
        <div className="text-center ml-5">
          <div className="text-5xl text-white font-bold tracking-wides">
            CHAPEAUX
          </div>
          <div className="text-7xl text-white font-bold tracking-widest">
            TIRAGE
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <PoolCard title="CHAPEAU 1"/>
        <PoolCard title="CHAPEAU 2"/>
        <PoolCard title="CHAPEAU 3"/>
      </div>
      <div
        className="bg-cover flex items-center justify-center"
        style={{ backgroundImage: `url(${footerImage})`, height: 320 }}
      >
        <a
          href="/match"
          className="p-3 bg-blue-500 rounded-lg text-gray-100 font-semibold text-lg flex"
        >
          <ClickIcon />
          <span className="ml-4">Générer le tirage au sort</span>
        </a>
      </div>
    </div>
  );
}
