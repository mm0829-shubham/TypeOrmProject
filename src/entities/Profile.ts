// import { Entity, PrimaryGeneratedColumn, Column,OneToOne } from "typeorm";
// import { Client } from "./Clients"


// @Entity()
// export class Profile {
//     @PrimaryGeneratedColumn("uuid")
//     id: number

//     @Column()
//     gender: string

//     @Column()
//     photo: string

//     @OneToOne(() => Client,(client) => client.profile) // specify inverse side as a second parameter
//     client: Client
// }