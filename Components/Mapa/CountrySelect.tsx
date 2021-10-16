import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CountrySelect(props:any) {
    return (
        <Autocomplete
            id="country-select-demo"
            sx={{ width: 300,maxWidth:"90%" }}
            options={countries}
            autoHighlight
            autoSelect={true}
            onChange={(e, val) => props.setCountry(val?.label)}
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                    {option.label} 
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    {...params}

                    label="Pick a country"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries = [
    
    {
        code: 'DE',
        label: 'Germany',
        phone: '49',
        suggested: true,
    },
    
    { code: 'DK', label: 'Denmark', phone: '45' },
    
    { code: 'FI', label: 'Finland', phone: '358' },
   
   
];