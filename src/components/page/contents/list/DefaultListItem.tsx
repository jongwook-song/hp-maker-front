import React from 'react';

import CommonUtil from 'util/CommonUtil';

import EmptyListItem from 'components/page/contents/list/EmptyListItem';

import 'components/page/contents/list/ListItem.css';

interface DefaultListItemProps {
    contextName : string,
    listData : any
}

const listTitle = {
    HomePage : [
        { name: '순번', className: 'id'},
        { name: '제목', className: 'title center'},
        { name: '상태', className: 'modifiedTarget'},
        { name: '더보기', className: 'menu'}
    ]
}

const DefaultListItem = (props: DefaultListItemProps) => {
    const renderListTitle = ( listTitle : any) => {
        return (
            <div key={listTitle.className} className={listTitle.className}>
                {listTitle.name}
            </div>
        )
    }

    const renderListItem = ( item : any) => {
        return (
            <div key={item.id} className="DefaultListImteContentItem">
                <div className="id">
                    {item.id}
                </div>
                <div className="title">
                    {item.title}
                </div>
                { CommonUtil.strIsNotNull( item.modifiedTarget) &&
                    <div className="modifiedTarget">
                        {item.modifiedTarget}
                    </div>
                }
                <div className="menu">
                    :
                </div>
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
