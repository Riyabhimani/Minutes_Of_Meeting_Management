import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { DatabaseService } from "src/database.service";
import { AdminGuard } from "./admin.guard";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: '709e0814e3f8b93e8c1fa2622643cd4c148c11906decc146c5b76761af181e60845af92cbfdec7981b374919554373bdc5c6044c92238fc654583a588c1ec5c6',
            signOptions: { expiresIn: '1h' }

        })
    ],
    controllers: [AuthController],
    providers: [AuthService, DatabaseService, AdminGuard]
})
export class AuthModule { }