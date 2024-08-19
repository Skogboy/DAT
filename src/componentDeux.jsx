// import React, { useState } from 'react';

// const MyComponentDeux = () => {
//     const [responseData, setResponseData] = useState('');
//     const [error, setError] = useState(null);


//     const fetchData = async () => {

//         const url = "https://analytics.api.staging.dat.com/linehaulrates/v1/lookups";

//         const data = [
//             {
//                 "origin": {
//                 "city": "Portland",
//                 "stateOrProvince": "OR"
//                 },
//                 "destination": {
//                 "city": "Denver",
//                 "stateOrProvince": "CO"
//                 },
//                 "rateType": "CONTRACT",
//                 "equipment": "VAN",
//                 "includeMyRate": true,
//                 "targetEscalation": {
//                 "escalationType": "SPECIFIC_AREA_TYPE_AND_SPECIFIC_TIME_FRAME",
//                 "specificTimeFrame": "30_DAYS",
//                 "specificAreaType": "3_DIGIT_ZIP"
//                 }
//                 },
//                 {
//                 "origin": {
//                 "postalCode": "80202"
//                 },
//                 "destination": {
//                 "postalCode": "97075"
//                 },
//                 "rateType": "SPOT",
//                 "equipment": "REEFER",
//                 "includeMyRate": false,
//                 "targetEscalation": {
//                 "escalationType": "BEST_FIT"
//                 }
//                 }
//             ]

//         //   console.log(data);

//         const token = process.env.REACT_APP_API_KEY
        
//         try {
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Authorization": `Bearer ${token}`
//                 },
//                 body: JSON.stringify(data),
//                 mode: 'cors' // Add this line
//             });

//             if (!response.ok) {
//                 const errorData = await response.json();
//                 throw new Error(`Error: ${response.status} ${response.statusText}`, errorData);
//             }

//             const result = await response.json();


//             // const ratesData = result.response.rates.map(rate => ({
//             //     Close: rate.rateUSD
//             // }));

//             setResponseData(result); // Set only the rates data

//             console.log(responseData.rateResponses[1].response.rate.perTrip)

//         } catch (err) {
//             setError(err.message);
//         }
//     };
    
    
    
    


//     return (
//         <div>
//             <button onClick={fetchData}>Fetch Data Forcast</button>
//             {responseData && <pre>{JSON.stringify(responseData.response, null, 2)}</pre>}
//             {error && <p>Error: {error}</p>}
//             {/* <HubTest ratesData={result} /> */}
//         </div>
//     );
// };

// export default MyComponentDeux;
