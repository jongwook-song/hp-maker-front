import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import CommonUtil from 'util/CommonUtil';

import CommonHeader from 'components/page/header/CommonHeader';
import RegisterContent from 'components/page/contents/modal/RegisterContent';
import SiteRegisterContent from 'components/page/contents/modal/SiteRegisterContent';
import CommonFooter from 'components/page/footer/CommonFooter';


const customStyles = {
    content: {
        paddingTop: '0px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '500px',
    },
};

const headerMenuDatas = {
    Left: [],
    Center: [
        { name: 'Modal', type: 'text', className: 'title' }
    ],
    Right: [
        { name: '닫기', type: 'modalClose', className: 'modalClose', clickEvent: null }
    ]
}

const footerMenuDatas = {
    Left: [
        { name: '등록', type: 'submit', className: 'footerBtn submit' },
    ],
    Center: [],
    Right: [
        { name : '취소', type : 'cancle', className: 'footerBtn cancle'}
    ]
}

const contentsName = "Modal";


interface ModalIndexProps {
    modalInfo: any,
    closeModal: any
}

const ModalIndex = (props: ModalIndexProps) => {
    const [ renderContent, setRenderContent] = useState< any>( null);
    const [ refArray, setRefArray] = useState< any>( []);

    useEffect(() => {
        if (CommonUtil.objectIsNotNull(props.modalInfo)) {
            headerMenuDatas.Center[0].name = props.modalInfo.menuName;
            headerMenuDatas.Right[0].clickEvent = props.closeModal;

            if (props.modalInfo.menuType === 'pageEdit') {
                setRenderContent(<RegisterContent modalInfo={props.modalInfo} />);
            }
            else if (props.modalInfo.menuType === 'layoutEdit') {
                setRenderContent(<RegisterContent modalInfo={props.modalInfo} />);
            }
            else if (props.modalInfo.menuType === 'buttonRegister') {
                setRenderContent(<SiteRegisterContent modalInfo={props.modalInfo} setRefArrayInfo={setRefArrayInfo}/>);
            }
        }
        else {
            headerMenuDatas.Center[0].name = 'Modal';
            headerMenuDatas.Right[0].clickEvent = props.closeModal;
            // setRenderContent( <div>잘못된 페이지 정보입니다.</div>);
        }
    }, [props.modalInfo, props.closeModal])

    const setRefArrayInfo = ( ref : any) => {
        setRefArray( ref);
    }

    return (
        <div>
            <Modal
                isOpen={CommonUtil.objectIsNotNull(props.modalInfo)}
                // onAfterOpen={afterOpenModal}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <CommonHeader
                    contentsName={''}
                    headerMenu={headerMenuDatas}
                    headerData={null}
                />
                <form>
                    {renderContent}
                </form>
                <CommonFooter
                    contentsName={ contentsName}
                    footerMenu={ footerMenuDatas}
                    footerData={{
                        setModalInfo: props.closeModal,
                        refArray : refArray
                    }}
                />
            </Modal>
        </div>
    )
}

export default ModalIndex;