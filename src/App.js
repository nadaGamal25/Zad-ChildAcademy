import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import MainPage from './Components/MainPage/MainPage';
import RegisterForm from './Components/RegisterForm/RegisterForm';
import About from './Components/About/About';
import AdminDashboard from './Components/AdminDashboard/AdminDashboard';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import ErrorBoundary from './Components/ErrorBoundary';
import Requirements from './Components/Requirements/Requirements';
import Programmes from './Components/Programmes/Programmes';
import Zad from './Components/Zad/Zad';
import Qtouf from './Components/Qtouf/Qtouf';
import LoginStudent from './Components/LoginStudent/LoginStudent';
import LoginAdmin from './Components/LoginAdmin/LoginAdmin';
import Logout from './Components/LoginAdmin/Logout ';
import { useState } from 'react';
import { useEffect } from 'react';
import LoadingPage from './Components/LoadingPage';
function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true); // set initial value to true
  const timeoutId= useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  
 
  let routers =createBrowserRouter([
    {path:'/',element:<Layout/> ,children:[
      {index:true,element:<ErrorBoundary><MainPage/></ErrorBoundary> },
      {path:'register',element:<ErrorBoundary><RegisterForm/></ErrorBoundary>},
      {path:'about',element:<ErrorBoundary><About/></ErrorBoundary>},
      {path:'requirements',element:<ErrorBoundary><Requirements/></ErrorBoundary>},
      {path:'programmes',element:<ErrorBoundary><Programmes/></ErrorBoundary>},
      {path:'zad',element:<ErrorBoundary><Zad/></ErrorBoundary>},
      {path:'qtouf',element:<ErrorBoundary><Qtouf/></ErrorBoundary>},
      {path:'loginStudent',element:<ErrorBoundary><LoginStudent/></ErrorBoundary>},
      {path:'adminDashboard',element:<ErrorBoundary><AdminDashboard setToken={setToken} /></ErrorBoundary>},
      {path:'loginAdmin',element:<ErrorBoundary><LoginAdmin setToken={setToken} /></ErrorBoundary>},
      {path:'logout',element:<ErrorBoundary><Logout setToken={setToken} token={token} /></ErrorBoundary>},
      // {
      //   path: "loginAdmin",
      //   element: !token ? (
      //     <ErrorBoundary><LoginAdmin setToken={setToken} /></ErrorBoundary>
      //   ) : (
      //     <ErrorBoundary>
      //       <AdminDashboard />
      //       <Logout setToken={setToken} />
      //     </ErrorBoundary>
      //   ),
      // },
      {path:'*', element:<PageNotFound/>}
    ]}
  ])
  return (
    <>
    <div>
      {loading ? (
        <LoadingPage />
      ) : (
        <RouterProvider router={routers} />
      )}
    </div>
    </>
  );
}

export default App;
