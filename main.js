Webcam.set({

  width:350,
  height:300,
  image_format:'png',
  png_quality:90
  
  
  });
  
  
  
  camera = document.getElementById("camera");
  
  Webcam.attach('#camera');
  
  
  function takesnapshot(){
  Webcam.snap(function(data_uri){
  
  document.getElementById("result").innerHTML = ' <img id="captureimage" src="'+data_uri+'">'
  
  });
  
  
  }
  
  console.log("ml5.version",ml5.version);
  
  classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7l_Z4wmsf/model.json" ,model_loded);
  
  function model_loded(){
  
      console.log("Model loaded...");
  
  
  }
  
  
  function check()
  {
    img = document.getElementById("captureimage");
     classifier.classify(img,gotresult);
  
  
  }
  
  function gotresult(error,results)
  {
  if(error)
  
  {
  console.error(error);
  
  } else {
  
  console.log(results);
  document.getElementById("result_object_name").innerHTML = results[0].label;
  
  document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
  
  
  
  }
  
  
  
  
  
  }
  
  