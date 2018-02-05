import { h, Component } from 'preact';

class Link extends Component {
    render() {
        return (
            <a href={this.props.href}>{this.props.linkName}</a>
        );
    }
}

export default Link;
