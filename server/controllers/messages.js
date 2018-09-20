const messages = require('../message-dummy-data.js');

const getMessagesController = (req, res) => {
  return res.send({ success: true, messages });
}

module.exports = { getMessagesController };
