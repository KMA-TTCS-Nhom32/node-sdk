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
 * @interface SortRoomPromotionDto
 */
export interface SortRoomPromotionDto {
    /**
     * Key of Entity to sort
     * @type {string}
     * @memberof SortRoomPromotionDto
     */
    'orderBy': string;
    /**
     * Order of sorting
     * @type {string}
     * @memberof SortRoomPromotionDto
     */
    'order': SortRoomPromotionDtoOrderEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum SortRoomPromotionDtoOrderEnum {
    Asc = 'asc',
    Desc = 'desc'
}


