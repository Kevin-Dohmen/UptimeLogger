export class ProbeResultModel {
    public startTime: Date;
    public endTime: Date;
    public duration: number;
    public success: boolean;

    constructor(startTime: Date, endTime: Date, duration: number, success: boolean) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = duration;
        this.success = success;
    }

    public toString(): string {
        return `[Start Time: ${this.startTime.toISOString()}, End Time: ${this.endTime.toISOString()}, Duration: ${this.duration}, Success: ${this.success}]`;
    }
}