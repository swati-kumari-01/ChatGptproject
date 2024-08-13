const { Configuration, OpenAIApi } = require('openai');
const configuration = new Configuration({apiKey: "AIzaSyBtW3yBv3hQWpsy6iLFukupv6LPafC6i7k"});
const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    return res.data.choices[0].text;
}