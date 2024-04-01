function DisplayPrice(){
    return(<>
        <div className="sticky top-8 right-0 rounded-xl shadow-md px-6 py-4 border bg-white">
            <p><span className="text-2xl font-bold">94€</span> par nuit</p>
            <p className="text-xs my-2 text-red-500">Prix variable selon la disponibilité.</p>
            <button className="bg-rose-500 py-3 mt-4 rounded-md align-middle text-center w-full text-white font-medium text-lg">Contactez-nous</button>
        </div>
    </>)
}
export default DisplayPrice;