import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateOders1728640515101 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"orders",
            columns:[{
                name:"order_id",
                type:"integer",
                isPrimary:true,
                isGenerated:true,
                generationStrategy:"increment"
            },
            {
                name:"user_id",
                type:"int",
            },
            {
                name:"order_date",
                type:"timestamp",
                default:'now()'
            },
            {
                name:"total_amount",
                type:"decimal",
            },
            {
                name:"status",
                type:"varchar",
            },
            {
                name:"shipping_address_id",
                type:"int",
            },
            {
                name:"billing_address_id",
                type:"int",
            },
            ],
        }));
        await queryRunner.createForeignKey(
            'reviews',
            new TableForeignKey({
                columnNames:['user_id'],
                referencedColumnNames:['user_id'],
                referencedTableName:'users'
            })
        )
        await queryRunner.createForeignKey(
            'reviews',
            new TableForeignKey({
                columnNames:['shipping_address_id'],
                referencedColumnNames:['address_id'],
                referencedTableName:'addresses'
            })
        )
        await queryRunner.createForeignKey(
            'reviews',
            new TableForeignKey({
                columnNames:['billing_address_id'],
                referencedColumnNames:['address_id'],
                referencedTableName:'addresses'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders')

    }

}
