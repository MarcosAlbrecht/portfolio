import { Controller, Get } from '@nestjs/common';
import { Tecnologia } from '@prisma/client';
import { TecnologiaPrisma } from './tecnologia.prisma';

@Controller('tecnologias')
export class TecnologiaController {
  constructor(private readonly repo: TecnologiaPrisma) {}
  @Get()
  async obterTodas(): Promise<Tecnologia[]> {
    return await this.repo.obterTodos();
  }

  @Get('/destaques')
  async obterDestaques(): Promise<Tecnologia[]> {
    return await this.repo.obterDestaques();
  }
}
