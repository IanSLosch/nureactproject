import { baseUrl } from "../baseUrl"
import { debounce } from "../../../utils/debounce"

export const fetchCardData = async (inputValue) => {
  const res = await fetch(baseUrl + '/cards/named?fuzzy=' + inputValue, {
    method: 'get',
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })

  const data = await res.json()
  return data
}


// *********  old code **************************

// import { useState, useEffect } from 'react';
// import { baseUrl } from '../baseUrl';

// const FetchSF = () => {

//   const [cardData, setCardData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(baseUrl + '/cards/random')
//       const cardData = await response.json()
//       setCardData(cardData)
//       console.log("***" + response)
//     }
//     fetchData()
//   }, [])

//   return (
//     <>
//       {cardData && cardData.stringify()}
//     </>
//   )

// }

// export default FetchSF

// // if (!response.ok) {
//     //     return Promise.reject('Unable to fetch, status: ' + response.status)
//     // }
//     // const data = await response.json()
//     // return data


// // fetch(baseUrl + '/cards/random')
// //   .then(response => response.json())
// //   .then(data => setCardData(data))
// //   .catch(error => console.error(error));