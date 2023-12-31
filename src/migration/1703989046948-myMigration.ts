import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1703989046948 implements MigrationInterface {
    name = 'MyMigration1703989046948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "date" date NOT NULL, "img" character varying NOT NULL, "author" character varying NOT NULL, "Description" character varying NOT NULL, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "article"`);
    }

}
