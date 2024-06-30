
import React, { useState } from "react";

//include images into your bundle

//create your first component
const Home = () => {
	const [selectColor, setSelecteColor] = useState("red");
	return (
		<div className="Traffic-light">
      <div className="light red glow"></div>
      <div className="light yellow glow"></div>
      <div className="light green glow"></div>
      
    </div>
  );
	
};

export default Home;
