const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[type="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Podczas ładowania strony sprawdzamy, czy w local storage są zapisane dane formularza.
// Jeśli tak, to wypełniamy nimi pola formularza.
const state = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
emailInput.value = state.email || '';
messageInput.value = state.message || '';

// Pobieramy funkcję throttle z biblioteki Lodash Throttle za pomocą skryptu CDN i tworzymy funkcję opóźniającą zapis do local storage.
const throttle = _.throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500);

// Śledzimy zdarzenie input w formularzu i zapisujemy aktualny stan formularza w local storage.
form.addEventListener('input', throttle);

// Wysyłamy dane formularza i czyszczymy local storage oraz pola formularza.
form.addEventListener('submit', event => {
  event.preventDefault();
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(state);
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
});
