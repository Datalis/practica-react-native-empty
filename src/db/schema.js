const schema = {
  version: 0,
  title: 'Expense schema',
  description: 'Describe expense fields',
  type: 'object',
  properties: {
    numDoc: {
      string: 'string',
    },
    eType: {
      type: 'string',
    },
    totalVal: {
      type: 'number',
    },
    providerRuc: {
      type: ['string', 'null'],
    },
  },
};

export default schema;
