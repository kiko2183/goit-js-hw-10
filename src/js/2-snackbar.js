import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const delayInput = document.querySelector("input[name='delay']");
    const stateInput = document.querySelector("input[name='state']:checked");

    const delay = parseInt(delayInput.value);
    const state = stateInput.value;

    const successOptions = {
      title: 'Success',
      message: `✅ Fulfilled promise in ${delay}ms`,
    };

    const errorOptions = {
      title: 'Error',
      message: `❌ Rejected promise in ${delay}ms`,
    };

    const promise = new Promise((resolve, reject) => {
      if (state === 'fulfilled') {
        setTimeout(() => resolve(delay), delay);
      } else if (state === 'rejected') {
        setTimeout(() => reject(delay), delay);
      }
    });

    promise
      .then(delay => {
        iziToast.success(successOptions);
      })
      .catch(delay => {
        iziToast.error(errorOptions);
      });
  });
});
