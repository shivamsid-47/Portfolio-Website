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


