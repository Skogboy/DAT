
 

import React, { useState, useEffect } from 'react';

const MyComponentDeux = () => {
    const [responseData, setResponseData] = useState({}); // Initialize as an empty object
    const [error, setError] = useState(null);
    const [postalCode1, setPostalCode1] = useState('')
    const [postalCode2, setPostalCode2] = useState('')
    const [city1, setCity1] = useState('');
    const [state1, setState1] = useState('');
    const [city2, setCity2] = useState('');
    const [state2, setState2] = useState('');

    const zipCodeOptions = [
      { postalCode: "87001", city: "ALGODONES", state: "NM" },
      { postalCode: "87001", city: "SANTA TERESA", state: "NM" },
      { postalCode: "28601", city: "HICKORY", state: "NC" },
      { postalCode: "97075", city: "MALAGA", state: "WA" },
      { postalCode: "8057", city: "MOORESTOWN", state: "NJ" },
      { postalCode: "97841", city: "IMBLER", state: "OR" },
      { postalCode: "93610", city: "CHOWCHILLA", state: "CA" },
      { postalCode: "70130", city: "NEW ORLEANS", state: "LA" },
      { postalCode: "58472", city: "MONTPELIER", state: "ND" },
      { postalCode: "77029", city: "HOUSTON", state: "TX" },
      { postalCode: "75789", city: "TROUP", state: "TX" },
      { postalCode: "53188", city: "WAUKESHA", state: "WI" },
      { postalCode: "65742", city: "ROGERSVILLE", state: "MO" },
      { postalCode: "56303", city: "SAINT CLOUD", state: "MN" },
      { postalCode: "55060", city: "OWATONNA", state: "MN" },
      { postalCode: "77032", city: "HOUSTON", state: "TX" },
      { postalCode: "68350", city: "ENDICOTT", state: "NE" },
      { postalCode: "77532", city: "CROSBY", state: "TX" },
      { postalCode: "13021", city: "AUBURN", state: "NY" },
      { postalCode: "56281", city: "PRINSBURG", state: "MN" },
      { postalCode: "31791", city: "SYLVESTER", state: "GA" },
      { postalCode: "77523", city: "BAYTOWN", state: "TX" },
      { postalCode: "81101", city: "ALAMOSA", state: "CO" },
      { postalCode: "67401", city: "SALINA", state: "KS" },
      { postalCode: "80631", city: "GREELEY", state: "CO" },
      { postalCode: "67449", city: "HERINGTON", state: "KS" },
      { postalCode: "95203", city: "STOCKTON", state: "CA" },
      { postalCode: "75244", city: "DALLAS", state: "TX" },
      { postalCode: "46319", city: "GRIFFITH", state: "IN" },
      { postalCode: "40208", city: "LOUISVILLE", state: "KY" },
      { postalCode: "8016", city: "BURLINGTON TOWNSHIP", state: "NJ" },
      { postalCode: "54313", city: "GREEN BAY", state: "WI" },
      { postalCode: "60423", city: "FRANKFORT", state: "IL" },
      { postalCode: "63390", city: "WRIGHT CITY", state: "MO" },
      { postalCode: "62982", city: "ROSICLARE", state: "IL" },
      { postalCode: "60411", city: "CHICAGO HEIGHTS", state: "IL" },
      { postalCode: "97374", city: "SCIO", state: "OR" },
      { postalCode: "66115", city: "KANSAS CITY", state: "KS" },
      { postalCode: "47951", city: "KENTLAND", state: "IN" },
      { postalCode: "94533", city: "FAIRFIELD", state: "CA" },
      { postalCode: "30114", city: "CANTON", state: "GA" },
      { postalCode: "23005", city: "ASHLAND", state: "VA" },
      { postalCode: "61822", city: "CHAMPAIGN", state: "IL" },
      { postalCode: "75022", city: "FLOWER MOUND", state: "TX" },
      { postalCode: "55082", city: "STILLWATER", state: "MN" },
      { postalCode: "55330", city: "ELK RIVER", state: "MN" },
      { postalCode: "17097", city: "WICONISCO", state: "PA" },
      { postalCode: "39194", city: "YAZOO CITY", state: "MS" },
      { postalCode: "30121", city: "CARTERSVILLE", state: "GA" },
      { postalCode: "63132", city: "SAINT LOUIS", state: "MO" },
      { postalCode: "98642", city: "RIDGEFIELD", state: "WA" },
      { postalCode: "49085", city: "SAINT JOSEPH", state: "MI" },
      { postalCode: "47633", city: "POSEYVILLE", state: "IN" },
      { postalCode: "16428", city: "NORTH EAST", state: "PA" },
      { postalCode: "19061", city: "MARCUS HOOK", state: "PA" },
    ];

    const sortedZipCodeOptions = zipCodeOptions.sort((a, b) =>
      a.state.localeCompare(b.state)
    );

    useEffect(() => {
      // Update city and state when postalCode1 changes
      const selectedOption1 = zipCodeOptions.find(
        (option) => option.postalCode === postalCode1
      );
      if (selectedOption1) {
        setCity1(selectedOption1.city);
        setState1(selectedOption1.state);
      }
  
      // Update city and state when postalCode2 changes
      const selectedOption2 = zipCodeOptions.find(
        (option) => option.postalCode === postalCode2
      );
      if (selectedOption2) {
        setCity2(selectedOption2.city);
        setState2(selectedOption2.state);
      }
    }, [postalCode1, postalCode2, zipCodeOptions]);


    console.log(postalCode1)
    const fetchData = async () => {
        const url = "https://analytics.api.staging.dat.com/linehaulrates/v1/lookups";

        const data = [
            {
                "origin": {
                    "city": city1,
                    "stateOrProvince": state1
                },
                "destination": {
                    "city": city2,
                    "stateOrProvince": state2
                },
                "rateType": "CONTRACT",
                "equipment": "VAN",
                "includeMyRate": true,
                "targetEscalation": {
                    "escalationType": "SPECIFIC_AREA_TYPE_AND_SPECIFIC_TIME_FRAME",
                    "specificTimeFrame": "30_DAYS",
                    "specificAreaType": "3_DIGIT_ZIP"
                }
            },
            {
                "origin": {
                    "postalCode": postalCode1
                    // "postalCode": "80202"


                },
                "destination": {
                    "postalCode": postalCode2
                    // "postalCode": "97075"

                },
                "rateType": "SPOT",
                "equipment": "REEFER",
                "includeMyRate": false,
                "targetEscalation": {
                    "escalationType": "BEST_FIT"
                }
            }
        ];

        const token = process.env.REACT_APP_API_KEY;

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(data),
                mode: 'cors'
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }

            const result = await response.json();
            setResponseData(result); // Update state with fetched data

        } catch (err) {
            setError(err.message);
        }


        console.log(responseData)
    };

    // Update hubStock when responseData is updated
    useEffect(() => {
        if (responseData.rateResponses) {
            // Assuming hubStock is an array and you're updating the "Close" value
            hubStock[0].Close = responseData.rateResponses[1]?.response?.rate?.perTrip?.rateUsd || 0;
        }
    }, [responseData]);

    return (

        <div type='main div'>
        <div>
        <label>
        Select Origin:
        <select
          value={postalCode1}
          onChange={(e) => setPostalCode1(e.target.value)}
        >
          <option value="">Select a city</option>
          {sortedZipCodeOptions.map((option) => (
            <option
              key={`${option.postalCode}-${option.city}-${option.state}`}
              value={option.postalCode}
            >
              {`${option.city}, ${option.state} (${option.postalCode})`}
            </option>
          ))}
        </select>
      </label>

      <label>
        Select Destination:
        <select
          value={postalCode2}
          onChange={(e) => setPostalCode2(e.target.value)}
        >
          <option value="">Select a city</option>
          {sortedZipCodeOptions.map((option) => (
            <option
              key={`${option.postalCode}-${option.city}-${option.state}`}
              value={option.postalCode}
            >
              {`${option.city}, ${option.state} (${option.postalCode})`}
            </option>
          ))}
        </select>
      </label>

            </div>

            <button onClick={fetchData}>Fetch Data Forecast</button>
            {responseData && <pre>{JSON.stringify(responseData.response, null, 2)}</pre>}
            <div>
              Freight Rate: $
              {responseData.rateResponses && responseData.rateResponses.length > 1
                ? responseData.rateResponses[1]?.response?.rate?.perTrip?.rateUsd
                : ""}
            </div>

            <div>
              Freight Rate High: $
              {responseData.rateResponses && responseData.rateResponses.length > 1
                ? responseData.rateResponses[1]?.response?.rate?.perTrip?.highUsd
                : ""}
            </div>

            <div>
              Freight Rate Low: $
              {responseData.rateResponses && responseData.rateResponses.length > 1
                ? responseData.rateResponses[1]?.response?.rate?.perTrip?.lowUsd
                : ""}
            </div>

            <div>
              Freight Rate per Mile: $
              {responseData.rateResponses && responseData.rateResponses.length > 1
                ? responseData.rateResponses[1]?.response?.rate?.perMile?.rateUsd
                : ""}
            </div>

            <div>
              Reports: 
              {responseData.rateResponses && responseData.rateResponses.length > 1
                ? responseData.rateResponses[1]?.response?.rate?.reports
                : ""}
            </div>

            {error && <p>Error: {error}</p>}
        </div>
    );
};

export default MyComponentDeux;

// Assuming you have this somewhere else in your code
export const hubStock = [
  {
    'Date': '17/02/17',
    'Close': 60 // Default value before fetching data
  },
  {
    'Date': '16/02/17',
    'Close': 59.700001
  },
  {
    'Date': '15/02/17',
    'Close': 58.75
  },
  {
    'Date': '14/02/17',
    'Close': 57.400002
  },
  {
    'Date': '13/02/17',
    'Close': 57.400002
  },
  {
    'Date': '10/02/17',
    'Close': 58.549999
  },
  {
    'Date': '09/02/17',
    'Close': 57.549999
  },
  {
    'Date': '08/02/17',
    'Close': 54.950001
  },
  {
    'Date': '07/02/17',
    'Close': 54.349998
  },
  {
    'Date': '06/02/17',
    'Close': 54.200001
  },
  {
    'Date': '03/02/17',
    'Close': 54.200001
  },
  {
    'Date': '02/02/17',
    'Close': 53.599998
  },
  {
    'Date': '01/02/17',
    'Close': 52.799999
  },
  {
    'Date': '31/01/17',
    'Close': 51.299999
  },
  {
    'Date': '30/01/17',
    'Close': 50
  },
  {
    'Date': '27/01/17',
    'Close': 51.549999
  },
  {
    'Date': '26/01/17',
    'Close': 51.950001
  },
  {
    'Date': '25/01/17',
    'Close': 53.400002
  },
  {
    'Date': '24/01/17',
    'Close': 50.25
  },
  {
    'Date': '23/01/17',
    'Close': 50.200001
  },
  {
    'Date': '20/01/17',
    'Close': 50.25
  },
  {
    'Date': '19/01/17',
    'Close': 50.099998
  },
  {
    'Date': '18/01/17',
    'Close': 50.450001
  },
  {
    'Date': '17/01/17',
    'Close': 51.049999
  },
  {
    'Date': '13/01/17',
    'Close': 51.599998
  },
  {
    'Date': '12/01/17',
    'Close': 51.349998
  },
  {
    'Date': '11/01/17',
    'Close': 52.650002
  },
  {
    'Date': '10/01/17',
    'Close': 51.950001
  },
  {
    'Date': '09/01/17',
    'Close': 52
  },
  {
    'Date': '06/01/17',
    'Close': 52.599998
  },
  {
    'Date': '05/01/17',
    'Close': 51.349998
  },
  {
    'Date': '04/01/17',
    'Close': 49.700001
  },
  {
    'Date': '03/01/17',
    'Close': 47.849998
  },
  {
    'Date': '30/12/16',
    'Close': 47
  },
  {
    'Date': '29/12/16',
    'Close': 46.599998
  },
  {
    'Date': '28/12/16',
    'Close': 46.150002
  },
  {
    'Date': '27/12/16',
    'Close': 47.200001
  },
  {
    'Date': '23/12/16',
    'Close': 45.900002
  },
  {
    'Date': '22/12/16',
    'Close': 47.450001
  },
  {
    'Date': '21/12/16',
    'Close': 47.299999
  },
  {
    'Date': '20/12/16',
    'Close': 47.950001
  },
  {
    'Date': '19/12/16',
    'Close': 48
  },
  {
    'Date': '16/12/16',
    'Close': 47.400002
  },
  {
    'Date': '15/12/16',
    'Close': 45.950001
  },
  {
    'Date': '14/12/16',
    'Close': 48.700001
  },
  {
    'Date': '13/12/16',
    'Close': 49.650002
  },
  {
    'Date': '12/12/16',
    'Close': 48.950001
  },
  {
    'Date': '09/12/16',
    'Close': 49.849998
  },
  {
    'Date': '08/12/16',
    'Close': 51.900002
  },
  {
    'Date': '07/12/16',
    'Close': 51.650002
  },
  {
    'Date': '06/12/16',
    'Close': 51.900002
  },
  {
    'Date': '05/12/16',
    'Close': 51.849998
  },
  {
    'Date': '02/12/16',
    'Close': 51.799999
  },
  {
    'Date': '01/12/16',
    'Close': 52.75
  },
  {
    'Date': '30/11/16',
    'Close': 56.099998
  },
  {
    'Date': '29/11/16',
    'Close': 56.75
  },
  {
    'Date': '28/11/16',
    'Close': 58.400002
  },
  {
    'Date': '25/11/16',
    'Close': 57.75
  },
  {
    'Date': '23/11/16',
    'Close': 57.700001
  },
  {
    'Date': '22/11/16',
    'Close': 57.450001
  },
  {
    'Date': '21/11/16',
    'Close': 57.25
  },
  {
    'Date': '18/11/16',
    'Close': 57.299999
  },
  {
    'Date': '17/11/16',
    'Close': 57.549999
  },
  {
    'Date': '16/11/16',
    'Close': 57.599998
  },
  {
    'Date': '15/11/16',
    'Close': 56.299999
  },
  {
    'Date': '14/11/16',
    'Close': 56
  },
  {
    'Date': '11/11/16',
    'Close': 57.849998
  },
  {
    'Date': '10/11/16',
    'Close': 57.549999
  },
  {
    'Date': '09/11/16',
    'Close': 56.75
  },
  {
    'Date': '08/11/16',
    'Close': 54.599998
  },
  {
    'Date': '07/11/16',
    'Close': 54.450001
  },
  {
    'Date': '04/11/16',
    'Close': 50.900002
  },
  {
    'Date': '03/11/16',
    'Close': 49.950001
  },
  {
    'Date': '02/11/16',
    'Close': 48.900002
  },
  {
    'Date': '01/11/16',
    'Close': 51.599998
  },
  {
    'Date': '31/10/16',
    'Close': 52.450001
  },
  {
    'Date': '28/10/16',
    'Close': 52.349998
  },
  {
    'Date': '27/10/16',
    'Close': 52.299999
  },
  {
    'Date': '26/10/16',
    'Close': 51.900002
  },
  {
    'Date': '25/10/16',
    'Close': 52.75
  },
  {
    'Date': '24/10/16',
    'Close': 53.450001
  },
  {
    'Date': '21/10/16',
    'Close': 52.75
  },
  {
    'Date': '20/10/16',
    'Close': 52.549999
  },
  {
    'Date': '19/10/16',
    'Close': 52.849998
  },
  {
    'Date': '18/10/16',
    'Close': 52
  },
  {
    'Date': '17/10/16',
    'Close': 51.5
  },
  {
    'Date': '14/10/16',
    'Close': 53.25
  },
  {
    'Date': '13/10/16',
    'Close': 53.650002
  },
  {
    'Date': '12/10/16',
    'Close': 54.799999
  },
  {
    'Date': '11/10/16',
    'Close': 55.650002
  },
  {
    'Date': '10/10/16',
    'Close': 58.049999
  },
  {
    'Date': '07/10/16',
    'Close': 57.549999
  },
  {
    'Date': '06/10/16',
    'Close': 58
  },
  {
    'Date': '05/10/16',
    'Close': 58.25
  },
  {
    'Date': '04/10/16',
    'Close': 57.549999
  },
  {
    'Date': '03/10/16',
    'Close': 57.599998
  },
  {
    'Date': '30/09/16',
    'Close': 57.619999
  },
  {
    'Date': '29/09/16',
    'Close': 56.380001
  },
  {
    'Date': '28/09/16',
    'Close': 56.919998
  },
  {
    'Date': '27/09/16',
    'Close': 55.290001
  },
  {
    'Date': '26/09/16',
    'Close': 55.279999
  },
  {
    'Date': '23/09/16',
    'Close': 56.77
  },
  {
    'Date': '22/09/16',
    'Close': 59.009998
  },
  {
    'Date': '21/09/16',
    'Close': 57.529999
  },
  {
    'Date': '20/09/16',
    'Close': 55.470001
  },
  {
    'Date': '19/09/16',
    'Close': 54.82
  },
  {
    'Date': '16/09/16',
    'Close': 55.869999
  },
  {
    'Date': '15/09/16',
    'Close': 55.139999
  },
  {
    'Date': '14/09/16',
    'Close': 54.5
  },
  {
    'Date': '13/09/16',
    'Close': 53.389999
  },
  {
    'Date': '12/09/16',
    'Close': 55.209999
  },
  {
    'Date': '09/09/16',
    'Close': 53.75
  },
  {
    'Date': '08/09/16',
    'Close': 56.310001
  },
  {
    'Date': '07/09/16',
    'Close': 57.59
  },
  {
    'Date': '06/09/16',
    'Close': 57.450001
  },
  {
    'Date': '02/09/16',
    'Close': 57.009998
  },
  {
    'Date': '01/09/16',
    'Close': 56.130001
  },
  {
    'Date': '31/08/16',
    'Close': 55.740002
  },
  {
    'Date': '30/08/16',
    'Close': 56.02
  },
  {
    'Date': '29/08/16',
    'Close': 56.299999
  },
  {
    'Date': '26/08/16',
    'Close': 56.779999
  },
  {
    'Date': '25/08/16',
    'Close': 55.779999
  },
  {
    'Date': '24/08/16',
    'Close': 55.830002
  },
  {
    'Date': '23/08/16',
    'Close': 56.880001
  },
  {
    'Date': '22/08/16',
    'Close': 55.490002
  },
  {
    'Date': '19/08/16',
    'Close': 56.299999
  },
  {
    'Date': '18/08/16',
    'Close': 56.290001
  },
  {
    'Date': '17/08/16',
    'Close': 56.939999
  },
  {
    'Date': '16/08/16',
    'Close': 56.990002
  },
  {
    'Date': '15/08/16',
    'Close': 59.48
  },
  {
    'Date': '12/08/16',
    'Close': 59.009998
  },
  {
    'Date': '11/08/16',
    'Close': 59.16
  },
  {
    'Date': '10/08/16',
    'Close': 59.259998
  },
  {
    'Date': '09/08/16',
    'Close': 58.650002
  },
  {
    'Date': '08/08/16',
    'Close': 57.740002
  },
  {
    'Date': '05/08/16',
    'Close': 58.040001
  },
  {
    'Date': '04/08/16',
    'Close': 56.700001
  },
  {
    'Date': '03/08/16',
    'Close': 50.57
  },
  {
    'Date': '02/08/16',
    'Close': 53.240002
  },
  {
    'Date': '01/08/16',
    'Close': 53.869999
  },
  {
    'Date': '29/07/16',
    'Close': 54.59
  },
  {
    'Date': '28/07/16',
    'Close': 52.25
  },
  {
    'Date': '27/07/16',
    'Close': 51.75
  },
  {
    'Date': '26/07/16',
    'Close': 52.84
  },
  {
    'Date': '25/07/16',
    'Close': 53.200001
  },
  {
    'Date': '22/07/16',
    'Close': 52.529999
  },
  {
    'Date': '21/07/16',
    'Close': 51.18
  },
  {
    'Date': '20/07/16',
    'Close': 52.799999
  },
  {
    'Date': '19/07/16',
    'Close': 51.080002
  },
  {
    'Date': '18/07/16',
    'Close': 51.759998
  },
  {
    'Date': '15/07/16',
    'Close': 51.52
  },
  {
    'Date': '14/07/16',
    'Close': 51.759998
  },
  {
    'Date': '13/07/16',
    'Close': 49.25
  },
  {
    'Date': '12/07/16',
    'Close': 50.209999
  },
  {
    'Date': '11/07/16',
    'Close': 48.779999
  },
  {
    'Date': '08/07/16',
    'Close': 46.330002
  },
  {
    'Date': '07/07/16',
    'Close': 43.880001
  },
  {
    'Date': '06/07/16',
    'Close': 42.849998
  },
  {
    'Date': '05/07/16',
    'Close': 42.509998
  },
  {
    'Date': '01/07/16',
    'Close': 43.419998
  },
  {
    'Date': '30/06/16',
    'Close': 43.419998
  },
  {
    'Date': '29/06/16',
    'Close': 44.02
  },
  {
    'Date': '28/06/16',
    'Close': 42.400002
  },
  {
    'Date': '27/06/16',
    'Close': 41.689999
  },
  {
    'Date': '24/06/16',
    'Close': 44.939999
  },
  {
    'Date': '23/06/16',
    'Close': 48.66
  },
  {
    'Date': '22/06/16',
    'Close': 46.41
  },
  {
    'Date': '21/06/16',
    'Close': 46.599998
  },
  {
    'Date': '20/06/16',
    'Close': 47.599998
  },
  {
    'Date': '17/06/16',
    'Close': 46.639999
  },
  {
    'Date': '16/06/16',
    'Close': 47.599998
  },
  {
    'Date': '15/06/16',
    'Close': 48.439999
  },
  {
    'Date': '14/06/16',
    'Close': 48.220001
  },
  {
    'Date': '13/06/16',
    'Close': 48.290001
  },
  {
    'Date': '10/06/16',
    'Close': 49.060001
  },
  {
    'Date': '09/06/16',
    'Close': 49.470001
  },
  {
    'Date': '08/06/16',
    'Close': 52.150002
  },
  {
    'Date': '07/06/16',
    'Close': 52.240002
  },
  {
    'Date': '06/06/16',
    'Close': 51.84
  },
  {
    'Date': '03/06/16',
    'Close': 51.869999
  },
  {
    'Date': '02/06/16',
    'Close': 52
  },
  {
    'Date': '01/06/16',
    'Close': 50.610001
  },
  {
    'Date': '31/05/16',
    'Close': 47.759998
  },
  {
    'Date': '27/05/16',
    'Close': 46.720001
  },
  {
    'Date': '26/05/16',
    'Close': 45.68
  },
  {
    'Date': '25/05/16',
    'Close': 45.529999
  },
  {
    'Date': '24/05/16',
    'Close': 45.459999
  },
  {
    'Date': '23/05/16',
    'Close': 43.869999
  },
  {
    'Date': '20/05/16',
    'Close': 45.66
  },
  {
    'Date': '19/05/16',
    'Close': 43.990002
  },
  {
    'Date': '18/05/16',
    'Close': 44.169998
  },
  {
    'Date': '17/05/16',
    'Close': 44.5
  },
  {
    'Date': '16/05/16',
    'Close': 45.119999
  },
  {
    'Date': '13/05/16',
    'Close': 44.299999
  },
  {
    'Date': '12/05/16',
    'Close': 44.259998
  },
  {
    'Date': '11/05/16',
    'Close': 44.869999
  },
  {
    'Date': '10/05/16',
    'Close': 44.220001
  },
  {
    'Date': '09/05/16',
    'Close': 42.93
  },
  {
    'Date': '06/05/16',
    'Close': 44.509998
  },
  {
    'Date': '05/05/16',
    'Close': 43.689999
  },
  {
    'Date': '04/05/16',
    'Close': 46.25
  },
  {
    'Date': '03/05/16',
    'Close': 45.810001
  },
  {
    'Date': '02/05/16',
    'Close': 47.220001
  },
  {
    'Date': '29/04/16',
    'Close': 44.290001
  },
  {
    'Date': '28/04/16',
    'Close': 45.040001
  },
  {
    'Date': '27/04/16',
    'Close': 45.009998
  },
  {
    'Date': '26/04/16',
    'Close': 44.52
  },
  {
    'Date': '25/04/16',
    'Close': 44.369999
  },
  {
    'Date': '22/04/16',
    'Close': 44.810001
  },
  {
    'Date': '21/04/16',
    'Close': 45.139999
  },
  {
    'Date': '20/04/16',
    'Close': 43.619999
  },
  {
    'Date': '19/04/16',
    'Close': 42.869999
  },
  {
    'Date': '18/04/16',
    'Close': 43.52
  },
  {
    'Date': '15/04/16',
    'Close': 42.049999
  },
  {
    'Date': '14/04/16',
    'Close': 40.82
  },
  {
    'Date': '13/04/16',
    'Close': 40.610001
  },
  {
    'Date': '12/04/16',
    'Close': 39.57
  },
  {
    'Date': '11/04/16',
    'Close': 41.459999
  },
  {
    'Date': '08/04/16',
    'Close': 42.080002
  },
  {
    'Date': '07/04/16',
    'Close': 41.810001
  },
  {
    'Date': '06/04/16',
    'Close': 43.869999
  },
  {
    'Date': '05/04/16',
    'Close': 41.950001
  },
  {
    'Date': '04/04/16',
    'Close': 42.869999
  },
  {
    'Date': '01/04/16',
    'Close': 43.150002
  },
  {
    'Date': '31/03/16',
    'Close': 43.619999
  },
  {
    'Date': '30/03/16',
    'Close': 44.970001
  },
  {
    'Date': '29/03/16',
    'Close': 45.73
  },
  {
    'Date': '28/03/16',
    'Close': 46.139999
  },
  {
    'Date': '24/03/16',
    'Close': 44.93
  },
  {
    'Date': '23/03/16',
    'Close': 45.400002
  },
  {
    'Date': '22/03/16',
    'Close': 47.009998
  },
  {
    'Date': '21/03/16',
    'Close': 46.419998
  },
  {
    'Date': '18/03/16',
    'Close': 45.720001
  },
  {
    'Date': '17/03/16',
    'Close': 44.369999
  },
  {
    'Date': '16/03/16',
    'Close': 44.139999
  },
  {
    'Date': '15/03/16',
    'Close': 44.09
  },
  {
    'Date': '14/03/16',
    'Close': 45.119999
  },
  {
    'Date': '11/03/16',
    'Close': 45.720001
  },
  {
    'Date': '10/03/16',
    'Close': 45.080002
  },
  {
    'Date': '09/03/16',
    'Close': 44.610001
  },
  {
    'Date': '08/03/16',
    'Close': 44.490002
  },
  {
    'Date': '07/03/16',
    'Close': 45.049999
  },
  {
    'Date': '04/03/16',
    'Close': 43.740002
  },
  {
    'Date': '03/03/16',
    'Close': 43.639999
  },
  {
    'Date': '02/03/16',
    'Close': 43.080002
  },
  {
    'Date': '01/03/16',
    'Close': 43.23
  },
  {
    'Date': '29/02/16',
    'Close': 41.66
  },
  {
    'Date': '26/02/16',
    'Close': 40.619999
  },
  {
    'Date': '25/02/16',
    'Close': 38.75
  },
  {
    'Date': '24/02/16',
    'Close': 36.529999
  },
  {
    'Date': '23/02/16',
    'Close': 36.639999
  },
  {
    'Date': '22/02/16',
    'Close': 36.709999
  },
  {
    'Date': '19/02/16',
    'Close': 34.18
  },
  {
    'Date': '18/02/16',
    'Close': 34.009998
  },
  {
    'Date': '17/02/16',
    'Close': 34.34
  },
  {
    'Date': '16/02/16',
    'Close': 32.400002
  },
  {
    'Date': '12/02/16',
    'Close': 32.220001
  },
  {
    'Date': '11/02/16',
    'Close': 33.02
  },
  {
    'Date': '10/02/16',
    'Close': 29.040001
  },
  {
    'Date': '09/02/16',
    'Close': 27.52
  },
  {
    'Date': '08/02/16',
    'Close': 29
  },
  {
    'Date': '05/02/16',
    'Close': 32.009998
  },
  {
    'Date': '04/02/16',
    'Close': 39.939999
  },
  {
    'Date': '03/02/16',
    'Close': 39.610001
  },
  {
    'Date': '02/02/16',
    'Close': 38
  },
  {
    'Date': '01/02/16',
    'Close': 40.799999
  },
  {
    'Date': '29/01/16',
    'Close': 40.59
  },
  {
    'Date': '28/01/16',
    'Close': 40.029999
  },
  {
    'Date': '27/01/16',
    'Close': 40.900002
  },
  {
    'Date': '26/01/16',
    'Close': 42.950001
  },
  {
    'Date': '25/01/16',
    'Close': 45.369999
  },
  {
    'Date': '22/01/16',
    'Close': 49.07
  },
  {
    'Date': '21/01/16',
    'Close': 48.689999
  },
  {
    'Date': '20/01/16',
    'Close': 47.990002
  },
  {
    'Date': '19/01/16',
    'Close': 47.349998
  },
  {
    'Date': '15/01/16',
    'Close': 50.040001
  },
  {
    'Date': '14/01/16',
    'Close': 50.509998
  },
  {
    'Date': '13/01/16',
    'Close': 49.939999
  },
  {
    'Date': '12/01/16',
    'Close': 52.970001
  },
  {
    'Date': '11/01/16',
    'Close': 53.91
  },
  {
    'Date': '08/01/16',
    'Close': 52.66
  },
  {
    'Date': '07/01/16',
    'Close': 52.759998
  },
  {
    'Date': '06/01/16',
    'Close': 54.689999
  },
  {
    'Date': '05/01/16',
    'Close': 54.650002
  },
  {
    'Date': '04/01/16',
    'Close': 54.889999
  },
  {
    'Date': '31/12/15',
    'Close': 56.310001
  },
  {
    'Date': '30/12/15',
    'Close': 57.73
  },
  {
    'Date': '29/12/15',
    'Close': 57.650002
  },
  {
    'Date': '28/12/15',
    'Close': 56.720001
  },
  {
    'Date': '24/12/15',
    'Close': 56.540001
  },
  {
    'Date': '23/12/15',
    'Close': 56.650002
  },
  {
    'Date': '22/12/15',
    'Close': 55.830002
  },
  {
    'Date': '21/12/15',
    'Close': 55.220001
  },
  {
    'Date': '18/12/15',
    'Close': 55.209999
  },
  {
    'Date': '17/12/15',
    'Close': 57.060001
  },
  {
    'Date': '16/12/15',
    'Close': 56.32
  },
  {
    'Date': '15/12/15',
    'Close': 55.349998
  },
  {
    'Date': '14/12/15',
    'Close': 55.169998
  },
  {
    'Date': '11/12/15',
    'Close': 55.790001
  },
  {
    'Date': '10/12/15',
    'Close': 57.330002
  },
  {
    'Date': '09/12/15',
    'Close': 59.549999
  },
  {
    'Date': '08/12/15',
    'Close': 59.330002
  },
  {
    'Date': '07/12/15',
    'Close': 58.919998
  },
  {
    'Date': '04/12/15',
    'Close': 59.02
  },
  {
    'Date': '03/12/15',
    'Close': 57.580002
  },
  {
    'Date': '02/12/15',
    'Close': 56.32
  },
  {
    'Date': '01/12/15',
    'Close': 55.650002
  },
  {
    'Date': '30/11/15',
    'Close': 54.209999
  },
  {
    'Date': '27/11/15',
    'Close': 55.900002
  },
  {
    'Date': '25/11/15',
    'Close': 55.439999
  },
  {
    'Date': '24/11/15',
    'Close': 54.599998
  },
  {
    'Date': '23/11/15',
    'Close': 53.93
  },
  {
    'Date': '20/11/15',
    'Close': 53.169998
  },
  {
    'Date': '19/11/15',
    'Close': 52.970001
  },
  {
    'Date': '18/11/15',
    'Close': 52.91
  },
  {
    'Date': '17/11/15',
    'Close': 52.470001
  },
  {
    'Date': '16/11/15',
    'Close': 52.150002
  },
  {
    'Date': '13/11/15',
    'Close': 52.490002
  },
  {
    'Date': '12/11/15',
    'Close': 53.029999
  },
  {
    'Date': '11/11/15',
    'Close': 51.700001
  },
  {
    'Date': '10/11/15',
    'Close': 52.990002
  },
  {
    'Date': '09/11/15',
    'Close': 52.950001
  },
  {
    'Date': '06/11/15',
    'Close': 52.939999
  },
  {
    'Date': '05/11/15',
    'Close': 53.639999
  },
  {
    'Date': '04/11/15',
    'Close': 53.110001
  },
  {
    'Date': '03/11/15',
    'Close': 52.110001
  },
  {
    'Date': '02/11/15',
    'Close': 52.419998
  },
  {
    'Date': '30/10/15',
    'Close': 51.880001
  },
  {
    'Date': '29/10/15',
    'Close': 50.799999
  },
  {
    'Date': '28/10/15',
    'Close': 50.130001
  },
  {
    'Date': '27/10/15',
    'Close': 48.98
  },
  {
    'Date': '26/10/15',
    'Close': 49.66
  },
  {
    'Date': '23/10/15',
    'Close': 49.349998
  },
  {
    'Date': '22/10/15',
    'Close': 48.73
  },
  {
    'Date': '21/10/15',
    'Close': 47.560001
  },
  {
    'Date': '20/10/15',
    'Close': 48.650002
  },
  {
    'Date': '19/10/15',
    'Close': 49.700001
  },
  {
    'Date': '16/10/15',
    'Close': 49.369999
  },
  {
    'Date': '15/10/15',
    'Close': 48.639999
  },
  {
    'Date': '14/10/15',
    'Close': 47.93
  },
  {
    'Date': '13/10/15',
    'Close': 48.389999
  },
  {
    'Date': '12/10/15',
    'Close': 48.799999
  },
  {
    'Date': '09/10/15',
    'Close': 48.560001
  },
  {
    'Date': '08/10/15',
    'Close': 47.34
  },
  {
    'Date': '07/10/15',
    'Close': 47.279999
  },
  {
    'Date': '06/10/15',
    'Close': 47.23
  },
  {
    'Date': '05/10/15',
    'Close': 47.580002
  },
  {
    'Date': '02/10/15',
    'Close': 46.439999
  },
  {
    'Date': '01/10/15',
    'Close': 45.740002
  },
  {
    'Date': '30/09/15',
    'Close': 46.369999
  },
  {
    'Date': '29/09/15',
    'Close': 47.5
  },
  {
    'Date': '28/09/15',
    'Close': 47.950001
  },
  {
    'Date': '25/09/15',
    'Close': 48.419998
  },
  {
    'Date': '24/09/15',
    'Close': 50.02
  },
  {
    'Date': '23/09/15',
    'Close': 50.950001
  },
  {
    'Date': '22/09/15',
    'Close': 51.380001
  },
  {
    'Date': '21/09/15',
    'Close': 51.849998
  },
  {
    'Date': '18/09/15',
    'Close': 51.650002
  },
  {
    'Date': '17/09/15',
    'Close': 50.580002
  },
  {
    'Date': '16/09/15',
    'Close': 48.599998
  },
  {
    'Date': '15/09/15',
    'Close': 47.950001
  },
  {
    'Date': '14/09/15',
    'Close': 47.349998
  },
  {
    'Date': '11/09/15',
    'Close': 49.07
  },
  {
    'Date': '10/09/15',
    'Close': 46.869999
  },
  {
    'Date': '09/09/15',
    'Close': 46.130001
  },
  {
    'Date': '08/09/15',
    'Close': 46.860001
  },
  {
    'Date': '04/09/15',
    'Close': 44.52
  },
  {
    'Date': '03/09/15',
    'Close': 45.619999
  },
  {
    'Date': '02/09/15',
    'Close': 46
  },
  {
    'Date': '01/09/15',
    'Close': 45.349998
  },
  {
    'Date': '31/08/15',
    'Close': 47.290001
  },
  {
    'Date': '28/08/15',
    'Close': 46.41
  },
  {
    'Date': '27/08/15',
    'Close': 45.150002
  },
  {
    'Date': '26/08/15',
    'Close': 44.639999
  },
  {
    'Date': '25/08/15',
    'Close': 43.02
  },
  {
    'Date': '24/08/15',
    'Close': 42.740002
  },
  {
    'Date': '21/08/15',
    'Close': 43.389999
  },
  {
    'Date': '20/08/15',
    'Close': 45.98
  },
  {
    'Date': '19/08/15',
    'Close': 46.509998
  },
  {
    'Date': '18/08/15',
    'Close': 46.900002
  },
  {
    'Date': '17/08/15',
    'Close': 47.869999
  },
  {
    'Date': '14/08/15',
    'Close': 48.009998
  },
  {
    'Date': '13/08/15',
    'Close': 46.23
  },
  {
    'Date': '12/08/15',
    'Close': 45.66
  },
  {
    'Date': '11/08/15',
    'Close': 47.84
  },
  {
    'Date': '10/08/15',
    'Close': 51.099998
  },
  {
    'Date': '07/08/15',
    'Close': 49.66
  },
  {
    'Date': '06/08/15',
    'Close': 50.509998
  },
  {
    'Date': '05/08/15',
    'Close': 52.220001
  },
  {
    'Date': '04/08/15',
    'Close': 52.98
  },
  {
    'Date': '03/08/15',
    'Close': 52.529999
  },
  {
    'Date': '31/07/15',
    'Close': 53.950001
  },
  {
    'Date': '30/07/15',
    'Close': 53.540001
  },
  {
    'Date': '29/07/15',
    'Close': 54.119999
  },
  {
    'Date': '28/07/15',
    'Close': 52.950001
  },
  {
    'Date': '27/07/15',
    'Close': 52.77
  },
  {
    'Date': '24/07/15',
    'Close': 53.299999
  },
  {
    'Date': '23/07/15',
    'Close': 52.669998
  },
  {
    'Date': '22/07/15',
    'Close': 51.75
  },
  {
    'Date': '21/07/15',
    'Close': 50.759998
  },
  {
    'Date': '20/07/15',
    'Close': 50.740002
  },
  {
    'Date': '17/07/15',
    'Close': 51.279999
  },
  {
    'Date': '16/07/15',
    'Close': 51.669998
  },
  {
    'Date': '15/07/15',
    'Close': 50.029999
  },
  {
    'Date': '14/07/15',
    'Close': 51.009998
  },
  {
    'Date': '13/07/15',
    'Close': 50.77
  },
  {
    'Date': '10/07/15',
    'Close': 50.459999
  },
  {
    'Date': '09/07/15',
    'Close': 50
  },
  {
    'Date': '08/07/15',
    'Close': 49.709999
  },
  {
    'Date': '07/07/15',
    'Close': 48.639999
  },
  {
    'Date': '06/07/15',
    'Close': 47.93
  },
  {
    'Date': '02/07/15',
    'Close': 47.549999
  },
  {
    'Date': '01/07/15',
    'Close': 49.150002
  },
  {
    'Date': '30/06/15',
    'Close': 49.580002
  },
  {
    'Date': '29/06/15',
    'Close': 48.580002
  },
  {
    'Date': '26/06/15',
    'Close': 49.240002
  },
  {
    'Date': '25/06/15',
    'Close': 50.759998
  },
  {
    'Date': '24/06/15',
    'Close': 50.279999
  },
  {
    'Date': '23/06/15',
    'Close': 50.66
  },
  {
    'Date': '22/06/15',
    'Close': 51.220001
  },
  {
    'Date': '19/06/15',
    'Close': 49.540001
  },
  {
    'Date': '18/06/15',
    'Close': 51.099998
  },
  {
    'Date': '17/06/15',
    'Close': 51.599998
  },
  {
    'Date': '16/06/15',
    'Close': 50.950001
  },
  {
    'Date': '15/06/15',
    'Close': 51.040001
  },
  {
    'Date': '12/06/15',
    'Close': 50.82
  },
  {
    'Date': '11/06/15',
    'Close': 50.57
  },
  {
    'Date': '10/06/15',
    'Close': 50.759998
  },
  {
    'Date': '09/06/15',
    'Close': 50.259998
  },
  {
    'Date': '08/06/15',
    'Close': 50.150002
  },
  {
    'Date': '05/06/15',
    'Close': 50.25
  },
  {
    'Date': '04/06/15',
    'Close': 49.450001
  },
  {
    'Date': '03/06/15',
    'Close': 49.470001
  },
  {
    'Date': '02/06/15',
    'Close': 48.869999
  },
  {
    'Date': '01/06/15',
    'Close': 50.130001
  },
  {
    'Date': '29/05/15',
    'Close': 50.799999
  },
  {
    'Date': '28/05/15',
    'Close': 51.959999
  },
  {
    'Date': '27/05/15',
    'Close': 52.91
  },
  {
    'Date': '26/05/15',
    'Close': 52.48
  },
  {
    'Date': '22/05/15',
    'Close': 53.200001
  },
  {
    'Date': '21/05/15',
    'Close': 53.32
  },
  {
    'Date': '20/05/15',
    'Close': 52.18
  },
  {
    'Date': '19/05/15',
    'Close': 50.799999
  },
  {
    'Date': '18/05/15',
    'Close': 49.310001
  },
  {
    'Date': '15/05/15',
    'Close': 49.110001
  },
  {
    'Date': '14/05/15',
    'Close': 48.799999
  },
  {
    'Date': '13/05/15',
    'Close': 49.049999
  },
  {
    'Date': '12/05/15',
    'Close': 48.470001
  },
  {
    'Date': '11/05/15',
    'Close': 46.060001
  },
  {
    'Date': '08/05/15',
    'Close': 46.75
  },
  {
    'Date': '07/05/15',
    'Close': 47.900002
  },
  {
    'Date': '06/05/15',
    'Close': 40.25
  },
  {
    'Date': '05/05/15',
    'Close': 39.810001
  },
  {
    'Date': '04/05/15',
    'Close': 40.189999
  },
  {
    'Date': '01/05/15',
    'Close': 38.849998
  },
  {
    'Date': '30/04/15',
    'Close': 38.709999
  },
  {
    'Date': '29/04/15',
    'Close': 39.509998
  },
  {
    'Date': '28/04/15',
    'Close': 39.209999
  },
  {
    'Date': '27/04/15',
    'Close': 39.16
  },
  {
    'Date': '24/04/15',
    'Close': 39.060001
  },
  {
    'Date': '23/04/15',
    'Close': 39.650002
  },
  {
    'Date': '22/04/15',
    'Close': 39.16
  },
  {
    'Date': '21/04/15',
    'Close': 40.279999
  },
  {
    'Date': '20/04/15',
    'Close': 39.599998
  },
  {
    'Date': '17/04/15',
    'Close': 39.099998
  },
  {
    'Date': '16/04/15',
    'Close': 39.580002
  },
  {
    'Date': '15/04/15',
    'Close': 39.509998
  },
  {
    'Date': '14/04/15',
    'Close': 38.84
  },
  {
    'Date': '13/04/15',
    'Close': 38.759998
  },
  {
    'Date': '10/04/15',
    'Close': 38.540001
  },
  {
    'Date': '09/04/15',
    'Close': 38
  },
  {
    'Date': '08/04/15',
    'Close': 38.939999
  },
  {
    'Date': '07/04/15',
    'Close': 39.509998
  },
  {
    'Date': '06/04/15',
    'Close': 39.240002
  },
  {
    'Date': '02/04/15',
    'Close': 39.18
  },
  {
    'Date': '01/04/15',
    'Close': 39.669998
  },
  {
    'Date': '31/03/15',
    'Close': 39.900002
  },
  {
    'Date': '30/03/15',
    'Close': 40.16
  },
  {
    'Date': '27/03/15',
    'Close': 38.900002
  },
  {
    'Date': '26/03/15',
    'Close': 38.490002
  },
  {
    'Date': '25/03/15',
    'Close': 38
  },
  {
    'Date': '24/03/15',
    'Close': 39.93
  },
  {
    'Date': '23/03/15',
    'Close': 41.119999
  },
  {
    'Date': '20/03/15',
    'Close': 41.419998
  },
  {
    'Date': '19/03/15',
    'Close': 42.25
  },
  {
    'Date': '18/03/15',
    'Close': 41.759998
  },
  {
    'Date': '17/03/15',
    'Close': 37.310001
  },
  {
    'Date': '16/03/15',
    'Close': 38.43
  },
  {
    'Date': '13/03/15',
    'Close': 39.400002
  },
  {
    'Date': '12/03/15',
    'Close': 40.599998
  },
  {
    'Date': '11/03/15',
    'Close': 39.040001
  },
  {
    'Date': '10/03/15',
    'Close': 39.310001
  },
  {
    'Date': '09/03/15',
    'Close': 39.27
  },
  {
    'Date': '06/03/15',
    'Close': 38.720001
  },
  {
    'Date': '05/03/15',
    'Close': 39.439999
  },
  {
    'Date': '04/03/15',
    'Close': 40.220001
  },
  {
    'Date': '03/03/15',
    'Close': 41.580002
  },
  {
    'Date': '02/03/15',
    'Close': 41.639999
  },
  {
    'Date': '27/02/15',
    'Close': 41.09
  },
  {
    'Date': '26/02/15',
    'Close': 41.439999
  },
  {
    'Date': '25/02/15',
    'Close': 41.439999
  },
  {
    'Date': '24/02/15',
    'Close': 40.73
  },
  {
    'Date': '23/02/15',
    'Close': 42.27
  },
  {
    'Date': '20/02/15',
    'Close': 43.470001
  },
  {
    'Date': '19/02/15',
    'Close': 41.189999
  },
  {
    'Date': '18/02/15',
    'Close': 41
  },
  {
    'Date': '17/02/15',
    'Close': 42.32
  },
  {
    'Date': '13/02/15',
    'Close': 43.290001
  },
  {
    'Date': '12/02/15',
    'Close': 37.07
  },
  {
    'Date': '11/02/15',
    'Close': 34.419998
  },
  {
    'Date': '10/02/15',
    'Close': 34.759998
  },
  {
    'Date': '09/02/15',
    'Close': 34.09
  },
  {
    'Date': '06/02/15',
    'Close': 35.200001
  },
  {
    'Date': '05/02/15',
    'Close': 35.709999
  },
  {
    'Date': '04/02/15',
    'Close': 34.57
  },
  {
    'Date': '03/02/15',
    'Close': 34.389999
  },
  {
    'Date': '02/02/15',
    'Close': 33.290001
  },
  {
    'Date': '30/01/15',
    'Close': 33.650002
  },
  {
    'Date': '29/01/15',
    'Close': 34.990002
  },
  {
    'Date': '28/01/15',
    'Close': 34.720001
  },
  {
    'Date': '27/01/15',
    'Close': 34.18
  },
  {
    'Date': '26/01/15',
    'Close': 33.169998
  },
  {
    'Date': '23/01/15',
    'Close': 33.509998
  },
  {
    'Date': '22/01/15',
    'Close': 34.990002
  },
  {
    'Date': '21/01/15',
    'Close': 33.84
  },
  {
    'Date': '20/01/15',
    'Close': 33.84
  },
  {
    'Date': '16/01/15',
    'Close': 33.299999
  },
  {
    'Date': '15/01/15',
    'Close': 32.529999
  },
  {
    'Date': '14/01/15',
    'Close': 32.52
  },
  {
    'Date': '13/01/15',
    'Close': 32.529999
  },
  {
    'Date': '12/01/15',
    'Close': 33.049999
  },
  {
    'Date': '09/01/15',
    'Close': 33.139999
  },
  {
    'Date': '08/01/15',
    'Close': 33.669998
  },
  {
    'Date': '07/01/15',
    'Close': 33.029999
  },
  {
    'Date': '06/01/15',
    'Close': 32.93
  },
  {
    'Date': '05/01/15',
    'Close': 33.41
  },
  {
    'Date': '02/01/15',
    'Close': 33.48
  },
  {
    'Date': '31/12/14',
    'Close': 33.610001
  },
  {
    'Date': '30/12/14',
    'Close': 33.59
  },
  {
    'Date': '29/12/14',
    'Close': 34.09
  },
  {
    'Date': '26/12/14',
    'Close': 33.59
  },
  {
    'Date': '24/12/14',
    'Close': 33.52
  },
  {
    'Date': '23/12/14',
    'Close': 34
  },
  {
    'Date': '22/12/14',
    'Close': 33.189999
  },
  {
    'Date': '19/12/14',
    'Close': 33.529999
  },
  {
    'Date': '18/12/14',
    'Close': 34.029999
  },
  {
    'Date': '17/12/14',
    'Close': 33.759998
  },
  {
    'Date': '16/12/14',
    'Close': 32.02
  },
  {
    'Date': '15/12/14',
    'Close': 32.34
  },
  {
    'Date': '12/12/14',
    'Close': 33.02
  },
  {
    'Date': '11/12/14',
    'Close': 33.52
  },
  {
    'Date': '10/12/14',
    'Close': 34.150002
  },
  {
    'Date': '09/12/14',
    'Close': 34.740002
  },
  {
    'Date': '08/12/14',
    'Close': 33.990002
  },
  {
    'Date': '05/12/14',
    'Close': 33.310001
  },
  {
    'Date': '04/12/14',
    'Close': 32.790001
  },
  {
    'Date': '03/12/14',
    'Close': 32.529999
  },
  {
    'Date': '02/12/14',
    'Close': 33.59
  },
  {
    'Date': '01/12/14',
    'Close': 34.049999
  },
  {
    'Date': '28/11/14',
    'Close': 35.389999
  },
  {
    'Date': '26/11/14',
    'Close': 35.5
  },
  {
    'Date': '25/11/14',
    'Close': 35.799999
  },
  {
    'Date': '24/11/14',
    'Close': 36.689999
  },
  {
    'Date': '21/11/14',
    'Close': 36.189999
  },
  {
    'Date': '20/11/14',
    'Close': 36.040001
  },
  {
    'Date': '19/11/14',
    'Close': 35.889999
  },
  {
    'Date': '18/11/14',
    'Close': 36.860001
  },
  {
    'Date': '17/11/14',
    'Close': 36.869999
  },
  {
    'Date': '14/11/14',
    'Close': 37
  },
  {
    'Date': '13/11/14',
    'Close': 36.689999
  },
  {
    'Date': '12/11/14',
    'Close': 35.41
  },
  {
    'Date': '11/11/14',
    'Close': 36.369999
  },
  {
    'Date': '10/11/14',
    'Close': 36.52
  },
  {
    'Date': '07/11/14',
    'Close': 36.700001
  },
  {
    'Date': '06/11/14',
    'Close': 36.290001
  },
  {
    'Date': '05/11/14',
    'Close': 36.419998
  },
  {
    'Date': '04/11/14',
    'Close': 36.509998
  },
  {
    'Date': '03/11/14',
    'Close': 34.939999
  },
  {
    'Date': '31/10/14',
    'Close': 35.630001
  },
  {
    'Date': '30/10/14',
    'Close': 34.450001
  },
  {
    'Date': '29/10/14',
    'Close': 34.32
  },
  {
    'Date': '28/10/14',
    'Close': 33.849998
  },
  {
    'Date': '27/10/14',
    'Close': 33.060001
  },
  {
    'Date': '24/10/14',
    'Close': 32.110001
  },
  {
    'Date': '23/10/14',
    'Close': 31.700001
  },
  {
    'Date': '22/10/14',
    'Close': 30.02
  },
  {
    'Date': '21/10/14',
    'Close': 30.200001
  },
  {
    'Date': '20/10/14',
    'Close': 31.200001
  },
  {
    'Date': '17/10/14',
    'Close': 30.66
  },
  {
    'Date': '16/10/14',
    'Close': 30.17
  },
  {
    'Date': '15/10/14',
    'Close': 27.5
  },
  {
    'Date': '14/10/14',
    'Close': 29.84
  },
  {
    'Date': '13/10/14',
    'Close': 27.25
  },
  {
    'Date': '10/10/14',
    'Close': 29.049999
  },
  {
    'Date': '09/10/14',
    'Close': 30.1
  }
];