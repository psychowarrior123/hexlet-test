import cn from 'classnames';
import React from 'react';

const Header = ({ toggle, children }) => (
  <div className="modal-header">
    <div className="modal-title">{children}</div>
      <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={toggle}>
        <span aria-hidden="true">&times;</span>
      </button>
  </div>
  );
const Body = ({ children }) => <p className="modal-body">{children}</p>;
const Footer = ({ children }) => <p className="modal-footer">{children}</p>;

export default class Modal extends React.Component {
  static defaultProps = {
    isOpen: false,
  }

  static Header = Header;
  
  static Body = Body;
  
  static Footer = Footer;
  
  render() {
    const { children, isOpen } = this.props;
    const modalClass = cn({
      modal: true,
      'fade show': isOpen
    })
    const style = {
      display: isOpen ? 'block' : 'none'
    };
    return (
      <div className={modalClass} style={style} role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}