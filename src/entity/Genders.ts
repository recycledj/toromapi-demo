import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'Genders' })
export class Genders {
    @PrimaryGeneratedColumn({
        type: 'int',
        name: 'id'
    })
    id: number

    @Column('varchar', {
        length: 20,
        nullable: false,
        name: 'name'
    })
    name: string
}
