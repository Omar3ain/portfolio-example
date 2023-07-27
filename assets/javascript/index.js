let menu = document.querySelector('.menu');
let menuToggle = document.querySelectorAll('.menu-toggle');

(function() {
    emailjs.init('XeLWa51puwdr_IQ6o');
})();

function sendFormData(event) {
    event.preventDefault();

    var form = document.getElementById("contact-form");
    var templateParams = {
        to_name: "Omar Medhat",
        from_name: form.name.value,
        message: form.message.value,
        email: form.email.value
    };

    emailjs.send("service_78u932a", "template_gb5b8th", templateParams)
        .then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            form.reset();
        }, function(error) {
            console.log("FAILED...", error);
        });
}

function downloadCV() {
    var link = document.createElement('a');
    link.href = 'assets/pdfs/CV.pdf';
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function toggleCloseIcon() {
    let closeIcon = document.querySelector('.close');
    let openIcon = document.querySelector('.open');
    if (menu.classList.contains('responsive-menu')) {
      closeIcon.style.display = 'inline-block';
      openIcon.style.display = 'none'
    } else {
      closeIcon.style.display = 'none';
      openIcon.style.display = 'inline-block';
    }
  }

  menuToggle.forEach(toggle => {
    toggle.addEventListener('click', () => {

      menu.classList.toggle('responsive-menu');
      toggleCloseIcon()
    });
  });
