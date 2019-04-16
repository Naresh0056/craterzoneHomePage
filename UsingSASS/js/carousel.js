var myIndex = 0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("slider");
  console.log(x.length);
  for (i = 0; i < x.length; i++) {
    console.log("hello");
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000);
}
// const mySiema = new Siema({
//   selector: ".slider-holder",
//   onInit: () => console.log("hello")
// });
// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");

// prev.addEventListener("click", () => mySiema.prev(3));
// next.addEventListener("click", () => mySiema.next(3));
