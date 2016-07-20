import Ember from 'ember';

const { inject: { service }, RSVP, Service, isEmpty } = Ember;

export default Service.extend({
    session: service('session'),
    store: service(),

    loadCurrentUser() {
        return new RSVP.Promise((resolve, reject) => {
            const accountId = this.get('session.data.authenticated.token');
            if (!isEmpty(accountId)) {
                return this.get('store').queryRecord('user', {}).then((account) => {
                    alert(account);
                    this.set('account', account);
                    resolve();
                }, reject);
            } else {
                resolve();
            }
        });
    }
});