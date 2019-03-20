# Test
This codebase takes in an array of user ids and generates random age and gender for each user id

The Server.js
This manipulates the user ids that are passed in in an array. It appends a random gender and a random age between the range 20 - 45 t othe user ids and prints out the response in a pretty formatted way

The users.js
This calls an external api using the fetch api, the external api takes in a single user id and fetches the matching msisdn fron the db it connets to.
However this application has an endpoint that was manipulated to take in an array of user ids and then call the external api for each of those array elements and then maps the user ids to their corresponding msisdn in pretty format
This fetch makes it a bit slow. Async and await was used tp ensure that all the documents are properly matched before the response is sent.
