import IProber from './IProber';
import { ProbeResultModel } from '../../models/probeResultModel';

export default class HttpProber extends IProber {
    public async ProbeAsync(target: string): Promise<ProbeResultModel> {
        const startTime: Date = new Date();

        let success: boolean = false;
        let endTime: Date = new Date();
        let duration: number = 0;

        try {
            const response: Response = await fetch(target);
            success = response.ok;
            endTime = new Date();
            duration = endTime.getTime() - startTime.getTime();
        } catch (error) {
            success = false;
            endTime = new Date();
            duration = endTime.getTime() - startTime.getTime();
        }

        const result: ProbeResultModel = new ProbeResultModel(
            startTime,
            endTime,
            duration,
            success
        );

        return result;
    }
}