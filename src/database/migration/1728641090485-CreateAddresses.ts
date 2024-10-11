import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateAddresses1728641090485 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"addresses",
            columns:[{
                name:"address_id",
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
                name:"street_address",
                type:"varchar",
            },
            {
                name:"city",
                type:"varchar",
            },
            {
                name:"state",
                type:"varchar",
            },
            {
                name:"postal_code",
                type:"varchar",
            },
            {
                name:"contry",
                type:"varchar",
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
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('addresses')

    }

}
