import React, {FC} from 'react';
import {IArticle} from '../../models/IArticle'
import {Wrapper} from './ArticleIntro.style'

interface ArticleIntroProps {
  article: IArticle
}

const ArticleIntro: FC<ArticleIntroProps> = ({article}) => {
  return (
    <Wrapper>
      {article.title}
    </Wrapper>
  );
};

export default ArticleIntro;