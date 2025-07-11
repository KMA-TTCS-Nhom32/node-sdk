/* tslint:disable */
/* eslint-disable */
/**
 * AHomeVilla documentation
 * This is AHomeVilla\'s APIs description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface QueryBookingsDto
 */
export interface QueryBookingsDto {
    /**
     * 
     * @type {number}
     * @memberof QueryBookingsDto
     */
    'page'?: number;
    /**
     * 
     * @type {number}
     * @memberof QueryBookingsDto
     */
    'pageSize'?: number;
    /**
     * JSON string of FilterBookingsDto
     * @type {string}
     * @memberof QueryBookingsDto
     */
    'filters'?: string;
    /**
     * JSON string of SortBookingsDto[]
     * @type {string}
     * @memberof QueryBookingsDto
     */
    'sort'?: string;
}

