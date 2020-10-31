import { Main, CardContainer } from './styles';
import ActionButton from '../../components/ActionButton';

import shoe from '../../assets/shoes.png';

export default function Card() {
  return (
    <Main>
      <CardContainer>
        <img src={shoe} alt=""/>

        <p>SW Sneakers</p>

        <section>
          <label htmlFor="size">Size</label>
          <select name="size" id="size">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          
          <label htmlFor="quantity">Quantity</label>
          <select name="quantity" id="quantity">
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
            </select>
        </section>

        <span>$ 100.00</span>

        <ActionButton />
      </CardContainer>

      <CardContainer>
        <img src={shoe} alt=""/>

        <p>SW Sneakers</p>

        <section>
          <label htmlFor="size">Size</label>
          <select name="size" id="size">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          
          <label htmlFor="quantity">Quantity</label>
          <select name="quantity" id="quantity">
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
            </select>
        </section>

        <span>$ 100.00</span>

        <ActionButton />
      </CardContainer>

      <CardContainer>
        <img src={shoe} alt=""/>

        <p>SW Sneakers</p>

        <section>
          <label htmlFor="size">Size</label>
          <select name="size" id="size">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          
          <label htmlFor="quantity">Quantity</label>
          <select name="quantity" id="quantity">
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
            </select>
        </section>

        <span>$ 100.00</span>

        <ActionButton />
      </CardContainer>

      <CardContainer>
        <img src={shoe} alt=""/>

        <p>SW Sneakers</p>

        <section>
          <label htmlFor="size">Size</label>
          <select name="size" id="size">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          
          <label htmlFor="quantity">Quantity</label>
          <select name="quantity" id="quantity">
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
            </select>
        </section>

        <span>$ 100.00</span>

        <ActionButton />
      </CardContainer>
    </Main>
  )
}