// "use client";
// /** @jsxImportSource @emotion/react */
// import styled from "@emotion/styled";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';
// import styles from '../styles/BTCPricePredictor.module.css';
// import CryptoSelector from './CryptoSelector';

// const Main = styled.div
//   display: flex;
//   align-items: flex-start;
//   gap: 20px;
//   width: 100%;
//   background: var(--Zeb_Solid-BG_Blue, #222245);
//   box-shadow: 0px 7px 7px -2px rgba(97, 79, 79, 0.14);
//   padding: 20px;
//   box-sizing: border-box;
// ;

// const Graph = styled.div
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   max-width: 47.5rem;
//   padding: 1rem;
//   border-radius: 0.5rem;
//   background: var(--blue-02-dark-blue, #181837);
// ;

// const PredictionCards = styled.div
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   padding: 1rem;
//   border-radius: 0.5rem;
//   background: var(--Zeb_Solid-BG_Blue, #222245);
//   gap: 1rem;
// ;

// const Field = styled.div
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   gap: 0.5rem;
// ;
// const Heading = styled.div
//   color: white;
// ;

// const FieldRow = styled.div
//   display: flex;
//   width: 100%;
//   gap: 0.5rem;
// ;

// const InputWrapper = styled.div
//   display: flex;
//   align-items: center;
//   width: 100%;
//   padding: 0.5rem;
//   border-radius: 0.5rem;
//   background: var(--blue-02-dark-blue, #181837);
//   box-sizing: border-box;
// ;

// const SelectWrapper = styled.div
//   display: flex;
//   align-items: center;
//   width: 100%;
//   padding: 0.5rem;
//   border-radius: 0.5rem;
//   background: var(--blue-02-dark-blue, #181837);
//   box-sizing: border-box;

//   select {
//     width: 100%;
//     border: none;
//     background: transparent;
//     color: #fff;
//     appearance: none;
//     -webkit-appearance: none;
//     -moz-appearance: none;
//   }

//   option {
//     color: #000;
//   }
// ;

// const ButtonWrapper = styled.div
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   padding: 0.5rem;
//   border-radius: 0.5rem;
//   background: var(--Zeb_Solid-Grey, #C2C2DD);
//   box-sizing: border-box;
// ;

// const Component15 = styled.div
//   display: flex;
//   height: auto;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.75rem;
//   align-self: stretch;
//   border-radius: 0.5rem;
//   background: var(--Shimmer-DarkBlue_Shimmer, linear-gradient(97deg, #34345A -40.76%, #19193A 135.88%));
//   padding: 1rem;
// ;

// const Rightsidecards = styled.div
//   display: flex;
//   width: 19.5rem;
//   height: 39.75rem;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 1rem;
// ;

// const Breakdown = styled.div
//   display: flex;
//   padding: 1rem;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: flex-start;
//   flex: 1 0 0;
//   align-self: stretch;
//   border-radius: 0.5rem;
//   background: var(--blue-02-dark-blue, #181837);
// ;

// const CurrentValue = styled.div
//   display: flex;
//   padding: 1rem;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 1.25rem;
//   align-self: stretch;
//   border-radius: 0.5rem;
//   background: var(--Zeb_Gradient-Dark_Blue, linear-gradient(254deg, #4a62ca -43.42%, #1b264b 148.58%));
// ;

// const Roww = styled.div
//   display: flex;
//   align-items: flex-start;
// ;

// const Coll = styled.div
//   display: flex;
// ;

// const Headercontent = styled.div
//   width: 3.375rem;
//   height: 3.375rem;
//   fill: var(--Shimmer-Gradient_Shimmer, linear-gradient(90deg, rgba(233, 239, 246, 0.1) 0%, rgba(207, 207, 207, 0.02) 99.74%));
// ;

// const Headercontent1 = styled.div
//   display: flex;
//   height: 1.25rem;
//   justify-content: center;
//   align-items: center;
//   gap: 0.25rem;
//   align-self: stretch;
//   border-radius: 0.25rem;
//   background: var(--Shimmer-Gradient_Shimmer, linear-gradient(90deg, rgba(233, 239, 246, 0.10) 0%, rgba(207, 207, 207, 0.02) 99.74%));
// ;

// const Frame461 = styled.div
//   display: flex;
//   width: 11.875rem;
//   height: 1.5rem;
//   align-items: center;
//   gap: 0.25rem;
//   border-radius: 0.25rem;
//   background: var(--Shimmer-DarkBlue_Shimmer, linear-gradient(97deg, #34345A -40.76%, #19193A 135.88%));
// ;

// const Component15a = styled.div
//   display: flex;
//   height: 18.875rem;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.75rem;
//   align-self: stretch;
//   border-radius: 0.5rem;
//   background: var(--Shimmer-DarkBlue_Shimmer, linear-gradient(97deg, #34345A -40.76%, #19193A 135.88%));
// ;

// const Front = styled.div
//   display: flex;
//   align-items: flex-start;
//   gap: 1.25rem;
//   align-self: stretch;
// ;

// const Component15b = styled.div
//   display: flex;
//   height: 8.875rem;
//   flex-direction: column;
//   align-items: center;
//   gap: 0.75rem;
//   align-self: stretch;
//   border-radius: 0.5rem;
//   background: var(--Shimmer-DarkBlue_Shimmer, linear-gradient(97deg, #34345A -40.76%, #19193A 135.88%));
// ;

// interface ChartDataPoint {
//   x: string;
//   y: number;
// }

// const BTCPricePredictor: React.FC = () => {
//   const [historicalData, setHistoricalData] = useState<Array<number[]>>([]);
//   const [investmentAmount, setInvestmentAmount] = useState<string>('0 INR');
//   const [timeframe, setTimeframe] = useState<string>('2'); 
//   const [crypto, setCrypto] = useState<string>('bitcoin'); 

//   useEffect(() => {
//     fetchHistoricalData();
//   }, [crypto, timeframe]);

//   const fetchHistoricalData = async () => {
//     try {
//       const response = await axios.get(
//         https://api.coingecko.com/api/v3/coins/${crypto}/market_chart,
//         {
//           params: {
//             vs_currency: 'inr',
//             days: timeframe, 
//           },
//         }
//       );
//       setHistoricalData(response.data.prices);
//     } catch (error) {
//       console.error('Error fetching data from CoinGecko:', error);
//     }
//   };

//   const data = {
//     labels: historicalData.map((price) =>
//       new Date(price[0]).toLocaleString()
//     ),
//     datasets: [
//       {
//         label: 'Price (INR)',
//         data: historicalData.map((price) => price[1]),
//         fill: false,
//         borderColor: 'rgba(75, 192, 192, 1)',
//         borderWidth: 2,
//         pointRadius: 0, // Remove the dots
//       },
//     ],
//   };

//   return (
//     <Main>
//       <Graph>
//         <PredictionCards>
//           <Heading>
//             <h3>Predict BTC Price</h3>
//           </Heading>
//           <form className={styles.form}>
//             <CryptoSelector crypto={crypto} setCrypto={setCrypto} />
//           </form>
//           <FieldRow>
//             <Field>
//               <InputWrapper>
//                 <input
//                   type="text"
//                   className={styles.input}
//                   value={investmentAmount}
//                   placeholder="0 INR"
//                   onFocus={(e) => setInvestmentAmount('')}
//                   onChange={(e) => setInvestmentAmount(e.target.value)}
//                   style={{ width: '100%', border: 'none', background: 'transparent', color: '#fff' }}
//                 />
//               </InputWrapper>
//             </Field>
//             <Field>
//               <SelectWrapper>
//                 <select
                  
//                   value={timeframe}
//                   onChange={(e) => setTimeframe(e.target.value)}
//                 >
//                   <option value="2" disabled>Select Timeframe</option>
//                   <option value="1">1 Day</option>
//                   <option value="7">7 Days</option>
//                   <option value="30">30 Days</option>
//                   <option value="365">1 Year</option>
//                 </select>
//               </SelectWrapper>
//             </Field>
//           </FieldRow>
//           <ButtonWrapper>
//             <button type="button" className={styles.button} style={{ width: '100%', padding: '0.5rem', border: 'none', background: 'transparent', color: '#fff' }}>
//               PREDICT BTC FUTURE PRICE
//             </button>
//           </ButtonWrapper>
//         </PredictionCards>
//         <Component15>
//           <div className={styles.chart}>
//             <Line data={data} />
//           </div>
//         </Component15>
//       </Graph>
//       <Rightsidecards>
//         <Breakdown>
//           <CurrentValue>
//             <Roww>
//               <Headercontent>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="54"
//                   height="54"
//                   viewBox="0 0 54 54"
//                   fill="none"
//                 >
//                   <rect
//                     width="54"
//                     height="54"
//                     rx="4"
//                     fill="url(#paint0_linear_2440_501784)"
//                   />
//                   <defs>
//                     <linearGradient
//                       id="paint0_linear_2440_501784"
//                       x1="0"
//                       y1="0"
//                       x2="54.2083"
//                       y2="0.352339"
//                       gradientUnits="userSpaceOnUse"
//                     >
//                       <stop stop-color="#E9EFF6" stop-opacity="0.1" />
//                       <stop
//                         offset="1"
//                         stop-color="#CFCFCF"
//                         stop-opacity="0.02"
//                       />
//                     </linearGradient>
//                   </defs>
//                 </svg>
//               </Headercontent>
//               <Coll>
//                 <Headercontent1></Headercontent1>
//                 <Headercontent1></Headercontent1>
//               </Coll>
//             </Roww>
//           </CurrentValue>
//           <Frame461></Frame461>
//           <Component15a></Component15a>
//           <Component15b></Component15b>
//         </Breakdown>
//       </Rightsidecards>
//     </Main>
//   );
// };

// export default BTCPricePredictor;