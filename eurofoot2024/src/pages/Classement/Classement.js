import { ClassementCard } from "../../components/ClassementCard";
import logoEuro from "../../images/logo.png"
import footerImage from "../../images/bg.png"
import { ClickIcon } from "../../components/icons/ClickIcon";
import React, { useEffect, useState, useRef } from 'react';

export function Classement() {
    const [groupStandings, setGroupStandings] = useState([]);
    const [groupes, setGroupes] = useState({
        groupeA: [],
        groupeB: [],
        groupeC: [],
        groupeD: [],
        groupeE: [],
        groupeF: []
    });
    useEffect(() => {
        fetch("http://localhost:3001/api/groupstandings")
        .then((response) => response.json())
        .then((data) => setGroupStandings(data));
    }, []);


    useEffect(() => {
        const newGroupes = {"groupeA": [], "groupeB": [], "groupeC": [], "groupeD": [], "groupeE": [], "groupeF": []};
        var groupeA = [];
        var groupeB = [];
        var groupeC = [];
        var groupeD = [];
        var groupeE = [];
        var groupeF = [];


        groupStandings.forEach(match => {
            switch(match["phase"]){
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
    }, [groupStandings]);
    return(
        <div className="bg-[#143DDB] h-full">
            <div className="flex items-center justify-center">
                <img src={logoEuro} className="h-60" alt="logo euro"/>
                <div className="text-center ml-5">
                    <div className="text-5xl text-white font-bold tracking-wides">CLASSEMENT DES</div>
                    <div className="text-7xl text-white font-bold tracking-widest">GROUPES</div>
                </div>
            </div>
            <div className="flex flex-wrap items-center justify-center">
                <ClassementCard title="GROUPE A" resultats={groupes.groupeA}/>
                <ClassementCard title="GROUPE B" resultats={groupes.groupeB}/>
                <ClassementCard title="GROUPE C" resultats={groupes.groupeC}/>
                <ClassementCard title="GROUPE D" resultats={groupes.groupeD}/>
                <ClassementCard title="GROUPE E" resultats={groupes.groupeE}/>
                <ClassementCard title="GROUPE F" resultats={groupes.groupeF}/>
                
            </div>
            <div className="bg-cover flex items-center justify-center" style={{ backgroundImage: `url(${footerImage})` , height: 328}}>
                <a
                    href="/classement"
                    className="p-3 bg-blue-500 rounded-lg text-gray-100 font-semibold text-lg flex"
                    >
                    <ClickIcon />
                    
                    <span className="ml-4">Voir le classement des équipes par groupe</span>
                </a>
            </div>
        </div>
    )
    
}