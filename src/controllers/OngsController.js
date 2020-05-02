const connection = require('../database/connection');
const generateUniqueId = require('../utils/genereateUniqueId');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const ongs = await connection('ongs')
      .limit(20)
      .offset((page - 1) * 5)
      .select('*');

    return response.json(ongs);
  },
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = generateUniqueId();

    if( !name || !email || !whatsapp || !city || !uf ) {
      return response.status(401).json({ error: 'One or more fields are blank.'});
    }

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  }
};
