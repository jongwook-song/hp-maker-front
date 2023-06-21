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
        let returnValue : any = null;

        const data : AxdiosData = {
            url : '/site/findIsNotDelete',
            data : null
        }

        await Adapter.fetch.post(data).then((res) => {
            returnValue = res;
        }).catch((error) => {
            // console.error(error)
            returnValue.type = 'error';
            returnValue.info = error;
        })

        return returnValue;        
    }

    public static saveSite = async( saveSiteData : any) => {
        let returnValue : any = {};

        const data : AxdiosData = {
            url : '/site/saveSite',
            data : saveSiteData
        }

        await Adapter.fetch.post(data).then((res) => {
            returnValue = res;
        }).catch((error) => {
            // console.error(error)
            returnValue.type = 'error';
            returnValue.info = error;
        })

        return returnValue;
    }

    public static getSiteDetail = async( siteId : number) => {
        let returnValue : any = {};

        const data : AxdiosData = {
            url : '/siteDetail/findSiteDetail',
            data : { siteId : siteId}
        }

        await Adapter.fetch.post(data).then((res) => {
            returnValue = res;
        }).catch((error) => {
            // console.error(error)
            returnValue.type = 'error';
            returnValue.info = error;
        })

        return returnValue;
    }
}