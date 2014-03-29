/**
 * Created by demo on 28/03/14.
 */
var leapController = new Leap.Controller();

var trainer = new LeapTrainer.Controller({controller: leapController, trainingCountdown: 3, trainingGestures: 3});

leapController.connect();

trainer.create('add');
trainer.on('add', function(){
    console.log('training is complete');
    console.log(trainer.toJSON('add'));
});