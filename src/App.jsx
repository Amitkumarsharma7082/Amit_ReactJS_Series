import React from 'react';
import SlotM from './SlotMachine'

const App = () =>
{
    return ( <>
    <h1> 🎰 Welcome to <span style={{fontWeight:'bold'}}> Slot machine game</span> 
    🎰 </h1>
    <div>
    <SlotM x="😄" y="😄" z="😄" />
    <SlotM x="🎅" y="🚗" z="😄" />
    <SlotM x="🦓" y="😄" z="🐕" />
    <SlotM x="🐴" y="😄" z="🐕"/>
    <SlotM x="🦓"y="🚗" z="🎅" />
    </div>
    </>
    );
};
export default App;