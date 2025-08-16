import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // remove if you don’t want SQL logs
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
