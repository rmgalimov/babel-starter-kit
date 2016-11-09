import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});

app.get('/task2B', (req, res) => {
  const fio = req.query.fullname.match(/[a-zA-Zа-яА-ЯёЁ\u00c0-\u00ff]+/gi) || '';
  switch (fio.length) {
    case 0:
      res.send('Invalid fullname');
      break;
    case 1:
      res.send(fio[0]);
      break;
    case 2:
      res.send(fio[1] + ' ' + fio[0][0] + '.');
      break;
    case 3:
      res.send(fio[2] + ' ' + fio[0][0] + '.' + ' ' + fio[1][0] + '.');
      break;
    default:
      res.send('Invalid fullname');
  }
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
