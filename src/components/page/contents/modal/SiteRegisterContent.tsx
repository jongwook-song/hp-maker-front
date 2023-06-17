import React, { useRef, useEffect} from 'react';

import CommonUtil from 'util/CommonUtil';
import 'components/page/contents/modal/ModalContent.css';

interface SiteRegisterContentProps {
    modalInfo : any,
    setRefArrayInfo : any
}

const siteRegisterInfo : any = [
    {name : '사이트 이름', id : 'title'}
]

const SiteRegisterContent = ( props : SiteRegisterContentProps) => {
    const inputRefArray = useRef<any|null>( []);

    const renderSiteRegister = ( listInfo : any, index : number) => {
        return (
            <div key={listInfo.id} className="InfoContent">
                <div className="InfoTitle" id={listInfo.id}>
                    {listInfo.name}
                </div>
                <div className="InfoValueContent">
                    <input id={listInfo.id + index} type="text" 
                            ref={ (ref) => { 
                                console.log( 'ref : ', ref);
                                inputRefArray.current[index] = ref;
                            }} // took this from your guide's example.
                    />
                </div>
            </div>
        )
    }

    useEffect(() => {
        if( CommonUtil.objectIsNotNull( props) && CommonUtil.objectIsNotNull( props.setRefArrayInfo)){
            console.log(inputRefArray);
            props.setRefArrayInfo( inputRefArray);
        }
    }, [ inputRefArray, props])

    return(
        <div className="SiteRegisterContentContainer">
            <div className="SiteRegisterContentTitle">
                페이지 정보 입력
            </div>
            <div className="SiteRegisterContentContent">
                { siteRegisterInfo.map(( listInfo : any, index : number) => {
                    return renderSiteRegister( listInfo, index);
                 })
                }
            </div>
        </div>
    )
}

export default SiteRegisterContent;