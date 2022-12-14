// import { liff, Liff } from "@line/liff";
// import type { NextPage } from "next";
// import Head from "next/head";
// import styles from "../styles/Home.module.css";
// import { useState, useEffect } from "react";

// const Home: NextPage = () => {
//   const [liffObject, setLiffObject] = useState<Liff | null>(null);
//   const [liffError, setLiffError] = useState<string | null>(null);
//   const [idToken, setIdToken] = useState<string | null>(null);

//   // Execute liff.init() when the app is initialized
//   useEffect(() => {
//     // to avoid `window is not defined` error
//     import("@line/liff")
//       .then((liff) => liff.default)
//       .then((liff) => {
//         console.log("LIFF init...");
//         liff
//           .init({ liffId: "1657398058-zj1emPvP" })
//           .then(() => {
//             console.log("LIFF init succeeded.");
//             setLiffObject(liff);
//             setIdToken(liff.getIDToken());
//           })
//           .catch((error: Error) => {
//             console.log("LIFF init failed.");
//             setLiffError(error.toString());
//           });
//       });
//   }, []);

//   const getUserInfo = () => {
//     liff.getProfile().then(profile => {
//       alert(JSON.stringify(profile))
//     }).catch((error) => {})
//   }

//   return (
//     <div>
//       <Head>
//         <title>LIFF App</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1>create-liff-app</h1>
//         {liffObject && (
//           <>
//             <p>LIFF init succeeded.</p>
//             <p>IDトークン:{idToken}</p>
//           </>
//         )}
//         {liffError && (
//           <>
//             <p>LIFF init failed.</p>
//             <p>
//               <code>{liffError}</code>
//             </p>
//           </>
//         )}
//         <a
//           href="https://developers.line.biz/ja/docs/liff/"
//           target="_blank"
//           rel="noreferrer"
//         >
//           LIFF Documentation
//         </a>
//       </main>
//     </div>
//   );
// };

// export default Home;

import liff from '@line/liff'
import React from 'react'
import ReactDOM from 'react-dom'
import Head from "next/head";
import styles from "../styles/Home.module.css";

  liff
  .init({ liffId: '1657398058-zj1emPvP' })
  .then(() => {
    ReactDOM.render(
      <div>
       <Head>
         <title>LIFF App</title>
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <link rel="icon" href="/favicon.ico" />
       </Head>

       <main className={styles.main}>
         <h1>create-liff-app</h1>
        
             <p>LIFF init succeeded.</p>
             <p>IDトークン:{liff.getIDToken()}</p>
         
         <a
           href="https://developers.line.biz/ja/docs/liff/"
           target="_blank"
           rel="noreferrer"
         >
           LIFF Documentation
         </a>
       </main>
     </div>
      ,
      document.getElementById('root')
    )
  })
  .catch((e) => {
    alert(`LIFF error: ${e.message}`)
  })