/**
 *
 */
export declare class ParseService {
    constructor();
    /**
     * Clone an object.
     * @param src
     */
    static clone: (src: any) => any;
    /**
     * Eval an expression with a scope context and return value.
     * @param expression
     * @param scope
     * @param clone
     * @returns {any}
     */
    eval(expression: string, scope: any, clone?: boolean): any;
}
