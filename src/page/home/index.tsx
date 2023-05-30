import React from 'react';

import CommonHeader from 'components/page/header/CommonHeader';
import DefaultListItem from 'components/page/contents/list/DefaultListItem';
import CommonFooter from 'components/page/footer/CommonFooter';

const headerMenuDatas = {
  Left : [
      { name : '메뉴', type : 'menu', className : 'menuBtn'}
  ],
  Center : [
      { name : '헤더 타이틀', type : 'text', className : 'title'}
  ],
  Right : []
}

const footerMenuDatas = {
  Left : [],
  Center : [],
  Right : [
      { name : '등록', type : 'buttonLink', className : 'fotterBtn submit', link : '/register'},
  ]
}

const contentsName = 'HomePage';

const HomePage = () => {
  return (
    <div className='HomePageContainer'>
        <div className='HomePageContent'>
            <CommonHeader 
                contentsName={contentsName}
                headerMenu={headerMenuDatas}
                headerData={null}
            />
            <DefaultListItem />
            <CommonFooter 
              contentsName={contentsName}
              footerMenu={footerMenuDatas}
              footerData={null}
            />
        </div>
    </div>
  );
}

export default HomePage;
