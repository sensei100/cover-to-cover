(function() { 
  'use strict';

  var tabs = {
    transclude: true,
    controller: TabsController,
    templateUrl: 'profile/components/tabs-component/tabs.html'
  }

  function TabsController() {
    var panes = this.panes = []
    this.select = function(pane) {
      angular.forEach(panes, function(pane) {
        pane.selected = false
      });
      pane.selected = true
    }

    this.addPane = function(pane) {
      if (panes.length === 0) {
        this.select(pane)
      }
      panes.push(pane)
    }
  }

  angular
    .module('app')
    .component('tabs', tabs)

}());