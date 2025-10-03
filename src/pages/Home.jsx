import Brands from "../homecomponents/Brand";
import Form from "../homecomponents/form";
import Grow from "../homecomponents/grow";
import Insidecavin from "../homecomponents/Insidecavin";
import Purpose from "../homecomponents/purpose";
import Small from "../homecomponents/small";

import Landing from "/src/homecomponents/Landing.jsx";
import Years from "/src/homecomponents/years.jsx"

function  Home () {
    return(
        <>
    <Landing/>
    <Insidecavin/>
    <Years/>
    <Brands/>
    <Small/>
    <Grow/>
    <Purpose/>
    
    <Form/>
    </>
    )
}
export default Home;