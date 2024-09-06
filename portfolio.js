// document.querySelectorAll('nav ul li a').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
// const sections = document.querySelectorAll('.about, .projects, footer');

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//         }
//     });
// }, {
//     threshold: 0.5
// });

// sections.forEach(section => {
//     observer.observe(section);
// });

// const contactForm = document.querySelector('form'); // Replace 'form' with the correct form selector
// if (contactForm) {
//     contactForm.addEventListener('submit', function (e) {
//         const emailInput = this.querySelector('[type="email"]');
//         if (!emailInput.value.includes('@')) {
//             alert('Please enter a valid email address.');
//             e.preventDefault();
//         }
//     });
// }
