
module.exports = class ServerError extends Error {
  constructor(messageCode) {
    let message = messageCode;
    super(message);
    this.code = 500;
  }
};
