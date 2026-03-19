import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MeetingsController } from './meetings/meetings.controller';
import { DatabaseService } from './database.service';

@Module({
  imports: [AuthModule],
  controllers: [AppController, MeetingsController],
  providers: [AppService, DatabaseService]

})
export class AppModule { }
