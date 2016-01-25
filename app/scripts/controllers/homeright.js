'use strict';

angular.module('travelApp')
    .controller('HomeRightCtrl', function($scope, api, $state) {
        // use service
        $scope.api = api;


        // change display amount
        $scope.days = [{
            'desc': '不限天數',
            'value': 0
        }, {
            'desc': '1~2日',
            'value': 1
        }, {
            'desc': '3~5日',
            'value': 2
        }, {
            'desc': '6~9日',
            'value': 3
        }, {
            'desc': '10日以上',
            'value': 4
        }, ];
        $scope.choiceDays = '不限天數';
        $scope.choiceValue = 0;

        // query days and reload
        $scope.dropdownClick = function(choice) {
            // TODO: send query days param
            $scope.choiceValue = choice.value;
            $scope.choiceDays = choice.desc;
        };




        $scope.initPlan = function() {
            // get plans
            api.getPlan('none', null, null, null, 'new', 0, true, true, true, 0, 40).success(function(data) {
                $scope.data = data.rsp.plans;
                $scope.total = data.rsp.total;
            });
        };

        $scope.searchPlan = function(input, type) {
            // get plans
            // TODO: send order and trivelType?
            api.getPlan(type, input, input, input, 'hot', 0, true, true, true, 0, 40).success(function(data) {
                $scope.data = data.rsp.plans;
                $scope.total = data.rsp.total;
            });
        };

        // init plans in home and search
        if ($state.is('main.home')) {
            $scope.initPlan();
        } else if ($state.is('main.search')) {
            $scope.searchPlan($state.params.input, $state.params.type);
        }



        // reload plan on status change
        $scope.newClick = true;
        $scope.newPlan = function() {
            $scope.newClick = true;
            $scope.hotClick = false;
            // TODO: reload plans
            $scope.data = null;
        };

        $scope.hotPlan = function() {
            $scope.hotClick = true;
            $scope.newClick = false;
            // TODO: reload plans
            $scope.data = null;
        };

        $scope.backpackingClick = false;
        $scope.freeClick = false;
        $scope.tourClick = false;
        $scope.backpackingPlan = function() {
            $scope.backpackingClick = true;
            $scope.freeClick = false;
            $scope.tourClick = false;
            // TODO: reload plans
            $scope.data = null;
        };

        $scope.freePlan = function() {
            $scope.freeClick = true;
            $scope.backpackingClick = false;
            $scope.tourClick = false;
            // TODO: reload plans
            $scope.data = null;
        };

        $scope.tourPlan = function() {
            $scope.tourClick = true;
            $scope.backpackingClick = false;
            $scope.freeClick = false;
            // TODO: reload plans
            $scope.data = null;
        };


    });
