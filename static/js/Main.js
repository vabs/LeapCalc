/**
 * Created by demo on 28/03/14.
 */
$(function(){
    $("button#startBtn").click(function(){
        $("div.my-leap").fadeIn('slow');
    });

    $("body").keyup(function(e){
        if(e.keyCode == 82){
            $("div#current-val").empty();
            $("div#result").empty();
            //leapController = new Leap.Controller({ enableGestures: true, downtime: 1000 });
            leapController.connect();
            //console.log(leapController);
        }
    });
});

leapController = new Leap.Controller({ enableGestures: true, downtime: 1000 });

leapController.connect();

leapController.on('frame', function(frame){
    for( var i =  0; i < frame.gestures.length; i++){
        var gesture  = frame.gestures[0];
        var type = gesture.type;
        console.log(type);
        switch( type ){
            case "screenTap":
                console.log('hello!!');
                if( gesture.state == "start"){
                    console.log('started tapping!');
                }
                if ( gesture.state == "stop"){
                    getResult($("#current-val").html());
                }
                break;
            case "keyTap":
                if ( gesture.state == "stop"){
                    console.log('keyTap');
                    document.getElementById("current-val").innerHTML += fingers;
                    break;
                }
            case "circle":
                if(gesture.state == "stop"){
                    var clockwise = false;
                    var pointableID = gesture.pointableIds[0];
                    var direction = frame.pointable(pointableID).direction;
                    if(direction == undefined){
                        break;
                    }
                    var dotProduct = Leap.vec3.dot(direction, gesture.normal);
                    if (dotProduct  >  0) {
                        clockwise = true;
                        var current = document.getElementById("current-val").innerHTML;
                        console.log("current length", current.length);
                        console.log("current length -2 ", current[current.length-2]);
                        if ( current.length == 0){}
                        else if ( current[current.length-2] == "+" ||  current[current.length-2] == "-"
                             ||  current[current.length-2] == "*" ||  current[current.length-2] == "/"){
                            $("#error").fadeIn("invalid input").fadeOut();
                        }
                        else{
                            document.getElementById("current-val").innerHTML += " + ";
                        }
                    }
                    else{
                        console.log("going anti");
                        var current = document.getElementById("current-val").innerHTML;
                        console.log("current length", current.length);
                        console.log("current length -2 ", current[current.length-2]);
                        if ( current.length == 0 ){}
                        else if ( current[current.length-2] == "+" ||  current[current.length-2] == "-"
                             ||  current[current.length-2] == "*" ||  current[current.length-2] == "/"){
                            $("#error").fadeIn("invalid input").fadeOut();
                        }

                        else{
                            document.getElementById("current-val").innerHTML += " - ";
                        }
                    }
                }
                break;
            case "swipe":
                if(gesture.state == "stop"){
                    if(gesture.direction[0] < 0){
                        console.log('moved left');
                        var current = document.getElementById("current-val").innerHTML;
                        console.log("current length", current.length);
                        console.log("current length -2 ", current[current.length-2]);
                        if ( current.length == 0 ){}
                        else if ( current[current.length-2] == "+" ||  current[current.length-2] == "-"
                                  ||  current[current.length-2] == "*" ||  current[current.length-2] == "/"){
                            $("#error").fadeIn("invalid input").fadeOut();
                        }

                        else{
                            document.getElementById("current-val").innerHTML += " * ";
                        }
                    }
                    else{
                            console.log('moved right');
                            var current = document.getElementById("current-val").innerHTML;
                            console.log("current length", current.length);
                            console.log("current length -2 ", current[current.length-2]);
                            if ( current.length == 0 ){}
                            else if ( current[current.length-2] == "+" ||  current[current.length-2] == "-"
                                      ||  current[current.length-2] == "*" ||  current[current.length-2] == "/"){
                                $("#error").fadeIn("invalid input").fadeOut();
                            }
                            else{
                                document.getElementById("current-val").innerHTML += " / ";
                            }
                       }
               }
                break;
            }
        }
});

leapController.loop(function(obj) {
    fingers = obj.pointables.length;

    var fingersDiv = document.getElementById("fingers");
    var fingersDesc = document.getElementById("description-fingers");
    fingersDiv.innerHTML = fingers;

    if ( fingers == 10){
        fingers = 0;
    }

    if ( fingers > 10){
        fingers = 10;
    }

    var b = fingers == 1 ? "finger" : "fingers";
});


function getResult(query)
{
    try{
        $("div#result").fadeIn().html("Calculating!");
        query = query.split(" ").join("");

        console.log(eval(query));
        $("div#result").html("= " + eval(query));

    }
    catch(err){
        console.log('Some error Occurred');
        $("div#error").fadeIn().html('!! 3RROR !!').fadeOut();
        $("body").trigger("keyup");
    }
    leapController.disconnect();

    //query = encodeURIComponent(query);
    //console.log("sending query", query);
//    $.ajax({
//        headers: { 'Access-Control-Allow-Origin': '*' },
//        crossDomain: true,
//        type:"GET",
//        url: "http://127.0.0.1:80/getwolframalpha/" + query,
//        dataType:"json",
//        "beforeSend": function(){
//            $("div#result").fadeIn().html("Calculating!");
//        },
//        "error": function(status, xhr, res){
//            console.log('status');
//            $("div#result").fadeIn().html("Error!!! Try Again Later!");
//        }
//        }).done(function(response) {
//            if( response['result'] === undefined){
//                $("div#result").html(query);
//            }
//            else{
//                $("div#result").html(" = " + response['result']);
//            }
//            console.log(response);
//    });
}


