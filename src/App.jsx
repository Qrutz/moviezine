import React, {createContext} from 'react';
import Navigation from './Components/navigation';
import "./index.css";


export const MovieContext = createContext()

export default function App() {
 
  return (
      <div className="main"
      >
        <Navigation />
      </div>
  )
  }