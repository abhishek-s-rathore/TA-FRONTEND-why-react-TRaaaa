
function Article(props){
    return (
         <div className="card">
          <article>
            <div>
              <img
                className="full-width"
                src={props.urlToImage}
                alt="Image Here"
              />
            </div>
            <div>
              <h2>{props.title}</h2>
              <p>
               {props.description.substr(0, 100)+"...."}
              </p>
            </div>
            <div>
              <span>
                <i class="far fa-clock"></i> 6 minutes ago
              </span>
              <span>
                <i class="fas fa-comments"></i> 39 comments
              </span>
              <cite>~{props.author}</cite>
            </div>
          </article>
        </div>
      );
}

export default Article;