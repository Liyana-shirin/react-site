import 'bootstrap/dist/css/bootstrap.min.css';

// // import LandingPage from '../src/components/pages/landingpage';
// // import Ecommerce from './components/pages/Ecommerce';
// // import  contactForm from "./components/pages/contactform";
// import LearnState from "./components/pages/todolist";
// import { createContext, useState } from "react"
// import Context from './components/pages/context';

// export const CounterContext = createContext()
// const App = () => {
    
//     const [counter ,setCounter] = useState(0)

//     const contextValues = {
//         counter ,setCounter 

//     }

//     return (
//         <div>
//             {/* <LandingPage /> */}
//             {/* <Ecommerce></Ecommerce> */}
//             {/* <contactForm></contactForm> */}
//             {/* <contactForm/> */}
//             {/* <LearnState/> */}
//             <CounterContext.Provider value ={contextValues}>
//         <Context/>
//     </CounterContext.Provider>
         
// l        </div>
//     );
// };


// export default App;



import ShopPage from './components/pages/shop';
import { CartProvider } from './components/pages/Providers/Cart';
import { CounterProvider } from './components/pages/Providers/countpro';
import { Toaster } from 'react-hot-toast';

const App = () => {

    return <CounterProvider>
       <CartProvider>
          <ShopPage>
            <Toaster position="top-right"> </Toaster>
          </ShopPage>
          </CartProvider> 
          </CounterProvider>
    
   
}

export default App