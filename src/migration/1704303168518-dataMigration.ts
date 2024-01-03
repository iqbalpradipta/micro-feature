import { MigrationInterface, QueryRunner } from "typeorm";

export class DataMigration1704303168518 implements MigrationInterface {
    name = 'DataMigration1704303168518'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "voted" boolean`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "voted"`);
    }

}
