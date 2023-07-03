import logo from "./logo.svg";
import "./App.css";

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
    degree: "Btech"
  } 
}

export function Details() {
  return(
    <>
    {person.name}
    {person.graduate.college}
    </>
  )
}
export default App;
