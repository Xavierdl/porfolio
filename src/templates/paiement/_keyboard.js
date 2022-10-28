import React, { Component } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'simple-keyboard/build/css/index.css';

class App extends Component {

    onChange = (input) => {
        console.log("Input changed", input);
    }

    onKeyPress = (button) => {
        console.log("Button pressed", button);
    }

    render() {
        return (
            <Keyboard
                layout={{
                    'default': [
                        ' 1 2 3 4 5 6 7 8 9 0 ',
                        '{tab} q w e r * o p [ ] \\',
                        ' a s d f g 8 j k l ; \' {enter}',
                        ' z x c v b n m , . / {shift}',
                        '.com @ {space}'
                    ],
                    'shift': [
                        '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
                        '{tab} Q W E R*Y U I O P { } |',
                        '{lock} A S D F G H J K L : " {enter}',
                        '{shift} Z X C V B N M < > ? {shift}',
                        '.com @ {space}'
                    ]
                }}
                layoutName={"shift"}
                onChange={input =>
                    this.onChange(input)}
                onKeyPress={button =>
                    this.onKeyPress(button)}
            />
        );
    }
}

export default App;