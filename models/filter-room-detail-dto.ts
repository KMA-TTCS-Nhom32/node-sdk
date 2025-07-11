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
 * @interface FilterRoomDetailDto
 */
export interface FilterRoomDetailDto {
    /**
     * 
     * @type {string}
     * @memberof FilterRoomDetailDto
     */
    'keyword'?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterRoomDetailDto
     */
    'room_type'?: FilterRoomDetailDtoRoomTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FilterRoomDetailDto
     */
    'bed_type'?: FilterRoomDetailDtoBedTypeEnum;
    /**
     * Filter by rating
     * @type {number}
     * @memberof FilterRoomDetailDto
     */
    'rating_from'?: number;
    /**
     * Filter by rating
     * @type {number}
     * @memberof FilterRoomDetailDto
     */
    'rating_to'?: number;
    /**
     * Filter by branch ID
     * @type {string}
     * @memberof FilterRoomDetailDto
     */
    'branchId'?: string;
    /**
     * Filter by branch slug
     * @type {string}
     * @memberof FilterRoomDetailDto
     */
    'branchSlug'?: string;
    /**
     * Filter by province ID
     * @type {string}
     * @memberof FilterRoomDetailDto
     */
    'provinceId'?: string;
    /**
     * Filter by province slug
     * @type {string}
     * @memberof FilterRoomDetailDto
     */
    'provinceSlug'?: string;
    /**
     * Filter by amenities
     * @type {Array<string>}
     * @memberof FilterRoomDetailDto
     */
    'amenities'?: Array<string>;
    /**
     * Filter by minimum price
     * @type {object}
     * @memberof FilterRoomDetailDto
     */
    'minPrice'?: object;
    /**
     * Filter by maximum price
     * @type {object}
     * @memberof FilterRoomDetailDto
     */
    'maxPrice'?: object;
    /**
     * Filter by start date (DD-MM-YYYY)
     * @type {string}
     * @memberof FilterRoomDetailDto
     */
    'startDate'?: string;
    /**
     * Filter by end date (DD-MM-YYYY)
     * @type {string}
     * @memberof FilterRoomDetailDto
     */
    'endDate'?: string;
    /**
     * Filter by start time
     * @type {string}
     * @memberof FilterRoomDetailDto
     */
    'startTime'?: string;
    /**
     * Filter by end time
     * @type {string}
     * @memberof FilterRoomDetailDto
     */
    'endTime'?: string;
    /**
     * Filter by booking type
     * @type {string}
     * @memberof FilterRoomDetailDto
     */
    'bookingType'?: FilterRoomDetailDtoBookingTypeEnum;
    /**
     * Filter by number of adults
     * @type {number}
     * @memberof FilterRoomDetailDto
     */
    'adults'?: number;
    /**
     * Filter by number of children
     * @type {number}
     * @memberof FilterRoomDetailDto
     */
    'children'?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum FilterRoomDetailDtoRoomTypeEnum {
    Standard = 'STANDARD',
    Superior = 'SUPERIOR',
    Deluxe = 'DELUXE'
}
/**
    * @export
    * @enum {string}
    */
export enum FilterRoomDetailDtoBedTypeEnum {
    Single = 'SINGLE',
    Double = 'DOUBLE',
    Queen = 'QUEEN',
    King = 'KING'
}
/**
    * @export
    * @enum {string}
    */
export enum FilterRoomDetailDtoBookingTypeEnum {
    Hourly = 'HOURLY',
    Nightly = 'NIGHTLY',
    Daily = 'DAILY'
}


