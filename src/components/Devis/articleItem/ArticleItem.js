import React from 'react'
import './ArticleItem.css'
import BtnRender from './BtnRender'


function ArticleItem({article,handleCheck,deleteArticle,handleOpenArticle}) {
  return (
    <div className='article_card'>

        <input type="checkbox" checked={article.checked}
                onChange={() => handleCheck(article._id)}
                 />
        <img src={article.images.url} alt={article.Nom} onClick={()=>handleOpenArticle(article.Nom)} />

            <div className="article_box">
                <h2 title={article.Nom}>{article.Nom}</h2>
            </div>
            <BtnRender  article={article} deleteArticle={deleteArticle} />
    </div>
  )
}

export default ArticleItem