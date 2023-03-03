import { useState, useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import { apiConfigeration } from './store/homeslice';

function App() {
  const { url } = useSelector((state) => state.home);
  const dispatch = useDispatch();
  console.log(url);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi('/movie/popular').then((res) => {
      console.log(res);
      dispatch(apiConfigeration(res));
    });
  };
  return <div className='App'>{url ? url.total_pages : ''}</div>;
}

export default App;
