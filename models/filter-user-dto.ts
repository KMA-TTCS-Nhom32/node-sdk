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
 * @interface FilterUserDto
 */
export interface FilterUserDto {
    /**
     * 
     * @type {string}
     * @memberof FilterUserDto
     */
    'keyword'?: string;
    /**
     * 
     * @type {string}
     * @memberof FilterUserDto
     */
    'roles'?: FilterUserDtoRolesEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FilterUserDto
     */
    'is_blocked'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FilterUserDto
     */
    'is_active'?: boolean;
    /**
     * Filter by branch ID
     * @type {string}
     * @memberof FilterUserDto
     */
    'branchId'?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum FilterUserDtoRolesEnum {
    User = 'USER',
    Staff = 'STAFF',
    Admin = 'ADMIN'
}


