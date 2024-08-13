// const express = require('express');
// const cors = require('cors');
// const { Configuration, OpenAIApi } = require('openai');

// const app = express();
// const port = 3001;

// app.use(cors()); // To allow requests from your React frontend
// app.use(express.json()); // To parse JSON request bodies

// const configuration = new Configuration({
//     apiKey: 'AIzaSyBtW3yBv3hQWpsy6iLFukupv6LPafC6i7k',
// });

// const openai = new OpenAIApi(configuration);

// app.post('/api/sendMsgToOpenAI', async (req, res) => {
//     const { message } = req.body;

//     try {
//         const response = await openai.createCompletion({
//             model: 'text-davinci-003',
//             prompt: message,
//             temperature: 0.7,
//             max_tokens: 256,
//             top_p: 1,
//             frequency_penalty: 0,
//             presence_penalty: 0,
//         });

//         res.json({ text: response.data.choices[0].text });
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// app.listen(port, () => {
//     console.log(Server running on http:localhost:${3000});
// });