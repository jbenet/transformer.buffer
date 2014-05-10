var transformer = require('dat-transformer');

module.exports = new transformer.Type({
  // @context and type filled in automatically.
  'id': 'buffer',
  'description': 'Byte buffer representation.',
  'schema': "string"
});
