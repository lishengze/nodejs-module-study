function testFunc() {
	var EVENTS = new events();
	var DisseminationField = new CShfeFtdcDisseminationField();
	var outputStr = "DisseminationField.SequenceSeries = " + DisseminationField.SequenceSeries + "\n"
				  + "DisseminationField.SequenceNo = " + DisseminationField.SequenceNo + "\n" 
				  + "NewUserCome: " + EVENTS.NewUserCome;
	OutputMessage(outputStr);
}

testFunc();