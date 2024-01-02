import { MigrationInterface, QueryRunner } from "typeorm";

export class DataMigration1704162317438 implements MigrationInterface {
    name = 'DataMigration1704162317438'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paslon" ADD "koalisi" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "paslon" DROP COLUMN "koalisi"`);
    }

}
