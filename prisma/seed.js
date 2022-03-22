import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  await prisma.user.create({
    data: {
      name: 'Pessoa',
      phone: 'numero da pessoa',
      content: 'Teste da Zenvia'
    }
  })
}

main().catch((e) => console.log(e))