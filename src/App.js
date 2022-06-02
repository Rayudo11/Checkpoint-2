import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBusinessesData } from './store/business-actions';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar'
import Router from './Router'
import './App.css';



function App() {
      const dispatch = useDispatch()
      const {businesses} = useSelector(state => state.businesses)
      
  
      useEffect(() => {
        if(businesses.length === 0){
          dispatch(fetchBusinessesData())
        }
        
         console.log('dispatch')
      },[dispatch, businesses])

  return (
    <BrowserRouter>
      <NavBar/>
      <main style= {{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }}>
{console.log(businesses, 'state')}
        <Router/>
      </main>
    </BrowserRouter>
  );
}

export default App;
