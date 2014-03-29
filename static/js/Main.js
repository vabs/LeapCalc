/**
 * Created by demo on 28/03/14.
 */


leapController = new Leap.Controller({ enableGestures: true });

//trainer = new LeapTrainer.Controller({controller: leapController, downtime: 1000});

leapController.connect();
//trainer.fromJSON('{"name":"add","pose":false,"data":[[{"x":-0.2826161124517615,"y":-0.036311537260334405,"z":0.3472222222222222,"stroke":1},{"x":-0.2487021789575501,"y":-0.031954152789094366,"z":0.3055555555555556,"stroke":1},{"x":0.5313182914093115,"y":0.06826569004942878,"z":-0.6527777777777778,"stroke":1}],[{"x":-0.19949722970110775,"y":-0.3199381930000893,"z":0.17570745920978306,"stroke":1},{"x":0.08268028768176974,"y":-0.307237636953807,"z":-0.1567370023133495,"stroke":1},{"x":-0.10821714943741256,"y":-0.2038778407489723,"z":0.09594257096552541,"stroke":1},{"x":0.04728169394924764,"y":-0.16216295722502952,"z":-0.07793986318985352,"stroke":1},{"x":-0.02697034436217588,"y":-0.11431720354980685,"z":0.019996872073972438,"stroke":1},{"x":-0.00312188183255091,"y":-0.06870506818259114,"z":0.0018601101177758983,"stroke":1},{"x":0.05401779426324496,"y":-0.02731031427554259,"z":-0.056842727125342565,"stroke":1},{"x":-0.06760744306188876,"y":0.025153254662437563,"z":0.0969318810217252,"stroke":1},{"x":0.14002231452189154,"y":0.06244645129674492,"z":-0.14391686477763316,"stroke":1},{"x":-0.13867186445122506,"y":0.11023115007457479,"z":0.18827427388633985,"stroke":1},{"x":0.14391137681790664,"y":0.15240022679278936,"z":-0.13584138900037562,"stroke":1},{"x":-0.06183161671441101,"y":0.17325632410938163,"z":0.10317206126063319,"stroke":1},{"x":0.1380040623267114,"y":0.6800618069999107,"z":-0.11060738212920068,"stroke":1}],[{"x":-0.17341498148612386,"y":-0.2999940416585207,"z":0.15663785559727256,"stroke":1},{"x":0.11805178281192982,"y":-0.2903811276225073,"z":-0.14780640686392166,"stroke":1},{"x":-0.09801385655321253,"y":-0.21481314950696065,"z":0.09089045740342006,"stroke":1},{"x":0.05679715869580937,"y":-0.19468904156625588,"z":-0.07245542533292768,"stroke":1},{"x":-0.023766577915285886,"y":-0.14243488159241985,"z":0.021534253313317403,"stroke":1},{"x":-0.005185316758067299,"y":-0.0994783661947144,"z":0.006002582440597454,"stroke":1},{"x":0.05344661139248566,"y":-0.043302393404908546,"z":-0.05136587644232858,"stroke":1},{"x":-0.07843169154263503,"y":0.05327388073869305,"z":0.09971842312115903,"stroke":1},{"x":0.13080436278551624,"y":0.07178038495144906,"z":-0.13024709650572824,"stroke":1},{"x":-0.14326801375700685,"y":0.10660135344129884,"z":0.17617390141969957,"stroke":1},{"x":0.13041500535647368,"y":0.21495491182409543,"z":-0.12563514945004756,"stroke":1},{"x":-0.07474866004811528,"y":0.13847651224927188,"z":0.10043029377695409,"stroke":1},{"x":0.10731417701823207,"y":0.7000059583414793,"z":-0.12387781247746685,"stroke":1}]]}');
//
//trainer.on('add', function(){
//    console.log('add detected');
//});

//trainer.on('KeyTapGesture', function(){
//    console.log('keytapgesture');
//});


leapController.on('frame', function(frame){
     for( var i =  0; i < frame.gestures.length; i++){

    var gesture  = frame.gestures[0];
    var type = gesture.type;
    console.log(type);
    switch( type ){
    case "keyTap":
        console.log('keyTap ');
        console.log(document.getElementById("current-val").innerHTML);
        break;
    default:
        console.log('something else');
            break;
    }

    }
});

leapController.loop(function(obj) {
  var hands = obj.hands.length;
  var fingers = obj.pointables.length;


var handsDiv = document.getElementById("hands");
var fingersDiv = document.getElementById("fingers");

var handsDesc = document.getElementById("description-hands");
var fingersDesc = document.getElementById("description-fingers");

handsDiv.innerHTML = hands;
fingersDiv.innerHTML = fingers;

//var a = hands == 1 ? "hand" : "hands";
var b = fingers == 1 ? "finger" : "fingers";
document.getElementById("current-val").innerHTML = fingers + " ";

});