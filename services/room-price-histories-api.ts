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
import type { CreateRoomPriceHistoryDto } from '../models';
// @ts-ignore
import type { RoomPriceHistory } from '../models';
// @ts-ignore
import type { UpdateRoomPriceHistoryDto } from '../models';
/**
 * RoomPriceHistoriesApi - axios parameter creator
 * @export
 */
export const RoomPriceHistoriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a new room price history
         * @param {CreateRoomPriceHistoryDto} createRoomPriceHistoryDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomPriceHistoryControllerCreate: async (createRoomPriceHistoryDto: CreateRoomPriceHistoryDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createRoomPriceHistoryDto' is not null or undefined
            assertParamExists('roomPriceHistoryControllerCreate', 'createRoomPriceHistoryDto', createRoomPriceHistoryDto)
            const localVarPath = `/api/room-price-histories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createRoomPriceHistoryDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get all price histories for a specific room detail
         * @param {string} roomDetailId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomPriceHistoryControllerFindManyByRoomDetail: async (roomDetailId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'roomDetailId' is not null or undefined
            assertParamExists('roomPriceHistoryControllerFindManyByRoomDetail', 'roomDetailId', roomDetailId)
            const localVarPath = `/api/room-price-histories/room-detail/{roomDetailId}`
                .replace(`{${"roomDetailId"}}`, encodeURIComponent(String(roomDetailId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Delete a room price history
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomPriceHistoryControllerRemove: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('roomPriceHistoryControllerRemove', 'id', id)
            const localVarPath = `/api/room-price-histories/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
         * @summary Update a room price history
         * @param {string} id 
         * @param {UpdateRoomPriceHistoryDto} updateRoomPriceHistoryDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomPriceHistoryControllerUpdate: async (id: string, updateRoomPriceHistoryDto: UpdateRoomPriceHistoryDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('roomPriceHistoryControllerUpdate', 'id', id)
            // verify required parameter 'updateRoomPriceHistoryDto' is not null or undefined
            assertParamExists('roomPriceHistoryControllerUpdate', 'updateRoomPriceHistoryDto', updateRoomPriceHistoryDto)
            const localVarPath = `/api/room-price-histories/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateRoomPriceHistoryDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RoomPriceHistoriesApi - functional programming interface
 * @export
 */
export const RoomPriceHistoriesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RoomPriceHistoriesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a new room price history
         * @param {CreateRoomPriceHistoryDto} createRoomPriceHistoryDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async roomPriceHistoryControllerCreate(createRoomPriceHistoryDto: CreateRoomPriceHistoryDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomPriceHistory>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.roomPriceHistoryControllerCreate(createRoomPriceHistoryDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomPriceHistoriesApi.roomPriceHistoryControllerCreate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get all price histories for a specific room detail
         * @param {string} roomDetailId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async roomPriceHistoryControllerFindManyByRoomDetail(roomDetailId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<RoomPriceHistory>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.roomPriceHistoryControllerFindManyByRoomDetail(roomDetailId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomPriceHistoriesApi.roomPriceHistoryControllerFindManyByRoomDetail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Delete a room price history
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async roomPriceHistoryControllerRemove(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.roomPriceHistoryControllerRemove(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomPriceHistoriesApi.roomPriceHistoryControllerRemove']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update a room price history
         * @param {string} id 
         * @param {UpdateRoomPriceHistoryDto} updateRoomPriceHistoryDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async roomPriceHistoryControllerUpdate(id: string, updateRoomPriceHistoryDto: UpdateRoomPriceHistoryDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RoomPriceHistory>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.roomPriceHistoryControllerUpdate(id, updateRoomPriceHistoryDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['RoomPriceHistoriesApi.roomPriceHistoryControllerUpdate']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * RoomPriceHistoriesApi - factory interface
 * @export
 */
export const RoomPriceHistoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RoomPriceHistoriesApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a new room price history
         * @param {RoomPriceHistoriesApiRoomPriceHistoryControllerCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomPriceHistoryControllerCreate(requestParameters: RoomPriceHistoriesApiRoomPriceHistoryControllerCreateRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoomPriceHistory> {
            return localVarFp.roomPriceHistoryControllerCreate(requestParameters.createRoomPriceHistoryDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all price histories for a specific room detail
         * @param {RoomPriceHistoriesApiRoomPriceHistoryControllerFindManyByRoomDetailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomPriceHistoryControllerFindManyByRoomDetail(requestParameters: RoomPriceHistoriesApiRoomPriceHistoryControllerFindManyByRoomDetailRequest, options?: RawAxiosRequestConfig): AxiosPromise<Array<RoomPriceHistory>> {
            return localVarFp.roomPriceHistoryControllerFindManyByRoomDetail(requestParameters.roomDetailId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a room price history
         * @param {RoomPriceHistoriesApiRoomPriceHistoryControllerRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomPriceHistoryControllerRemove(requestParameters: RoomPriceHistoriesApiRoomPriceHistoryControllerRemoveRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.roomPriceHistoryControllerRemove(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a room price history
         * @param {RoomPriceHistoriesApiRoomPriceHistoryControllerUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        roomPriceHistoryControllerUpdate(requestParameters: RoomPriceHistoriesApiRoomPriceHistoryControllerUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<RoomPriceHistory> {
            return localVarFp.roomPriceHistoryControllerUpdate(requestParameters.id, requestParameters.updateRoomPriceHistoryDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for roomPriceHistoryControllerCreate operation in RoomPriceHistoriesApi.
 * @export
 * @interface RoomPriceHistoriesApiRoomPriceHistoryControllerCreateRequest
 */
export interface RoomPriceHistoriesApiRoomPriceHistoryControllerCreateRequest {
    /**
     * 
     * @type {CreateRoomPriceHistoryDto}
     * @memberof RoomPriceHistoriesApiRoomPriceHistoryControllerCreate
     */
    readonly createRoomPriceHistoryDto: CreateRoomPriceHistoryDto
}

/**
 * Request parameters for roomPriceHistoryControllerFindManyByRoomDetail operation in RoomPriceHistoriesApi.
 * @export
 * @interface RoomPriceHistoriesApiRoomPriceHistoryControllerFindManyByRoomDetailRequest
 */
export interface RoomPriceHistoriesApiRoomPriceHistoryControllerFindManyByRoomDetailRequest {
    /**
     * 
     * @type {string}
     * @memberof RoomPriceHistoriesApiRoomPriceHistoryControllerFindManyByRoomDetail
     */
    readonly roomDetailId: string
}

/**
 * Request parameters for roomPriceHistoryControllerRemove operation in RoomPriceHistoriesApi.
 * @export
 * @interface RoomPriceHistoriesApiRoomPriceHistoryControllerRemoveRequest
 */
export interface RoomPriceHistoriesApiRoomPriceHistoryControllerRemoveRequest {
    /**
     * 
     * @type {string}
     * @memberof RoomPriceHistoriesApiRoomPriceHistoryControllerRemove
     */
    readonly id: string
}

/**
 * Request parameters for roomPriceHistoryControllerUpdate operation in RoomPriceHistoriesApi.
 * @export
 * @interface RoomPriceHistoriesApiRoomPriceHistoryControllerUpdateRequest
 */
export interface RoomPriceHistoriesApiRoomPriceHistoryControllerUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof RoomPriceHistoriesApiRoomPriceHistoryControllerUpdate
     */
    readonly id: string

    /**
     * 
     * @type {UpdateRoomPriceHistoryDto}
     * @memberof RoomPriceHistoriesApiRoomPriceHistoryControllerUpdate
     */
    readonly updateRoomPriceHistoryDto: UpdateRoomPriceHistoryDto
}

/**
 * RoomPriceHistoriesApi - object-oriented interface
 * @export
 * @class RoomPriceHistoriesApi
 * @extends {BaseAPI}
 */
export class RoomPriceHistoriesApi extends BaseAPI {
    /**
     * 
     * @summary Create a new room price history
     * @param {RoomPriceHistoriesApiRoomPriceHistoryControllerCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomPriceHistoriesApi
     */
    public roomPriceHistoryControllerCreate(requestParameters: RoomPriceHistoriesApiRoomPriceHistoryControllerCreateRequest, options?: RawAxiosRequestConfig) {
        return RoomPriceHistoriesApiFp(this.configuration).roomPriceHistoryControllerCreate(requestParameters.createRoomPriceHistoryDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all price histories for a specific room detail
     * @param {RoomPriceHistoriesApiRoomPriceHistoryControllerFindManyByRoomDetailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomPriceHistoriesApi
     */
    public roomPriceHistoryControllerFindManyByRoomDetail(requestParameters: RoomPriceHistoriesApiRoomPriceHistoryControllerFindManyByRoomDetailRequest, options?: RawAxiosRequestConfig) {
        return RoomPriceHistoriesApiFp(this.configuration).roomPriceHistoryControllerFindManyByRoomDetail(requestParameters.roomDetailId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a room price history
     * @param {RoomPriceHistoriesApiRoomPriceHistoryControllerRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomPriceHistoriesApi
     */
    public roomPriceHistoryControllerRemove(requestParameters: RoomPriceHistoriesApiRoomPriceHistoryControllerRemoveRequest, options?: RawAxiosRequestConfig) {
        return RoomPriceHistoriesApiFp(this.configuration).roomPriceHistoryControllerRemove(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a room price history
     * @param {RoomPriceHistoriesApiRoomPriceHistoryControllerUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RoomPriceHistoriesApi
     */
    public roomPriceHistoryControllerUpdate(requestParameters: RoomPriceHistoriesApiRoomPriceHistoryControllerUpdateRequest, options?: RawAxiosRequestConfig) {
        return RoomPriceHistoriesApiFp(this.configuration).roomPriceHistoryControllerUpdate(requestParameters.id, requestParameters.updateRoomPriceHistoryDto, options).then((request) => request(this.axios, this.basePath));
    }
}

