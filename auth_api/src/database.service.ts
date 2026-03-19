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
    this.pool = mysql.createPool({
      host: 'mysql-2f86ba98-riya-bf95.j.aivencloud.com',
      port: 24652,
      user: 'avnadmin',
      password: 'AVNS_7G0v2qQQYGXJ_quqylk',
      database: 'defaultdb',

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