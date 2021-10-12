import PropTypes from 'prop-types';

function Article(props) {
    return (
        <div className="card">
            <article>
                <div>
                    <img
                        className="full-width"
                        src={props.articleInfo.urlToImage}
                        alt="Image Here"
                    />
                </div>
                <div>
                    <h2>{props.articleInfo.title}</h2>
                    <p>
                        {props.articleInfo.description.substr(0, 100) + "...."}
                    </p>
                </div>
                <div>
                    <span>
                        <i className="far fa-clock"></i> 6 minutes ago
                    </span>
                    <span>
                        <i className="fas fa-comments"></i> 39 comments
                    </span>
                    <cite>~{props.articleInfo.author.toUpperCase()}</cite>
                </div>
            </article>
        </div>
    );
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
}


export default Article;