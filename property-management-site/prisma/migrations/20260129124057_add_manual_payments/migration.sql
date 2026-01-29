/*
  Warnings:

  - The `status` column on the `Payment` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[apartmentId,periodYear,periodMonth,provider]` on the table `Payment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'FAILED', 'REFUNDED', 'CANCELED');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('STRIPE', 'EASYPAY_OFFICE', 'EPAY_ONLINE', 'CASH', 'BANK', 'OTHER');

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "createdBy" TEXT,
ADD COLUMN     "method" "PaymentMethod" NOT NULL DEFAULT 'OTHER',
ADD COLUMN     "note" TEXT,
ADD COLUMN     "paidAt" TIMESTAMP(3),
ADD COLUMN     "reference" TEXT,
DROP COLUMN "status",
ADD COLUMN     "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING';

-- CreateIndex
CREATE INDEX "Payment_provider_status_idx" ON "Payment"("provider", "status");

-- CreateIndex
CREATE INDEX "Payment_periodYear_periodMonth_idx" ON "Payment"("periodYear", "periodMonth");

-- CreateIndex
CREATE UNIQUE INDEX "uniq_period_provider_per_apartment" ON "Payment"("apartmentId", "periodYear", "periodMonth", "provider");
