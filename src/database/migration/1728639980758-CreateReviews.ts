import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateReviews1728639980758 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"reviews",
            columns:[{
                name:"review_id",
                type:"integer",
                isPrimary:true,
                isGenerated:true,
                generationStrategy:"increment"
            },
            {
                name:"product_id",
                type:"int",
            },
            {
                name:"user_id",
                type:"int",
            },
            {
                name:"rating",
                type:"int",
            },
            {
                name:"comment",
                type:"text",
            },
            {
                name:"created_at",
                type:"timestamp",
                default:'now()'
            },
            ],
        }));
        await queryRunner.createForeignKey(
            'reviews',
            new TableForeignKey({
                columnNames:['product_id'],
                referencedColumnNames:['product_id'],
                referencedTableName:'products'
            })
        )
        await queryRunner.createForeignKey(
            'reviews',
            new TableForeignKey({
                columnNames:['user_id'],
                referencedColumnNames:['user_id'],
                referencedTableName:'users'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('reviews')
    }

}
