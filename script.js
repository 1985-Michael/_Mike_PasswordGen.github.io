
// Variables //

  var genButton= document.getElementById("generate");
  var clipCopy = document.getElementById("copy");

//Function for Password Generate//

   function generate(){
   var complex = document.getElementById("sliderRange").value;
  
   var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_=+";

   var password = "";

   for(var i = 0; i <= complex; i++){
   
   password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length)));
}

// Slider Value, Range and Display // 

   var slider = document.getElementById("sliderRange");

   var output = document.getElementById("sliderValue");

   output.innerHTML = slider.value;

   slider.oninput = function(_sliderRange) {
  
   output.innerHTML = this.value;

}

   document.getElementById("display").value = password;

}

// Function for Clipboard // 

   function clipBoard(){
   
   document.getElementById("display").select();
   
   document.execCommand("copy");

// Alert user once Clipboard Button is pressed //    
   
    alert('Password has been Copied');
}



