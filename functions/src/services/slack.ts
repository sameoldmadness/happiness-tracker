import got from 'got'
import cfg from '../config'

export async function sendResponse(responseUrl: string, text: string) {
    const res = await got(responseUrl, {
        method: 'POST',
        json: true,
        body: {
            replace_original: true,
            text
        }
    })
    console.log('Sending response')
    console.log(res.statusCode, res.body)
}

export async function sendMessages() {
    const responses = await Promise.all(cfg.slack.channels.map(sendMessage))

    console.log('Sending messages')
    responses.forEach((response) => {
        console.log(response.statusCode, response.body)
    })

    return responses
 } 
 
 async function sendMessage(channel: string) {
    return got('https://slack.com/api/chat.postMessage', {
        json: true,
        headers: {
            Authorization: `Bearer ${cfg.slack.authToken}`,
        },
        body: {
            channel,
            blocks: [
                makeSection('Hey, how do you feel today?'),
                makeActions([': ]', ': (', ': /', ': |', ': )', ': ]'])
            ]
        }
    })
}

const makeSection = (text: string) => ({
    type: "section",
    text: {
        type: 'mrkdwn', // PLAIN?
        text
    }
})

const makeActions = (buttons: string[]) => ({
    type: 'actions',
    block_id: 'actionblock789', // WHAT IS IT?
    elements: buttons.map((x, i) => makeButton(x, String(i)))
})

const makeButton = (text: string, value: string) => ({
    type: 'button',
    text: {
        type: 'plain_text',
        text,
    },
    value,
})
