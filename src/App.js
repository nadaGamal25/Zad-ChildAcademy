import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import MainPage from './Components/MainPage/MainPage';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import About from './Components/About/About';
import Account from './Components/Account/Account';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';

function App() {

  let routers =createBrowserRouter([
    {path:'/',element:<Layout/> ,children:[
      {index:true,element:<MainPage/>},
      {path:'register',element:<RegisterForm/>},
      {path:'about',element:<About/>},
      {path:'account',element:<Account/>},
      {path:'admin',element:<AdminDashboard/>},
    ]}
  ])
  return (
    <>
    <RouterProvider  router={routers}/> 

    </>
  );
}

export default App;
