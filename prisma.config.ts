// Configuración de Prisma CLI (Prisma 7). Carga las variables de .env porque
// Prisma 7 ya no lo hace automáticamente.
import 'dotenv/config'
import { defineConfig } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
})
