import * as functions from 'firebase-functions';

export default {
    slack: {
        authToken: functions.config().happiness_tracker.slack_endpoint,
        channels: [
            'DKUAH5V42', // roman
            'DKUAK9CTC', // david
            'DL58XE6Q4', // gianluca
            'DL5NRMYEL', // johannes
            'DL7T0P9BQ', // michal
            'DKZCG1UE5', // praveen
            'DKZCG232M', // victor
        ],
    },
};
