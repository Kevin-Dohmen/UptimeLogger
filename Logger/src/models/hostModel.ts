export default class HostModel {
    public id: number;
    public host: string;
    public probeType: string;
    public interval: number;
    public lastProbe: Date;

    constructor(id: number, host: string, probeType: string, interval: number, lastProbe: Date) {
        this.id = id;
        this.host = host;
        this.probeType = probeType;
        this.interval = interval;
        this.lastProbe = lastProbe;
    }
}