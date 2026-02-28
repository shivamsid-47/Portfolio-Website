var typed = new Typed(".text", {
    strings:["Web Developer","Programmer","Researcher"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});

function toggleDetails(id, btn) {
    var details = document.getElementById(id);
    if (details.classList.contains('active')) {
        details.classList.remove('active');
        btn.textContent = 'Learn More';
    } else {
        details.classList.add('active');
        btn.textContent = 'Show Less';
    }
}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

var contactForm = document.getElementById('contact-form');
var formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        var name = contactForm.querySelector('input[name="name"]').value.trim();
        var email = contactForm.querySelector('input[name="email"]').value.trim();
        var message = contactForm.querySelector('textarea[name="message"]').value.trim();

        formStatus.className = 'form-status';
        formStatus.textContent = '';

        if (!name) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Please enter your name.';
            return;
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Please enter a valid email address.';
            return;
        }
        if (!message) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Please enter your message.';
            return;
        }

        var sendBtn = contactForm.querySelector('.send');
        var sendText = sendBtn.querySelector('.send-text');
        var originalText = sendText.textContent;
        sendText.textContent = 'Sending...';
        sendBtn.disabled = true;
        sendBtn.style.opacity = '0.7';

        setTimeout(function() {
            formStatus.className = 'form-status success';
            formStatus.textContent = 'Thank you, ' + name + '! Your message has been sent successfully.';
            sendText.textContent = originalText;
            sendBtn.disabled = false;
            sendBtn.style.opacity = '1';
            contactForm.reset();
        }, 1500);
    });
}


