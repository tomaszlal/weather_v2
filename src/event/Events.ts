import { Signal } from "./Signal";
import { Event } from "./Event";

export class Events {
    // public static BUTTON_CLICK: Signal = new Signal("BUTTON_CLICK");
     public static MAP_CLICK: Event<L.LeafletMouseEvent> = new Event<L.LeafletMouseEvent>("MAP_CLICK");
}