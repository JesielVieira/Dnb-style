
function tocarmusica () {
var audio = document.getElementById("escolher");
audio.currentTime = 0;
audio.volume = 0.1;
audio.play();

}
                                                    
function clickar () {
    var audio = document.getElementById("clickar");
    audio.currentTime = 0;
    audio.volume = 0.1;
    audio.play();
    }

    function clickarprevias () {
        var audio = document.getElementById("clickarprevias");
        audio.currentTime = 0;
        audio.volume = 0.01;
        audio.play();
        }
/*
 function menuover () {
    var audio = document.getElementById("escolhermenu");
    audio.currentTime = 0;
    audio.volume = 0.02;
    audio.play();
}
*/

function tocarcontato(videoId) {
    var video = document.getElementById(videoId);
    
    video.play();
}

function overcontato() {
    var audio = document.getElementById("escolher");
audio.currentTime = 0;
audio.volume = 0.1;
audio.play();

}