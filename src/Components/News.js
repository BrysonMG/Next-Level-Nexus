import React, {useState, useEffect} from 'react'
import { getArticles } from '../DataManagers/NewsManager'
import { NewsArticleCard } from './NewsArticleCard'
import '../CSS/News.css'

export const News = () => {
    const [articles, setArticles] = useState([])

    const getArticlesToList = () => {
        getArticles().then(results => {
            setArticles(results)
        })
    }

    useEffect(()=> {
        getArticlesToList()
    },[])

    return (
        <div className="newsContainer">
            <h1 className="newsHeader">Nerd News</h1>
            <div className="articlesList">
                {articles.map(article => {
                    return <NewsArticleCard key={article.id} article={article} />
                })}
            <h3 className="gamespotLink"><a className="gamespotLink" rel="noreferrer" href="https://www.gamespot.com/news" target="_blank">See More...</a></h3>
            </div>
        </div>
    )
}