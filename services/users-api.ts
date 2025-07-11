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
import type { AdminUpdateUserDto } from '../models';
// @ts-ignore
import type { BlockOrUnblockUserDto } from '../models';
// @ts-ignore
import type { DeleteUserDto } from '../models';
// @ts-ignore
import type { User } from '../models';
// @ts-ignore
import type { UserDetail } from '../models';
// @ts-ignore
import type { UsersPaginationResultDto } from '../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get detailed user information (Admin only)
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerAdminGetUserDetail: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersControllerAdminGetUserDetail', 'id', id)
            const localVarPath = `/api/users/admin/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
         * @summary Update user information (Admin only)
         * @param {string} id 
         * @param {AdminUpdateUserDto} adminUpdateUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerAdminUpdateUser: async (id: string, adminUpdateUserDto: AdminUpdateUserDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersControllerAdminUpdateUser', 'id', id)
            // verify required parameter 'adminUpdateUserDto' is not null or undefined
            assertParamExists('usersControllerAdminUpdateUser', 'adminUpdateUserDto', adminUpdateUserDto)
            const localVarPath = `/api/users/admin/{id}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(adminUpdateUserDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Block or unblock a user
         * @param {string} id 
         * @param {BlockOrUnblockUserDto} blockOrUnblockUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerBlockUser: async (id: string, blockOrUnblockUserDto: BlockOrUnblockUserDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersControllerBlockUser', 'id', id)
            // verify required parameter 'blockOrUnblockUserDto' is not null or undefined
            assertParamExists('usersControllerBlockUser', 'blockOrUnblockUserDto', blockOrUnblockUserDto)
            const localVarPath = `/api/users/block-action/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(blockOrUnblockUserDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Soft delete a user (Admin only)
         * @param {string} id 
         * @param {DeleteUserDto} deleteUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerDeleteUser: async (id: string, deleteUserDto: DeleteUserDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersControllerDeleteUser', 'id', id)
            // verify required parameter 'deleteUserDto' is not null or undefined
            assertParamExists('usersControllerDeleteUser', 'deleteUserDto', deleteUserDto)
            const localVarPath = `/api/users/{id}`
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(deleteUserDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} [page] 
         * @param {number} [pageSize] 
         * @param {string} [filters] JSON string of FilterUserDto
         * @param {string} [sort] JSON string of SortUserDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerGetUsers: async (page?: number, pageSize?: number, filters?: string, sort?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/users`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['pageSize'] = pageSize;
            }

            if (filters !== undefined) {
                localVarQueryParameter['filters'] = filters;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
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
         * @summary Restore a deleted user (Admin only)
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerRestoreUser: async (id: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('usersControllerRestoreUser', 'id', id)
            const localVarPath = `/api/users/{id}/restore`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
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
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get detailed user information (Admin only)
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersControllerAdminGetUserDetail(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersControllerAdminGetUserDetail(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.usersControllerAdminGetUserDetail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update user information (Admin only)
         * @param {string} id 
         * @param {AdminUpdateUserDto} adminUpdateUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersControllerAdminUpdateUser(id: string, adminUpdateUserDto: AdminUpdateUserDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDetail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersControllerAdminUpdateUser(id, adminUpdateUserDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.usersControllerAdminUpdateUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Block or unblock a user
         * @param {string} id 
         * @param {BlockOrUnblockUserDto} blockOrUnblockUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersControllerBlockUser(id: string, blockOrUnblockUserDto: BlockOrUnblockUserDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersControllerBlockUser(id, blockOrUnblockUserDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.usersControllerBlockUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Soft delete a user (Admin only)
         * @param {string} id 
         * @param {DeleteUserDto} deleteUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersControllerDeleteUser(id: string, deleteUserDto: DeleteUserDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersControllerDeleteUser(id, deleteUserDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.usersControllerDeleteUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} [page] 
         * @param {number} [pageSize] 
         * @param {string} [filters] JSON string of FilterUserDto
         * @param {string} [sort] JSON string of SortUserDto
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersControllerGetUsers(page?: number, pageSize?: number, filters?: string, sort?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UsersPaginationResultDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersControllerGetUsers(page, pageSize, filters, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.usersControllerGetUsers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Restore a deleted user (Admin only)
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async usersControllerRestoreUser(id: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<User>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.usersControllerRestoreUser(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['UsersApi.usersControllerRestoreUser']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * UsersApi - factory interface
 * @export
 */
export const UsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UsersApiFp(configuration)
    return {
        /**
         * 
         * @summary Get detailed user information (Admin only)
         * @param {UsersApiUsersControllerAdminGetUserDetailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerAdminGetUserDetail(requestParameters: UsersApiUsersControllerAdminGetUserDetailRequest, options?: RawAxiosRequestConfig): AxiosPromise<UserDetail> {
            return localVarFp.usersControllerAdminGetUserDetail(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update user information (Admin only)
         * @param {UsersApiUsersControllerAdminUpdateUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerAdminUpdateUser(requestParameters: UsersApiUsersControllerAdminUpdateUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<UserDetail> {
            return localVarFp.usersControllerAdminUpdateUser(requestParameters.id, requestParameters.adminUpdateUserDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Block or unblock a user
         * @param {UsersApiUsersControllerBlockUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerBlockUser(requestParameters: UsersApiUsersControllerBlockUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.usersControllerBlockUser(requestParameters.id, requestParameters.blockOrUnblockUserDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Soft delete a user (Admin only)
         * @param {UsersApiUsersControllerDeleteUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerDeleteUser(requestParameters: UsersApiUsersControllerDeleteUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.usersControllerDeleteUser(requestParameters.id, requestParameters.deleteUserDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {UsersApiUsersControllerGetUsersRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerGetUsers(requestParameters: UsersApiUsersControllerGetUsersRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<UsersPaginationResultDto> {
            return localVarFp.usersControllerGetUsers(requestParameters.page, requestParameters.pageSize, requestParameters.filters, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Restore a deleted user (Admin only)
         * @param {UsersApiUsersControllerRestoreUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        usersControllerRestoreUser(requestParameters: UsersApiUsersControllerRestoreUserRequest, options?: RawAxiosRequestConfig): AxiosPromise<User> {
            return localVarFp.usersControllerRestoreUser(requestParameters.id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for usersControllerAdminGetUserDetail operation in UsersApi.
 * @export
 * @interface UsersApiUsersControllerAdminGetUserDetailRequest
 */
export interface UsersApiUsersControllerAdminGetUserDetailRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiUsersControllerAdminGetUserDetail
     */
    readonly id: string
}

/**
 * Request parameters for usersControllerAdminUpdateUser operation in UsersApi.
 * @export
 * @interface UsersApiUsersControllerAdminUpdateUserRequest
 */
export interface UsersApiUsersControllerAdminUpdateUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiUsersControllerAdminUpdateUser
     */
    readonly id: string

    /**
     * 
     * @type {AdminUpdateUserDto}
     * @memberof UsersApiUsersControllerAdminUpdateUser
     */
    readonly adminUpdateUserDto: AdminUpdateUserDto
}

/**
 * Request parameters for usersControllerBlockUser operation in UsersApi.
 * @export
 * @interface UsersApiUsersControllerBlockUserRequest
 */
export interface UsersApiUsersControllerBlockUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiUsersControllerBlockUser
     */
    readonly id: string

    /**
     * 
     * @type {BlockOrUnblockUserDto}
     * @memberof UsersApiUsersControllerBlockUser
     */
    readonly blockOrUnblockUserDto: BlockOrUnblockUserDto
}

/**
 * Request parameters for usersControllerDeleteUser operation in UsersApi.
 * @export
 * @interface UsersApiUsersControllerDeleteUserRequest
 */
export interface UsersApiUsersControllerDeleteUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiUsersControllerDeleteUser
     */
    readonly id: string

    /**
     * 
     * @type {DeleteUserDto}
     * @memberof UsersApiUsersControllerDeleteUser
     */
    readonly deleteUserDto: DeleteUserDto
}

/**
 * Request parameters for usersControllerGetUsers operation in UsersApi.
 * @export
 * @interface UsersApiUsersControllerGetUsersRequest
 */
export interface UsersApiUsersControllerGetUsersRequest {
    /**
     * 
     * @type {number}
     * @memberof UsersApiUsersControllerGetUsers
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof UsersApiUsersControllerGetUsers
     */
    readonly pageSize?: number

    /**
     * JSON string of FilterUserDto
     * @type {string}
     * @memberof UsersApiUsersControllerGetUsers
     */
    readonly filters?: string

    /**
     * JSON string of SortUserDto
     * @type {string}
     * @memberof UsersApiUsersControllerGetUsers
     */
    readonly sort?: string
}

/**
 * Request parameters for usersControllerRestoreUser operation in UsersApi.
 * @export
 * @interface UsersApiUsersControllerRestoreUserRequest
 */
export interface UsersApiUsersControllerRestoreUserRequest {
    /**
     * 
     * @type {string}
     * @memberof UsersApiUsersControllerRestoreUser
     */
    readonly id: string
}

/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * 
     * @summary Get detailed user information (Admin only)
     * @param {UsersApiUsersControllerAdminGetUserDetailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersControllerAdminGetUserDetail(requestParameters: UsersApiUsersControllerAdminGetUserDetailRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersControllerAdminGetUserDetail(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update user information (Admin only)
     * @param {UsersApiUsersControllerAdminUpdateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersControllerAdminUpdateUser(requestParameters: UsersApiUsersControllerAdminUpdateUserRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersControllerAdminUpdateUser(requestParameters.id, requestParameters.adminUpdateUserDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Block or unblock a user
     * @param {UsersApiUsersControllerBlockUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersControllerBlockUser(requestParameters: UsersApiUsersControllerBlockUserRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersControllerBlockUser(requestParameters.id, requestParameters.blockOrUnblockUserDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Soft delete a user (Admin only)
     * @param {UsersApiUsersControllerDeleteUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersControllerDeleteUser(requestParameters: UsersApiUsersControllerDeleteUserRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersControllerDeleteUser(requestParameters.id, requestParameters.deleteUserDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {UsersApiUsersControllerGetUsersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersControllerGetUsers(requestParameters: UsersApiUsersControllerGetUsersRequest = {}, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersControllerGetUsers(requestParameters.page, requestParameters.pageSize, requestParameters.filters, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Restore a deleted user (Admin only)
     * @param {UsersApiUsersControllerRestoreUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public usersControllerRestoreUser(requestParameters: UsersApiUsersControllerRestoreUserRequest, options?: RawAxiosRequestConfig) {
        return UsersApiFp(this.configuration).usersControllerRestoreUser(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }
}

