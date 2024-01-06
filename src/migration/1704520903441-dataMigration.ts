import { MigrationInterface, QueryRunner } from "typeorm";

export class DataMigration1704520903441 implements MigrationInterface {
    name = 'DataMigration1704520903441'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "partai" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "ketum" character varying NOT NULL, "visiMisi" character varying NOT NULL, "alamat" character varying NOT NULL, "img" character varying NOT NULL, "paslonId" integer, CONSTRAINT "PK_9c5c70fa29884e15f3b88a1b40b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "paslon" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "nomorUrut" integer NOT NULL, "visiMisi" character varying NOT NULL, "img" character varying NOT NULL, "votePoint" integer, CONSTRAINT "PK_f3367efce21ffeeff1e3f58244d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "voting" ("id" SERIAL NOT NULL, "paslonId" integer, "usersId" integer, CONSTRAINT "PK_2dff1e5c53fa2cc610bea30476c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "alamat" character varying NOT NULL, "jenisKelamin" character varying NOT NULL, "username" character varying NOT NULL, "password" character varying NOT NULL, "roles" text NOT NULL, "voted" boolean, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "article" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "date" TIMESTAMP NOT NULL DEFAULT now(), "img" character varying NOT NULL, "description" character varying NOT NULL, "authorId" integer, CONSTRAINT "PK_40808690eb7b915046558c0f81b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "partai" ADD CONSTRAINT "FK_6e81e0a136eec2e38810173f217" FOREIGN KEY ("paslonId") REFERENCES "paslon"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voting" ADD CONSTRAINT "FK_d8c804ee0b06c622e6ee5ebc81c" FOREIGN KEY ("paslonId") REFERENCES "paslon"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "voting" ADD CONSTRAINT "FK_bf3bcd9a016da526181d77d77ac" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "article" ADD CONSTRAINT "FK_a9c5f4ec6cceb1604b4a3c84c87" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "article" DROP CONSTRAINT "FK_a9c5f4ec6cceb1604b4a3c84c87"`);
        await queryRunner.query(`ALTER TABLE "voting" DROP CONSTRAINT "FK_bf3bcd9a016da526181d77d77ac"`);
        await queryRunner.query(`ALTER TABLE "voting" DROP CONSTRAINT "FK_d8c804ee0b06c622e6ee5ebc81c"`);
        await queryRunner.query(`ALTER TABLE "partai" DROP CONSTRAINT "FK_6e81e0a136eec2e38810173f217"`);
        await queryRunner.query(`DROP TABLE "article"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "voting"`);
        await queryRunner.query(`DROP TABLE "paslon"`);
        await queryRunner.query(`DROP TABLE "partai"`);
    }

}
