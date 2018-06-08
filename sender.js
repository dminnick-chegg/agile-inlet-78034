const request = require('request');
const base64 = require('base-64');
const freshDeskUrl = 'https://dktestchegg.freshdesk.com/api/v2/tickets';

const createTicket = function(data) {
    //console.log('in callback', data);
    const ticket_data = {
        "description": data.text,
        "email": data.authorId,
        "subject": "Support Needed...",
        "email": "tom@outerspace.com",
        "priority": 1,
        "status": 2,
        "cc_emails": ["ram@freshdesk.com", "diana@freshdesk.com"]
    };

    request({
        url: freshDeskUrl,
        method: "POST",
        json: true,
        headers: {
            "Authorization": "Basic " + base64.encode("dfORhntl6E2Dt8e0dZk:X")
        },
        body: ticket_data
    }, function (error, response, body){
        const prettyJSON = JSON.stringify(body, null, 4);
        //console.log('prettyJSON', prettyJSON);
    });
};

module.exports = createTicket;
