import './App.css';
import {Character} from "./components/Character";

const App = () => {

  const img1 = "https://rickandmortyapi.com/api/character/avatar/1.jpeg";
  const img2 = "https://rickandmortyapi.com/api/character/avatar/2.jpeg";
  const img3 = "https://rickandmortyapi.com/api/character/avatar/3.jpeg";
  const img4 = "https://rickandmortyapi.com/api/character/avatar/4.jpeg";
  const img5 = "https://rickandmortyapi.com/api/character/avatar/5.jpeg";
  const img6 = "https://rickandmortyapi.com/api/character/avatar/6.jpeg";


  return (
      <div className="App">
        <Character id={1} name={'Rick Sanchez'} status={"Alive"} species={"Human"} gender={"Male"} image={img1}/>
        <Character id={2} name={"Morty Smith"} status={"Alive"} species={"Human"} gender={"Male"} image={img2}/>
        <Character id={3} name={"Summer Smith"} status={"Alive"} species={"Human"} gender={"Female"} image={img3}/>
        <Character id={4} name={"Beth Smith"} status={"Alive"} species={"Human"} gender={"Female"} image={img4}/>
        <Character id={5} name={"Jerry Smith"} status={"Alive"} species={"Human"} gender={"Male"} image={img5}/>
        <Character id={6} name={"Abadango Cluster Princess"} status={"Alive"} species={"Alien"} gender={"Female"} image={img6}/>
      </div>
  );
}

export default App;
