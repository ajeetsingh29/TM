function ReportGenrator()
{
that=this;
this.title='Financial report for 2020';
this.getReporter=function()
{
console.log("Setting up a report");
return function()
{
console.log(that.title);
console.log('Some reporting data')
}
}
}


var rg= new ReportGenrator()
var reporter = rg.getReporter()
reporter();  