import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    categories: {
      type: 'array',
      refreshModel: true,
    },
    searchQuery: {
      refreshModel: true,
    },
  },

  model(params) {
    console.log('categories', params.categories);

    return new Promise((resolve) => setTimeout(resolve, 1000)).then(
      () => new Date()
    );
  },

  actions: {
    willTransition() {
      console.log('willTransition');
    },

    didTransition() {
      console.log('didTransition');
    },
  },
});
