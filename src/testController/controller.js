const responseData= require("../index")
module.exports = {
    // api development

    async responseData(req, res) {
        try {
           
        }
        catch (error) {
            console.log(error.message);
            return res.status(501).send({
                responseMessage: "Not Implemented",
                responseCode: 501,
            });
        }
    },
    



};
