import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as КартыДоступаMixin
} from '../mixins/regenerated/models/i-i-s-jjcu-карты-доступа';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(КартыДоступаMixin, Validations, {
});

defineProjections(Model);

export default Model;
