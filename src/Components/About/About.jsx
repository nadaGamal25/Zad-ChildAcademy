import React,{useEffect,useState} from 'react'
import AboutContent from '../AboutContent/AboutContent'
import LoadingPage from '../LoadingPage';

export default function About() {
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
   <AboutContent/>
      )}
    </>
  )
}
