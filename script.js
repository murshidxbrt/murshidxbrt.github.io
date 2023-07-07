var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};



window.addEventListener("scroll", function() {
    var aboutSection = document.getElementById("About");
    var aboutImg2 = document.querySelector(".about-img");

    // Calculate the distance from the top of the About section to the top of the viewport
    var distanceFromTop = aboutSection.getBoundingClientRect().top;

    // If the About section is in the viewport, show the second image
    if (distanceFromTop < window.innerHeight) {
        aboutImg2.style.opacity = "1";
    } else {
        aboutImg2.style.opacity = "0";
    }
});


(function() {
  emailjs.init('R_SF1PdW1mmThHxwn');
})();

function SendMail() {
  var params = {
    form_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_yigsgq2", "template_vozid4t", params)
    .then(function(res) {
      alert("Success! " + res.status);
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    });
}




