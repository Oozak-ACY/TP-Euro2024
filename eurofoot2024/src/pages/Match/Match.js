import { MatchCard } from "../../components/MatchCard";
import logoEuro from "../../images/logo.png"
import footerImage from "../../images/bg.png"
import { ClickIcon } from "../../components/icons/ClickIcon";

export function Match() {
    return(
        <div className="bg-[#143DDB] h-full">
            <div className="flex items-center justify-center">
                <img src={logoEuro} className="h-60" alt="logo euro"/>
                <div className="text-center ml-5">
                    <div className="text-5xl text-white font-bold tracking-wides">MATCH</div>
                    <div className="text-7xl text-white font-bold tracking-widest">DUELS</div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <MatchCard title="MATCH 1" team1="France" team2="Portugal"/>
                <MatchCard title="MATCH 2" team1="France" team2="Portugal"/>
                <MatchCard title="MATCH 3" team1="France" team2="Portugal"/>
                <MatchCard title="MATCH 4" team1="France" team2="Portugal"/>
            </div>
            <div className="bg-cover flex items-center justify-center" style={{ backgroundImage: `url(${footerImage})` , height: 328}}>
                <button className="p-3 bg-blue-500 rounded-lg text-gray-100 font-semibold text-lg flex">
                    <ClickIcon/>
                <span className="ml-4">Générer le tirage au sort</span>
                </button>
            </div>
        </div>
    )
}