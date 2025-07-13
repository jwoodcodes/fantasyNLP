-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "query" TEXT NOT NULL,
    "sql" TEXT NOT NULL,
    "isExpected" BOOLEAN NOT NULL,
    "reason" TEXT,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);
