const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.quotable.io/random';

async function getQuote() {
  // The `try` block executes the statements within it as usual.
  // If an exception is thrown, the statements defined in
  // the `catch` block will be executed.
  // Learn more here: https://javascript.info/try-catch
  try {
    const response = await fetch(endpoint)
    // If the response is not 200 OK...
    if (!response.ok) {
      // ...throw an error. This causes control flow
      // to skip to the `catch` block below.
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.log(err)
    alert('Failed to fetch new quote');
  }
}