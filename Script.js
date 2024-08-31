typed = new Typed(".text-change", {
  strings: ["Developer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

function goToHomepage() {
  window.location.href = "./index.html";
}
function ContactMeClick() {
  window.location.href = "./contact.html";
}
function clickPortfolio(){
     window.location.href = "./portfolio.html"
}
function nameValidate() {
  const nameValue = document.getElementById("name").value;
  const regex = /^[a-zA-Z]+$/;
  const check = regex.test(nameValue);

  if (check) {
    const notify = document.getElementById("name");
    const lable = document.getElementById("labelName");
    lable.style.color = "green";
    return true;
  } else {
    const notify = document.getElementById("name");
    const lable = document.getElementById("labelName");
    notify.placeholder = "Please enter a valid name";
    lable.style.color = "red";
    return false;
  }
}
function emailValidate() {
  const emailValue = document.getElementById("email").value;
  const regex =
    /^([a-zA-Z0-9\. -_]+)@([a-zA-Z0-9-_]{2,25}).([a-zA-Z]{2,10})(.[a-zA-Z]{2,8})?$/;
  const check = regex.test(emailValue);
  if (check) {
    const emailNotify = document.getElementById("email");
    const labelNotify = document.getElementById("labelEmail");
    labelNotify.style.color = "green";
    return true;
  } else {
    const emailNotify = document.getElementById("email");
    const labelNotify = document.getElementById("labelEmail");
    emailNotify.placeholder = "Please Enter A valid Mail";
    labelNotify.style.color = "red";
    return false;
  }
}
const validateAll = () => {
  const checkName = nameValidate();
  const checkEmail = emailValidate();
  if (nameValidate && emailValidate) {
    return true;
  }
  return false;
};
function randomImage(){
    const images =[{
        src:'./Images/WhatsApp Image 2024-08-31 at 21.21.03_b48c4abe.jpg',width:"500",height:"500"
    }]
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];
  
    let imgElement = document.getElementById('displayRandomImage');
    imgElement.src = selectedImage.src;
    imgElement.width = selectedImage.width;
    imgElement.height = selectedImage.height;
    imgElement.style.display = 'block';
  }

