import { Form } from "./styles";
import { Search } from "react-feather";

export default function SearchBar({ fn }) {
  return (
    <Form>
      <label htmlFor="search" />
      <Search />
      <input
        name="search"
        id="search"
        placeholder="Search for your sneaker"
        onChange={fn}
      />
    </Form>
  );
}
