const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    const user_id = 'ArmaanHooda_27102002'; 
    const email = 'armaan0257.be21@chitkara.edu.in'; 
    const roll_number = '2110990257'; 
    const odd_numbers = data.filter(item => !isNaN(item) && parseInt(item) % 2 !== 0);
    const even_numbers = data.filter(item => !isNaN(item) && parseInt(item) % 2 === 0);
    const alphabets = data.filter(item => isNaN(item)).map(item => item.toUpperCase());

    const response = {
      is_success: true,
      user_id,
      email,
      roll_number,
      odd_numbers,
      even_numbers,
      alphabets,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
