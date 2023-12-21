import { MatchCard } from "../../components/MatchCard";
import logoEuro from "../../images/logo.png"
import footerImage from "../../images/bg.png"
import { ClickIcon } from "../../components/icons/ClickIcon";
import React, { useEffect, useState, useRef } from 'react';

export function Match() {

    const [data, setData] = useState([]);
    const [datatirage, setDataTirage] = useState([]);
    const [query, setQuery] = useState([]);
    const [groupes, setGroupes] = useState({
        groupeA: [],
        groupeB: [],
        groupeC: [],
        groupeD: [],
        groupeE: [],
        groupeF: []
    });


    useEffect(() => {
        fetch('http://localhost:3001/api/equipes')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    useEffect(() => {
        // On crée dictionnaire avec pour clé le nom de l'équipe et pour valeur le numéro du chapeau
        const equipes_dictionnary = {};
        data.forEach(item => {
            if (item.code && item.hat) {
                equipes_dictionnary[item.code] = item.hat;
            }
        });

        // On assigne chaque équipe dans la variable du chapeau correspondant
        const hat1 = [];
        const hat2 = [];
        const hat3 = [];
        const hat4 = [];

        Object.entries(equipes_dictionnary).forEach(([key, value]) => {
            switch(value) {
                case 1:
                    hat1.push(key);
                    break;
                case 2:
                    hat2.push(key);
                    break;
                case 3:
                    hat3.push(key);
                    break;
                case 4:
                    hat4.push(key);
                    break;
                default:
                    console.log("La valeur :", value, "n'existe pas comme numéro de chapeau.")
                    break;
            }
        });

        
        // On détermine les groupes
        const groupes = {"groupeA": [], "groupeB": [], "groupeC": [], "groupeD": [], "groupeE": [], "groupeF": []};
        const hats = [hat1,hat2,hat3,hat4];
        var indexAleatoire = 0;

        Object.values(groupes).forEach(groupe => {
            for (var i=0;i < hats.length;i++) {
                var nombre_equipes_hat = hat1.length;
                indexAleatoire = Math.floor(Math.random() * nombre_equipes_hat);
                groupe.push(hats[i][indexAleatoire]);
                hats[i].splice(indexAleatoire, 1);
            }

        });

        // On détermine les matchs
        var matchs = [];
        
        Object.entries(groupes).forEach(([key, value]) => {
            var temp_groupe1 = [...value];
            var temp_groupe2 = [...value];
            var groupe_matchs = [];
        
            for (var j = 0; j < temp_groupe1.length; j++) {
                for (var i = 0; i < temp_groupe2.length; i++) {
                    if (temp_groupe1[j] !== temp_groupe2[i]) {
                        groupe_matchs.push([temp_groupe1[j], temp_groupe2[i], key]);
                    }
                }
                let indexASupprimer = temp_groupe2.indexOf(temp_groupe1[j]);
                if (indexASupprimer !== -1) {
                    temp_groupe2.splice(indexASupprimer, 1);
                }
            }
            matchs.push(groupe_matchs);
        });

        var query = [];
        matchs.forEach(item => {
            if (item[0]) {
                item.forEach(ligne => {
                    query.push("INSERT INTO matchs VALUES('" + ligne[0] + "','" + ligne[1] + "','" + ligne[2] + "');"); 
                });
            }
        });
        console.log(matchs, "matchs juste avant l'appel api");
        setQuery(query);
    }, [data]); 
    
    


    
    // Appel de la route tirage pour inserer les données en bdd 
    useEffect(() => {
        const dataToSend = { query : query };
    
        fetch('http://localhost:3001/api/tirage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => response.json())
        .then(datatirage => {
            setTimeout(() =>{
                setDataTirage(datatirage);
            }, 1500);
            
        });
    }, [query]); 

    useEffect(() => {
        const newGroupes = {"groupeA": [], "groupeB": [], "groupeC": [], "groupeD": [], "groupeE": [], "groupeF": []};
        var groupeA = [];
        var groupeB = [];
        var groupeC = [];
        var groupeD = [];
        var groupeE = [];
        var groupeF = [];


        datatirage.forEach(match => {
            switch(match["groupe"]){
                case "groupeA":
                    newGroupes.groupeA.push(match);
                    break;
                case "groupeB":
                    newGroupes.groupeB.push(match);
                    break;
                case "groupeC":
                    newGroupes.groupeC.push(match);
                    break;
                case "groupeD":
                    newGroupes.groupeD.push(match);
                    break;
                case "groupeE":
                    newGroupes.groupeE.push(match);
                    break;
                case "groupeF":
                    newGroupes.groupeF.push(match);
                    break;
            }
        });
        setGroupes(newGroupes);
    }, [datatirage]); 
    
    

    return(
        <div className="bg-[#143DDB] h-full">
            <div className="flex items-center justify-center">
                <img src={logoEuro} className="h-60" alt="logo euro"/>
                <div className="text-center ml-5">
                    <div className="text-5xl text-white font-bold tracking-wides">PHASE DE</div>
                    <div className="text-7xl text-white font-bold tracking-widest">GROUPES</div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <MatchCard title="GROUPE A" matchs={groupes.groupeA}/>
                <MatchCard title="GROUPE B" matchs={groupes.groupeB}/>
                <MatchCard title="GROUPE C" matchs={groupes.groupeC}/>
                <MatchCard title="GROUPE D" matchs={groupes.groupeD}/>
                <MatchCard title="GROUPE E" matchs={groupes.groupeE}/>
                <MatchCard title="GROUPE F" matchs={groupes.groupeF}/>
                
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