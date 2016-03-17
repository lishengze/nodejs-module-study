var toolFunc  = require("./tool-function.js");
var OutputMessage = toolFunc.OutputMessage;

var events    = require("./events.js");
var EVENTS    = new events.EVENTS();

var suaStruct = require("./SysUserApiStruct.js"); 

function testFunc() {
	var DisseminationField = new suaStruct.CShfeFtdcDisseminationField();
	
	var outputStr = "DisseminationField.SequenceSeries = " + DisseminationField.SequenceSeries + "\n"
				  + "DisseminationField.SequenceNo = " + DisseminationField.SequenceNo + "\n" 
				  + "NewUserCome: " + EVENTS.NewUserCome;
	OutputMessage(outputStr);
}

testFunc();