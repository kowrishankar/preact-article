import { h, Component } from 'preact';
import Header from '../../components/header/Header';
import Paragraph from '../paragraph/Paragraph';
import Image from '../../components/image/Image';
// import Video from '../../components/video/Video';
// import videoImage from '../../assets/video.png';
// import Caption from '../../components/caption/Caption';
import Intro from '../../components/intro/Intro';

class ArticleBody extends Component {

    render() {
        return (
            <div>
                <Header>{this.props.headline}</Header>

                {this.props.blocks.map((item, index) => {

                    switch (item.type) {
                        case 'video':
                            return ('');
                        case 'image':
                            return <Image
                                key={index}
                                src={item.href}
                                alt={item.altText}
                                imgHeight={item.height}
                                imgWidth={item.width}
                                data-copyright-holder={item.copyrightHolder}
                            />;
                        case 'intro':
                            return <Intro key={item.blockId}>{item.text}</Intro>;
                        case 'paragraph':
                            return <Paragraph key={index}>{item.text}</Paragraph>;
                        default:
                            return '';
                    }
                })}
            </div>
        );
    }
}

export default ArticleBody;
