import React, { } from 'react';
import { useNavigate } from "react-router-dom";

import CommonUtil from 'util/CommonUtil';
import { PopoverMenu} from 'components/page/contents/popover';

import 'components/page/header/CommonHeader.css'

interface CommonHeaderProps {
    contentsName: string,
    headerMenu: any, // 값으로 left, center, right json 형태로
    headerData: any
}

const CommonHeader = (props: CommonHeaderProps) => {
    const navigate = useNavigate();

    const onClickHeaderMenu = ( type : string, menuData : any) => { // 추후 CommonFnUtil로 빼서 적용
        if( type === 'menu'){
            return onClickMenu( menuData);
        }
        
        if( type === 'text'){
            return onClickTitle( menuData);
        }

        if( type === 'buttonLink'){
            return onClickButtonLink( menuData);
        }

        if( type === 'modalClose'){
            return onClickModalClose( menuData);
        }

        return null;
    }

    const onClickMenu = ( menuData : any) => { // 추후 CommonFnUtil로 빼서 적용 시 사라질 예정
        console.log( 'onClickMenu');
        console.log( menuData);
    }

    const onClickTitle = ( menuData : any) => { // 추후 CommonFnUtil로 빼서 적용 시 사라질 예정
        console.log( 'onClickTitle');
        console.log( menuData);
    }

    const onClickButtonLink = ( menuData : any) => {  // 추후 CommonFnUtil로 빼서 적용 시 사라질 예정
        if( CommonUtil.objectIsNotNull( menuData.link)){
            navigate(menuData.link);
        }
    }

    const onClickModalClose = ( menuData : any) => {
        menuData.clickEvent();
    }

    const renderHeaderContent = ( key : string) => {
        let returnContent : any = [];

        for(let i=0; i<props.headerMenu[key].length; i++){
            returnContent.push( renderHeaderContentDetail(props.headerMenu[key][i], key));
        }

        return (
            <div key={key} className={'CommonHeaderContent ' + key}>
                {returnContent}
            </div>);
    }

    const renderHeaderContentDetail = ( menuData : any, type : string) => {
        if( menuData.type === 'popover'){
            return( 
                <PopoverMenu
                    key={'popover-' + menuData.name}
                    menuData={menuData}
                />
            )
        }

        return ( <span key={type + menuData.name} onClick={onClickHeaderMenu.bind(this, menuData.type, menuData)}>{menuData.name}</span> );
    }
    
    return (
        <div className='CommonHeaderContaier'>
            <div className='CommonHeaderContent'>
                { CommonUtil.objectIsNotNull( props.headerMenu) &&
                    <>
                        { Object.keys( props.headerMenu).map(( key: string) => {
                            return renderHeaderContent( key);
                         })
                        }
                    </>
                }
            </div>
        </div>
    );
}

export default CommonHeader;
