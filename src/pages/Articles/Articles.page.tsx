import React, {useEffect} from 'react';
import {Wrapper} from './Articles.style'
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import ArticleIntro from '../../components/ArticleIntro/ArticleIntro.component'

const Articles = () => {
  const {articles} = useTypedSelector(state => state.article)
  const {loadArticles} = useActions()
  useEffect(() => {
    loadArticles()
  }, [])

  return (
    <Wrapper>
      Articles page:
      {articles.map(article => <ArticleIntro article={article} />)}
    </Wrapper>
  );
};

export default Articles;