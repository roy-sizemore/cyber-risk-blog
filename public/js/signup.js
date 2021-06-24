const signupFunc = async function(event) {
    event.preventDefault();
  
    const userName = document.querySelector('#username-input-signup');
    const pwd = document.querySelector('#password-input-signup');
  
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({
        username: userName.value,
        password: pwd.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/blog');
    } else {
      alert('Sign-in failed');
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFunc);