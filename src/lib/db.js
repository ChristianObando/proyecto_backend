// En lib/db.js
import { PrismaClient } from '@prisma/client'

const globalForPrisma = global;
const db = globalForPrisma.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db

export default db; // <-- Cambia "export const db" por "export default db"