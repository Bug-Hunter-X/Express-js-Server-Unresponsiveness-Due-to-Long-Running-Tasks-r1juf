const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate a delay using async/await
    res.send('Hello World!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server Error');
  }
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});