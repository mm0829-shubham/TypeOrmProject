// import "reflect-metadata"
// import express from 'express';
// import { DataSource } from "typeorm";
// import mysql from 'mysql2';

// const app = express();
// app.use(express.json());
// const port = 3000;

// // app.get('/', function (req,res){
// //     res.send("Hello")
// // });

// const Connection = new DataSource({
//     name: "firstconnection", 
//     type: "mysql",
//     host: "localhost",
//     port: 3306,
//     username: "root",
//     password: "Shubh@1234",
//     database: "TypeORMDB"
// });

// Connection.initialize().then(()=>{console.log("Database Connected Successfully")}).catch((err)=>{
//     console.log("Database not connected",err)
// })


// app.listen(port, () => {
//             console.log(`Server is running on port ${port}.`)

//         });


// AppDataSource.Connection((err) => {
//     if (err) {
//         console.error('Error connecting to the database:', err);
//         return;
//     }
//     console.log('Connected to the database');
//     
// });

// app.get('/data', (req: Request, res: Response) => {
//     AppDataSource.query('SELECT * FROM TypeORMDB', (error, results) => {
//         if (error) {
//             res.status(500).json({ error });
//         } else {
//             res.json(results);
//         }
//     });
// });


import express from 'express';
import "reflect-metadata";
import { DataSource } from 'typeorm';
import Router from "./Client/routes/routes";
const app = express();
app.use(express.json());
const port = 3000;

app.use("/app/v1/user", Router);

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Shubh@1234",
    database: "TypeORMDB",
    entities: ["src/entities/*{.ts,.js}"],
    synchronize: false,
    logging: true,
});

const initializeDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database is connected successfully");

        app.listen(port, () => {
            console.log(`Server is running on port ${port}.`);
        });
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

initializeDatabase();
