const form = document.getElementById('join-form');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = {
    firstName: form.firstName.value.trim(),
    middleName: form.middleName.value.trim(),
    lastName: form.lastName.value.trim(),
    schedule: form.schedule.value,
    email: form.email.value.trim(),
    talent: form.talent.value.trim()
  };

  // Simple validation
  if (!formData.firstName || !formData.lastName || !formData.schedule || !formData.email || !formData.talent) {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Please fill in all required fields.';
    return;
  }

  // Here you would send data to backend/server or external API
  // For demo, we just show success message

  messageDiv.style.color = 'lightgreen';
  messageDiv.textContent = 'Thank you for joining! Your information has been received.';

  form.reset();
});
