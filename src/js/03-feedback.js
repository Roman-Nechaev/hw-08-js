import throttle from 'lodash.throttle';
const LOCAL_SAVE = 'feedback-form-state';
const firmRef = document.querySelector('form.feedback-form');
// console.log('firmRef', firmRef);

firmRef.addEventListener('input', throttle(onFormInput, 1500));
firmRef.addEventListener('submit', onFormSubmit);

getValueSaveInput();

function onFormInput(evt) {
  let perFilt = localStorage.getItem(LOCAL_SAVE);
  perFilt = perFilt ? JSON.parse(perFilt) : {};
  perFilt[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCAL_SAVE, JSON.stringify(perFilt));
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const formData = new FormData(firmRef);
  formData.forEach((value, name) => console.log(name, value));
  localStorage.removeItem(LOCAL_SAVE);
  firmRef.reset();
}

function getValueSaveInput() {
  let getLocal = localStorage.getItem(LOCAL_SAVE);
  if (getLocal) {
    getLocal = JSON.parse(getLocal);
    Object.entries(getLocal).forEach(([name, value]) => {
      firmRef.elements[name].value = value;
    });
  }
}
