import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    // اگر DATABASE_URL تنظیم نشده باشد، به مسیر پیش‌فرض محلی برمی‌گردیم
    // تا ساخت (build) روی پلتفرم‌های بدون دیتابیس با خطا متوقف نشود.
    datasources: {
      db: { url: process.env.DATABASE_URL ?? "file:./db/custom.db" },
    },
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db