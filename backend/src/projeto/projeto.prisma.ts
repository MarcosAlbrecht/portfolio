import { Injectable } from '@nestjs/common';
import { Projeto } from '@prisma/client';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProjetoPrisma {
  constructor(private readonly prisma: PrismaProvider) {}

  async obterTodos(): Promise<Projeto[]> {
    return await this.prisma.projeto.findMany();
  }

  async obterPorId(id: number): Promise<Projeto | null> {
    return this.prisma.projeto.findUnique({
      where: {
        id,
      },
      include: {
        tecnologias: true,
      },
    });
  }
}
