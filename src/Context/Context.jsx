import { createContext, useEffect, useState} from "react";

export const storeContext = createContext();

export default function StoreContextProvider (props) {

    const [car, setCar] = useState([]);
    const [Values,setValues] = useState([]);

    const Petition = async ()=> {
        try {
            const data = await fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json")
            const res = await data.json()
            setValues(res.pokemon);
            console.log(Values)
        } catch (error) {
            return(error)
        }
    
    };
    
        useEffect(()=>{
            Petition()
        },[])


const [theme,setTheme] = useState("light")

useEffect(()=>{
    if(theme === "dark"){
        document.querySelector("html").classList.add("dark")
    }else{
        document.querySelector("html").classList.remove("dark")
    }
},[theme])

    function HandleChangeTheme () {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
    }

    return(
        <storeContext.Provider value={
            {
                Values,
                Petition,
                HandleChangeTheme,
                setCar,
                car,
                setValues
            }
        }>{props.children}
        </storeContext.Provider>
    )

}