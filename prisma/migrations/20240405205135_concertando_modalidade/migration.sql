/*
  Warnings:

  - You are about to drop the column `Nome_Curso` on the `modalidade` table. All the data in the column will be lost.
  - You are about to drop the column `Nota_Corte` on the `modalidade` table. All the data in the column will be lost.
  - Added the required column `nome_Curso` to the `modalidade` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nota_Corte` to the `modalidade` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_modalidade" (
    "modadalidadeID" TEXT NOT NULL PRIMARY KEY,
    "universidade" TEXT NOT NULL,
    "campus" TEXT NOT NULL,
    "nome_Curso" TEXT NOT NULL,
    "nota_Corte" REAL NOT NULL
);
INSERT INTO "new_modalidade" ("campus", "modadalidadeID", "universidade") SELECT "campus", "modadalidadeID", "universidade" FROM "modalidade";
DROP TABLE "modalidade";
ALTER TABLE "new_modalidade" RENAME TO "modalidade";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
