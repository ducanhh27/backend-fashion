import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1727980916709 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name:"users",
            columns:[{
                name:"user_id",
                type:"integer",
                isPrimary:true,
                isGenerated:true,
                generationStrategy:"increment"
            },
            {
                name:"username",
                type:"varchar",
            },
            {
                name:"password",
                type:"varchar",
            },
            {
                name:"first_name",
                type:"varchar",
            },
            {
                name:"last_name",
                type:"varchar",
            },
            {
                name:"created_at",
                type:"timestamp",
                default:'now()'
            },
            {
                name:"updated_at",
                type:"timestamp",
                default:'now()'
            },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
