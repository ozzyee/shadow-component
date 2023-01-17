import React from 'react';
import './App.scss';
import {ImageWithText} from './components/imageWithText/image-with-text';

function App() {
    return (
        <div className="App">
            <ImageWithText
                isIsolated={true}
                image={"https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                text={"test image"}/>
        </div>
    );
}

export default App;
