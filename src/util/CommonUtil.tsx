export default class CommonUtil {
    public static objectIsNotNull = ( targetObject : any) => {
        if( targetObject === null || targetObject === undefined || (typeof targetObject === 'object' && Object.entries(targetObject).length < 1)){
            return false;
        }

        return true;
    }

    public static strIsNotNull = ( targetString : string) => {
        if( targetString === null || targetString === undefined || ( targetString.trim().length < 1)){
            return false;
        }

        return true;
    }
}