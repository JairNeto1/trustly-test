import { Form } from './styles';
import { Search } from 'react-feather';


export default function SearchBar() {
  return (
    <Form>
      <label htmlFor="search" />
      <Search />
      <input name="search" id="search" placeholder="Search for your sneaker" />
    </Form>
  )
}