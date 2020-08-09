import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, JoinColumn } from 'typeorm';
import { MinLength } from 'class-validator';
import { Genders } from './Genders';

@Entity({ name: 'Wons' })
export class Wons {
    @PrimaryGeneratedColumn({
        type: 'int'
    })
    id: number;

    @Column('varchar', {
        nullable: false,
        unique: true,
        name: 'codeWon'
    })
    codeWon: string;

    @Column('varchar', {
        nullable: true,
        unique: false,
        length: 250,
        name: 'codeMother'
    })
    codeMother: string;

    @Column('varchar', {
        nullable: false,
        unique: true,
        length: 250,
        name: 'photo'
    })
    photo: string;
    

    @Column('varchar', {
        nullable: true,
        unique: false,
        length: 250,
        name: 'codeFather'
    })
    codeFather: string;

    @Column('date', {
        nullable: false,
        name: 'dateOfBirth',
    })
    dateOfBirth: Date;
    
    @ManyToOne(type => Genders, {
        nullable: false,
    })
    @JoinColumn({ name: 'idGender' })
    idGender: Genders;

    @Column('bigint', {
        nullable: false,
        name: 'age'
    })
    age: number;

    @Column('varchar', {
        nullable: false,
        length: 150,
        name: 'weight'
    })
    weight: number;

    @Column('varchar', {
        nullable: false,
        length: 250,
        name: 'lot'
    })
    lot: string;

    @Column('varchar', {
        length: 250,
        nullable: false,
        name: 'vaccines'
    })
    vaccines: string;

    @Column('varchar', {
        nullable: false,
        length: 350,
        name: 'observations'
    })
    observations: string;

    @Column('datetime', {
        nullable: false,
        name: 'createdAt'
    })
    @CreateDateColumn()
    createdAt: Date;
}
