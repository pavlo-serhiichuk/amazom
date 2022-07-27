import React from 'react';
import Option from '../Option/Option.component'
import {RouteEnum} from '../../utils/routes'
import {Content, Wrapper} from './Options.style'
import Appear from '../Appear/Appear'

const optionImages = {
  books: 'https://images.squarespace-cdn.com/content/v1/52d707a1e4b0cca896983732/1523308121624-A5Q9O0ZXZ2PT7GZEDMPL/Wall_of_Books_321.jpg?format=1000w',
  guitars: 'https://img.freepik.com/free-photo/multicolored-acoustic-guitars-hang-in-a-row-in-a-music-store-on-a-white-background-vertical-photo-close-up_553512-341.jpg?w=2000',
  vacation: 'https://as2.ftcdn.net/v2/jpg/03/28/03/13/1000_F_328031356_l5K4YXQ39PVLPr5rIg2Qo5mTtOh26Edh.jpg',
  articles: 'https://c8.alamy.com/comp/2FJXM16/a-single-bird-is-flying-with-wings-spread-silhouetted-against-a-vivid-colorful-sunset-sky-in-a-vertical-image-format-2FJXM16.jpg',
}

function randomNumber(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const Options = () => {
  return (
    <Wrapper>
      <Content>
        <Appear delay={randomNumber(700, 1100)}>
        <Option
          title={'Find your book'}
          to={RouteEnum.BOOKS}
          url={optionImages.books}
        />
        </Appear>
        <Appear delay={randomNumber(700, 1000)}>
          <Option
            title={'Start to play the guitar'}
            to={RouteEnum.GUITARS}
            url={optionImages.guitars}
          />
        </Appear>
        <Appear delay={randomNumber(700, 1000)}>
          <Option
            title={'Get a vacation'}
            to={RouteEnum.VOUCHERS}
            url={optionImages.vacation}
          />
        </Appear>
        <Appear delay={randomNumber(700, 1100)}>
          <Option
            title={'Improve yourself'}
            to={RouteEnum.ARTICLES}
            url={optionImages.articles}
          />
        </Appear>
      </Content>
    </Wrapper>
  );
};

export default Options;