import React, { useState } from 'react';
import DisplayCalendar from './DisplayCalendar';

function Calendar() {
  // État pour stocker les dates des deux mois
  const [firstMonth, setFirstMonth] = useState(new Date());
  const [secondMonth, setSecondMonth] = useState(getNextMonth(firstMonth));
  let today = new Date
  const todayMonth = today.getMonth()
  const todayYear= today.getFullYear()

  function getNextMonth(date) {
    const nextMonth = new Date(date);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    return nextMonth;
  }

  // Fonction pour générer les dates des deux mois
  const generateMonths = () => {
    const firstMonthDates = getDatesForMonth(firstMonth);
    const secondMonthDates = getDatesForMonth(secondMonth);

    return { firstMonthDates, secondMonthDates };
  };

  // Fonction pour générer les dates pour un mois donné
  const getDatesForMonth = (month) => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    const firstDay = new Date(year, monthIndex, 1);
    let dayDate = firstDay.getDay()
    dayDate == 0 ? dayDate = 7 : dayDate = dayDate
    const beginDate = firstDay
    beginDate.setDate(firstDay.getDate() - dayDate + 1 )
    const lastDay = new Date(year, monthIndex + 1, 0);

    const data = {"month": monthIndex,"year": year, "dates": []}

    for (let date = new Date(beginDate); date <= lastDay; date.setDate(date.getDate() + 1)) {
      data["dates"].push(new Date(date));
    }

    return data;
  };

  const prevMonths = () =>{
    setFirstMonth(prevDate => {
      const nextMonth = new Date(prevDate);
      nextMonth.setMonth(nextMonth.getMonth() - 1);
      return nextMonth;
    });
    setSecondMonth(prevDate => {
      const nextMonth = new Date(prevDate);
      nextMonth.setMonth(nextMonth.getMonth() - 1);
      return nextMonth;
    });
  }
  const nextMonths = () =>{
    setFirstMonth(prevDate => {
      const nextMonth = new Date(prevDate);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      return nextMonth;
    });
    setSecondMonth(prevDate => {
      const nextMonth = new Date(prevDate);
      nextMonth.setMonth(nextMonth.getMonth() + 1);
      return nextMonth;
    });
  }

  // Obtenir les dates des deux mois
  const { firstMonthDates, secondMonthDates } = generateMonths();

  const isDifferentMonth = firstMonth.getMonth() !== todayMonth;
  const isDifferentYear = firstMonth.getFullYear() !== todayYear;
  const isButtonVisible = isDifferentMonth || isDifferentYear;

  return (
    <div className="flex flex-col py-8">
       <h4 className="text-2xl font-semibold mb-1">Calendrier des disponibilités</h4>
       <p className="text-gray-600 text-sm font-light mb-4">Visionnez les dates disponibles pour votre séjour</p>
      <div className={isButtonVisible ? "flex flex-row justify-between" : "flex flex-row justify-end"}>
        {isButtonVisible ? (
        <button className="hover:bg-gray-100 flex flex-col justify-center rounded-full p-2" onClick={prevMonths}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 stroke-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        </button> ) : (
          <></>
        )
        }
        <button className="hover:bg-gray-100 flex flex-col justify-center rounded-full p-2" onClick={nextMonths}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 stroke-gray-600">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
        </button>
      </div>
      <div className="flex flex-row relative overflow-hidden transition-transform duration-500">
        <div className={`w-1/2 px-4`}>
          <DisplayCalendar month={firstMonth} dates={firstMonthDates}/>
        </div>

        <div className="w-1/2 px-4">
          <DisplayCalendar month={secondMonth} dates={secondMonthDates}/> 
        </div>
      </div>
    </div>
  );
}

export default Calendar;
