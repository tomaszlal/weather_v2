import EventEmitter from "eventemitter3";

export class Event<TArg> {
    private static emitter = new EventEmitter();
    private static currentId: number = 0;
    private id: string;

    constructor(name: string, private noLogging = false) {
        this.id = name + "-" + Event.currentId++;
    }

    public on(callback: (data: TArg) => void, context: any): void {
        Event.emitter.on(this.id, callback, context);
    }

    public once(callback: (data: TArg) => void, context: any): void {
        Event.emitter.once(this.id, callback, context);
    }

    public off(callback: (data: TArg) => void, context: any): void {
        Event.emitter.off(this.id, callback, context);
    }

    public removeAllListeners(): void {
        Event.emitter.removeAllListeners(this.id);
    }

    public dispatch(data: TArg): void {
        Event.emitter.emit.apply(Event.emitter, [this.id, data]);
    }
}