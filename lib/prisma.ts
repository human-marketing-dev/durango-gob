import { PrismaClient } from '@/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

// Prisma 7 se conecta mediante un driver adapter. Usamos node-postgres (pg),
// que funciona igual en el runtime de Next y en los scripts (tsx).
const connectionString = process.env.DATABASE_URL
if (!connectionString) {
  throw new Error('Falta DATABASE_URL en el entorno (revisa .env).')
}

const adapter = new PrismaPg({ connectionString })

type PrismaClientSingleton = InstanceType<typeof PrismaClient>
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClientSingleton }

export const prisma: PrismaClientSingleton =
  globalForPrisma.prisma ?? new PrismaClient({ adapter })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
