'use strict';

module.exports.ageCalc = (event, context, callback) => {
  // /console.log("event:", event);
  let age = event.currYear - event.yearBorn
  //console.log(age);
  const response = {
    statusCode: 200,
    body: {
      message: `Your age is ${age}.`,
    },
  };

  callback(null, response.body.message);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
