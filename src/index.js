import React from "react";
import ReactDOM from "react-dom";
import * as Cal from  "./calculator.js";


ReactDOM.render(
<ul>
  <li>{Cal.add(1,2)}</li>
  <li>{Cal.subtract(3,5)}</li>
  <li>{Cal.divide(3,9)}</li>
</ul>
,document.getElementById("root"));