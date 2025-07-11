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
import type { User } from './user';

/**
 * 
 * @export
 * @interface BlockActivity
 */
export interface BlockActivity {
    /**
     * 
     * @type {string}
     * @memberof BlockActivity
     */
    'id': string;
    /**
     * Soft delete flag
     * @type {boolean}
     * @memberof BlockActivity
     */
    'isDeleted': boolean;
    /**
     * Soft delete timestamp
     * @type {string}
     * @memberof BlockActivity
     */
    'deletedAt': string | null;
    /**
     * 
     * @type {string}
     * @memberof BlockActivity
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof BlockActivity
     */
    'updatedAt': string;
    /**
     * ID of user who was blocked/unblocked
     * @type {string}
     * @memberof BlockActivity
     */
    'userId': string;
    /**
     * Details of user who was blocked/unblocked
     * @type {User}
     * @memberof BlockActivity
     */
    'user': User;
    /**
     * ID of user who performed the block/unblock action
     * @type {string}
     * @memberof BlockActivity
     */
    'blockedBy': string;
    /**
     * Details of user who performed the block/unblock action
     * @type {User}
     * @memberof BlockActivity
     */
    'blockedByUser': User;
    /**
     * Type of action performed (BLOCK/UNBLOCK)
     * @type {string}
     * @memberof BlockActivity
     */
    'action': BlockActivityActionEnum;
    /**
     * Reason for the block/unblock action
     * @type {string}
     * @memberof BlockActivity
     */
    'reason': string;
}

/**
    * @export
    * @enum {string}
    */
export enum BlockActivityActionEnum {
    Block = 'BLOCK',
    Unblock = 'UNBLOCK'
}


