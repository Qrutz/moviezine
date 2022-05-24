import React, {createContext} from 'react';
import Navigation from './Components/navigation';

export const MovieContext = createContext()

export default function App() {
 
  return (
      <div>
        <Navigation />
      </div>
  )
  }