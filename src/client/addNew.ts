const fetchFormValues = () => {
  return {
    description: (document.getElementById('description') as HTMLInputElement).value,
    exercise: (document.getElementById('exercise') as HTMLInputElement).value,
    reps: (document.getElementById('reps') as HTMLInputElement).value,
  };
};

export const addEventListenerToForm = () => {
  const element = document.getElementById('form') as HTMLFormElement;
  element.addEventListener('submit', async event => {
    event.preventDefault();
    await window.fetch('/submit', {
      body: JSON.stringify(fetchFormValues),
      method: 'POST',
    });
    location.reload();
  });
};
