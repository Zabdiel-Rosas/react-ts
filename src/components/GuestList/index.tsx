import { TGuest } from '../../types'
import { IProps } from './types'
import './styles.css'

const GuestsList = ({ guests }: IProps<TGuest>) => {
  return (
    <ul>
      {guests?.map((guest, index) => (
        <li key={index} className='guest-card'>
          <img
            className='guest-pitcture'
            src={guest.img}
            alt='Guest Picture'
          />
          <div className='guest-info'>
            <p className='guest-text'>{guest.name}</p>
            <p className='guest-text'>{guest.age}</p>
            {guest.note && <p className='guest-text'>{guest.note}</p>}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default GuestsList
