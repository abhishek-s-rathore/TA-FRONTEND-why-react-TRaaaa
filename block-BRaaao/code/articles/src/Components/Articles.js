import Article from './Article';
import Data from '../data';

function Articles() {
    return (
        <div className="container flex-2">
          { Data.map(article=>{
           return <Article title={article.title} description={article.description} urlToImage={article.urlToImage} author={article.author}/>
          })
          }
        </div>

    );
}

export default Articles;