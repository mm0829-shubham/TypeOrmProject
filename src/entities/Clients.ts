// import {Entity,PrimaryGeneratedColumn,Column, BaseEntity,CreateDateColumn,OneToOne, JoinColumn,OneToMany} from "typeorm";
// import {Profile} from "./Profile";
// import { Photo } from "./photo"


// @Entity('client')
// export class Client extends BaseEntity{
//     @PrimaryGeneratedColumn()
//     id:number;

//     @Column()
//     firstName:string;
//     @Column()
//     lastName:string;
//     @Column()
//     email:string;
//     @Column()
//     address:string;

//     @OneToOne(() => Profile, (profile) => profile.client)
//     @JoinColumn()
//     profile: Profile

//     @OneToMany(() => Photo, (photo) => photo.client)
//     photos: Photo[]
    


// }