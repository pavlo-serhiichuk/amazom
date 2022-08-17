import React, {FC} from 'react';
import {IArticle} from '../../models/IArticle'
import {Img, IntroInfo, Title, Wrapper} from './ArticleIntro.style'

interface ArticleIntroProps {
  article: IArticle
}

const ArticleIntro: FC<ArticleIntroProps> = ({article}) => {
  console.log(article.id)
  return (
    <Wrapper>
      <IntroInfo>
        <Title
          to={`#`}
        >
          {article.title}
        </Title>
      </IntroInfo>
      <Img
        to={`#`}
        url={article.image}
      />
    </Wrapper>
  );
};

export default ArticleIntro;