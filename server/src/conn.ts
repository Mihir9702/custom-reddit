import { DataSource } from 'typeorm'
import path from 'path'

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASS,
  database: 'fullstack',
  synchronize: true,
  // logging: true,
  entities: [path.join(__dirname, 'model/**/*.ts')],
})
