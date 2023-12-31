import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1704006610883 implements MigrationInterface {
    name = 'MyMigration1704006610883'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "Description"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "date" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "date"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "date" date NOT NULL`);
        await queryRunner.query(`ALTER TABLE "article" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "article" ADD "Description" character varying NOT NULL`);
    }

}
