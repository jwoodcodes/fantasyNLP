-- CreateTable
CREATE TABLE "tradeAnalyzerData" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "position" TEXT,
    "team" TEXT,
    "marketValue" DOUBLE PRECISION,
    "myValue" DOUBLE PRECISION,
    "valueDiffBetweenMyValueAndMarketValue" DOUBLE PRECISION,
    "PRPScore" DOUBLE PRECISION,
    "projectedNextOffseasonDynastyValue" JSONB,
    "valueDifferenceBetweenCurrentMarketValueAndPNODV" DOUBLE PRECISION,
    "PNODVScore" DOUBLE PRECISION,
    "RVSScore" DOUBLE PRECISION,
    "jaxValue" DOUBLE PRECISION,
    "travValue" DOUBLE PRECISION,
    "joeValue" DOUBLE PRECISION,
    "consensusValue" DOUBLE PRECISION,

    CONSTRAINT "tradeAnalyzerData_pkey" PRIMARY KEY ("id")
);
