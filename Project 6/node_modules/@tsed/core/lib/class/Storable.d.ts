import { Type } from "../interfaces";
import { EntityDescription } from "./EntityDescription";
import { Store } from "./Store";
/**
 *
 */
export declare abstract class Storable extends EntityDescription {
    protected _store: Store;
    constructor(_target: Type<any>, _propertyKey: string | symbol, _index?: number | PropertyDescriptor);
    /**
     *
     * @returns {Store}
     */
    readonly store: Store;
}
