import Knex = require('knex');
import * as moment from 'moment';

export class DrugTypeModel {
  list(knex: Knex) {
    return knex('mm_generic_accounts')
  }

  save(knex: Knex, datas: any) {
    return knex('mm_generic_accounts')
      .insert(datas);
  }

  update(knex: Knex, typeId: string, datas: any) {
    return knex('mm_generic_accounts')
      .where('account_id', typeId)
      .update(datas);
  }

  detail(knex: Knex, typeId: string) {
    return knex('mm_generic_accounts')
      .where('account_id', typeId);
  }

  remove(knex: Knex, typeId: string) {
    return knex('mm_generic_accounts')
      .where('account_id', typeId)
      .del();
  }

}