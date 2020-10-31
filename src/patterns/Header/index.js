import { Topbar } from './styles';
import { ArrowLeft } from 'react-feather';

import avatar from '../../assets/Ackyla2.png';

export default function Header() {
  return (
    <Topbar>
      <a href="/">
        <ArrowLeft />
        Back
      </a>
      <span>Checkout</span>
      <img src={avatar} alt="User avatar"/>
    </Topbar>
  )
}