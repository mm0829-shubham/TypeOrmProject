import { Request, Response } from 'express';
// import { Client } from '../../entities/Clients';
// import { Profile } from '../../entities/Profile';
// import { Photo  } from '../../entities/photo';
import { Category  } from '../../entities/Category';
import { Question  } from '../../entities/Question';
import { AppDataSource } from '../../app';




export async function viewUser(req: Request, res: Response) {

    try {

        const allrecords = await AppDataSource.getRepository(Category).find({
            relations: {
                questions: true,
            },
        })
        if (!allrecords) {
            return res.status(404).send({
                responseCode: 404,
                responseMessage: "User Not Found!",
            });
        } else {
            return res.status(200).send({
                responseMessage: "Clients found successfully",
                responseCode: 200,
                res: allrecords
            });
        }
    } catch (error) {
        console.log(error);

        return res.status(501).send({
            responseCode: 501,
            responseMessage: "Something went wrong",
            res: error
        });
    }
};

// export async function createUser(req: Request, res: Response) {

//     try {
//         let user = await AppDataSource.getRepository(Client).findOne({ where: { email: req.body.email } });
//         let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//         if (req.body.email.match(emailRegex)) {
//             if (user) {
//                 if (user.email == req.body.email) {
//                     return res.status(400).send({
//                         responseMessage: "Email already exists",
//                         responseCode: 400,
//                     });
//                 }
//             }
//             else {
//                 let saveUser = await AppDataSource.getRepository(Client).save(req.body)
//                 if (!saveUser) {
//                     return res.status(500).send({
//                         responseMessage: "Internal server error",
//                         responseCode: 500,
//                     });
//                 }
//                 else {
//                     return res.status(200).send({
//                         responseMessage: "User Saved successfully!",
//                         responseCode: 200,
//                         res: saveUser
//                     });
//                 };
//             }

//         }
//         else {
//             return res.status(501).send({
//                 responseMessage: "Email address invalid",
//                 responseCode: 501,
//             });
//         }

//     }
//     catch (error) {
//         console.log(error);
//         return res.status(501).send({
//             responseMessage: "Not Implemented",
//             responseCode: 501,
//         });
//     }
// };


// export async function updateUserWithId(req: Request, res: Response) {

//     const { id } = req.params;
//     const userData = req.body; // The data to update
//     try {
//         const userId = parseInt(id);
//         const allrecords = await AppDataSource.getRepository(Client).findOne({ where: { id: userId } });

//         if (!allrecords) {
//             return res.status(404).send({
//                 responseCode: 404,
//                 responseMessage: "User Not Found!",
//             });
//         } else {
//             AppDataSource.getRepository(Client).merge(allrecords, userData);
//             const updatedUser = await AppDataSource.getRepository(Client).save(allrecords);
//             return res.status(200).send({
//                 responseMessage: "Clients Data updated successfully",
//                 responseCode: 200,
//                 res: updatedUser
//             });
//         }
//     } catch (error) {
//         console.log(error);

//         return res.status(501).send({
//             responseCode: 501,
//             responseMessage: "Something went wrong",
//             res: error
//         });
//     }
// };


// export async function deleteUser(req: Request, res: Response) {

//     const { id } = req.params;
//     try {
//         const userId = parseInt(id);
//         let userProfile = await AppDataSource.getRepository(Client).find({ where: { id: userId } });
//         if (!userProfile) {
//             return res.status(404).send({
//                 responseCode: 404,
//                 responseMessage: "User not Found",
//             });

//         }
//         else {
//             await AppDataSource.getRepository(Client).delete({ id: userId });
//             return res.status(200).send({
//                 responseCode: 200,
//                 responseMessage: "User deleted successfully.",
//             });
//         }
//     } catch (error) {
//         console.log(error)
//         return res.status(501).send({
//             responseCode: 501,
//             responseMessage: "Something went wrong",
//             error: error,
//         })
//     }
// };


// export async function filterUser(req: Request, res: Response) {

//     try {
//         const address: string = req.params.address; 

//         const allrecords = await AppDataSource.getRepository(Client).find({where:{address:address}});
//         let numberOfUser = allrecords.length;

//         if (!allrecords) {
//             return res.status(404).send({
//                 responseCode: 404,
//                 responseMessage: "User Not Found!",
//             });
//         } else {
//             return res.status(200).send({
//                 responseMessage: "Clients found successfully",
//                 responseCode: 200,
//                 res: allrecords,
//                 count:numberOfUser
//             });
//         }
//     } catch (error) {
//         console.log(error);

//         return res.status(501).send({
//             responseCode: 501,
//             responseMessage: "Something went wrong",
//             res: error
//         });
//     }
// };




