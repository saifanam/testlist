
angular.module('testApp', [])
.controller('TestListController', function() {

  var SATList = this;
  var SAT2List = this;
  var ACTList = this;
  var TOEFLList = this;

  SATList.SATItems = [{SATtotalScore: '0'}];
  SAT2List.SAT2Items = [{SAT2totalScore: '0'}];
  ACTList.ACTItems = [{ACTtotalScore: '0'}];
  TOEFLList.TOEFLItems = [{TOEFLtotalScore: '0'}];

  SATList.addSATItem = function() {
    SATList.SATItems.push({ SATtotalScore: SATList.SATtotalScore });
  };

  SAT2List.addSAT2Item = function() {
    SAT2List.SAT2Items.push({ SAT2totalScore: SAT2List.SAT2totalScore });
  };

  ACTList.addACTItem = function() {
    ACTList.ACTItems.push({ ACTtotalScore: ACTList.ACTtotalScore });
  };

  TOEFLList.addTOEFLItem = function() {
    TOEFLList.TOEFLItems.push({ TOEFLtotalScore: TOEFLList.TOEFLtotalScore });
  };

  SATList.deleteSATItem = function(SATItem) {
    var index = SATList.SATItems.indexOf(SATItem);
    if(SATList.SATItems.length == 1) {
      alert('At least one SAT score required');
    }
    else {
      SATList.SATItems.splice(index, 1);
    }
  }

  SAT2List.deleteSAT2Item = function(SAT2Item) {
    var index = SAT2List.SAT2Items.indexOf(SAT2Item);
    if(SAT2List.SAT2Items.length == 1) {
      alert('At least one SAT II score required');
    }
    else {
      SAT2List.SAT2Items.splice(index, 1);
    }
  }

  ACTList.deleteACTItem = function(ACTItem) {
    var index = ACTList.ACTItems.indexOf(ACTItem);
    if(ACTList.ACTItems.length == 1) {
      alert('At least one ACT score required');
    }
    else {
      ACTList.ACTItems.splice(index, 1);
    }
  }

  TOEFLList.deleteTOEFLItem = function(TOEFLItem) {
    var index = TOEFLList.TOEFLItems.indexOf(TOEFLItem);
    if(TOEFLList.TOEFLItems.length == 1) {
      alert('At least one TOEFL score required');
    }
    else {
      TOEFLList.TOEFLItems.splice(index, 1);
    }
  }
});

function expandParent(element) {
  element.parentNode.style.height = 'auto';
  element.style.display = 'none';
}
