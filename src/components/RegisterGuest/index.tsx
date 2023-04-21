import { useState } from 'react'
// Types
import { TGuest } from '../../types'
import { IProps } from './types'
// Styles
import './styles.css'

const RegisterGuest = ({ list, setList }: IProps<TGuest>) => {
  const [guest, setGuest] = useState<TGuest>({
    name: '',
    age: 0,
    img: '',
  })

  const handleChange = (name: string, value: string | number) => {
    const _nextState = {
      ...guest,
      [name]: value,
    }
    setGuest(_nextState)
  }

  return (
    <form className='registration-form'>
      <input
        className='rg-input'
        type='text'
        placeholder='Name'
        name='name'
        onChange={({ target: { name, value } }) => handleChange(name, value)}
        value={guest.name}
      />
      <input
        className='rg-input'
        type='text'
        placeholder='Age'
        name='age'
        onChange={({ target: { name, value } }) =>
          handleChange(name, +value)
        }
        value={guest.age || ''}
      />
      <input
        className='rg-input'
        type='text'
        placeholder='Picture'
        name='img'
        onChange={({ target: { name, value } }) => handleChange(name, value)}
        value={guest.img}
      />
      <button className='register-button'>Register</button>
    </form>
  )
}

export default RegisterGuest
