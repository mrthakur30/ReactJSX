import React from "react";


function App(){
    var time = new Date().toLocaleTimeString();
    console.log(time);

    var [state,setState] = React.useState(time);

    function updateTime(){
        var newTime = new Date().toLocaleTimeString();
        return setState(newTime);
    }

    setInterval(updateTime,1000);

    return (
        <div>
            <h1>{time}</h1>
            <button onClick={updateTime}>Get Time</button>
        </div>
    );
}

export default App ;