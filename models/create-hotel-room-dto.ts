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


// May contain unused imports in some cases
// @ts-ignore
import type { HotelRoomTranslationDto } from './hotel-room-translation-dto';

/**
 * 
 * @export
 * @interface CreateHotelRoomDto
 */
export interface CreateHotelRoomDto {
    /**
     * Hotel Room\'s name
     * @type {string}
     * @memberof CreateHotelRoomDto
     */
    'name': string;
    /**
     * Hotel Room\'s slug
     * @type {string}
     * @memberof CreateHotelRoomDto
     */
    'slug': string;
    /**
     * Hotel Room\'s status
     * @type {string}
     * @memberof CreateHotelRoomDto
     */
    'status': CreateHotelRoomDtoStatusEnum;
    /**
     * ID of the room detail
     * @type {string}
     * @memberof CreateHotelRoomDto
     */
    'detailId': string;
    /**
     * Translations for the hotel room
     * @type {Array<HotelRoomTranslationDto>}
     * @memberof CreateHotelRoomDto
     */
    'translations'?: Array<HotelRoomTranslationDto>;
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHotelRoomDtoStatusEnum {
    Available = 'AVAILABLE',
    Booked = 'BOOKED',
    Occupied = 'OCCUPIED',
    Maintenance = 'MAINTENANCE'
}


