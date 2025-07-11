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
 * @interface RoomDetailTranslationDto
 */
export interface RoomDetailTranslationDto {
    /**
     * Language of the translation
     * @type {string}
     * @memberof RoomDetailTranslationDto
     */
    'language': RoomDetailTranslationDtoLanguageEnum;
    /**
     * Translated name of the room detail
     * @type {string}
     * @memberof RoomDetailTranslationDto
     */
    'name': string;
    /**
     * Translated description of the room detail
     * @type {string}
     * @memberof RoomDetailTranslationDto
     */
    'description': string;
}

/**
    * @export
    * @enum {string}
    */
export enum RoomDetailTranslationDtoLanguageEnum {
    En = 'EN',
    Vi = 'VI'
}


