/**
 * Created by demo on 28/03/14.
 */
var leapController = new Leap.Controller();

var trainer = new LeapTrainer.Controller({controller: leapController,
                                          trainingCountdown: 3,
                                          trainingGestures: 3,
                                          minRecordingVelocity: 100,
                                          downtime: 2000});

leapController.connect();

//trainer.create('add');
trainer.create('minus');

trainer.on('training-complete', function(name){
    console.log('training is complete!' + name);
});

trainer.on('gesture-recognized', function(hit, name){
    console.log(hit, name);
});
trainer.on('minus', function(){
    console.log('minus function');
    //console.log(trainer.toJSON('add'));

});