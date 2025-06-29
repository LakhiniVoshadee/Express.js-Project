import app from "./app";


// Define the application port
const port = 3000;


//3. Instruct the express app to listen on port 3000

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
