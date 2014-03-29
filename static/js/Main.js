/**
 * Created by demo on 28/03/14.
 */


Leap.loop(function(obj) {
  var hands = obj.hands.length;
  var fingers = obj.pointables.length;


//var handsDiv = document.getElementById("hands");
var fingersDiv = document.getElementById("fingers");

//var handsDesc = document.getElementById("description-hands");
var fingersDesc = document.getElementById("description-fingers");

//handsDiv.innerHTML = hands;
fingersDiv.innerHTML = fingers;

//var a = hands == 1 ? "hand" : "hands";
var b = fingers == 1 ? "finger" : "fingers";
});