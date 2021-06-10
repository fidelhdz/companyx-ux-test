export class Orders {
    public jobSite:string;
    public status:string;
    public order:string;
    public purchaseOrder:string;
    public productLine:string;
    public quantity:number;
    public dateSubmitted:any;
    public dateRequested:any;

    constructor( jobSite:string, status:string, order:string, purchaseOrder:string, productLine:string, quantity:number, dateSubmitted:any, dateRequested:any ) {
        this.jobSite = jobSite;
        this.status = status;
        this.order = order;
        this.purchaseOrder = purchaseOrder;
        this.productLine = productLine;
        this.quantity = quantity;
        this.dateSubmitted = dateSubmitted;
        this.dateRequested = dateRequested;
    }
}