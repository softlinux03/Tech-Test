
module.exports = class ValidationError extends Error {
  constructor(messageCode) {
    let message = messageCode;
    super(message);
    this.code = 400;
  }
};
