import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig, { CONFIG_DATABASE } from './config/database.config';
import { RdaModule } from './rda/rda.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
      load: [databaseConfig],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const dbConfig =
          configService.get<ConfigType<typeof databaseConfig>>(CONFIG_DATABASE);
        return {
          type: 'postgres',
          host: dbConfig.host,
          port: dbConfig.port,
          username: dbConfig.username,
          password: dbConfig.password,
          database: dbConfig.database,
          synchronize: dbConfig.synchronize,
          autoLoadEntities: true,
        };
      },
      inject: [ConfigService],
    }),
    RdaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
