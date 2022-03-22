import {PrismaClient} from '@prisma/client';
import { api } from '../services/api';

const prisma = new PrismaClient();

export default {
  async handle(req, res) {
   try {
    const users = await prisma.user.findMany();

    users.forEach((user) => {
      api.post('/channels/rcs/messages', {
        from: `${process.env.KEYWORD}`,
        to: user.phone,
        contents: [{
          type: 'text',
          text: user.content
        }]
      }, {
        headers: {
          'X-API-TOKEN': `${process.env.API_TOKEN}`
        }
      }).then(res => console.log('\nSucesso\n', res.data))
      .catch(error => console.log('\nFalha\N', error.response.data))
    })

    return res.json({mensage: 'Solicitação completa'})
   } catch (error) {
     
   }
  }
}