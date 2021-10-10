import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SearchBar() {
    const options = top100Films.map((option) => {
        const firstLetter = option.title[0].toUpperCase();
        return {
            firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
            ...option,
        };
    });

    return (
        <Autocomplete
            id="grouped-demo"
            options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
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
    { title: 'Ljubljana', country: "Slovenia" },
    { title: 'Beograd', country: "Serbia" },
    { title: 'Paris', country: "France" },
    { title: "Nice", country: "France" },
    { title: 'Madrid', country: "Spain" },]