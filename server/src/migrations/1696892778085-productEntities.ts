import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductEntities1696892778085 implements MigrationInterface {
    name = 'ProductEntities1696892778085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "stock_quantity" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "stock_quantity"`);
    }

}
