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
import type { PromotionTranslationDto } from './promotion-translation-dto';

/**
 * 
 * @export
 * @interface CreateRoomPromotionDto
 */
export interface CreateRoomPromotionDto {
    /**
     * Unique code for the promotion
     * @type {string}
     * @memberof CreateRoomPromotionDto
     */
    'code': string;
    /**
     * Description of the promotion
     * @type {string}
     * @memberof CreateRoomPromotionDto
     */
    'description': string;
    /**
     * Type of booking this promotion applies to
     * @type {string}
     * @memberof CreateRoomPromotionDto
     */
    'applied_type': CreateRoomPromotionDtoAppliedTypeEnum;
    /**
     * Type of discount (percentage or fixed amount)
     * @type {string}
     * @memberof CreateRoomPromotionDto
     */
    'discount_type': CreateRoomPromotionDtoDiscountTypeEnum;
    /**
     * Value of the discount (percentage or fixed amount)
     * @type {number}
     * @memberof CreateRoomPromotionDto
     */
    'discount_value': number;
    /**
     * Start date of the promotion
     * @type {string}
     * @memberof CreateRoomPromotionDto
     */
    'start_date': string;
    /**
     * End date of the promotion
     * @type {string}
     * @memberof CreateRoomPromotionDto
     */
    'end_date': string;
    /**
     * IDs of room details this promotion applies to
     * @type {Array<string>}
     * @memberof CreateRoomPromotionDto
     */
    'applied_room_ids': Array<string>;
    /**
     * Minimum hours required for hourly booking promotion
     * @type {number}
     * @memberof CreateRoomPromotionDto
     */
    'min_hours'?: number;
    /**
     * Minimum nights required for nightly booking promotion
     * @type {number}
     * @memberof CreateRoomPromotionDto
     */
    'min_nights'?: number;
    /**
     * Minimum days required for daily booking promotion
     * @type {number}
     * @memberof CreateRoomPromotionDto
     */
    'min_days'?: number;
    /**
     * Total number of codes available for the promotion
     * @type {number}
     * @memberof CreateRoomPromotionDto
     */
    'total_code'?: number;
    /**
     * Translations for the promotion
     * @type {Array<PromotionTranslationDto>}
     * @memberof CreateRoomPromotionDto
     */
    'translations'?: Array<PromotionTranslationDto>;
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRoomPromotionDtoAppliedTypeEnum {
    Hourly = 'HOURLY',
    Nightly = 'NIGHTLY',
    Daily = 'DAILY'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateRoomPromotionDtoDiscountTypeEnum {
    Percentage = 'PERCENTAGE',
    FixedAmount = 'FIXED_AMOUNT'
}


