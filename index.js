
for (var i=0; i<$(".drum").length; i++){
    
    $(".drum")[i].addEventListener("click",function(){

var buttonswitch= this.innerHTML;
boomBox(buttonswitch)
 
    }
        );

};

document.addEventListener("keypress",function(event){
  
    boomBox(event.key)
})

function boomBox( key){

    switch (key) {
        case "w":
            var audio= new Audio('sounds/crash.mp3')
      audio.play();
            break;
      
            case "w":
                var audio= new Audio('sounds/crash.mp3')
          audio.play();
                break;
                
            case "a":
                var audio= new Audio('sounds/kick-bass.mp3')
          audio.play();
                break;
                
            case "s":
                var audio= new Audio('sounds/snare.mp3')
          audio.play();
                break;
                
            case "d":
                var audio= new Audio('sounds/tom-1.mp3')
          audio.play();
                break;
                
            case "j":
                var audio= new Audio('sounds/tom-2.mp3')
          audio.play();
                break;
                
            case "k":
                var audio= new Audio('sounds/tom-3.mp3')
          audio.play();
                break;
                
            case "l":
                var audio= new Audio('sounds/tom-4.mp3')
          audio.play();
                break;

        default:
            console.log(this.innerHTML);
            break;
      }
}