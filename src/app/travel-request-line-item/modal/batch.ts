export class Batch{

  public travNum : string;
	public travelrequestno : string;
	public travelrequestdate : string;
	public travelstartdate : string;
	public travelenddate : string;

  constructor(){
    this.travNum = null;
    this.travelrequestno = null;
    this.travelrequestdate = "";
    this.travelstartdate = "";
    this.travelenddate = "";
  }

  // constructor(travNum: string, travelrequestno: string, travelrequestdate: string,
  //   travelstartdate: string, travelenddate: string){
  //     this.travNum = travNum;
  //     this.travelrequestno = travelrequestno;
  //     this.travelrequestdate = travelrequestdate;
  //     this.travelstartdate = travelstartdate;
  //     this.travelenddate = travelenddate;
  //   }
}
