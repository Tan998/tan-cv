/*function toggle() {
    var x = document.getElementById("fade");
    if (x.classList.contains("hide")) {
      x.classList.remove("hide");
    } else {
      x.classList.add("hide");
    }
  }
  function toggle1() {
    var x = document.getElementById("fade1");
    if (x.classList.contains("hide")) {
      x.classList.remove("hide");
    }
    else if(x.classList.contains("fade")){
        x.classList.remove("hide");
    }
    
    else {
      x.classList.add("hide");
    }
  }*/
/*function toggle () {
    document.getElementById("fade").classList.toggle("hide");
  } 

  function toggle1 () {
    document.getElementById("fade1").classList.toggle("hide");
    document.getElementById("fade").classList.toggle("hide");
  } */


  /*window.addEventListener('mouseup',function(event){
    var fade = document.getElementById('fade');
    if(event.target != fade && event.target.parentNode != fade){
        fade.style.display = 'none';
    }

    var fade1 = document.getElementById('fade1');
    if(event.target != fade1 && event.target.parentNode != fade1){
        fade1.style.display = 'none';
    }

    var fade2 = document.getElementById('fade2');
    if(event.target != fade2 && event.target.parentNode != fade2){
        fade2.style.display = 'none';
    }
});  
*/

/*show/hide element */

var divs = ["SectionHome", "Section1","Section2", "Section3", "Section4", "Section5"];
      var visibleId = null;

      function show(id) {
        if(visibleId !== id) {
          visibleId = id;
        }
        hide();
      }

      function hide() {
        var div, i, id;
        for(i = 0; i < divs.length; i++) {
          id = divs[i];
          div = document.getElementById(id);
          if(visibleId === id) {
            div.style.display = "block";
            div.classList.add("fade")
          } else {
            div.style.display = "none";
          }
        }
      }  

      /*show Home */
      var i = 0, j=0;
      var text1 = "Welcome to my 履歴書"
      var text2 = "VUONG MANH THANG"
      function typing1() {
        if(i < text1.length){
            document.getElementById("text1").innerHTML += text1.charAt(i);
            i++;
            setTimeout(typing1,150)
        }
      }
      function typing2() {
        if(j < text2.length){
            document.getElementById("text2").innerHTML += text2.charAt(j);
            j++;
            setTimeout(typing2,200)
        }
      }
      typing1();
      setTimeout(typing2,3000) ;
      

      
    /*copy link email*/
    function copy(that){
        var inp =document.createElement('input');
        document.body.appendChild(inp)
        inp.value =that.textContent
        inp.select();
        document.execCommand('copy',false);
        inp.remove();
        alert("copied")
        }