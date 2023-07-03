import logo from "./logo.svg";
import "./App.css";
import { people } from "./data.js";

function App() {
  let name = "Amazing Scientist";
  return (
    <div className="App">
      <div className="App-header">
        <section>
          {name}
          <Profile />
          <Profile />
          <Profile />
          <Profile />
          <PassingProp />
          <PackingList />
          <ListItems />
          <Demo />
        </section>
      </div>
    </div>
  );
}

function Demo() {
  return (
    <div className="App">
      <div className="App-header">demo</div>
    </div>
  );
}

export function Profile() {
  return (
    <>
      <img src="https://placebeard.it/640x360" />
    </>
  );
}

const person = {
  name: "Harsh",
  age: 23,
  graduate: {
    college: "B N M Institute of Technology",
    degree: "Btech",
  },
};

export function Details() {
  return (
    <>
      {person.name}
      {person.graduate.college}
    </>
  );
}

export function PassingProp() {
  return (
    <Card>
      <Avatar
        size={100}
        people={{
          name: "katsuko",
          imageId: "nvv459gnre",
        }}
      />
    </Card>
  );
}

function Avatar({ people, size }) {
  return (
    <>
      <p>People of name {people.name}</p>
      <li>size = {size}</li>
    </>
  );
}

function Card({ children }) {
  return <div className="card">{children}</div>;
}

// * Conditional Rendering

function Item({ isPacked, name }) {
  return (
    <li className="item">
      {name} {isPacked && "tick"}
    </li>
  );
}

function PackingList() {
  return (
    <section>
      <h1>Sally rides on Bike</h1>
      <ul>
        <Item isPacked={true} name="Sweet Salty" />
        <Item isPacked={true} name="Bahama Pants" />
        <Item isPacked={false} name="Liquid vapour" />
      </ul>
    </section>
  );
}

// * Conditional rendering finish

// * Rendering List

function ListItems() {
  const listItem = people.map(person => {
    <li key={person.id}>
      <p>
        {person.name}:{" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </li>;
  });
  return (
    <>
      <h1>Scientist</h1>
      <ul>{listItem}</ul>
    </>
  );
}

// * Rendering List

export default App;
