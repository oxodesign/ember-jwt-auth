import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

const { service } = Ember.inject;

export default Ember.Route.extend(AuthenticatedRouteMixin,{
    account: service('session-account'),
    session: service(),
    model() {
        return this.store.findAll('user');
    }
});
