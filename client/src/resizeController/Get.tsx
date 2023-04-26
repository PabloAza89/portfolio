import React, { useState , useRef, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';


function Get() {

        const minPort = useSelector((state: {minPort:boolean}) => state.minPort)
        const minLand = useSelector((state: {minLand:boolean}) => state.minLand)
        const medPort = useSelector((state: {medPort:boolean}) => state.medPort)
        const medLand = useSelector((state: {medLand:boolean}) => state.medLand)
        const larPort = useSelector((state: {larPort:boolean}) => state.larPort)
        const larLand = useSelector((state: {larLand:boolean}) => state.larLand)
        /* const staticRefWidth = useSelector((state: {staticRefWidth:number}) => state.staticRefWidth) */
        /* const minRatioReference = useSelector((state: {minRatioReference:number}) => state.minRatioReference) */

        /* console.log("OTRO", " MIN PORT: " , minPort, " | MIN LAND: ", minLand, " | MED PORT: ", medPort, " | MED LAND: ", medLand, " | LAR PORT: ", larPort, " | LAR LAND: ", larLand) */

   return {minPort, minLand, medPort,medLand, larPort, larLand}
}

export default Get;