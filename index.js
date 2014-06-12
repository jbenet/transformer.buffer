var Type = require('transformer-type');

module.exports = Type({
  // @context and type filled in automatically.
  'id': 'buffer',
  'description': 'Byte buffer representation.',
  'schema': "Buffer"
});
