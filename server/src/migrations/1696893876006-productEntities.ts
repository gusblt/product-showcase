import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductEntities1696893876006 implements MigrationInterface {
    name = 'ProductEntities1696893876006'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" double precision NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "stock_quantity" SET DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ALTER COLUMN "stock_quantity" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
    }

}
