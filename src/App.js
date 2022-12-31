import SearchIcon from '@mui/icons-material/Search';
import  JSONDATA from './MOCK_DATA (6).json';
import {useState} from 'react'
function App() {
  const searchHandle = (event)=>{
    setSearch(event.target.value)
  }
  const [search,setSearch]= useState('')
  return (
    <div className="flex items-center justify-center flex-col">
    <form>
      <input
        className="w-64 px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Search..."
        onChange={searchHandle}
      /><button
      className="px-3 py-2 font-semibold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      type="submit"
    >
      
   <SearchIcon>search</SearchIcon> </button>{JSONDATA.filter((val)=>{
    if(search===""){return val} else if (val.first_name.toLowerCase().includes(search)){return val
    }}).map((val,key)=>{
        return <div key={key}>
          {" "}
          <p className='flex items-center justify-center text-blue-600 my-10'>{val.first_name} </p>
        </div>
      })}
    
    </form></div>
  );
};

export default App;
