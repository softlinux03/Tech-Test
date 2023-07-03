const WebhookService = require('../../services/WebhookService');

module.exports = async (req, res) => {
  try {
    var data = req.body;
    const payload = await new WebhookService().onOrderFulfillment(data);

    res.status(200).send(payload);
  } catch (error) {

    if ([400, 403, 404].includes(error.code)) {
      return res.status(error.code).send({ message: error.message, data: null });
    }
    return res.status(500).send(error.message);
  }
};