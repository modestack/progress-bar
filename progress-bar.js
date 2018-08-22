import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `progress-bar`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class ProgressBar extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
        :root {
            --main-height: 20px;
            --background-color: #F5F5F5;
            --current-progress: 20%;
        }

        .progress-bar-shell {
            background-color: #F5F5F5;
            height: var(--main-height)
        }

        .progress-bar {
            height: var(--main-height);
            background-color: #98DCFF;
            width: var(--current-progress);
            transition: width 1s;
        }
      </style>
      <div class="progress-bar-shell">
        <div class="progress-bar">[[percentage]]</div>
    </div>
    `;
  }
  static get properties() {
    return {
      percentage: {
        type: Number,
        value: 'progress-bar',
      },
    };
  }
}

window.customElements.define('progress-bar', ProgressBar);
