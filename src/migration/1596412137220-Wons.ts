import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from 'typeorm';

export class Users1560261965873 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(
            new Table({
                name: 'Wons',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'codeWon',
                        type: 'varchar',
                        isUnique: true,
                        isNullable: false
                    },
                    {
                        name: 'codeMother',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'codeFather',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'dateOfBirth',
                        type: 'datetime',
                        isNullable: false,
                    },
                    {
                        name: 'age',
                        type: 'int',
                        isNullable: false
                    },
                    {
                        name: 'weight',
                        type: 'int',
                        isNullable: false,
                        length: '20'
                    },
                    {
                        name: 'photo',
                        type: 'varchar',
                        isNullable: false,
                        length: '255'
                    },
                    {
                        name: 'lot',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'vaccines',
                        type: 'varchar',
                        isNullable: false,
                        length: '255'
                    },
                    {
                        name: 'observations',
                        type: 'varchar',
                        isNullable: true,
                        length: '255'
                    },
                    {
                        name: 'createdAt',
                        type: 'datetime',
                        default: 'CURRENT_TIMESTAMP'
                    },
                    {
                        name: 'idGender',
                        type: 'int'
                    }
                ],
            }));


    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('Wons');
    }
}
