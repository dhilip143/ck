import Brands from "../homecomponents/Brand";
import Form from "/src/homecomponents/Form.jsx";
import Grow from "/src/homecomponents/Grow.jsx";
import Insidecavin from "../homecomponents/Insidecavin";
import Purpose from "../homecomponents/purpose";
import Small from "/src/homecomponents/small.jsx";

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