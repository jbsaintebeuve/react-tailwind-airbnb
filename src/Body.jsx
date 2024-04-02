import { useEffect, useState } from "react";
import Description from "./Description";
import ListEquipement from "./ListEquipement";
import KeyFeatures from "./KeyFeatures";
import DisplayPrice from "./DisplayPrice";
import Reviews from "./Reviews";
import Calendar from "./Calendar";

const FlatElements = ["6 voyageurs","1 chambre","4 lits","1 salle de bain"]
const FlatRating = ["4,80", 25]

function Body({ setFixed }){
    const [elements, setElements] = useState([]);
    const [score, setScore] = useState([]);

    useEffect(() => {
        setElements(FlatElements.map((element, index) => <li key={index}>{element} {index !== FlatElements.length - 1 && <span className="px-1 text-xs">•</span>}</li>));
        setScore(FlatRating.map((score, index) => <li className={index === FlatRating.length - 1 ? "underline" : ""} key={index}>{score} {index === FlatRating.length - 1 ? (score > 1 ?  "commentaires" : "commentaire") : ""} {index !== FlatRating.length - 1 && <span className="px-1 text-xs">•</span>}</li>));
    }, []);

    return(<>
    <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
            <div className="flex mx-auto flex-col py-6">
                <h1 className="font-semibold text-2xl">Logement entier : appartement - Allos, France</h1>
                <ol className="flex list-none">{elements}</ol>
                <ol className="flex list-none font-bold">{score}</ol>
            </div>
            <div className="border-b"></div>
            <div className="flex py-6 align-middle h-15">
                <img className="h-12 rounded-full mr-5" src="https://a0.muscache.com/im/pictures/user/ec73a19e-e545-4488-bf3a-79e6ea7bdc36.jpg?im_w=240"></img>
                <div>
                    <p className="font-semibold text-lg">Hôte: Stéphanie</p>
                    <p className="text-gray-500">Superhôte • Hôte depuis 1 an</p>
                </div>
            </div>
            <div className="border-b"></div>
            <KeyFeatures />
            <div className="border-b"></div>
            <Description />
            <div className="border-b"></div>
            <ListEquipement />
            <div className="border-b"></div>
            <Calendar />
            <div className="border-b"></div>
        </div>
        <div className="col-start-3">
            <DisplayPrice />
        </div>
    </div>
    <Reviews score={score} setFixed={setFixed} />
    <div className="border-b"></div>
    <p>TEST</p>
        
        </>)
}
export default Body;