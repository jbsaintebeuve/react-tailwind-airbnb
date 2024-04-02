import { useEffect, useState } from 'react';
import ReviewsData from './reviews.json';
import Stars from './Stars';
import CountByNote from './CountByNote';

function calculateAveragesCategories(data) {
    const totals = {
      proprete: 0,
      precision: 0,
      arrivee: 0,
      communication: 0,
      emplacement: 0,
      qualitePrix: 0
    };
  
    data.forEach(record => {
      Object.keys(record.score).forEach(category => {
        totals[category] += record.score[category];
      });
    });
  
    const numRecords = data.length;
    const averages = {};
    Object.keys(totals).forEach(category => {
        let average = totals[category] / numRecords;
      averages[category] = average.toFixed(1)
    });
  
    return averages;
  }

  function calculateClientAverage(data){
    let allRatesIndv = []

    Object.values(data).forEach(user => {
        let totals = 0;
        let numCategories = 0;

        Object.values(user.score).forEach((score => {
            totals += score
            numCategories++
        }))
        let average = Math.ceil(totals / numCategories);
        allRatesIndv.push(average)
    })
    return allRatesIndv
  }

  function sliceText(text, n){
    return (checkLengthText(text, n)) ? text.slice(0, n) + '...' : text;
  } 
  function checkLengthText(text, n){
    return (text.length > n) ? true : false
  }

const Ratings = calculateAveragesCategories(ReviewsData)
const firstSixReviews = ReviewsData.slice(0,6)

function Reviews({score, setFixed}){

    const [ratesClient, setRatesClient] = useState(calculateClientAverage(ReviewsData))
    const [countsByNote, setCountsByNote] = useState(Array(5).fill(0)); 
    const [rateFlat, setRateFlat] = useState(0)
    const [showFullReviews, setShowFullReviews] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(() => {
        setSearchResults(ReviewsData)
    }, [])

    useEffect(() => {
        const averageRate = ratesClient.reduce((acc, curr) => acc + curr, 0) / ratesClient.length
        setRateFlat(averageRate) 

        const counts = Array(5).fill(0);
        ratesClient.forEach(rate => {
            let index = 4 - (Math.abs(rate) - 1)
            counts[index]++
        })
        setCountsByNote(counts)
        
    },[ratesClient])

    const toggleShowFullReviews = () => {
        setShowFullReviews(!showFullReviews);
        setFixed(!showFullReviews)
      };

    useEffect(() => {
        const filteredResults = ReviewsData.filter(review => review.text.includes(searchTerm));
        setSearchResults(filteredResults)
    }, [searchTerm])

    return(<>
        <div className="flex flex-col mx-auto py-3">
            <ol className="flex list-none font-bold my-5 text-2xl">
                <li className="flex flex-row items-center"><Stars fullStars="1" numStars="1" width="6" />{rateFlat}<span className="px-1 text-xs">•</span></li> 
                <li onClick={toggleShowFullReviews} className="underline cursor-pointer">{ReviewsData.length}  {ReviewsData.length > 1 ?  "commentaires" : "commentaire"}</li>
            </ol>
            <div className="grid grid-cols-7 gap-4 py-6 items-center">
                <div className="border-r pr-4">
                    <CountByNote reviews={countsByNote} nbrClients={ratesClient.length}/>
                </div>
                <div className="flex flex-col border-r font-semibold">
                    <p className="text-sm">Propreté</p>
                    <p className="text-xl">{Ratings["proprete"]}</p>
                </div>
                <div className="flex flex-col border-r font-semibold">
                    <p className="text-sm">Précision</p>
                    <p className="text-xl">{Ratings["precision"]}</p>
                </div>
                <div className="flex flex-col border-r font-semibold">
                    <p className="text-sm">Arrivée</p>
                    <p className="text-xl">{Ratings["arrivee"]}</p>
                </div>
                <div className="flex flex-col border-r font-semibold">
                    <p className="text-sm">Communication</p>
                    <p className="text-xl">{Ratings["communication"]}</p>
                </div>
                <div className="flex flex-col border-r font-semibold">
                    <p className="text-sm">Emplacement</p>
                    <p className="text-xl">{Ratings["emplacement"]}</p>
                </div>
                <div className="flex flex-col font-semibold">
                    <p className="text-sm">Qualité-prix</p>
                    <p className="text-xl">{Ratings["qualitePrix"]}</p>
                </div>
            </div>
            
        </div>
        <div className="border-b"></div>
        <div className="grid  grid-cols-2 gap-4 py-6">
            {firstSixReviews.map((item, index) => (
                <div className='flex flex-col my-4' key={index}>
                    <div className="flex flex-row mb-1">
                        <div className="w-10 h-10 bg-red-400 rounded-full flex justify-center items-center mr-2">
                            <p className="text-white font-bold">{item.name.slice(0,1)}</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='font-medium'>{item.name}</p>
                            <p className="text-sm">{item.location}</p>
                        </div>
                    </div>
                    <ol className="flex list-none text-sm my-2">
                        <li className="font-semibold flex flex-row align-middle items-center">
                         {<Stars fullStars={ratesClient[index]} numStars="5" width="2" />}
                        <span className="px-1 text-xs">•</span></li>
                        <li className="font-semibold">Le {item.date}<span className="px-1 text-xs">•</span></li>
                        <li className="font-light text-gray-400">Séjour de {item.duration} {item.duration > 1 ? "nuits" : "nuit"}</li>
                    </ol>
                    <div className="flex flex-col ">
                        <p className="mb-2">{sliceText(item.text, 150)}</p>
                        {(checkLengthText(item.text, 150)) && (
                            <p onClick={toggleShowFullReviews} className="underline font-medium cursor-pointer max-w-fit">En savoir plus</p>)
                        }
                    </div>
                </div>

            ))}
        </div>
        <button className="px-6 py-3 border-solid border-gray-700 border font-semibold rounded-lg max-w-fit text-lg my-6" onClick={toggleShowFullReviews}>Afficher les {ReviewsData.length} commentaires</button>

        {showFullReviews && (
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div onClick={toggleShowFullReviews} className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity cursor-pointer z-10"></div>
            <div className="fixed inset-0 z-50 mx-auto w-fit">
                    <div className="flex flex-col items-end justify-center p-4 text-center sm:items-center sm:p-0 h-full">
                        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 min:min-w-64 w-full sm:max-w-4xl md:max-w-5xl h-full">
                            <div className="bg-white px-4 pb-4 pt-4 sm:p-10 sm:pb-4 h-full">
                                <div className="sm:flex sm:items-start h-full">
                                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full h-full">
                                        <div className="flex flex-row-reverse">
                                            <div className="hover:bg-gray-100 hover:cursor-pointer flex rounded-full h-10 w-10 justify-center items-center" onClick={toggleShowFullReviews}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-6 h-6 stroke-black">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-3 gap-8 w-full flow-hidden h-full">
                                            <div className="flex flex-col col-span-1 w-full sticky top-0 left-0">
                                                <div className="flex flex-row text-4xl items-center mb-4">
                                                    <Stars fullStars="1" numStars="1" width="8" />
                                                    <p className='font-semibold'>{rateFlat}</p>
                                                </div>
                                                <CountByNote reviews={countsByNote} nbrClients={ratesClient.length}/>
                                                <div>
                                                    <div className="flex flex-row font-semibold justify-between items-center py-2">
                                                        <p className="">Propreté</p>
                                                        <p className="text-xs">{Ratings["proprete"]}</p>
                                                    </div>
                                                    <div className="border-b"></div>
                                                    <div className="flex flex-row font-semibold justify-between items-center py-2">
                                                        <p className="">Précision</p>
                                                        <p className="text-xs">{Ratings["precision"]}</p>
                                                    </div>
                                                    <div className="border-b"></div>
                                                    <div className="flex flex-row font-semibold justify-between items-center py-2">
                                                        <p className="">Arrivée</p>
                                                        <p className="text-xs">{Ratings["arrivee"]}</p>
                                                    </div>
                                                    <div className="border-b"></div>
                                                    <div className="flex flex-row font-semibold justify-between items-center py-2">
                                                        <p className="">Communication</p>
                                                        <p className="text-xs">{Ratings["communication"]}</p>
                                                    </div>
                                                    <div className="border-b"></div>
                                                    <div className="flex flex-row font-semibold justify-between items-center py-2">
                                                        <p className="">Emplacement</p>
                                                        <p className="text-xs">{Ratings["emplacement"]}</p>
                                                    </div>
                                                    <div className="border-b"></div>
                                                    <div className="flex flex-row font-semibold justify-between items-center py-2">
                                                        <p className="">Qualité-prix</p>
                                                        <p className="text-xs">{Ratings["qualitePrix"]}</p>
                                                    </div>
                                                    <div className="border-b"></div>
                                                </div>
                                            </div>
                                            <div className="col-span-2 flex flex-col h-full overflow-y-scroll">
                                                <p className="text-2xl font-semibold">{searchResults.length}  {ReviewsData.length > 1 ?  "commentaires" : "commentaire"}</p>
                                                <input value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)} className="border w-full rounded-full py-2 px-8 my-4 border-gray-400" placeholder="Recherchez des commentaires" type='text'></input>
                                                    { searchResults.length > 0 ?(
                                                        <div className="flex flex-col overflow-y-scroll pb-8" >
                                                        {searchResults.map((item, index) => (
                                                            <div className='flex flex-col my-4' key={index}>
                                                                <div className="flex flex-row mb-1">
                                                                    <div className="w-10 h-10 bg-red-400 rounded-full flex justify-center items-center mr-2">
                                                                        <p className="text-white font-bold">{item.name.slice(0,1)}</p>
                                                                    </div>
                                                                    <div className='flex flex-col'>
                                                                        <p className='font-medium'>{item.name}</p>
                                                                        <p className="text-sm">{item.location}</p>
                                                                    </div>
                                                                </div>
                                                                <ol className="flex list-none text-sm my-2">
                                                                    <li className="font-semibold flex flex-row align-middle items-center text-sm justify-center">
                                                                    {<Stars fullStars={ratesClient[index]} numStars="5" width="2" />}
                                                                    <span className="px-1">•</span></li>
                                                                    <li className="font-semibold">Le {item.date}<span className="px-1 text-xs">•</span></li>
                                                                    <li className="font-light text-gray-400">Séjour de {item.duration} {item.duration > 1 ? "nuits" : "nuit"}</li>
                                                                </ol>
                                                                <div className="flex flex-col ">
                                                                    <p className="mb-2">{item.text}</p>
                                                                </div>
                                                            </div>
                                                        )) 
                                                        }
                                                        </div>
                                                    ) : (
                                                        <div className="h-1/2 flex flex-col justify-center">
                                                            <p className="text-center text-gray-500">Aucun résultat ne corresond à votre recherche.</p>
                                                        </div>
                                                    )
                                                    }
                                                </div>
                                            </div>
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
export default Reviews;