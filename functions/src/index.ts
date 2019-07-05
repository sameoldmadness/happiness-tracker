import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { sendMessage } from './services/slack'

admin.initializeApp();

export const vote = functions.https.onRequest(async (req, res) => {
    const { email, date, score } = req.query;
    
    await admin.database().ref(`/happiness/${date}/${email.replace(/[@.]/g, '')}`).push({ score: Number(score) });
    
    res.send('ok')
});

export const helloWorld = functions.https.onRequest(async (_, res) => {
    await sendMessage(
        'https://slack.com/api/chat.postMessage',
        functions.config().happiness_tracker.slack_endpoint,
        'DKUAH5V42'
    )

    res.send(functions.config().happiness_tracker.happiness_tracker);
});

// export const addMessage = functions.pubsub.schedule('5 11 * * *').onRun
export const addMessage = functions.https.onRequest(async (req, res) => {
    const original = req.query.text;
    const snapshot = await admin.database().ref('/messages').push({ original });
    
    res.redirect(303, snapshot.ref.toString());
});
