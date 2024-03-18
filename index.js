import express from 'express';

const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
  const { array } = req.body;

  if (!Array.isArray(array)) {
    return res.status(400).json({ error: 'Invalid input. Please provide an array.' });
  }

  const evenNumbers = [];
  const oddNumbers = [];
  const alphabets = [];

  array.forEach(item => {
    if (typeof item === 'number') {
      if (item % 2 === 0) {
        evenNumbers.push(item);
      } else {
        oddNumbers.push(item);
      }
    } else if (typeof item === 'string') {
      if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      }
    }
  });

  const userId = `Armaan Hooda'${new Date().getFullYear()}`;
  const emailId = 'armaan0257.be21@chitkara.edu.in';
  const collegeRollNumber = '2110990257';

  res.status(200).json({
    status: 'success',
    user_id: userId,
    user_email: emailId,
    user_college_roll_number: collegeRollNumber,
    even_numbers: evenNumbers,
    odd_numbers: oddNumbers,
    alphabets: alphabets,
  });
});

const PORT = process.env.PORT || 3000;