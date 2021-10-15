import { MapContainer, TileLayer, Marker, Popup,Polyline } from 'react-leaflet';
import { useEffect, useState, Fragment, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';
import L, { Icon, LatLngExpression } from 'leaflet';




const CountryMap: React.FC<any> = (props) => {

    function get_icon(num: number) {
        const iconPerson = new L.Icon({
            iconUrl: '/KompasLogo.svg',
            iconRetinaUrl: '/KompasLogo.svg',
            

            iconSize: new L.Point(num, num),
            className: 'leaflet-div-icon2'
        });
        return iconPerson;
    }

    const koordinate = [
        {city:"Rijeka",lat:45.346382, lng:14.412736},{city:"Zagreb",lat:45.815153, lng:15.977581},
         {city:"Dubrovnik",lat:43.512991, lng:16.455778}, {city:"Split",lat:43.713276, lng:15.876802},
        {city:"Šibenik",lat:44.114109, lng:15.236714}
    ]

    const kruz:any = [
        {city:"Zagreb",lat:45.054727, lng:13.697233}, {city:"Dubrovnik",lat:45.441464, lng:12.269010}, {city:"Dubrovnik",lat:44.953744, lng:12.422818},
         {city:"Dubrovnik",lat:43.624768, lng:13.477506}, {city:"Dubrovnik",lat:44.076363, lng:15.312223}, {city:"Dubrovnik",
         lat:43.058796, lng:16.119135}, {city:"Dubrovnik",lat:42.688434, lng:18.052728}
    ]

    const [map, setMap] = useState<any>(null);
    const refs = useRef<any[]>(new Array)
    const [active, setActive] = useState(false)
    useEffect(() => {
        if (map && !active) {
           
            map.invalidateSize();
            setActive(true)
        }
    }, [map,props.open]);
   

    return (

        <MapContainer center={props.koordinate!==undefined?[props.koordinate[0].lat, props.koordinate[0].lng]:[45.815153, 15.977581]}
         style={{ height: "30rem", maxHeight:"70vh", width: "100%", borderRadius: "1rem",
         zIndex:props.zIndex?1:-1 }} zoom={6} scrollWheelZoom={false} 
         whenCreated={setMap}>
                       

            <TileLayer
        
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline pathOptions={{ color: "green" }} positions={kruz} />
            {
                (props.koordinate!=null?props.koordinate:koordinate)?.map((val: any, index: number) =>
                    <Marker  icon={props.open === val.city ? get_icon(70) : get_icon(30)} key={index} position={[val.lat,val.lng]}>
                        <Popup  key={index} >
                            <div style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center",  }}>
                                
                                <img style={{ width: "200px", borderRadius: "1rem" }} src="/slovenija.jpeg" />
                                <h3 style={{margin:"3px"}}> {val.city}</h3>
                                <p style={{ maxWidth:"200px",margin:0,padding:0 }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <button onClick={()=>{console.log(props.open)}} style={{
                                    display: "inline-block", margin: "3px auto", backgroundColor: "hsl(142, 90%, 61%)", cursor:"pointer",
                                    fontWeight: 700, borderStyle: "solid", borderColor: "black", borderWidth: "1px", borderRadius:"0.5rem",padding:"0.3rem"
                                }}>Discover</button>
                                </div>
      </Popup>
                    </Marker>
                    )
            }
            
        </MapContainer>
      
        )
}

export default CountryMap;