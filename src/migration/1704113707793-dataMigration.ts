import { MigrationInterface, QueryRunner } from "typeorm";

export class DataMigration1704113707793 implements MigrationInterface {
    name = 'DataMigration1704113707793'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "partai" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "ketum" character varying NOT NULL, "visiMisi" character varying NOT NULL, "alamat" character varying NOT NULL, "img" character varying NOT NULL, CONSTRAINT "PK_9c5c70fa29884e15f3b88a1b40b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "paslon" DROP COLUMN "ketum"`);
        await queryRunner.query(`ALTER TABLE "paslon" DROP COLUMN "alamat"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paslon" ADD "alamat" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "paslon" ADD "ketum" character varying NOT NULL`);
        await queryRunner.query(`DROP TABLE "partai"`);
    }

}
