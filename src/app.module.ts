import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from 'ormconfig';
import { UserModule } from './modules/users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    ...databaseConfig,
    autoLoadEntities:true
  }),
  UserModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
