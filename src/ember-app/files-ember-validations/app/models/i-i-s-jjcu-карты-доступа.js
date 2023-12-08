import {
  defineNamespace,
  defineProjections,
  Model as КартыДоступаMixin
} from '../mixins/regenerated/models/i-i-s-jjcu-карты-доступа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КартыДоступаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
