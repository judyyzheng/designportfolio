import logo from './logo.svg';
import './App.css';
import GirlOnTrain from './assets/projects/girltrain.png';

import Button from './components/Button/Button.tsx';
import Card from './components/Card/Card.tsx';

function App() {
  return (
    <div className="App">
      <Button label="Hello world!"/>
      <Card title="Hello world!" image={GirlOnTrain} desciption={['this is line #1', 'this is line #2', 'this is line #3']}/>
    </div>
  );
}

export default App;
