-- CreateTable
CREATE TABLE "public"."CreditCard" (
    "id" SERIAL NOT NULL,
    "cardName" TEXT NOT NULL,
    "cardHolder" TEXT NOT NULL,
    "cardNumber" TEXT NOT NULL,
    "expiryDate" TEXT NOT NULL,
    "cvv" TEXT NOT NULL,

    CONSTRAINT "CreditCard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Password" (
    "id" SERIAL NOT NULL,
    "siteName" TEXT NOT NULL,
    "url" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Password_pkey" PRIMARY KEY ("id")
);
