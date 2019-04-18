import {Block} from '../../../blocks/block';
import template from './list.pug';

import {ContactsList} from '../../blocks/contacts-list/contacts-list';
import {Pagination} from '../../blocks/pagination/pagination';
/*eslint-disable*/
import _ from './list.scss';

/* eslint-enable */
export class List extends Block {
  get bemName() {
    return 'list';
}
  template (data) {
    return template(data);
  }

  constructor () {
    super();
    this.contacts = new ContactsList();
    this.pagination = new Pagination();
  }

  render(el){
    super.render(el);
    this.contacts.render(this.el.getElement('contacts'));
    this.pagination.render(this.el.getElement('pagination'));
  }
}

