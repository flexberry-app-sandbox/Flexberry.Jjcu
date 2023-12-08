import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  колвоКроватей: DS.attr('number'),
  номер: DS.attr('number'),
  этаж: DS.attr('number')
});

export let ValidationRules = {
  колвоКроватей: {
    descriptionKey: 'models.i-i-s-jjcu-комната.validations.колвоКроватей.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-jjcu-комната.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-jjcu-комната.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомнатаE', 'i-i-s-jjcu-комната', {
    номер: attr('Номер', { index: 0 }),
    этаж: attr('Этаж', { index: 1 }),
    колвоКроватей: attr('Колво кроватей', { index: 2 })
  });

  modelClass.defineProjection('КомнатаL', 'i-i-s-jjcu-комната', {
    номер: attr('Номер', { index: 0 }),
    этаж: attr('Этаж', { index: 1 }),
    колвоКроватей: attr('Колво кроватей', { index: 2 })
  });
};
