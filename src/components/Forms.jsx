// validation function
function validate(field, regex) {

    if (regex.test(field.value)) {
        field.className = 'valid';
        // console.log('Valid field');
    } else {
        field.className = 'invalid';
        // console.log('Invalid field');
    }

}

function validateName(name, formErr) {
    if (name === '') {
        formErr.innerHTML = 'Please enter your name.';
        return false;
    }

    return true;
}

function validateEmail(email, formErr) {
    const emailStr = `${email}`.toLowerCase();

    if (formErr === null) return;

    if (emailStr === '') {
        formErr.innerHTML = 'Please enter a email address.';
        return false;
    }

    if (!emailStr.includes('@')) {
        formErr.innerHTML = 'You are missing the "@" symbol. Please enter a valid email address.';
        return false;
    }

    if (!emailStr.includes('.')) {
        formErr.innerHTML = 'You are missing the "." symbol. Please enter a valid email address.';
        return false;
    }

    if (emailStr.indexOf('@') > emailStr.lastIndexOf('.')) {
        formErr.innerHTML = 'There needs to be a "." after "@" symbol. Please enter a valid email address.';
        return false;
    }

    return true;

    

    if (!emailStr.match(mailFormat)) {
        formErr.innerHTML = 'Please enter a valid email address.';
        return false;
    }

    return true;
}

function validateMessage(message, formErr) {
    if (message === '') {
        formErr.innerHTML = 'Please enter your message.';
        return false;
    }

    return true;
}

function validateForm(formValues) {
    const nameValid = formValues.name && validateName(formValues.name);
    const emailValid = formValues.email && validateEmail(formValues.email);
    const messageValid = formValues.message && validateMessage(formValues.message);

    if (!nameValid || !emailValid || !messageValid) {
        return false;
    }

    return true;
}

function subscribeNews(form) {
    return;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);
    // console.log(formData.get("name"));
    // console.log(formValues);
    if (formValues.length > 0) return;
    if (validateForm(formData, document.getElementById('formCommentNameErr'))) {
        alert('You are now subscribed to our newsletter!');
        form.reset();
    }
    return;
}

function sendComments(event, form, formCommentNameErr, formCommentEmailErr, formCommentMsgErr) {
    // console.log(form, formCommentNameErr, formCommentEmailErr, formCommentMsgErr, new Array(form[0].value, form[1].value, form[2].value));
    const formData = form;
    const formValues = new Array(formData[0].value, formData[1].value, formData[2].value);
    const nameValid = validateName(formValues[0], formCommentNameErr);
    const emailValid = validateEmail(formValues[1], formCommentEmailErr);
    const messageValid = validateMessage(formValues[2], formCommentMsgErr);
    // console.log(nameValid, emailValid, messageValid);
    if (formCommentEmailErr === null || formCommentNameErr === null || formCommentMsgErr === null) return;
    validate(event.target, patterns[event.target.attributes.name.value]);
    if (!nameValid) {
        // console.log('Name is not valid')
        formCommentNameErr.innerHTML = 'Please enter a name.';
        formCommentNameErr.style.display = 'block';
        return false;
    }
    if (!emailValid) {
        // console.log('Email is not valid')
        formCommentEmailErr.style.display = 'block';
        return false;
    }
    if (!messageValid) {
        // console.log('Message is not valid')
        formCommentMsgErr.innerHTML = 'Please enter a message.';
        formCommentMsgErr.style.display = 'block';
        return false;
    }
    formCommentNameErr.style.display = 'none';
    formCommentEmailErr.style.display = 'none';
    formCommentMsgErr.style.display = 'none';
    alert('We have received your message, have a nice day!');
    form.reset();
    return true;
}

export { subscribeNews, sendComments };