import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductEntities1696969541612 implements MigrationInterface {
    name = 'ProductEntities1696969541612'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "status" character varying NOT NULL DEFAULT 'pending'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "status"`);
    }

}
