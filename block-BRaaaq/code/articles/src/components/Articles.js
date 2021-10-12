import Data from '../data/data';
import Article from './Article';

function Articles() {
    return (
        <div className="container flex-2">
          { Data.map(article=>{
           return <Article key={article.publishedAt} articleInfo={article}/>
          })
          }
        </div>

    );
}

export default Articles;