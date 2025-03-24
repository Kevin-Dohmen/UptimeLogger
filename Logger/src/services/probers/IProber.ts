import { ProbeResultModel } from "../../models/probeResultModel";

export default class IProber {
    public async ProbeAsync(target: string): Promise<ProbeResultModel> {
        throw new Error("Method not implemented.");
    }
}