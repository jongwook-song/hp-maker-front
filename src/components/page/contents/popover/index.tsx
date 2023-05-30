import React, { useState, useRef} from 'react';
import { Popover, Overlay, PopoverBody } from 'react-bootstrap';

import CommonUtil from 'util/CommonUtil';

import ModalIndex from 'components/page/contents/modal'

const clickMenu : any = {
    'pageEdit' : [ 'setting'],
    'layoutEdit' : [ 'add', 'eidt']
}

const clickMenuInfos : any = {
    'add' : { name : '추가', iconName : 'add'},
    'eidt' : { name : '편집', iconName : 'eidt'},
    'setting' : { name : '관리', iconName : 'eidt'},
}

interface PopoverMenuProps {
    menuData : any
}

export const PopoverMenu = (props : PopoverMenuProps) => {
    const popoverRef = useRef<HTMLDivElement>(null);

    const [isShow, setIsShow] = useState( false);
    const [eventTarget, setEventTarget] = useState( null);
    const [modalInfo, setModalInfo] = useState<any | null>( null);


    const onClickPopover = ( event : any) => {
        setIsShow( !isShow);

        if( !CommonUtil.objectIsNotNull( eventTarget)){
            setEventTarget( event.target);
        }
    }

    const onClickClose = () => {
        setIsShow( false);
    }

    const onClickMenu = ( menuType : string, menuName : string) => {
        onClickClose();
        setModalInfo( {menuType : menuType, menuName : menuName});
    }

    const closeModal = () => {
        setModalInfo( null);
    }

    const renderPopoverBody = ( menuType : string, menuName : string) => {
        return (
            <div key={menuName} onClick={(e) => {onClickMenu( menuType, menuName)}}>
                <span>{clickMenuInfos[menuName].name}</span>
            </div>
        )
    }

    return (
        <div ref={popoverRef} key={props.menuData.name}>
            <span onClick={onClickPopover}>{props.menuData.name}</span>
            <Overlay
                show={isShow}
                target={eventTarget}
                placement="bottom"
                container={popoverRef.current}
                containerPadding={20}
                rootClose={true}
                onHide={onClickClose}
            >
                <Popover id="popover-contained">
                    <PopoverBody>
                        { CommonUtil.objectIsNotNull(clickMenu[props.menuData.className]) && 
                            <>
                                { clickMenu[props.menuData.className].map(( menuName : string) => {
                                    return renderPopoverBody( props.menuData.className, menuName);
                                 })
                                }
                            </>
                        }
                    </PopoverBody>
                </Popover>
            </Overlay>
            <ModalIndex
                modalInfo={modalInfo}
                closeModal={closeModal}
            />
        </div>
    )
}