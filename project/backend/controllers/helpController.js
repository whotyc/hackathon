const { HelpRequest } = require('../models');

exports.createHelpRequest = (req, res) => {
  const { email, reason } = req.body;

  HelpRequest.create({ email, reason })
    .then(helpRequest => res.json(helpRequest))
    .catch(err => res.status(400).json({ error: err.message }));
};