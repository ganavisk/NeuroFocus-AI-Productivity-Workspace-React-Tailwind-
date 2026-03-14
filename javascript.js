import { useState } from "react";

function FocusTimer(){

const [time,setTime] = useState(25);

return(
<div className="text-center">

<h1 className="text-3xl font-bold">Focus Timer</h1>

<p className="text-4xl mt-4">{time}:00</p>

<button
className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
onClick={()=>setTime(time-1)}
>
Start Focus
</button>

</div>
)
}

export default FocusTimer;
