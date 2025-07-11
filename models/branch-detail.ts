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
import type { Amenity } from './amenity';
// May contain unused imports in some cases
// @ts-ignore
import type { BranchTranslationsInner } from './branch-translations-inner';
// May contain unused imports in some cases
// @ts-ignore
import type { Image } from './image';
// May contain unused imports in some cases
// @ts-ignore
import type { NearBy } from './near-by';
// May contain unused imports in some cases
// @ts-ignore
import type { Province } from './province';
// May contain unused imports in some cases
// @ts-ignore
import type { RoomDetail } from './room-detail';

/**
 * 
 * @export
 * @interface BranchDetail
 */
export interface BranchDetail {
    /**
     * 
     * @type {string}
     * @memberof BranchDetail
     */
    'id': string;
    /**
     * Soft delete flag
     * @type {boolean}
     * @memberof BranchDetail
     */
    'isDeleted': boolean;
    /**
     * Soft delete timestamp
     * @type {string}
     * @memberof BranchDetail
     */
    'deletedAt': string | null;
    /**
     * 
     * @type {string}
     * @memberof BranchDetail
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof BranchDetail
     */
    'updatedAt': string;
    /**
     * ID of the province where this branch is located
     * @type {string}
     * @memberof BranchDetail
     */
    'provinceId': string;
    /**
     * Province where this branch is located
     * @type {Province}
     * @memberof BranchDetail
     */
    'province': Province;
    /**
     * Branch\'s thumbnail image
     * @type {Image}
     * @memberof BranchDetail
     */
    'thumbnail': Image;
    /**
     * Branch\'s image gallery
     * @type {Array<Image>}
     * @memberof BranchDetail
     */
    'images': Array<Image>;
    /**
     * Branch\'s name
     * @type {string}
     * @memberof BranchDetail
     */
    'name': string;
    /**
     * Branch\'s slug
     * @type {string}
     * @memberof BranchDetail
     */
    'slug': string;
    /**
     * Branch\'s description
     * @type {string}
     * @memberof BranchDetail
     */
    'description': string;
    /**
     * Branch\'s contact phone number
     * @type {string}
     * @memberof BranchDetail
     */
    'phone': string;
    /**
     * Branch\'s active status
     * @type {boolean}
     * @memberof BranchDetail
     */
    'is_active': boolean;
    /**
     * Branch\'s physical address
     * @type {string}
     * @memberof BranchDetail
     */
    'address': string;
    /**
     * Branch\'s rating
     * @type {number}
     * @memberof BranchDetail
     */
    'rating': number;
    /**
     * List of translations for the branch
     * @type {Array<BranchTranslationsInner>}
     * @memberof BranchDetail
     */
    'translations': Array<BranchTranslationsInner>;
    /**
     * List of available languages for this branch
     * @type {Array<string>}
     * @memberof BranchDetail
     */
    'availableLanguages': Array<BranchDetailAvailableLanguagesEnum>;
    /**
     * Amenities available in the branch
     * @type {Array<Amenity>}
     * @memberof BranchDetail
     */
    'amenities': Array<Amenity>;
    /**
     * List of rooms available in the branch
     * @type {Array<RoomDetail>}
     * @memberof BranchDetail
     */
    'rooms': Array<RoomDetail>;
    /**
     * Nearby locations
     * @type {Array<NearBy>}
     * @memberof BranchDetail
     */
    'nearBy': Array<NearBy>;
}

/**
    * @export
    * @enum {string}
    */
export enum BranchDetailAvailableLanguagesEnum {
    En = 'EN',
    Vi = 'VI'
}


