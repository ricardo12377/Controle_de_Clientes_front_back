const express = require('express')
const app = express();
const mysql = require('mysql')
const cors = require('cors')



app.use(cors());
app.use(express.json());


const db = mysql.createConnection({
    user:'root',
    host: 'localhost',
    password: '',
    database: 'employesystem'
});


app.post('/create', (req, res) => {
    const name = req.body.name;
    const telefone = req.body.telefone;
    const email = req.body.email;
   

    
    db.query('INSERT INTO employees (name, telefone, email) VALUES (?,?,?)',
     [name, telefone, email],
      (err, result ) => {
          if (err) {
              console.log(err)
          } else {
              res.send('Values Inserted!')
          }
     }
     );


} );


app.get('/employees', (req, res) => {
    db.query("SELECT * FROM employees", (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


app.put('/updateemail', (req, res) => {
  const id = req.body.id
  const email = req.body.email
  db.query("UPDATE employees SET email = ? WHERE id = ?", [email, id], (err, result) => {
      if (err) {
          console.log(err)
      } else {
          res.send(result)
      }
  })
})



app.put('/updatename', (req,res) => {
    const id = req.body.id
    const name = req.body.name
    db.query("UPDATE employees SET name = ? WHERE id = ?", [name, id], (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


app.put('/updatetelefone', (req, res) => {
    const id= req.body.id
    const telefone = req.body.telefone
    db.query("UPDATE employees SET telefone = ? WHERE id = ?", [telefone, id], (err, result) => {
        if(err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
});



app.delete('/delete/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })
})


app.listen(3006, () => {
    console.log("Server running on port 3006")
})