import React from 'react';
import { useNavigate } from "react-router-dom";

import CommonUtil from 'util/CommonUtil';

import 'components/page/footer/CommonFooter.css'

interface CommonFooterProps {
  contentsName : string,
  footerMenu : any, // 값으로 left, center, right json 형태로
  footerData : any
}

const CommonFooter = (props : CommonFooterProps) => {  // 추후 CommonFnUtil로 빼서 적용
    const navigate = useNavigate();

    const onClickFooterMenu = ( type : string, menuData : any) => {
        if( type === 'menu'){
            return onClickMenu( menuData);
        }

        if( type === 'buttonLink'){
            return onClickButtonLink( menuData);
        }

        return null;
    }

    const onClickMenu = ( menuData : any) => {  // 추후 CommonFnUtil로 빼서 적용 시 사라질 예정
        console.log( 'onClickMenu');
        console.log( menuData);
    }

    const onClickButtonLink = ( menuData : any) => {  // 추후 CommonFnUtil로 빼서 적용 시 사라질 예정
        if( CommonUtil.objectIsNotNull( menuData.link)){
            navigate(menuData.link);
        }
    }

    const renderFooterContent = ( key : string) => {
        let returnContent : any = [];

        for(let i=0; i<props.footerMenu[key].length; i++){
            returnContent.push( renderFooterContentDetail(props.footerMenu[key][i], key));
        }

        return (
            <div key={key} className={'CommonFooterContent ' + key}>
                {returnContent}
            </div>
        );
    }

    const renderFooterContentDetail = ( menuData : any, type : string) => {
        return ( 
            <span key={type + menuData.name} 
                className={CommonUtil.strIsNotNull(menuData.className) ? menuData.className : ''} 
                onClick={onClickFooterMenu.bind(this, menuData.type, menuData)}>
                    {menuData.name}
            </span>
        );
    }
    
    return (
        <div className='CommonFooterContaier'>
            <div className='CommonFooterContent'>
                { CommonUtil.objectIsNotNull( props.footerMenu) &&
                    <>
                        { Object.keys( props.footerMenu).map(( key: string) => {
                            return renderFooterContent( key);
                         })
                        }
                    </>
                }
            </div>
        </div>
    );
}

export default CommonFooter;
