import React,{useEffect,useState} from 'react'
import LoadingPage from '../LoadingPage';
import TheFormRegister from '../TheFormRegister/TheFormRegister'

export default function RegisterForm() {
  const [loading, setLoading] = useState(true); 
  const timeoutId= useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
    
  return (
    <>
    {loading ? (
        <LoadingPage />
      ) : (
    <div className="container py-5 register-container">
        <li className="h2">التسجيل الالكتروني المباشر</li>
        <TheFormRegister/>
    </div>)}
    </>
  )
}
