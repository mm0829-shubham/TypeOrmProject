import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
} from "typeorm"
import { Category } from "./Category"

@Entity()
export class Question {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @ManyToMany((type) => Category, (category) => category.questions, {
        eager: true,
    })
    @JoinTable()
    categories: Category[]
}