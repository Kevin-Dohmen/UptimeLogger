import ping from 'ping';
import IProber from './IProber';
import { ProbeResultModel } from '../../models/probeResultModel';

export default class PingProber extends IProber {
    public async ProbeAsync(target: string): Promise<ProbeResultModel> {
        const startTime: Date = new Date();

        const response: ping.PingResponse = await ping.promise.probe(
            target,
            {
                timeout: 10
            }
        )

        const success: boolean = response.alive;
        const endTime: Date = new Date();

        const duration: number = endTime.getTime() - startTime.getTime();

        const result: ProbeResultModel = new ProbeResultModel(
            startTime,
            endTime,
            duration,
            success
        );

        return result;
    }
}