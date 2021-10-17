import React, { memo } from "react";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";

const geoUrl =
"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

let countries = new Map();


const rounded = num => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

const MapChart = ({ setTooltipContent, Transport, Price,Country }) => {
    const router = useRouter();
    useEffect(() => {
        countries.set("Croatia", [{ city: "Zadar", price: 1000, transport: "plane" }, {city:"Opatija",price: 1000, transport: "bus" }])
        countries.set("Germany", [{ city: "Berlin", price: 1000, transport: "bus" }])
        countries.set("Italy", [{ city: "Rome", price: 2222, transport: "bus" }])
        countries.set("Belgium", [{ city: "Bruxelles", price: 450, transport: "plane" }])
        countries.set("France", [{ city: "Paris", price: 1210, transport: "plane" }])
        countries.set("Estonia", [{ city: "Talin", price: 2000, transport: "plane" }])
        countries.set("Russia", [{ city: "Moskva", price: 4000, transport: "plane" }])
        countries.set("Greece", [{ city: "Athens", price: 3000, transport: "plane" }])
        
    }, [])
    return (
    

            <ComposableMap data-tip="" projectionConfig={{
                scale: 600, rotate: [-20.0, -52.0, 0]
 }}>
                <ZoomableGroup>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        const { NAME, POP_EST } = geo.properties;
                                        setTooltipContent(`${NAME} � ${rounded(POP_EST)}`);
                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    onClick={()=>{
                                        const {NAME, POP_EST} = geo.properties;
                                        router.push(`/Toures/${NAME}`)}}
                                    style={{
                                        default: {
                                            fill: `${test(geo.properties.NAME)? "blue" : "#D6D6DA"
                                        }`,
                                            outline: "none",
                                            stroke:"#EAEAEC"

                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none"
                                        }
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
      
    );

    function test(val) {
        if (Country != null) {
            if (Country === val) return true;
            return false;
        }
        let inOffer = countries.get(val);

        if (inOffer == null) return false;

        else if (lowestPrice() && transportTypeCheck()) return true;
        return false;

        function lowestPrice() {
            let min = 100000;
            inOffer.forEach((element)=>{
                if (element.price < min)
                    min = element.price;
            })

            return min<=Price;
        }

        function transportTypeCheck() {
            if (Transport === "any") return true;
            for (var i = 0; i < inOffer.length; i++) {
                if (inOffer[i].transport === Transport) {
                    return true;
                    
                }
            }
            
            return false;
        }


    }

};


export default memo(MapChart);
