import axios from 'axios';

import AdapterUtils from 'adapter/AdapterUtils';
// import CommonUtil from 'util/CommonUtil';

export interface IAdapter {
    fetch?: {
        get?: (data: {
            url: string,
            data?: any
        }) => Promise<any>,
        post?: (data: {
            url: string,
            data?: any,
        }) => Promise<any>
    }
}

export default class Adapter {
    public static fetch = {
        get: async ( data: {
            url: string,
            data?: any,
        }): Promise<any> => {
            try {
                return AdapterUtils.toResultData( await axios.get( data.url, {
                    params: data.data,
                }));
            } catch ( error) {
                throw error;
            }
        },
        post: async ( data: {
            url: string,
            data?: any,
        }): Promise<any> => {
            try {
                let result : { status : number, statusText : string, data : any } = { status: 0, statusText: '', data: null } ;
                await axios.post( data.url, data.data).then(( res : any) => {
                    result = res;
                }).catch(( error) => {
                    result = error.message
                })
                return AdapterUtils.toResultData( result);
            } catch ( error) {
                console.log( error)
                throw error;
            }
        },
        // fileUpload: async ( data: {
        //     url: string,
        //     data?: any,
        //     async?: boolean,
        //     fileUpload : boolean
        // }): Promise<any> => {
        //     try {
        //         let temp = data.data
        //         if( CommonUtil.objectIsNotNull( data.data) && !data.fileUpload){
        //             temp = JSON.parse( data.data);
        //         }
        //         let result : { status : number, statusText : string, data : any } = { status: 0, statusText: '', data: null } ;
        //         await axios.post( data.url, temp).then(( res : any) => {
        //             result = res;
        //         }).catch(( error) => {
        //             result = error.response
        //         })
        //         return AdapterUtils.toResultData( result);
        //     } catch ( error) {
        //         console.log( error)
        //         throw error;
        //     }
        // },
    };
}