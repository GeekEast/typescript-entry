import { IFilter } from "../interfaces";
import { ParseService } from "../services/ParseService";
/**
 * @private
 * @filter
 */
export declare class PathParamsFilter implements IFilter {
    private parseService;
    constructor(parseService: ParseService);
    transform(expression: string, request: any, response: any): any;
}
