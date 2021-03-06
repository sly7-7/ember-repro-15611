import Ember from 'ember';

export default Ember.Controller.extend({
  appName: 'Ember Twiddle',

  queryParams: ['categories', 'serachQuery'],

  categories: [],
  serachQuery: '',

  actions: {
    addCategory() {
      this.get('categories').pushObject(1);
    },
  },
});
