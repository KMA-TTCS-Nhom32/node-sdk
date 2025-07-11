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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { AnalyticsSummaryDto } from '../models';
// @ts-ignore
import type { OccupancyRateResponseDto } from '../models';
// @ts-ignore
import type { RevenueTimelineDto } from '../models';
// @ts-ignore
import type { RoomPerformanceDto } from '../models';
/**
 * AnalyticsApi - axios parameter creator
 * @export
 */
export const AnalyticsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get analytics summary for a branch
         * @param {string} [branchId] Branch ID to get analytics for
         * @param {string} [startDate] Start date for analytics (YYYY-MM-DD)
         * @param {string} [endDate] End date for analytics (YYYY-MM-DD)
         * @param {AnalyticsControllerGetAnalyticsSummaryPeriodTypeEnum} [periodType] Period type for analytics
         * @param {number} [months] Number of months to analyze
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsControllerGetAnalyticsSummary: async (branchId?: string, startDate?: string, endDate?: string, periodType?: AnalyticsControllerGetAnalyticsSummaryPeriodTypeEnum, months?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/analytics/summary`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (branchId !== undefined) {
                localVarQueryParameter['branchId'] = branchId;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['startDate'] = startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
            }

            if (periodType !== undefined) {
                localVarQueryParameter['periodType'] = periodType;
            }

            if (months !== undefined) {
                localVarQueryParameter['months'] = months;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get occupancy rate analytics
         * @param {string} [branchId] Branch ID to get analytics for
         * @param {string} [startDate] Start date for analytics (YYYY-MM-DD)
         * @param {string} [endDate] End date for analytics (YYYY-MM-DD)
         * @param {AnalyticsControllerGetOccupancyRatePeriodTypeEnum} [periodType] Period type for analytics
         * @param {number} [months] Number of months to analyze
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsControllerGetOccupancyRate: async (branchId?: string, startDate?: string, endDate?: string, periodType?: AnalyticsControllerGetOccupancyRatePeriodTypeEnum, months?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/analytics/occupancy`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (branchId !== undefined) {
                localVarQueryParameter['branchId'] = branchId;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['startDate'] = startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
            }

            if (periodType !== undefined) {
                localVarQueryParameter['periodType'] = periodType;
            }

            if (months !== undefined) {
                localVarQueryParameter['months'] = months;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get revenue analytics
         * @param {string} [branchId] Branch ID to get analytics for
         * @param {string} [startDate] Start date for analytics (YYYY-MM-DD)
         * @param {string} [endDate] End date for analytics (YYYY-MM-DD)
         * @param {AnalyticsControllerGetRevenueAnalyticsPeriodTypeEnum} [periodType] Period type for analytics
         * @param {number} [months] Number of months to analyze
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsControllerGetRevenueAnalytics: async (branchId?: string, startDate?: string, endDate?: string, periodType?: AnalyticsControllerGetRevenueAnalyticsPeriodTypeEnum, months?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/analytics/revenue`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (branchId !== undefined) {
                localVarQueryParameter['branchId'] = branchId;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['startDate'] = startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
            }

            if (periodType !== undefined) {
                localVarQueryParameter['periodType'] = periodType;
            }

            if (months !== undefined) {
                localVarQueryParameter['months'] = months;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get room performance analytics
         * @param {string} [branchId] Branch ID to get analytics for
         * @param {string} [startDate] Start date for analytics (YYYY-MM-DD)
         * @param {string} [endDate] End date for analytics (YYYY-MM-DD)
         * @param {AnalyticsControllerGetRoomPerformancePeriodTypeEnum} [periodType] Period type for analytics
         * @param {number} [months] Number of months to analyze
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsControllerGetRoomPerformance: async (branchId?: string, startDate?: string, endDate?: string, periodType?: AnalyticsControllerGetRoomPerformancePeriodTypeEnum, months?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/analytics/room-performance`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (branchId !== undefined) {
                localVarQueryParameter['branchId'] = branchId;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['startDate'] = startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['endDate'] = endDate;
            }

            if (periodType !== undefined) {
                localVarQueryParameter['periodType'] = periodType;
            }

            if (months !== undefined) {
                localVarQueryParameter['months'] = months;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AnalyticsApi - functional programming interface
 * @export
 */
export const AnalyticsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AnalyticsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get analytics summary for a branch
         * @param {string} [branchId] Branch ID to get analytics for
         * @param {string} [startDate] Start date for analytics (YYYY-MM-DD)
         * @param {string} [endDate] End date for analytics (YYYY-MM-DD)
         * @param {AnalyticsControllerGetAnalyticsSummaryPeriodTypeEnum} [periodType] Period type for analytics
         * @param {number} [months] Number of months to analyze
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async analyticsControllerGetAnalyticsSummary(branchId?: string, startDate?: string, endDate?: string, periodType?: AnalyticsControllerGetAnalyticsSummaryPeriodTypeEnum, months?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AnalyticsSummaryDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.analyticsControllerGetAnalyticsSummary(branchId, startDate, endDate, periodType, months, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsApi.analyticsControllerGetAnalyticsSummary']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get occupancy rate analytics
         * @param {string} [branchId] Branch ID to get analytics for
         * @param {string} [startDate] Start date for analytics (YYYY-MM-DD)
         * @param {string} [endDate] End date for analytics (YYYY-MM-DD)
         * @param {AnalyticsControllerGetOccupancyRatePeriodTypeEnum} [periodType] Period type for analytics
         * @param {number} [months] Number of months to analyze
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async analyticsControllerGetOccupancyRate(branchId?: string, startDate?: string, endDate?: string, periodType?: AnalyticsControllerGetOccupancyRatePeriodTypeEnum, months?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<OccupancyRateResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.analyticsControllerGetOccupancyRate(branchId, startDate, endDate, periodType, months, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsApi.analyticsControllerGetOccupancyRate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get revenue analytics
         * @param {string} [branchId] Branch ID to get analytics for
         * @param {string} [startDate] Start date for analytics (YYYY-MM-DD)
         * @param {string} [endDate] End date for analytics (YYYY-MM-DD)
         * @param {AnalyticsControllerGetRevenueAnalyticsPeriodTypeEnum} [periodType] Period type for analytics
         * @param {number} [months] Number of months to analyze
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async analyticsControllerGetRevenueAnalytics(branchId?: string, startDate?: string, endDate?: string, periodType?: AnalyticsControllerGetRevenueAnalyticsPeriodTypeEnum, months?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RevenueTimelineDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.analyticsControllerGetRevenueAnalytics(branchId, startDate, endDate, periodType, months, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsApi.analyticsControllerGetRevenueAnalytics']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get room performance analytics
         * @param {string} [branchId] Branch ID to get analytics for
         * @param {string} [startDate] Start date for analytics (YYYY-MM-DD)
         * @param {string} [endDate] End date for analytics (YYYY-MM-DD)
         * @param {AnalyticsControllerGetRoomPerformancePeriodTypeEnum} [periodType] Period type for analytics
         * @param {number} [months] Number of months to analyze
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async analyticsControllerGetRoomPerformance(branchId?: string, startDate?: string, endDate?: string, periodType?: AnalyticsControllerGetRoomPerformancePeriodTypeEnum, months?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RoomPerformanceDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.analyticsControllerGetRoomPerformance(branchId, startDate, endDate, periodType, months, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AnalyticsApi.analyticsControllerGetRoomPerformance']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AnalyticsApi - factory interface
 * @export
 */
export const AnalyticsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AnalyticsApiFp(configuration)
    return {
        /**
         * 
         * @summary Get analytics summary for a branch
         * @param {AnalyticsApiAnalyticsControllerGetAnalyticsSummaryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsControllerGetAnalyticsSummary(requestParameters: AnalyticsApiAnalyticsControllerGetAnalyticsSummaryRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<AnalyticsSummaryDto> {
            return localVarFp.analyticsControllerGetAnalyticsSummary(requestParameters.branchId, requestParameters.startDate, requestParameters.endDate, requestParameters.periodType, requestParameters.months, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get occupancy rate analytics
         * @param {AnalyticsApiAnalyticsControllerGetOccupancyRateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsControllerGetOccupancyRate(requestParameters: AnalyticsApiAnalyticsControllerGetOccupancyRateRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<OccupancyRateResponseDto> {
            return localVarFp.analyticsControllerGetOccupancyRate(requestParameters.branchId, requestParameters.startDate, requestParameters.endDate, requestParameters.periodType, requestParameters.months, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get revenue analytics
         * @param {AnalyticsApiAnalyticsControllerGetRevenueAnalyticsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsControllerGetRevenueAnalytics(requestParameters: AnalyticsApiAnalyticsControllerGetRevenueAnalyticsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<RevenueTimelineDto> {
            return localVarFp.analyticsControllerGetRevenueAnalytics(requestParameters.branchId, requestParameters.startDate, requestParameters.endDate, requestParameters.periodType, requestParameters.months, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get room performance analytics
         * @param {AnalyticsApiAnalyticsControllerGetRoomPerformanceRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        analyticsControllerGetRoomPerformance(requestParameters: AnalyticsApiAnalyticsControllerGetRoomPerformanceRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<Array<RoomPerformanceDto>> {
            return localVarFp.analyticsControllerGetRoomPerformance(requestParameters.branchId, requestParameters.startDate, requestParameters.endDate, requestParameters.periodType, requestParameters.months, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for analyticsControllerGetAnalyticsSummary operation in AnalyticsApi.
 * @export
 * @interface AnalyticsApiAnalyticsControllerGetAnalyticsSummaryRequest
 */
export interface AnalyticsApiAnalyticsControllerGetAnalyticsSummaryRequest {
    /**
     * Branch ID to get analytics for
     * @type {string}
     * @memberof AnalyticsApiAnalyticsControllerGetAnalyticsSummary
     */
    readonly branchId?: string

    /**
     * Start date for analytics (YYYY-MM-DD)
     * @type {string}
     * @memberof AnalyticsApiAnalyticsControllerGetAnalyticsSummary
     */
    readonly startDate?: string

    /**
     * End date for analytics (YYYY-MM-DD)
     * @type {string}
     * @memberof AnalyticsApiAnalyticsControllerGetAnalyticsSummary
     */
    readonly endDate?: string

    /**
     * Period type for analytics
     * @type {'DAILY' | 'MONTHLY' | 'YEARLY'}
     * @memberof AnalyticsApiAnalyticsControllerGetAnalyticsSummary
     */
    readonly periodType?: AnalyticsControllerGetAnalyticsSummaryPeriodTypeEnum

    /**
     * Number of months to analyze
     * @type {number}
     * @memberof AnalyticsApiAnalyticsControllerGetAnalyticsSummary
     */
    readonly months?: number
}

/**
 * Request parameters for analyticsControllerGetOccupancyRate operation in AnalyticsApi.
 * @export
 * @interface AnalyticsApiAnalyticsControllerGetOccupancyRateRequest
 */
export interface AnalyticsApiAnalyticsControllerGetOccupancyRateRequest {
    /**
     * Branch ID to get analytics for
     * @type {string}
     * @memberof AnalyticsApiAnalyticsControllerGetOccupancyRate
     */
    readonly branchId?: string

    /**
     * Start date for analytics (YYYY-MM-DD)
     * @type {string}
     * @memberof AnalyticsApiAnalyticsControllerGetOccupancyRate
     */
    readonly startDate?: string

    /**
     * End date for analytics (YYYY-MM-DD)
     * @type {string}
     * @memberof AnalyticsApiAnalyticsControllerGetOccupancyRate
     */
    readonly endDate?: string

    /**
     * Period type for analytics
     * @type {'DAILY' | 'MONTHLY' | 'YEARLY'}
     * @memberof AnalyticsApiAnalyticsControllerGetOccupancyRate
     */
    readonly periodType?: AnalyticsControllerGetOccupancyRatePeriodTypeEnum

    /**
     * Number of months to analyze
     * @type {number}
     * @memberof AnalyticsApiAnalyticsControllerGetOccupancyRate
     */
    readonly months?: number
}

/**
 * Request parameters for analyticsControllerGetRevenueAnalytics operation in AnalyticsApi.
 * @export
 * @interface AnalyticsApiAnalyticsControllerGetRevenueAnalyticsRequest
 */
export interface AnalyticsApiAnalyticsControllerGetRevenueAnalyticsRequest {
    /**
     * Branch ID to get analytics for
     * @type {string}
     * @memberof AnalyticsApiAnalyticsControllerGetRevenueAnalytics
     */
    readonly branchId?: string

    /**
     * Start date for analytics (YYYY-MM-DD)
     * @type {string}
     * @memberof AnalyticsApiAnalyticsControllerGetRevenueAnalytics
     */
    readonly startDate?: string

    /**
     * End date for analytics (YYYY-MM-DD)
     * @type {string}
     * @memberof AnalyticsApiAnalyticsControllerGetRevenueAnalytics
     */
    readonly endDate?: string

    /**
     * Period type for analytics
     * @type {'DAILY' | 'MONTHLY' | 'YEARLY'}
     * @memberof AnalyticsApiAnalyticsControllerGetRevenueAnalytics
     */
    readonly periodType?: AnalyticsControllerGetRevenueAnalyticsPeriodTypeEnum

    /**
     * Number of months to analyze
     * @type {number}
     * @memberof AnalyticsApiAnalyticsControllerGetRevenueAnalytics
     */
    readonly months?: number
}

/**
 * Request parameters for analyticsControllerGetRoomPerformance operation in AnalyticsApi.
 * @export
 * @interface AnalyticsApiAnalyticsControllerGetRoomPerformanceRequest
 */
export interface AnalyticsApiAnalyticsControllerGetRoomPerformanceRequest {
    /**
     * Branch ID to get analytics for
     * @type {string}
     * @memberof AnalyticsApiAnalyticsControllerGetRoomPerformance
     */
    readonly branchId?: string

    /**
     * Start date for analytics (YYYY-MM-DD)
     * @type {string}
     * @memberof AnalyticsApiAnalyticsControllerGetRoomPerformance
     */
    readonly startDate?: string

    /**
     * End date for analytics (YYYY-MM-DD)
     * @type {string}
     * @memberof AnalyticsApiAnalyticsControllerGetRoomPerformance
     */
    readonly endDate?: string

    /**
     * Period type for analytics
     * @type {'DAILY' | 'MONTHLY' | 'YEARLY'}
     * @memberof AnalyticsApiAnalyticsControllerGetRoomPerformance
     */
    readonly periodType?: AnalyticsControllerGetRoomPerformancePeriodTypeEnum

    /**
     * Number of months to analyze
     * @type {number}
     * @memberof AnalyticsApiAnalyticsControllerGetRoomPerformance
     */
    readonly months?: number
}

/**
 * AnalyticsApi - object-oriented interface
 * @export
 * @class AnalyticsApi
 * @extends {BaseAPI}
 */
export class AnalyticsApi extends BaseAPI {
    /**
     * 
     * @summary Get analytics summary for a branch
     * @param {AnalyticsApiAnalyticsControllerGetAnalyticsSummaryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    public analyticsControllerGetAnalyticsSummary(requestParameters: AnalyticsApiAnalyticsControllerGetAnalyticsSummaryRequest = {}, options?: RawAxiosRequestConfig) {
        return AnalyticsApiFp(this.configuration).analyticsControllerGetAnalyticsSummary(requestParameters.branchId, requestParameters.startDate, requestParameters.endDate, requestParameters.periodType, requestParameters.months, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get occupancy rate analytics
     * @param {AnalyticsApiAnalyticsControllerGetOccupancyRateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    public analyticsControllerGetOccupancyRate(requestParameters: AnalyticsApiAnalyticsControllerGetOccupancyRateRequest = {}, options?: RawAxiosRequestConfig) {
        return AnalyticsApiFp(this.configuration).analyticsControllerGetOccupancyRate(requestParameters.branchId, requestParameters.startDate, requestParameters.endDate, requestParameters.periodType, requestParameters.months, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get revenue analytics
     * @param {AnalyticsApiAnalyticsControllerGetRevenueAnalyticsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    public analyticsControllerGetRevenueAnalytics(requestParameters: AnalyticsApiAnalyticsControllerGetRevenueAnalyticsRequest = {}, options?: RawAxiosRequestConfig) {
        return AnalyticsApiFp(this.configuration).analyticsControllerGetRevenueAnalytics(requestParameters.branchId, requestParameters.startDate, requestParameters.endDate, requestParameters.periodType, requestParameters.months, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get room performance analytics
     * @param {AnalyticsApiAnalyticsControllerGetRoomPerformanceRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AnalyticsApi
     */
    public analyticsControllerGetRoomPerformance(requestParameters: AnalyticsApiAnalyticsControllerGetRoomPerformanceRequest = {}, options?: RawAxiosRequestConfig) {
        return AnalyticsApiFp(this.configuration).analyticsControllerGetRoomPerformance(requestParameters.branchId, requestParameters.startDate, requestParameters.endDate, requestParameters.periodType, requestParameters.months, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
  * @export
  * @enum {string}
  */
export enum AnalyticsControllerGetAnalyticsSummaryPeriodTypeEnum {
    Daily = 'DAILY',
    Monthly = 'MONTHLY',
    Yearly = 'YEARLY'
}
/**
  * @export
  * @enum {string}
  */
export enum AnalyticsControllerGetOccupancyRatePeriodTypeEnum {
    Daily = 'DAILY',
    Monthly = 'MONTHLY',
    Yearly = 'YEARLY'
}
/**
  * @export
  * @enum {string}
  */
export enum AnalyticsControllerGetRevenueAnalyticsPeriodTypeEnum {
    Daily = 'DAILY',
    Monthly = 'MONTHLY',
    Yearly = 'YEARLY'
}
/**
  * @export
  * @enum {string}
  */
export enum AnalyticsControllerGetRoomPerformancePeriodTypeEnum {
    Daily = 'DAILY',
    Monthly = 'MONTHLY',
    Yearly = 'YEARLY'
}
