import React, { useLayoutEffect, useState } from 'react';

import CommonFnUtil from 'util/CommonFnUtil';

import CommonHeader from 'components/page/header/CommonHeader';
import DefaultListItem from 'components/page/contents/list/DefaultListItem';
import CommonFooter from 'components/page/footer/CommonFooter';

import ModalIndex from 'components/page/contents/modal';

import 'page/home/home.css';

const headerMenuDatas = {
    Left: [
        { name: '메뉴', type: 'menu', className: 'menuBtn' }
    ],
    Center: [
        { name: '헤더 타이틀', type: 'text', className: 'title' }
    ],
    Right: []
}

const footerMenuDatas = {
    Left: [],
    Center: [],
    Right: [
        { name: '등록', type: 'buttonRegister', className: 'footerBtn submit' },
    ]
}

const contentsName = 'HomePage';

const HomePage = () => {
    const [ modalInfo, setModalInfo] = useState< any | null>( null);
    const [ sitesList, setSitesList] = useState< any>( []);

    useLayoutEffect(() => {
        (async () => {
            const dataList = await CommonFnUtil.getSitesList();
            if( JSON.stringify( dataList) !== JSON.stringify( sitesList)){
                setSitesList( dataList);
            }
        })();
    }, [ sitesList]);

    const closeModal = () => {
        setModalInfo( null);
    }

    return (
        <div className='HomePageContainer'>
            <div className='HomePageContent'>
                <CommonHeader
                    contentsName={ contentsName}
                    headerMenu={ headerMenuDatas}
                    headerData={ null}
                />
                <DefaultListItem 
                    contextName={ contentsName}
                    listData={ sitesList}
                />
                <CommonFooter
                    contentsName={ contentsName}
                    footerMenu={ footerMenuDatas}
                    footerData={{
                        setModalInfo : setModalInfo
                    }}
                />
            </div>
            <ModalIndex
                modalInfo={ modalInfo}
                closeModal={ closeModal}
            />
        </div>
    );
}

export default HomePage;
