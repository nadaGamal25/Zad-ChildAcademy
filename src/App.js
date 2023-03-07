import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import MainPage from './Components/MainPage/MainPage';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import About from './Components/About/About';
import Account from './Components/Account/Account';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ErrorBoundary from './Components/ErrorBoundary';
import Requirements from './Components/Requirements/Requirements';
import Programmes from './Components/Programmes/Programmes';
import Zad from './Components/Zad/Zad';
import Qtouf from './Components/Qtouf/Qtouf';

function App() {

  let routers =createBrowserRouter([
    {path:'/',element:<Layout/> ,children:[
      {index:true,element:<ErrorBoundary><MainPage/></ErrorBoundary> },
      {path:'register',element:<ErrorBoundary><RegisterForm/></ErrorBoundary>},
      {path:'about',element:<ErrorBoundary><About/></ErrorBoundary>},
      {path:'account',element:<ErrorBoundary><Account/></ErrorBoundary>},
      {path:'admin',element:<ErrorBoundary><AdminDashboard/></ErrorBoundary>},
      {path:'requirements',element:<ErrorBoundary><Requirements/></ErrorBoundary>},
      {path:'programmes',element:<ErrorBoundary><Programmes/></ErrorBoundary>},
      {path:'zad',element:<ErrorBoundary><Zad/></ErrorBoundary>},
      {path:'qtouf',element:<ErrorBoundary><Qtouf/></ErrorBoundary>},
      {path:'*', element:<PageNotFound/>}
    ]}
  ])
  return (
    <>
    <RouterProvider  router={routers}/> 

    </>
  );
}

export default App;
