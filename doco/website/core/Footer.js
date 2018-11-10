/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="copyright">{this.props.config.copyright}</section>
        <script src="https://codesponsor.io/scripts/aa9bf359-320b-41a4-b4f8-efeede8699c4/embed.js" />
        <div id="codefund_ad" />
      </footer>
    );
  }
}

module.exports = Footer;
