import { MinPriorityQueue } from '@datastructures-js/priority-queue';
import ProbeService from "./probeService";
import { Logger } from "./logger";
import HostModel from "../models/hostModel";

const logger: Logger = new Logger('ProbeScheduler');

class Task {
    Host: HostModel;
    Time: number;

    constructor(host: HostModel, time: number) {
        this.Host = host;
        this.Time = time;
    }
}

export class ProbeScheduler {
    private static _tasks: MinPriorityQueue<Task> = new MinPriorityQueue<Task>((task) => task.Time);

    public static AddHost(host: HostModel): void {
        const now = new Date().getTime();
        const nextProbe = now + (host.interval * 1000);
        this._tasks.enqueue(new Task(host, nextProbe));
    }

    public static RemoveHost(host: HostModel): void {
        const tasks = this._tasks.toArray();
        this._tasks.clear();
        tasks.forEach((task) => {
            if (task.Host.id !== host.id) {
                this._tasks.enqueue(task);
            }
        });
    }

    public static GetHosts(): HostModel[] {
        return this._tasks.toArray().map((task) => task.Host);
    }

    public static FindHost(id: number): HostModel | null {
        const task = this._tasks.toArray().find((task) => task.Host.id === id);
        return task ? task.Host : null;
    }

    public static UpdateHost(host: HostModel): void {
        this.RemoveHost(host);
        this.AddHost(host);
    }

    private static async ProbeHost(host: HostModel): Promise<void> {
        const result = await ProbeService.ProbeAsync(host.probeType, host.host);
        logger.info(`Probe result for ${host.host}: ${result.toString()}`);
    }

    public static processInterval(): void {
        const now = new Date().getTime();
        logger.info(`Processing interval at ${now}...`);
        while (!ProbeScheduler._tasks.isEmpty() && ProbeScheduler._tasks.front() !== null && ProbeScheduler._tasks.front()!.Time <= now) {
            const task = ProbeScheduler._tasks.dequeue();
            if (task) {
                ProbeScheduler.ProbeHost(task.Host);
                task.Time += (task.Host.interval * 1000);
                ProbeScheduler._tasks.enqueue(task);
            }
        }
    }

    public static async Start(): Promise<void> {
        logger.info('Starting probe scheduler...');
        setInterval(ProbeScheduler.processInterval, 100);
    }
}