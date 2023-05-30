import React from 'react';
import CommonHeader from 'components/page/header/CommonHeader';
// import DefaultListItem from 'components/page/contents/list/DefaultListItem';
// import CommonFooter from 'components/footer/CommonFooter';

const headerMenuDatas = {
  Left : [
      { name : '페이지 편집', type : 'popover', className : 'pageEdit'},
      { name : '레이아웃 편집', type : 'popover', className : 'layoutEdit'}
  ],
  Center : [
      { name : '게시글 타이틀', type : 'text', className : 'title'}
  ],
  Right : [
      { name : '미리보기', type : 'preview', className : 'preivew'},
      { name : '페이지 저장', type : 'pgaeSave', className : 'pgaeSave'},
      { name : '닫기', type : 'buttonLink', className : 'close', link: -1}
  ]
}

// const footerMenuDatas = {
//   Left : [],
//   Center : [],
//   Right : []
// }

interface RegisterProps {
    listData : any // 홈화면 리스트 데이터
  }

const contentsName = 'Register';

const Register = ( props : RegisterProps) => {
  return (
    <div className='CommonContainer'>
        <div className='CommonContent'>
            <CommonHeader 
                contentsName={contentsName}
                headerMenu={headerMenuDatas}
                headerData={null}
            />
            <div style={{height: '500px'}}>
                ffff
            </div>
            {/* <DefaultListItem /> */}
            {/* <CommonFooter 
              contentsName={contentsName}
              footerMenu={footerMenuDatas}
              footerData={null}
            /> */}
        </div>
    </div>
  );
}

export default Register;
