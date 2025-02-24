// import { useState, useEffect } from "react"

// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// function BitcoinRates() {
    
//     const [currency, setCurrency] = useState(currencies[0]);

//     const [btcPrice, setBtcPrice] = useState(0)

//     useEffect(() => {
//         let ignore = false

//         fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
//         .then(response => response.json())
//         .then(json => {
//             if (!ignore) setBtcPrice(json.bitcoin[currency.toLowerCase()])

//         })

//         return() => {
//             ignore = true
//         }

//     }, [currency])

//     // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
//     const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
//     return (

//         <div className="BitcoinRates componentBox">
//             <h3>Bitcoin Exchange Rates</h3>
//             <label>Choose currency:
//                 <select value={currency} onChange={e => setCurrency(e.target.value)}>
//                     {options}
//                 </select>
//             </label>
//             <div>1BTC is worth {btcPrice} {currency} </div>
//         </div> )
// }

// export default BitcoinRates 

//lab2

import { useState } from "react"
import { useDataReducer } from "../hooks/useDataReducer";

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    
    const [currency, setCurrency] = useState(currencies[0]);
    const btcResponse = useDataReducer(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
    const btcPrice = !btcResponse.loading && btcResponse.data ? btcResponse.data.bitcoin[currency.toLowerCase()] : 0



    // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);
    return (

        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rates</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            {btcResponse.loading ? <div>please wait...</div> : <div>1BTC is worth {btcPrice} {currency} </div>}
            <div>{btcResponse.error}</div>
        </div> )
}

export default BitcoinRates 