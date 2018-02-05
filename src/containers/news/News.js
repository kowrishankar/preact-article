import { h, Component } from 'preact';
import { Router } from 'preact-router';
import aresDataFlat from '../../data/ares';
import aresDataBlocks from '../../data/ares-blocks';
import ArticleBlocks from '../../components/article-blocks/ArticleBlocks';
import ArticleFlat from '../../components/article-flat/ArticleFlat';

class News extends Component {
    state = {
        aresDataBlocks: aresDataBlocks,
        aresDataFlat: aresDataFlat
    };

    render() {
        const nestedBlockData = {
            blocks:   this.state.aresDataBlocks.model.blocks
        };

        const flatBlockData = {
            headline: this.state.aresDataFlat.metadata.headlines[0].headline,
            blocks:   this.state.aresDataFlat.content.blocks
        };

        console.log(this.props.match.url);

        return (
            <div>
                <ul>
                    <li><a href={`${this.props.match.url}/article-1`}>Article with nested blocks</a></li>
                    <li><a href={`${this.props.match.url}/article-2`}>Article with flat feed</a></li>
                </ul>

                <Router>
                    <nestedBlockData
                        path={`${this.props.match.path}/article-1`}
                        render={(props) => <ArticleBlocks {...nestedBlockData} /> }
                    />
                    <flatBlockData
                        path={`${this.props.match.path}/article-2`}
                        render={(props) => <ArticleFlat {...flatBlockData} /> }
                    />
                </Router>
            </div>
        );
    }
}

export default News;
