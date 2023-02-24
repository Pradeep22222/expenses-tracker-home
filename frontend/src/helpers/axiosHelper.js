import axios from "axios";
const rootUrl = "http://localhost:8000"
const userEP=rootUrl+"/api/v1/user"
export const apiPostUser = async (obj) => {
    try {
        const { data } = await axios.post(userEP, obj)
        return data;
    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
    }
}