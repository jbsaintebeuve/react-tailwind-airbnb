import { useEffect, useState } from "react";

import FlatEquipement from './flatEquipement.json';

function ListEquipement(){

    const featuredEquipements = FlatEquipement.filter(item => item.feature);
    const groupedEquipements = FlatEquipement.reduce((acc, curr) => {
        if (!acc[curr.category]) {
          acc[curr.category] = [];
        }
        acc[curr.category].push(curr);
        return acc;
      }, {});

    const [showFullEquipement, setShowFullEquipement] = useState(false);

    const toggleShowFullEquipement = () => {
        setShowFullEquipement(!showFullEquipement);
      };

    return(<>
        <div className="flex flex-col mx-auto py-6">
            <h4 className="text-2xl font-semibold mb-4">Ce que propose ce logement</h4>
            <ol className="flex flex-wrap list-none text-lg">{featuredEquipements.map((element, index) => <li className={element.bool === false ? "line-through my-2 w-1/2" : "my-2 w-1/2"} key={index}>{element.text}</li>)}</ol>
            <button className="px-6 py-3 border-solid border-gray-700 border font-semibold rounded-lg max-w-fit text-lg my-6" onClick={toggleShowFullEquipement}>Afficher les {FlatEquipement.length} équipements</button>
        </div>

        {showFullEquipement && (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div onClick={toggleShowFullEquipement} className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity cursor-pointer z-10"></div>
            <div className="fixed inset-0 z-50 w-max overflow-y-auto mx-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl">
                            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <div className="flex justify-between">
                                        <h4 className="text-2xl font-semibold mb-4">Ce que propose ce logement</h4>
                                       <div className="hover:bg-gray-100 hover:cursor-pointer flex justify-center items-center rounded-full h-10 w-10 flex-col" onClick={toggleShowFullEquipement}>
                                            <p className="px-5 font-bold">X</p>
                                        </div>
                                    </div>
                                    {Object.entries(groupedEquipements).map(([category, items]) => (
                                        <div key={category}>
                                        <h2 className="text-xl font-medium my-4">{category}</h2>
                                        <ul>
                                            {items.map((item, index) => (
                                            <li className="my-2" key={index}>
                                                <p className={item.bool === false ? "line-through" : null}>{item.text}</p>
                                                {item.subtext && <p className="text-sm text-gray-500">{item.subtext}</p>}
                                                <div className="border-b my-2"></div>
                                            </li>
                                            
                                            ))}
                                        </ul>
                                        </div>
                                    ))}
                                    </div>
                                </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
       ) }
        </>
    )
}
export default ListEquipement;