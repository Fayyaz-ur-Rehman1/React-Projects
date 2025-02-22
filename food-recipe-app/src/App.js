import './App.css';
import MainPage from './Components/MainPage';
import { Route, Routes } from 'react-router-dom';
import MealInfo from './Components/MealInfo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/:mealid' element={<MealInfo />} />
      </Routes>
    </div>
  );
}

export default App;
