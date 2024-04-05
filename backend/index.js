const express = require('express')
const cors = require('cors')

const app = express()
const db = require('./dbConnect')

//middleware
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.get('/comment', (req, res) => {
    const user = req.headers['authorization'];
    console.log(user);

    const queryCurrentUser = "SELECT * FROM comments WHERE name = ?";
    const queryOtherUsers = "SELECT * FROM comments WHERE name != ?";
    const finalQuery = queryCurrentUser + " UNION " + queryOtherUsers;

    db.query(finalQuery, [user, user], (error, result) => {
        console.log(result);
        res.send(result);
    });
});

app.post('/user', (req, res) => {
    const { name } = req.body;

    db.query("SELECT * FROM users WHERE username = ?", [name], (error, result) => {
        if (error) {
            console.error(error);
            return res.status(500).send("Internal server error");
        }
        
        if (result.length > 0) {
            return res.status(400).json({ message: "This name already used" });
        }

        db.query("INSERT INTO users (username) VALUES (?)", [name], (error, result) => {
            if (error) {
                console.error(error);
                return res.status(500).send("Internal server error");
            }
            console.log("Added new user");
            res.send("Added new user");
        });
    });
})


app.post('/comment', (req, res) => {
    const {fixedName, comment} = req.body
    
    //post new data
    db.query("INSERT INTO comments (name, comment) VALUES (?, ?)", [fixedName, comment], (error, result) => {
        if (error){
            return res.status(500).send("Internal server error")
        }
        console.log("Added new comment")
        res.send("Added new comment")
    })
})

app.delete('/comment/:id', (req, res) => {
    const id = req.params.id
    db.query("DELETE FROM comments WHERE id = ?", [id], (error, result) => {
        res.send(result)
    })
})

app.listen(3000, ()=>{
    console.log('Listening at', 3000)
})
