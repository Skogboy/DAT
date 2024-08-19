import React, { useState } from 'react';

const MyComponent = () => {
    const [responseData, setResponseData] = useState('');
    const [error, setError] = useState(null);

    const fetchData = async () => {

        const url = "https://analytics.api.staging.dat.com/linehaulrates/v1/nationalHistory";
        const data = {
            rateType: "SPOT",
            equipment: "VAN",
            periodType: "Month",
            country: "US"
        };

        const token = process.env.REACT_APP_API_KEY
        
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${response.status} ${response.statusText}`, errorData);
            }

            const result = await response.json();


            const ratesData = result.response.rates.map(rate => ({
                Close: rate.rateUSD
            }));

            setResponseData(result.response); // Set only the rates data

            console.log(result.response.rates)
            console.log(ratesData[2].Close)

        } catch (err) {
            setError(err.message);
        }
    };
    
    
    
    


    return (
        <div>
            <button onClick={fetchData}>Fetch Data National History</button>
            {responseData && <pre>{JSON.stringify(responseData, null, 2)}</pre>}
            {error && <p>Error: {error}</p>}
            {/* <HubTest ratesData={result} /> */}
        </div>
    );
};

export default MyComponent;
