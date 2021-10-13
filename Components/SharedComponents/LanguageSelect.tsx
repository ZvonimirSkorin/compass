import React, { useState } from 'react';
    import ReactFlagsSelect, { Gb } from 'react-flags-select';

    export const LanguageSelect:React.FC<{}> = (change_colors) => {
      const [selected, setSelected] = useState('GB');
return <span style={{color:"black"}}>

      <ReactFlagsSelect
            countries={["FR", "GB", "NL","DE"]}
            customLabels={{"GB": "EN","NL": "NL","FR": "FR","DE":"DE"}} 
        selected={selected}
        selectedSize={18}
    
        onSelect={code => setSelected(code)}
      />
      </span>
    }