import {Block} from '../../../blocks/block';
import template from './card.pug';

import {ContactCard} from '../../blocks/contact-card/contact-card';

/*eslint-disable*/
import _ from './card.scss';

/* eslint-enable */
export class Card extends Block {
  get bemName() {
    return 'card';
}
  template (data) {
    return template(data);
  }

  constructor () {
    super();
    this.userinfo = new ContactCard();
  }

  render(el){
    super.render(el);
    this.userinfo.render(this.el.getElement('userinfo'));
  }
}

