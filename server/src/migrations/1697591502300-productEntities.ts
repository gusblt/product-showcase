import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductEntities1697591502300 implements MigrationInterface {
    name = 'ProductEntities1697591502300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "total_price" double precision NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "total_price"`);
    }

}
