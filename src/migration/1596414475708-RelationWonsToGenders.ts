import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class RelationWonsToGenders1596414475708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('Wons', new TableForeignKey({
            columnNames: ['idGender'],
            referencedColumnNames: ['id'],
            referencedTableName: 'Genders',
            onDelete: 'CASCADE'
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('Wons');
        const foreign = table.foreignKeys.find(fk => fk.columnNames.includes('idGender'));
        await queryRunner.dropForeignKey('Wons', foreign);
    }

}
