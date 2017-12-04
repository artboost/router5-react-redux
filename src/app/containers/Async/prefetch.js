// The following promise is resolved by the async data middleware.
// The transition is blocked until the promise is resolved, or rejected.
// In case of a reject, you can redirect to an error page.

// In this prefetch, I GET the latest currency exchange rates from fixer.io
// You have access to the toState in this function.
// This route has an optional query param 'base', which defaults to DKK.

// In this example, I simply redirect to the 404 page,
// although a 500 would be more appropriate.
module.exports = toState => new Promise((resolve, reject) => {
  const { params: { base = 'DKK ' } } = toState;

  fetch(`https://api.fixer.io/latest?base=${base.toUpperCase()}`)
    .then((res) => {
      if (res.status !== 200) {
        reject({ redirect: { name: '404', replace: true } });
      }
      return res.json();
    })
    .then(({ rates }) => resolve({ rates }))
    .catch(reject);
});
