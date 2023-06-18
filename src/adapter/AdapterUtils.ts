export default class AdapterUtils {
    public static toResultData = (response: { status: number, statusText: string, data: any }) => {
        if (response.status >= 200 && response.status < 300 && response.data) {
            return response.data;
            // const { resultCode, resultMsg, resultData } = response.data;
            // if (resultCode === 0 || resultCode === 200 || (resultMsg || '').toLocaleLowerCase() === 'success') {
            //     return resultData;
            // }
            // else {
            //     throw new Error(resultMsg);
            // }
        }
        else {
            throw new Error(response.statusText);
        }
    }

    public static isHttp = (url: string) => {
        const match = /((?:http|https):\/\/[^/]*).*/g.exec(url);
        return match != null;
    }
};