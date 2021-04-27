import React from 'react'
import '../CSS/News.css'

export const NewsArticleCard = ({ article }) => {

    return (
        <a href={article.site_detail_url} rel="noreferrer" target="_blank" className="articleCard">
            <img className="articleImg" src={article.image.original} alt="Gamespot Article" />
            <div className="cardTextContainer">
                <h3 className="articleTitle">{article.title}</h3>
                <p className="articlePreview">{article.deck}</p>
            </div>
        </a>
    )
}