import React from 'react';

const makerType = new Map()
        .set( '버튼', 'button')
        .set( '텍스트', 'text')
        .set( '메뉴', 'menu')
        .set( '이미지', 'image')
        .set( '동영상', 'video');

const makerDataMeta = {
  button :  { value : ''},
  text :    { value : ''},
  menu :    { value : ''},
  image :   { value : ''},
  video :   { value : ''},
}

interface MakerDataProps {

}

const MakerData = (props : MakerDataProps) => {
  return (
    <div className="MakerDataContaier">
        <div className="MakerDataContent">

        </div>
    </div>
  );
}

export default MakerData;
