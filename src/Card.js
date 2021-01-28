import React from 'react';

const Title = (props) => <h4 className="card-title">{props.children}</h4>;
const Text = (props) => <p className="card-text">{props.children}</p>;
const Body = (props) => <div className="card-body">{props.children}</div>;

export default class Card extends React.Component {
  static Title = Title;
  static Text = Text;
  static Body = Body;

  render() {
    return (
      <div className="card">{this.props.children}</div>
    )
  }
}