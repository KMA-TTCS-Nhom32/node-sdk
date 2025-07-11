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
 * @interface UpdateBookingStatusDto
 */
export interface UpdateBookingStatusDto {
    /**
     * Booking status
     * @type {string}
     * @memberof UpdateBookingStatusDto
     */
    'status': UpdateBookingStatusDtoStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateBookingStatusDtoStatusEnum {
    Pending = 'PENDING',
    WaitingForCheckIn = 'WAITING_FOR_CHECK_IN',
    CheckedIn = 'CHECKED_IN',
    Cancelled = 'CANCELLED',
    Completed = 'COMPLETED',
    Refunded = 'REFUNDED',
    Rejected = 'REJECTED'
}


