import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-jjcu-форма-рег-входа-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-jjcu-тч-рег-входа+гость':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фамилия',
            required: true,
            relationName: 'гость',
            projection: 'ГостьL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-jjcu-тч-рег-входа+сотрудник':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'фамилия',
            required: true,
            relationName: 'сотрудник',
            projection: 'СотрудникL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-jjcu-тч-рег-входа+картыДоступа':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'кодКарты',
            required: true,
            relationName: 'картыДоступа',
            projection: 'КартыДоступаL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-jjcu-тч-рег-входа+должности':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'должности',
            projection: 'ДолжностиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
