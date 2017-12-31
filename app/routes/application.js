import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {

    ajax: service(),
    flashMessages: service(),
   
    sessionAuthenticated: function() {
        //Do nothing.
    },
    
    sessionInvalidated: function() { 
        this.get('flashMessages').info('You have been logged out.');
        this.refresh();
        this.transitionTo('/');
    },
    
    model: function() {
        let aj = this.get('ajax');
        return aj.queryOne('game', {});
    },

    title: function(tokens) {
        let mush_name = aresconfig.mu_name;
        if (tokens.length > 0) {
            return tokens.reverse().join(' - ') + " - " + mush_name;
        }
        else {
            return mush_name;
        }
    }
 });