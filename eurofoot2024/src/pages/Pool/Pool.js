import { PoolCard } from "../../components/PoolCard";
import logoEuro from "../../images/logo.png";
import footerImage from "../../images/bg.png";
import { ClickIcon } from "../../components/icons/ClickIcon";

const pool1 = [
  {
    name: "Italy",
    primary_color: "#3399FF",
    secondary_color: "#FFFFFF",
    fifa_ranking: 9,
    code: "it",
    hat: 4,
    playoff: null,
  },
  {
    name: "Germany",
    primary_color: "#FFFFFF",
    secondary_color: "#18222F",
    fifa_ranking: 16,
    code: "de",
    hat: 1,
    playoff: null,
  },
  {
    name: "Portugal",
    primary_color: "#E35169",
    secondary_color: "#2ECDA7",
    fifa_ranking: 6,
    code: "pt",
    hat: 1,
    playoff: null,
  },
  {
    name: "Spain",
    primary_color: "#E35169",
    secondary_color: "#FFC23B",
    fifa_ranking: 8,
    code: "es",
    hat: 1,
    playoff: null,
  },
  {
    name: "Belgium",
    primary_color: "#E35169",
    secondary_color: "#18222F",
    fifa_ranking: 5,
    code: "be",
    hat: 1,
    playoff: null,
  },
  {
    name: "England",
    primary_color: "#FFFFFF",
    secondary_color: "#E35169",
    fifa_ranking: 4,
    code: "gb-eng",
    hat: 1,
    playoff: null,
  },
  {
    name: "Hungary",
    primary_color: "#E35169",
    secondary_color: "#2ECDA7",
    fifa_ranking: 30,
    code: "hu",
    hat: 2,
    playoff: null,
  },
  {
    name: "Turkey",
    primary_color: "#E35169",
    secondary_color: "#FFFFFF",
    fifa_ranking: 38,
    code: "tr",
    hat: 2,
    playoff: null,
  },
  {
    name: "Romania",
    primary_color: "#FFC23B",
    secondary_color: "#005FFF",
    fifa_ranking: 48,
    code: "ro",
    hat: 2,
    playoff: null,
  },
  {
    name: "Denmark",
    primary_color: "#E35169",
    secondary_color: "#FFFFFF",
    fifa_ranking: 19,
    code: "dk",
    hat: 2,
    playoff: null,
  },
  {
    name: "Albania",
    primary_color: "#E35169",
    secondary_color: "#18222F",
    fifa_ranking: 59,
    code: "al",
    hat: 2,
    playoff: null,
  },
  {
    name: "Austria",
    primary_color: "#FFFFFF",
    secondary_color: "#18222F",
    fifa_ranking: 25,
    code: "at",
    hat: 2,
    playoff: null,
  },
  {
    name: "Netherlands",
    primary_color: "#FFA439",
    secondary_color: "#FFFFFF",
    fifa_ranking: 7,
    code: "nl",
    hat: 3,
    playoff: null,
  },
  {
    name: "Scotland",
    primary_color: "#000080",
    secondary_color: "#FFFFFF",
    fifa_ranking: 34,
    code: "gb-sct",
    hat: 3,
    playoff: null,
  },
  {
    name: "Croatia",
    primary_color: "#FFFFFF",
    secondary_color: "#E35169",
    fifa_ranking: 10,
    code: "hr",
    hat: 3,
    playoff: null,
  },
  {
    name: "Slovenia",
    primary_color: "#FFFFFF",
    secondary_color: "#E35169",
    fifa_ranking: 54,
    code: "si",
    hat: 3,
    playoff: null,
  },
  {
    name: "Slovakia",
    primary_color: "#FFFFFF",
    secondary_color: "#E35169",
    fifa_ranking: 50,
    code: "sk",
    hat: 3,
    playoff: null,
  },
  {
    name: "Czech",
    primary_color: "#E35169",
    secondary_color: "#0051FF",
    fifa_ranking: 41,
    code: "cz",
    hat: 3,
    playoff: null,
  },
  {
    name: "Serbia",
    primary_color: "#E35169",
    secondary_color: "#0026FF",
    fifa_ranking: 29,
    code: "rs",
    hat: 4,
    playoff: null,
  },
  {
    name: "Switzerland",
    primary_color: "#E35169",
    secondary_color: "#FFFFFF",
    fifa_ranking: 14,
    code: "ch",
    hat: 4,
    playoff: null,
  },
  {
    name: "Wales",
    primary_color: "#FFFFFF",
    secondary_color: "#09BB75",
    fifa_ranking: 28,
    code: "gb-wls",
    hat: 4,
    playoff: "A",
  },
  {
    name: "Finland",
    primary_color: "#FFFFFF",
    secondary_color: "#3399FF",
    fifa_ranking: 62,
    code: "fi",
    hat: 4,
    playoff: "A",
  },
  {
    name: "Poland",
    primary_color: "#FFFFFF",
    secondary_color: "#E35169",
    fifa_ranking: 31,
    code: "pl",
    hat: 4,
    playoff: "A",
  },
  {
    name: "Estonia",
    primary_color: "#FFFFFF",
    secondary_color: "#3399FF",
    fifa_ranking: 118,
    code: "ee",
    hat: 4,
    playoff: "A",
  },
  {
    name: "Bosnia Herzegovina",
    primary_color: "#FFC23B",
    secondary_color: "#3399FF",
    fifa_ranking: 63,
    code: "ba",
    hat: 4,
    playoff: "B",
  },
  {
    name: "Ukraine",
    primary_color: "#FFC23B",
    secondary_color: "#3399FF",
    fifa_ranking: 22,
    code: "ua",
    hat: 4,
    playoff: "B",
  },
  {
    name: "Israël",
    primary_color: "#FFFFFF",
    secondary_color: "#3399FF",
    fifa_ranking: 71,
    code: "il",
    hat: 4,
    playoff: "B",
  },
  {
    name: "Island",
    primary_color: "#272CFF",
    secondary_color: "#E35169",
    fifa_ranking: 67,
    code: "is",
    hat: 4,
    playoff: "B",
  },
  {
    name: "Georgia",
    primary_color: "#FFFFFF",
    secondary_color: "#E35169",
    fifa_ranking: 76,
    code: "ge",
    hat: 4,
    playoff: "C",
  },
  {
    name: "Luxembourg",
    primary_color: "#E35169",
    secondary_color: "#3399FF",
    fifa_ranking: 87,
    code: "lu",
    hat: 4,
    playoff: "C",
  },
  {
    name: "Greece",
    primary_color: "#3399FF",
    secondary_color: "#FFFFFF",
    fifa_ranking: 51,
    code: "gr",
    hat: 4,
    playoff: "C",
  },
  {
    name: "Kazakhstan",
    primary_color: "#FFC23B",
    secondary_color: "#3399FF",
    fifa_ranking: 98,
    code: "kz",
    hat: 4,
    playoff: "C",
  },
  {
    name: "France",
    primary_color: "#0000BA",
    secondary_color: "#E35169",
    fifa_ranking: 2,
    code: "fr",
    hat: 1,
    playoff: null,
  },
];

const chapeau1 = pool1.filter((team) => team.hat === 1);
const chapeau2 = pool1.filter((team) => team.hat === 2);
const chapeau3 = pool1.filter((team) => team.hat === 3);
const chapeau4 = pool1.filter(
  (team) => team.hat === 4 && team.playoff === null
);

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
        <PoolCard title="CHAPEAU 1" teams={chapeau1} />
        <PoolCard title="CHAPEAU 2" teams={chapeau2} />
        <PoolCard title="CHAPEAU 3" teams={chapeau3} />
        <PoolCard title="CHAPEAU 4" teams={chapeau4} />
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
