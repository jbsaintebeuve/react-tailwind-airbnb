function DisplayCalendar({ month, dates, }){

    const days = ["Lun.", "Mar.", "Mer.", "Jeu.", "Ven.", "Sam.", "Dim."]

    return(
        <>
        <div className="my-2">
            <h2 className="text-center mb-4 capitalize font-semibold">{month.toLocaleDateString('default', { month: 'long', year: 'numeric' })}</h2>
        </div>
            <div className="grid grid-cols-7 gap-0 text-sm font-medium text-center">
                {days.map((day, index) => (
                    <div className="text-gray-500 text-xs" key={index}>{day}</div>
                ))}
              
            {dates.dates.map((date, index) => (
                date.getMonth() == dates.month ? (
                    <div onClick={(e) => e.currentTarget.className += " bg-blue-500"} key={index} className={date <= Date.now() ? "p-4 line-through text-gray-500 cursor-not-allowed" : "p-4"}>
                        {date.getDate()}
                    </div>
                ) : (
                <div key={index} className="p-4  text-center"></div>
                )
                
            ))}
            </div>
        </>
    )
}
export default DisplayCalendar;