// import { Injectable } from '@nestjs/common';
// import * as mysql from 'mysql2/promise'

// @Injectable()
// export class DatabaseService {
//   pool = mysql.createPool({
//     host:"localhost",
//     user:"root",
//     password:"Riyabhimani@2005",
//     database:"meetingManegment"
//   });
//   async query(sql:string,values:any[]){
//     const [rows] = await this.pool.execute(sql,values);
//     return rows;
//   }
// }

import { Injectable } from '@nestjs/common';
import * as mysql from 'mysql2/promise';

@Injectable()
export class DatabaseService {

  private pool;

  constructor() {
    console.log("DB HOST:", process.env.DB_HOST);

    this.pool = mysql.createPool({
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database:  process.env.DB_NAME,

      ssl: {
        rejectUnauthorized: false
      },

      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  async query(sql: string, params: any[] = []) {
    const [rows] = await this.pool.execute(sql, params);
    return rows;
  }
}