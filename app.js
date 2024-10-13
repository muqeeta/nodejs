const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Endpoint to receive notifications
app.post('/', (req, res) => {
    // Log the received notification
    console.log('Received notification:', req.body);

    // Process the notification as needed
    processNotification(req.body);

    // Respond with a 202 Accepted status
    res.sendStatus(202);
});

// Function to process the notification
function processNotification(notification) {
    // Extract necessary details from the notification
    // For example, you can check what type of change occurred
    const changeType = notification.value[0]?.changeType;
    const resource = notification.value[0]?.resource;

    // Log the change type and resource
    console.log(`Change Type: ${changeType}`);
    console.log(`Resource: ${resource}`);

    // Implement your logic to handle the notification
    // For example, update a database, send an email, etc.
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
