import { useState } from 'react'
// Components
import GuestsList from './components/GuestList'
import RegisterGuest from './components/RegisterGuest'
// Styles
import './styles/App.css'
// Types
import { TGuest } from './types'

function App() {
  const [guests, setGuests] = useState<TGuest[]>([])

  return (
    <div className='container'>
      <h1>List of People Invited to my Party</h1>
      <GuestsList guests={guests}/>
      <RegisterGuest list={guests} setList={setGuests} />
    </div>
  )
}

export default App
