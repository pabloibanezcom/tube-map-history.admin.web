const transformError = (err, source) => {
  if (source === 'login' && err.response.status === 400) {
    return { name: 'password', type: 'wrongCredentials', message: 'Invalid login or password' };
  }
  return { name: '', type: 'genericError', message: 'Something went wrong' };
};

export default transformError;
