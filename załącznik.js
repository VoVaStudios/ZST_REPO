function resize() {
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const container = document.querySelector('.container');
    container.style.height = `${windowHeight}px`;
  }

  window.addEventListener('resize', resize);
  // importuj potrzebne biblioteki z EmailJS
  emailjs.init('msbVOFrVbpvTZiDRU');

  // Konfiguracja EmailJS (pobierz te informacje ze swojego konta EmailJS)
  const serviceID = 'service_at5x6qs';
  const templateID = 'BaqBwAd_5AENajOFH82uN';

  // Funkcja do wysyłania e-maila
  function sendEmail(form) {
    // Pobierz wartości z formularza
    const name = form.imie.value;
    const surname = form.nazwisko.value;
    const email = form.email.value;
    const message = form.klasa.value;

    // Skonfiguruj i wyślij e-mail
    emailjs.send(service_at5x6qs, BaqBwAd_5AENajOFH82uN, {
      from_name: `${name} ${surname}`,
      from_email: 'mmmmsuport@gmail.com',
      message: siema
    })
      .then((response) => {
        console.log('E-mail został wysłany', response);
      })
      .catch((error) => {
        console.log('Wystąpił błąd podczas wysyłania e-maila', error);
      });
  }

  // Znajdź formularz na stronie
  const form = document.querySelector('form');

  // Nasłuchuj zdarzenie wysłania formularza i wywołaj funkcję do wysyłania e-maila
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    sendEmail(form);
  })