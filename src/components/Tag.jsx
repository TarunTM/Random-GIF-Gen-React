import React, {useState } from 'react'
import Spinner from './Spinner'

import useGif from '../hooks/useGif';


// const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

const Tag = () => {

  // const [loading,setLoading] = useState(false);
  // const [gif,setGif] = useState();
  const [tag,setTag] = useState('Virat Kohli');
  const {gif ,loading , fetchData} = useGif(tag);

  // async function fetchData() {
    
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const {data} = await axios.get(url);
  //     // console.log(output);
  //     const imageSource = data.data.images.downsized_large.url;
  //     console.log(imageSource);
  //     setGif(imageSource);
  //     setLoading(false);
  // }

  // useEffect( () => {
  //   fetchData();
  // }, []);

  return (
    <div className='w-1/2 bg-blue-500 rounded-xl border border-black flex flex-col items-center gap-5 mt-10'>
      <h1 className='text-2xl font-bold underline mt-3 uppercase' >RANDOM {tag} GIF</h1>
        {
          loading ? ( <Spinner/> ) : (<img src={gif}></img>)
        }
        
        <input className='w-10/12 py-2 rounded-lg text-center' onChange={(event) => setTag(event.target.value)} value={tag}></input>
        <button 
        className='bg-white opacity-70 w-10/12 py-2 rounded-lg mb-4'    
        onClick={() => fetchData(tag)}>Generate</button>
    </div>
  )
}

export default Tag