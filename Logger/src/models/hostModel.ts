export default class HostModel {
    public id: string;
    public host: string;
    public probeType: string;
    public interval: number;
    public lastProbe: Date;

    constructor(id: string, host: string, probeType: string, interval: number, lastProbe: Date) {
        this.id = id;
        this.host = host;
        this.probeType = probeType;
        this.interval = interval;
        this.lastProbe = lastProbe;
    }
}