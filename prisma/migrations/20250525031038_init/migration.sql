-- CreateTable
CREATE TABLE "Type_user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "user_type_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    CONSTRAINT "User_user_type_id_fkey" FOREIGN KEY ("user_type_id") REFERENCES "Type_user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Musical_instrument" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Musical_rehearsal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "church" TEXT NOT NULL,
    "date" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Musical_instrumentOnMusical_rehearsal" (
    "musical_rehearsal_Id" TEXT NOT NULL,
    "musical_instrument_id" TEXT NOT NULL,

    PRIMARY KEY ("musical_rehearsal_Id", "musical_instrument_id"),
    CONSTRAINT "Musical_instrumentOnMusical_rehearsal_musical_rehearsal_Id_fkey" FOREIGN KEY ("musical_rehearsal_Id") REFERENCES "Musical_rehearsal" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Musical_instrumentOnMusical_rehearsal_musical_instrument_id_fkey" FOREIGN KEY ("musical_instrument_id") REFERENCES "Musical_instrument" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
