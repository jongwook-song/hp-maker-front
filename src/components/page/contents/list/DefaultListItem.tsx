import React from 'react';
import { useNavigate } from "react-router-dom";

import CommonUtil from 'util/CommonUtil';

import EmptyListItem from 'components/page/contents/list/EmptyListItem';

import 'components/page/contents/list/ListItem.css';

interface DefaultListItemProps {
    contextName : string,
    listData : any
}

const listTitle = {
    HomePage : [
        { name: '순번', className: 'id', valueTitle: 'id' , eventType : 'listItem', link : '/register'},
        { name: '제목', className: 'title', valueTitle: 'title', eventType : 'listItem', link : '/register'},
        { name: '상태', className: 'modifiedTarget', valueTitle: 'modifiedTarget', eventType : 'listItem', link : '/register'},
        { name: '더보기', className: 'menu', valueTitle: 'menu', eventType : 'more', icon: ':'}
    ]
}

const DefaultListItem = (props: DefaultListItemProps) => {
    const navigate = useNavigate();
    
    const onClickEvent = ( item : any, listTitle : any) => {
        if( listTitle.eventType === 'listItem'){
            navigate( listTitle.link, {
                state: { item: item}
              }
            );
        }

        if( listTitle.eventType === 'more'){
            console.log( 'more', item);
        }
    }

    const renderListTitle = ( listTitle : any) => {
        return (
            <div key={listTitle.className} className={listTitle.className + ' center'}>
                {listTitle.name}
            </div>
        )
    }

    const renderListItem = ( item : any) => {
        return (
            <div key={item.id} className="DefaultListImteContentItem">
                { listTitle.HomePage.map(( listTitle : any) => {
                    let renderValue = item[listTitle.valueTitle];

                    if( !CommonUtil.objectIsNotNull( renderValue) && CommonUtil.objectIsNotNull( listTitle.icon)){
                        renderValue = listTitle.icon;
                    }

                    return (
                        <div key={ item.id + '-' +listTitle.className} 
                            className={ listTitle.className} 
                            onClick={ onClickEvent.bind( this, item, listTitle)}
                        >
                            { renderValue}
                        </div>
                    )
                 })
                }
            </div>
        )
    }

    return (
        <div className="DefaultListImteContainer">
            <div className="DefaultListImteContent">
                <div className="DefaultListImteContentItem title">
                    { listTitle.HomePage.map(( listTitle : any) => {
                        return renderListTitle( listTitle);
                     })
                    }
                </div>
                { CommonUtil.objectIsNotNull(props.listData) &&
                    <>
                        { props.listData.length > 0 ? 
                            <>
                                { props.listData.map(( item : any) => {
                                    return renderListItem( item);
                                 })
                                }
                            </>
                            :
                            <EmptyListItem />
                        }
                    </>
                }
            </div>
        </div>
    );
}

export default DefaultListItem;
