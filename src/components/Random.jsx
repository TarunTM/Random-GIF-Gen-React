
import Spinner from './Spinner.jsx';
import useGif from '../hooks/useGif.jsx';


// const API_KEY = import.meta.env.VITE_REACT_APP_GIPHY_API_KEY;

const Random = () => {

  const {gif ,loading ,fetchData} = useGif();
  // const [gif,setGif] = useState();
  // const [loading,setLoading] =useState(false);

  // async function fetchData(){
  
  //     setLoading(true);
  //     const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //     const {data} = await axios.get(url);
  //     // console.log(response.data);
  //     const imageSource = data.data.images.downsized_large.url;
  //     // console.log(imageSource);
  //     setGif(imageSource);
  //     setLoading(false);
   
  // }
  


  // useEffect(() => {
  //   fetchData();
  //   console.log('API_KEY:', import.meta.env.VITE_REACT_APP_GIPHY_API_KEY);
  // }, []);

  return (
    <div className='w-1/2 bg-green-500 rounded-xl border border-black flex flex-col items-center gap-4'>

        <h1 className='text-2xl font-bold underline mt-3' >A RANDOM GIF</h1>
        {
          loading ? ( <Spinner/> ) : (<img src={gif}></img>)
        }
        
        <button 
        className='bg-white opacity-70 w-10/12 py-2 rounded-lg mb-4'    
        onClick={() => fetchData()}>Generate</button>

    </div>
  )
}

export default Random