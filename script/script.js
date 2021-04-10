$(document).ready(() => {
  $(window).scroll(() => {
    if (this.scrollY > 20) {
      $('.navbar').addClass('in-scroll');
    } else {
      $('.navbar').removeClass('in-scroll');
    }
    if (this.scrollY > 500) {
      $('.scroll-up').addClass('show');
    } else {
      $('.scroll-up').removeClass('show');
    }
  });
});

$('.scroll-up').click(() => {
  $('html').animate({ scrollTop: 0 });
});
$('.btn-menu').click(() => {
  $('.menu').toggleClass('active');
});

let typed = new Typed('.typing', {
  strings: ['Web Developer', 'Software Developer', 'MERN Developer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

const sendEmail = async () => {
  templateParams = {
    subject: document.getElementById('subject').value,
    name: document.getElementById('name').value,
    message: document.getElementById('content').value,
    email: document.getElementById('email').value,
  };

  const res = await emailjs.send(
    'service_73vukta',
    'template_amhttke',
    templateParams
  );
  return res;
};
$('#send_mail').click(async (e) => {
  e.preventDefault();
  const responsNode = document.getElementById('response');
  responsNode.textContent = '';
  const res = await sendEmail();
  if (res) {
    if (res.status == 200) {
      responsNode.textContent = 'Your message has been sent :)';
    } else {
      responsNode.textContent = 'There is an error try again !';
    }
  }
});
