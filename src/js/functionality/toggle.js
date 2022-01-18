const rememberMeToggle = document.querySelector('.rememberMeToggle');

rememberMeToggle.addEventListener('click', () => {
    var v = document.querySelector(".input-rememberMeToggle");
    const slider = document.querySelector('.slider');
    if(v.value=="false"){
        v.value="true";
        slider.style.backgroundColor = "#A2BB13";
        slider.style.left = "22px";
      }
    else if(v.value=="true"){
        v.value="false";
        slider.style.backgroundColor = "#ccc";
        slider.style.left = "0px";
      }
  });