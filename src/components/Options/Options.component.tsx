import React from 'react';
import Option from '../Option/Option.component'
import {RouteEnum} from '../../constants/routes'
import {Content, Wrapper} from './Options.style'

const optionImages = {
  books: 'https://images.squarespace-cdn.com/content/v1/52d707a1e4b0cca896983732/1523308121624-A5Q9O0ZXZ2PT7GZEDMPL/Wall_of_Books_321.jpg?format=1000w',
  guitars: 'https://img.freepik.com/free-photo/multicolored-acoustic-guitars-hang-in-a-row-in-a-music-store-on-a-white-background-vertical-photo-close-up_553512-341.jpg?w=2000',
  vacation: 'https://as2.ftcdn.net/v2/jpg/03/28/03/13/1000_F_328031356_l5K4YXQ39PVLPr5rIg2Qo5mTtOh26Edh.jpg',
  articles: 'https://c8.alamy.com/comp/2FJXM16/a-single-bird-is-flying-with-wings-spread-silhouetted-against-a-vivid-colorful-sunset-sky-in-a-vertical-image-format-2FJXM16.jpg',
}

const Options = () => {
  return (
    <Wrapper>
      <Content>
        <Option
          title={'Find your book'}
          to={RouteEnum.MARKET}
          url={optionImages.books}
        />
        <Option
          title={'Start to play the guitar'}
          to={RouteEnum.MARKET}
          url={optionImages.guitars}
        />
        <Option
          title={'Get a vacation'}
          to={RouteEnum.MARKET}
          url={optionImages.vacation}
        />
        <Option
          title={'Improve yourself'}
          to={RouteEnum.ARTICLES}
          url={optionImages.articles}
        />
        <Option
          title={'Get a vacation'}
          to={RouteEnum.MARKET}
          url={optionImages.vacation}
        />
        <Option
          title={'Find your book'}
          to={RouteEnum.MARKET}
          url={optionImages.books}
        />
        <Option
          title={'Start to play the guitar'}
          to={RouteEnum.MARKET}
          url={optionImages.guitars}
        />
        <Option
          title={'Improve yourself'}
          to={RouteEnum.ARTICLES}
          url={optionImages.articles}
        />
      </Content>
    </Wrapper>
  );
};

export default Options;