import PingProber from "./probers/pingProber";
import HttpProber from "./probers/httpProber";
// import TcpProber from "./probers/tcpProber";
import IProber from "./probers/IProber";
import { ProbeResultModel } from "../models/probeResultModel";

class ProberFactory{
    static createProber(probeType: string): IProber{
        switch(probeType){
            case "Ping":
                return new PingProber();
            case "Http":
                return new HttpProber();
            // case "Tcp":
            //     return new TcpProber();
            default:
                throw new Error("Invalid probe type");
        }
    }
}

export default class ProbeService{
    public static async ProbeAsync(probeType: string, target: string): Promise<ProbeResultModel>{
        const prober = ProberFactory.createProber(probeType);
        return await prober.ProbeAsync(target);
    }
}