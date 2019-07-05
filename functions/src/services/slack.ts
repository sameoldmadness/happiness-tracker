import got from 'got'

export function sendMessage(endpoint: string, token: string, channel: string) {
    return got(endpoint, {
        json: true,
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: {
            channel,
            blocks: [
                makeSection('Hello'),
                makeActions(['foo', 'bar', 'baz'])
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
    elements: buttons.map(makeButton)
})

const makeButton = (text: string) => ({
    type: 'button',
    text: {
        type: 'plain_text',
        text,
    }
})
