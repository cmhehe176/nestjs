-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "teacherID" INTEGER NOT NULL,
    "classID" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "subjectID" INTEGER NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentsubject" (
    "subjectID" INTEGER NOT NULL,
    "studentID" INTEGER NOT NULL,

    CONSTRAINT "studentsubject_pkey" PRIMARY KEY ("studentID","subjectID")
);

-- CreateTable
CREATE TABLE "teacherclass" (
    "classID" INTEGER NOT NULL,
    "teacherID" INTEGER NOT NULL,

    CONSTRAINT "teacherclass_pkey" PRIMARY KEY ("classID","teacherID")
);

-- CreateIndex
CREATE UNIQUE INDEX "Teacher_subjectID_key" ON "Teacher"("subjectID");

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_teacherID_fkey" FOREIGN KEY ("teacherID") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_classID_fkey" FOREIGN KEY ("classID") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_subjectID_fkey" FOREIGN KEY ("subjectID") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentsubject" ADD CONSTRAINT "studentsubject_subjectID_fkey" FOREIGN KEY ("subjectID") REFERENCES "Subject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentsubject" ADD CONSTRAINT "studentsubject_studentID_fkey" FOREIGN KEY ("studentID") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teacherclass" ADD CONSTRAINT "teacherclass_classID_fkey" FOREIGN KEY ("classID") REFERENCES "Class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "teacherclass" ADD CONSTRAINT "teacherclass_teacherID_fkey" FOREIGN KEY ("teacherID") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
