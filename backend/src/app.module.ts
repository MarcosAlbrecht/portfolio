import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DbModule } from './db/db.module';
import { PrismaProvider } from './db/prisma.provider';
import { ProjetoModule } from './projeto/projeto.module';
import { TecnologiaModule } from './tecnologia/tecnologia.module';

@Module({
  imports: [DbModule, ProjetoModule, TecnologiaModule],
  controllers: [AppController],
  providers: [PrismaProvider],
})
export class AppModule {}
