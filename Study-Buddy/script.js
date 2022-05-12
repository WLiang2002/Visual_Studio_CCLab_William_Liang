let ifPanda = true
function AniSwitch () {
  const Panda = document.getElementById("my-Panda");
  const Beaver = document.getElementById("my-Beaver");
  if (ifPanda == true) {
   Panda.style.display = 'block';
   Beaver.style.display = 'none';
   ifPanda = false;
  }
  else {
    Panda.style.display = 'none';
    Beaver.style.display = 'block';
    ifPanda = true;
  }


console.log("RUNNING");

}

// trying to implement switching the 2 figures on one page, however, ran into some problems and couldn't get it to work