import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductEntities1696894175406 implements MigrationInterface {
    name = 'ProductEntities1696894175406'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "imgUrl" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "imgUrl"`);
    }

}
