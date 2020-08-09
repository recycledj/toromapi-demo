import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertGenders1597015486745 implements MigrationInterface {

    tableName = "Genders";
    public async up(queryRunner: QueryRunner): Promise<void> {
        const queryBuilder = await queryRunner.manager.createQueryBuilder();
        await queryBuilder.insert()
            .into(this.tableName, ['name'])
            .values([
                { name: 'Masculino' },
                { name: 'Femenino' }
            ])
            .execute()
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const queryBuilder = await queryRunner.manager.createQueryBuilder();
        await queryBuilder.delete().from(this.tableName).execute();
    }

}
