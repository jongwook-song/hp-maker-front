import React from 'react';

interface EmptyListItemProps {

}

const EmptyListItem = (props: EmptyListItemProps) => {
    return (
        <div className="EmptyListItemContainer">
            데이터가 존재하지 않습니다.
        </div>
    );
}

export default EmptyListItem;
