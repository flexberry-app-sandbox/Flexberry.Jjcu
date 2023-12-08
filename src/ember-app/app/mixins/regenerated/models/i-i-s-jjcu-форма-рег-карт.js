import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  гость: DS.belongsTo('i-i-s-jjcu-гость', { inverse: null, async: false }),
  картыДоступа: DS.belongsTo('i-i-s-jjcu-карты-доступа', { inverse: null, async: false }),
  комната: DS.belongsTo('i-i-s-jjcu-комната', { inverse: null, async: false })
});

export let ValidationRules = {
  гость: {
    descriptionKey: 'models.i-i-s-jjcu-форма-рег-карт.validations.гость.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  картыДоступа: {
    descriptionKey: 'models.i-i-s-jjcu-форма-рег-карт.validations.картыДоступа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  комната: {
    descriptionKey: 'models.i-i-s-jjcu-форма-рег-карт.validations.комната.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормаРегКартE', 'i-i-s-jjcu-форма-рег-карт', {
    комната: belongsTo('i-i-s-jjcu-комната', 'Комната', {
      номер: attr('Номер', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'номер' }),
    картыДоступа: belongsTo('i-i-s-jjcu-карты-доступа', 'Карты доступа', {
      кодКарты: attr('Код карты', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'кодКарты' }),
    гость: belongsTo('i-i-s-jjcu-гость', 'Гость', {
      фамилия: attr('Фамилия', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'фамилия' })
  });

  modelClass.defineProjection('ФормаРегКартL', 'i-i-s-jjcu-форма-рег-карт', {
    комната: belongsTo('i-i-s-jjcu-комната', 'Номер', {
      номер: attr('Номер', { index: 0 })
    }, { index: -1, hidden: true }),
    картыДоступа: belongsTo('i-i-s-jjcu-карты-доступа', 'Код карты', {
      кодКарты: attr('Код карты', { index: 1 })
    }, { index: -1, hidden: true }),
    гость: belongsTo('i-i-s-jjcu-гость', 'Фамилия', {
      фамилия: attr('Фамилия', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
