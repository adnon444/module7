import { useState, useEffect } from "react";


function Clock() {
    const [date, setDate] = useState(new Date());

useEffect(() => { 
console.log('Clock component mounted');
        

const tick = () => {    
    setDate(new Date());
    console.log('tick');
        
}
      
const intervalID = setInterval(tick, 1000)

return () => clearInterval(intervalID)
}, [])


    return (
        <div className="Clock">
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
        </div>
); }


function ClockDisplay() {
    const [showClock, setShowClock] = useState(false);
        const toggleClock = () => {
            setShowClock(!showClock);
    }

        return (
            <div className="ClockDisplay componentBox">
            {showClock && <Clock />}
            <button onClick={toggleClock}>Toggle Clock</button>
            </div>
    )
}

export default ClockDisplay;





// useEffect(() => {
//     console.log('running effect');
//     let ignore = false; // flag to allow ignoring of the fetch result
// fetch('https://bored.api.lewagon.com/api/activity?' + 'participants=' + participants)
//         .then(response => response.json())
//         .then(json => {
//             // only update state if the effect is still valid
//             // ie. the dependency hasn't changed since the request
//             if (!ignore) setActivity(json.activity);
// });
//     // cleanup function - runs when unmounted or dependencies change
//     return () => {
//         ignore = true; // ignore now invalid fetch results
//         console.log('cleanup effect');
//     };
// }, [participants]); // effect dependencies
