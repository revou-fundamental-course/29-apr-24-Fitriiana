let slideIndex = 1;
showDivs(1);

function nextSlide(n) {
  console.log("next slide " + n);

  showDivs((slideIndex += n));
}

function showDivs(k) {
  var i;
  // console.log("awal show "+ k);
  var imgList = document.getElementsByClassName("img-slideShow");
  console.log("list img " + imgList.length);
  if (k > imgList.length) {
    slideIndex = 1;
  } else if (k < 1) {
    slideIndex = imgList.length;
  }
  for (i = 0; i < imgList.length; i++) {
    imgList[i].style.display = "none";
  }
  imgList[slideIndex - 1].style.display = "block";

  console.log(k);
}

// auto slide
setInterval(() => {
    nextSlide(1);
  }, 5000);

// form Validation
let destination = document.getElementById('destination');
function validateForm() {
  let inputName = document.forms["form-contact"]["full-name"];
  let inputEmail = document.forms["form-contact"]["email-user"];
  console.log("destination" + destination.value);
  if (inputName.value == "" && inputEmail.value == "" && destination.value =="") {
    inputEmail.style.border = '1px solid red';
    inputName.style.border = '1px solid red';
    destination.style.border = '1px solid red';
    alert("Please Fill The Blank");
  }else if(inputEmail.value =="" && inputName.value!=null){
    inputEmail.style.border = '1px solid red';
    alert("Please Fill Your Email");

  }else if(inputEmail.value != "" && inputName.value == ""){
    inputName.style.border = '1px solid red';
    alert("Please Fill Your Name");

  }else{
    alert("Thank You, our team will contact you soon");
  }
}