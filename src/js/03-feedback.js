
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector(".feedback-form"),
  email: document.querySelector(".feedback-form input"),
  textarea: document.querySelector(".feedback-form textarea")
}
const STORAGE_KEY = 'feedback-form-state';
const formData = {
  email: "",
  message: ""
}

refs.form.addEventListener("submit", onFormSubmit);
refs.form.addEventListener("input", throttle(onTextareaInput, 500));


populateTextarea()

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);
  e.currentTarget.reset()// reset form =>
  localStorage.getItem(STORAGE_KEY);

  // !if form submission => removeItem on key, so that - users not submit again
  localStorage.removeItem(STORAGE_KEY)// reset localStorage
  formData.email = ""
  formData.message = ""

}

function onTextareaInput(e) {
  // const message = e.target.value;
  const name = e.target.name;
  const email = e.target.value;
  formData[name] = email;

  //            method      key    :     value
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))

}

function populateTextarea() {
  // *get value in localSt
  //                                            key
  // *save value to localStorage
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  let parsedFormData
  try {
    parsedFormData = JSON.parse(savedFormData);

  } catch (error) {
    console.log(error);

  }
  // !check - Is user entered something, but not submit? (true=>pass value to textarea || false=>ignore)
  //      true
  if (parsedFormData) {
    // pass value to textarea
    refs.email.value = parsedFormData.email;
    refs.textarea.value = parsedFormData.message;
    Object.assign(formData, parsedFormData)
  }
}

{/* <form class="feedback-form" autocomplete="off">
    <label>
      Email
      <input type="email" name="email" autofocus />
    </label>
    <label>
      Message
      <textarea name="message" rows="8"></textarea>
    </label>
    <button type="submit">Submit</button>
  </form> */}