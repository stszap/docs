/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const script = `(function () {
  document.querySelectorAll('.tabs .tabs-nav .nav-item a').forEach(function (t) {
    t.addEventListener("click", function (e) {
      e.preventDefault();

      t.closest('.tabs-nav').querySelectorAll('.nav-item a').forEach(function (i) {
        i.classList.remove('active');
      });

      t.closest('.tabs').querySelectorAll('.tab-content .tab-pane').forEach(function (i) {
        i.classList.remove('active');
      });

      t.classList.add('active');
      document.getElementById(t.href.split('#')[1]).classList.add('active');
      return false
    });
  });
})();`

class Footer extends React.Component {
  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="copyright">{this.props.config.copyright}</section>
        <script src="https://codesponsor.io/scripts/aa9bf359-320b-41a4-b4f8-efeede8699c4/embed.js" />
        <div id="codefund_ad" />
        <script dangerouslySetInnerHTML={{ __html: script }} />
      </footer>
    );
  }
}

module.exports = Footer;
