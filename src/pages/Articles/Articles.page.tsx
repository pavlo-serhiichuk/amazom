import React, {useEffect} from 'react';
import {useTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import ArticleIntro from '../../components/ArticleIntro/ArticleIntro.component'
import Loader from '../../components/Loader/Loader.component'

const Articles = () => {
  const {articles, isLoading} = useTypedSelector(state => state.article)
  const {fetchArticles} = useActions()
  useEffect(() => {
    if(!articles.length) fetchArticles()
  }, [])

  if(isLoading) return <Loader />

  return (
    <>
      {articles.map(article => <ArticleIntro article={article} />)}
    </>
  );
};

export default Articles;