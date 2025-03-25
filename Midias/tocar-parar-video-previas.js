/*   function playvideo() {

    var video=document.getElementById("video-previa-1"); 
 
    if (video.paused) {
        video.play();
        video.currentTime =0;
        video.volume = 0.04;
        } 
    
     else {
        video.pause(); }

     }

     function playvideo2() {

      var video=document.getElementById("video-previa-2"); 
   
      if (video.paused) {
          video.play();
          video.currentTime =0;
          video.volume = 0.04;
          } 
      
       else {
          video.pause(); }
  
       }

       function playvideo3() {

         var video=document.getElementById("video-previa-3"); 
      
         if (video.paused) {
             video.play();
             video.currentTime =0;
             video.volume = 0.04;
             } 
         
          else {
             video.pause(); }
     
          }

          function playvideo4() {

            var video=document.getElementById("video-previa-4"); 
         
            if (video.paused) {
                video.play();
                video.currentTime =0;
                video.volume = 0.04;
                } 
            
             else {
                video.pause(); }
        
             }

*/ 

             function playVideo(videoId) {
               var video = document.getElementById(videoId);
               if (video.paused) {
                   video.play();
                   video.currentTime =0;
                   video.volume = 0.04;
               } else {
                   video.pause();
               }
           }
            