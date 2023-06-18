import Adapter from "adapter/Adapter";

interface AxdiosData {
    url : string,
    data : any
}

// interface FileUpload {
//     url : string,
// }

export default class CommonFnUtil {
    public static getSitesList = async() => {
        let returnValue = null;

        const data : AxdiosData = {
            url : '/site/findAll',
            data : null
        }

        await Adapter.fetch.post(data).then((res) => {
            returnValue = res;
        }).catch((error) => {
            console.error(error)
        })

        return returnValue;        
    }

    public static saveSite = async( saveSiteData : any) => {
        let returnValue = null;

        const data : AxdiosData = {
            url : '/site/saveSite',
            data : saveSiteData
        }

        await Adapter.fetch.post(data).then((res) => {
            returnValue = res;
        }).catch((error) => {
            returnValue = error;
        })

        return returnValue;        
    }
}