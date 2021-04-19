// import React, { createContext, useContext, useState } from 'react'

// const contentContext = createContext()

// export const contentContextProvider = ({ children }) => {
//   const { content, setContent } = useState(['hello'])

//   useEffect(async () => {
//     let res = await fetch('http://localhost:1337/posts')
//     let data = await res.json()
//     console.log(data)
//     await setContent(data)
//   })

//   return <ContentContext.Provider>{children}</ContentContext.Provider>
// }

// import { createContext, useContext, useState } from 'react';

// const ContentContext = createContext();

// export function AppWrapper({ children }) {
//     const [content, setContent] = useState[]

//   return (
//     <ContentContext.Provider value={sharedState}>
//       {children}
//     </ContentContext.Provider>
//   );
// }

// export function useContentContext() {
//   return useContext(ContentContext);
// }
