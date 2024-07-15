import sequelize from "./init";

const initializeDB = async (): Promise<void>=>{
    try {
        await sequelize.authenticate()
        console.log("Database established");  
    } catch (error:any) {
        console.log(error.message);  
    }
}

export default initializeDB