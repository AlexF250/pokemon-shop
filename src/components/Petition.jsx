import {useContext,useState} from 'react'
import { NavCar } from './NavCar';
import { storeContext } from '../Context/Context';

export function PokemonImg () {

    const {Values,setCar,setValues,car} = useContext(storeContext)

    function HandleBuy (e) {
        e.target.textContent = "added to the car";
        setCar([...car,Values.filter(x=>x.id==e.target.id)]);
        setTimeout(() => {
            setValues(Values.filter(x=>x.id!=e.target.id))
        }, 500);
    }



return(

<>

    <NavCar/>

    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-4 dark:bg-slate-900 bg-slate-200 px-6 '>

    {
    Values.map(x=>(
    <div key={x.id} className='flex flex-col justify-center items-center border-slate-800 border-2 mt-4 p-4 shadow-black dark:shadow-slate-700 shadow-sm dark:shadow-md dark:hover:bg-slate-700 hover:bg-slate-300 hover:shadow-md hover:cursor-pointer rounded-md transition'>
        <h1 className='dark:text-slate-200 text-xl'>{x.name}</h1>
        <img src={x.img}/>
        <button className='text-lg font-medium w-full h-8 rounded bg-slate-800 text-stone-200 uppercase mt-4 hover:font-bold hover:bg-violet-700 hover:text-stone-200 dark:hover:text-slate-200 transition'
        onClick={HandleBuy} id={x.id}>add</button>
    </div>
    
    ))
    }

    </div>

</>
)
}