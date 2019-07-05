import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { sendMessages, sendResponse } from './services/slack'

admin.initializeApp();

// export const helloWorld = functions.pubsub.schedule('5 11 * * *').onRun
export const helloWorld = functions.https.onRequest(async (_, res) => {
    res.send('ok');

    await sendMessages()
});

export const appendResponse = functions.https.onRequest(async (req, res) => {
    const response = JSON.parse(req.body.payload)
    const user = response.user.name.replace(/[@.]/g, '_')
    const score = Number(response.actions[0].value)
    const date = new Date().toISOString().split('T')[0]
    const responseUrl = response.response_url

    await admin.database().ref(`/happiness/${date}/${user}`).push({ score });

    res.send('ok');
    
    await sendResponse(responseUrl, 'OK, got it!')
});