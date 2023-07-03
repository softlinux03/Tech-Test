const { rawQuery, dbQuery } = require("../database/dbQuery");
const ServerError = require("../errors/serverError");
const EmailSender = require("../helpers/emailSender");

class WebhookService {
  async onOrderReceived(data) {
    const { id } = data;

    try {
      const query = rawQuery.orderQuery.insertOrderData;
      await dbQuery(query, [id, JSON.stringify(data)]);

      // new EmailSender().send();

    } catch (e) {
      console.log(e);
      throw new ServerError(
        'something went wrong'
      );
    }
  }
  async onOrderFulfillment(data) {
    const { id } = data;
    try {
      const query = rawQuery.orderQuery.updateOrder;
      await dbQuery(query, [id]);
    } catch (e) {
      console.log(e);
      throw new ServerError(
        'something went wrong'
      );
    }
  }
}

module.exports = WebhookService;
