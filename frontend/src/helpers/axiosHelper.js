import axios from "axios";
const apiEp="http://localhost/api/v1/user"
export const apipostUser = async (user) => {
    try {
        const { data } = await axios.post(apiEp, user)
        
    } catch (error) {
        return {
            status: "error",
            message: error.message
        }
    }
}