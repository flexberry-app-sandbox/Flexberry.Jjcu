import {
  defineNamespace,
  defineProjections,
  Model as ТчРегВходаMixin
} from '../mixins/regenerated/models/i-i-s-jjcu-тч-рег-входа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТчРегВходаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
