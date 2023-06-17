import axios from "axios";
export default class CommonFnUtil {
    public static getSitesList = async() => {
        let returnValue = null;

        await axios.post('/site/findAll', ).then(function (response) {
            returnValue = response.data;
        })
        .catch(function (error) {
            console.log(error);
        });

        return returnValue;        
    }
}