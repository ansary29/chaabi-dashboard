import './App.css';
import AreaGraphCard from './components/organisms/AreaGraph/AreaGraphCard';
import Header from './components/organisms/Header/Header';
import SideNav from './components/organisms/SideNav/SideNav';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {
  return (
    <div className=" App">
      <SideNav />
      <div>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
