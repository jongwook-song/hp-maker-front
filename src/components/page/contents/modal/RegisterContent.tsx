import React from 'react';

// import CommonUtil from 'util/CommonUtil';
import 'components/page/contents/modal/ModalContent.css';

interface RegisterContentProps {
    modalInfo : any
}

const RegisterContent = ( props : RegisterContentProps) => {
    return(
        <div className="RegisterContentContainer">
            <div className="RegisterContentContainerLeft">
                트리 데이터
            </div>
            <div className="RegisterContentContainerRight">
                페이지 정보
            </div>
        </div>
    )
}

export default RegisterContent;