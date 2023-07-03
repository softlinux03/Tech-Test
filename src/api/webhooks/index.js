module.exports = (app) => {
  app.post('/webhook/order-received', require('./onOrderReceived'));
  app.post('/webhook/order-fulfillment', require('./onOrderFulfillment'));
};