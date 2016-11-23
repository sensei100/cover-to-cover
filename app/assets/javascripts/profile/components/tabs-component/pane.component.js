(function () {
  'use strict';

  var pane = {
    transclude: true,
    require: {
      TabsController: '^tabs'
    },
    bindings:{
      title: '@'
    },
    controller: PaneController,
    templateUrl: 'profile/components/tabs-component/pane.html'
  }

  function PaneController() {
    this.$onInit = function() {
      this.TabsController.addPane(this)
    }
  }

  angular
    .module('app')
    .component('pane', pane)

}());