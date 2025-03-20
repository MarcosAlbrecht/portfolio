import { Controller, Get, Param } from '@nestjs/common';
import { Projeto } from '@prisma/client';
import { ProjetoPrisma } from './projeto.prisma';

@Controller('projetos')
export class ProjetoController {
  constructor(private readonly repo: ProjetoPrisma) {}
  @Get()
  async obterTodos(): Promise<Projeto[]> {
    return await this.repo.obterTodos();
  }

  @Get(':id')
  async obterPorId(@Param('id') id: string): Promise<Projeto | null> {
    return await this.repo.obterPorId(parseInt(id));
  }
}
