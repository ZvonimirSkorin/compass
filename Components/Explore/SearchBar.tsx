import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {  useEffect, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';

export default function SearchBar(props:any) {
    const ref = useRef<any>(null);
    const router = useRouter()
    const options = top100Films.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });
    useEffect(()=>{
        if(props.getData===0) return;
        let el:any = document.getElementById('grouped-demo');
            console.log(el?.value)
            top100Films.find((val)=>{
                if(val.country===el?.value)
                {   
                    router.push(`/Countries/${el?.value}`)}
                   
               else if(val.title===el?.value){
                    router.push(`/Countries/${val.country}/${val.title}`)
                }
            })
            
    },[props.getData])

    return (
        <Autocomplete
            id="grouped-demo"
            
            autoHighlight={true}
            options={options.sort((a, b) => b.country.localeCompare(a.country))}
            groupBy={(option) => option.country}
            getOptionLabel={(option) => option.title}
           
            sx={{ width: 600, maxWidth: "100%", backgroundColor: "white", borderStyle: "none", outline:"none", borderWidth: 0 }}
            renderInput={(params) => <TextField {...params} label="Pick a city" />}
        />
    );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'Berlin',country:"Germany" },
    { title: 'Frankfurt', country: "Germany" },
    {title:'Germany',country:'Germany'},
    { title: 'Ljubljana', country: "Slovenia" },
    { title: 'Beograd', country: "Serbia" },
    { title: 'Serbia', country: "Serbia" },
    { title: 'Paris', country: "France" },
    { title: 'France', country: "France" },
    { title: "Nice", country: "France" },
    { title: 'Madrid', country: "Spain" },
    { title: 'Span', country: "Spain" },]