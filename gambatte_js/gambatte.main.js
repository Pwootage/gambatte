Module['_main'] = function() {

  var gb_init = Module.cwrap('gb_init', 'number', []);
  var gb_load = Module.cwrap('gb_load', 'number', ['string']);
  var gb_run_frame = Module.cwrap('gb_run_frame', 'number', []);
  var gb_video_buffer = Module.cwrap('gb_video_buffer', 'number', []);
  var gb_audio_buffer = Module.cwrap('gb_audio_buffer', 'number', []);

  var init = gb_init();
  console.log('gb_init: ' + init);

  var vbuff = gb_video_buffer();
  var abuff = gb_audio_buffer();

  console.log('Video buffer ptr: ' + vbuff);
  console.log('Audio buffer ptr: ' + abuff);

  var loaded = gb_load('/test.gb');
  console.log('gb_load: ' + loaded);



  var frame = gb_run_frame();
  console.log('Samples in first frame: ' + frame);

  window.testgb = function() {
    var start = new Date();
    var frames = 10000;
    console.log('running ' + frames + ' frames...');
    for (var i = 0; i < frames; i++) gb_run_frame();
    var end = new Date();
    var ms = end - start;
    var fps = (frames/ms) * 1000;
    console.log('fps: ', fps);
  }

}
