import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

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
          --main-height: 20px;
          --background-color: #F5F5F5;
          --foreground-color: #98DCFF;
          --current-progress: 20%;
        }

        .progress-bar-shell {
            background-color: var(--background-color);
            height: var(--main-height)
        }

        .progress-bar {
            height: var(--main-height);
            background-color: var(--foreground-color);
            width: var(--current-progress);
            transition: width 1s;
        }
      </style>
      <div role="progressbar" aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
        <template is="dom-if" if="{{showPercentage}}">
            [[progress]]%
        </template>
        <div class="progress-bar-shell">
          <div class="progress-bar"></div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      progress: {
        type: Number,
        value: 0,
        observer: '_progressChange'
      },
      'showPercentage': {
        type: Boolean,
        value: false
      }
    };
  }

  _progressChange(newVal) {
    console.log('changed progress');
    this.updateStyles({
      '--current-progress': `${newVal}%`
    });
  }
}

window.customElements.define('progress-bar', ProgressBar);
