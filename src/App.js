import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import Carddetails from './components/CardDetails';
import Createcard from './components/CreateCard';
import Navbar from './components/Navbar';
import CardList from './screen/CardList';
import LatestCardList from './components/LatestCardList';


function App() {
  return (
    <div className='container'>



      <BrowserRouter>

        <Navbar />
        <Route path="/" exact component={CardList} />
        <Route path="/create" exact component={Createcard} />
        <Route path="/try" exact component={LatestCardList} />
        <Route path="/detail/:id" exact component={Carddetails} />
      </BrowserRouter>



    </div>
  );
}

export default App;
