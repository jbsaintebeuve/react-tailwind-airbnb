function CountByNote({reviews, nbrClients}){
    return(
        <>
            <p className="text-sm font-semibold my-2">Évaluation globale</p>
        {reviews.map((count, index) => (
            <div key={index} className="flex items-center my-1">
            <span className="w-2 mr-2 text-xs font-medium">{5 - index}</span>
            <div className="flex-1 h-1  relative">
                <div className="absolute rounded z-10 top-0 left-0 h-full  bg-black" style={{ width: `${(count / nbrClients) * 100}%` }}></div>
                <div className="absolute w-full top-0 rounded left-0 h-full bg-gray-200"></div>
            </div>
            </div>
        ))}
    </>
    )
}
export default CountByNote;