function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate an API call or asynchronous operation
    setTimeout(() => {
      resolve('API Response');
    }, 2000); // Resolves after 2 seconds
  });
}

export default getResponseFromAPI;
