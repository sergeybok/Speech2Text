const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors()); // TODO longterm create whitelist cause this might be security threat

const speech = require('@google-cloud/speech');
const client = new speech.SpeechClient();



// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

// app.post('/upload', upload.single('soundBlob'), function (req, res, next) {
app.post('/upload', function (req, res) {
  // console.log(req.file); // see what got uploaded

  // let uploadLocation = __dirname + '/public/uploads/' + req.file.originalname // where to save the file to. make sure the incoming name has a .wav extension
  // fs.writeFileSync(uploadLocation, Buffer.from(new Uint8Array(req.file.buffer))); // write the blob to the server as a file
  const config = {
      encoding: req.body.encoding,
      sampleRateHertz: req.body.sampleRateHertz,
      languageCode: req.body.languageCode,
    };
  const audio = {
    content: Buffer.from(new Uint8Array(req.body.buffer)),
  };

  const request = {
    audio: audio,
    config: config,
    interimResults: false, // If you want interim results, set this to true
  };
  // const [response] = await client.recognize(request);
  const [response] = client.recognize(request);
  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n');
  res.send({ transcript: transcription });
  res.sendStatus(200); //send back that everything went ok
})

