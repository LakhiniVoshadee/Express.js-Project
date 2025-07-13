import app from "./app";
import dotenv from "dotenv";
import DBConnection from "./db/DBConnection";

dotenv.config(); // Load the all environment variables from .env file

// Define the application port
const port = process.env.PORT || 3000; // access the port from the .env file

DBConnection().then(result => console.log(result)); // connect to the database

//3. Instruct the express app to listen on port 3000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})


