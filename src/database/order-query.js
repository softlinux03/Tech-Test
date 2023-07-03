exports.insertOrderData = "INSERT INTO orders_data(order_id,order_details) VALUES($1,$2)";
exports.updateOrder = "UPDATE orders_data SET status = 1 WHERE order_id = $1;"; 
