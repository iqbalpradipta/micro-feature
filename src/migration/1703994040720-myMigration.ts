import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1703994040720 implements MigrationInterface {
    name = 'MyMigration1703994040720'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "img" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" ALTER COLUMN "img" SET NOT NULL`);
    }

}
