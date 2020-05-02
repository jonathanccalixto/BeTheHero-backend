const generateUniqueId = require('../../src/utils/genereateUniqueId');

describe('Generate Unique ID', () => {
  it('should generate an Unique ID', () => {
    const id = generateUniqueId();

    expect(generateUniqueId()).not.toBe(id);
  });

  it('should generate an ID with 8 characters', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});