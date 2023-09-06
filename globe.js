$(document).ready(function (){
	if(!$("#myCanvas").tagcanvas({
		textColour: "#000000",
		outlineColour: "transparent",
		reverse: false,
		depth: 0.8,
		maxSpeed: 0.1,
		weight: true,
	}, "tags")){
		//somthing went wrong 
		$("#myCanvasContainer");
	}
})
