import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductEntities1696894792999 implements MigrationInterface {
    name = 'ProductEntities1696894792999'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "imgUrl" TO "img_url"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "img_url" TO "imgUrl"`);
    }

}
