import React from 'react';
import ColorBox from "./components/ColorBox";
import { ColorProvider } from "./contexts/color";
import SelectColors from "./components/SelectColors";
import ColorBox_useContext from "./components/ColorBox_useContext";

const App = () => {
    return (
        <ColorProvider>
            <div>
                <SelectColors/>
                <ColorBox/>
                <ColorBox_useContext/>
            </div>
        </ColorProvider>
    );
};

export default App;