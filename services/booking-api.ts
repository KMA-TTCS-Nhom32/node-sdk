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
import type { Booking } from '../models';
// @ts-ignore
import type { BookingsPaginationResultDto } from '../models';
// @ts-ignore
import type { CancelBookingDto } from '../models';
// @ts-ignore
import type { CreateBookingAtHotelDto } from '../models';
// @ts-ignore
import type { CreateBookingOnlineDto } from '../models';
// @ts-ignore
import type { UpdateBookingStatusDto } from '../models';
/**
 * BookingApi - axios parameter creator
 * @export
 */
export const BookingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Cancel a booking
         * @param {string} bookingId 
         * @param {CancelBookingDto} cancelBookingDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerCancelBooking: async (bookingId: string, cancelBookingDto: CancelBookingDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bookingId' is not null or undefined
            assertParamExists('bookingControllerCancelBooking', 'bookingId', bookingId)
            // verify required parameter 'cancelBookingDto' is not null or undefined
            assertParamExists('bookingControllerCancelBooking', 'cancelBookingDto', cancelBookingDto)
            const localVarPath = `/api/booking/cancel/{bookingId}`
                .replace(`{${"bookingId"}}`, encodeURIComponent(String(bookingId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(cancelBookingDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a new booking directly at the hotel
         * @param {CreateBookingAtHotelDto} createBookingAtHotelDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerCreateBookingDirectly: async (createBookingAtHotelDto: CreateBookingAtHotelDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createBookingAtHotelDto' is not null or undefined
            assertParamExists('bookingControllerCreateBookingDirectly', 'createBookingAtHotelDto', createBookingAtHotelDto)
            const localVarPath = `/api/booking/directly`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createBookingAtHotelDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Create a new booking online
         * @param {CreateBookingOnlineDto} createBookingOnlineDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerCreateBookingOnline: async (createBookingOnlineDto: CreateBookingOnlineDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createBookingOnlineDto' is not null or undefined
            assertParamExists('bookingControllerCreateBookingOnline', 'createBookingOnlineDto', createBookingOnlineDto)
            const localVarPath = `/api/booking`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createBookingOnlineDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get booking details
         * @param {string} bookingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerFindById: async (bookingId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bookingId' is not null or undefined
            assertParamExists('bookingControllerFindById', 'bookingId', bookingId)
            const localVarPath = `/api/booking/{bookingId}`
                .replace(`{${"bookingId"}}`, encodeURIComponent(String(bookingId)));
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
         * @summary Get all bookings with pagination and filters
         * @param {number} [page] 
         * @param {number} [pageSize] 
         * @param {string} [filters] JSON string of FilterBookingsDto
         * @param {string} [sort] JSON string of SortBookingsDto[]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerGetBookings: async (page?: number, pageSize?: number, filters?: string, sort?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/booking`;
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
         * @summary Get all my bookings with pagination and filters
         * @param {number} [page] 
         * @param {number} [pageSize] 
         * @param {string} [filters] Filter my bookings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerGetMyBookings: async (page?: number, pageSize?: number, filters?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/booking/my-bookings`;
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
         * @summary Handle payment webhook from PayOS
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerHandlePaymentWebhook: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/booking/webhook/payment`;
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
        /**
         * 
         * @summary Update booking status
         * @param {string} bookingId 
         * @param {UpdateBookingStatusDto} updateBookingStatusDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerUpdateBookingStatus: async (bookingId: string, updateBookingStatusDto: UpdateBookingStatusDto, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'bookingId' is not null or undefined
            assertParamExists('bookingControllerUpdateBookingStatus', 'bookingId', bookingId)
            // verify required parameter 'updateBookingStatusDto' is not null or undefined
            assertParamExists('bookingControllerUpdateBookingStatus', 'updateBookingStatusDto', updateBookingStatusDto)
            const localVarPath = `/api/booking/update-status/{bookingId}`
                .replace(`{${"bookingId"}}`, encodeURIComponent(String(bookingId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateBookingStatusDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * BookingApi - functional programming interface
 * @export
 */
export const BookingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BookingApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Cancel a booking
         * @param {string} bookingId 
         * @param {CancelBookingDto} cancelBookingDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bookingControllerCancelBooking(bookingId: string, cancelBookingDto: CancelBookingDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Booking>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bookingControllerCancelBooking(bookingId, cancelBookingDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BookingApi.bookingControllerCancelBooking']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Create a new booking directly at the hotel
         * @param {CreateBookingAtHotelDto} createBookingAtHotelDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bookingControllerCreateBookingDirectly(createBookingAtHotelDto: CreateBookingAtHotelDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Booking>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bookingControllerCreateBookingDirectly(createBookingAtHotelDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BookingApi.bookingControllerCreateBookingDirectly']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Create a new booking online
         * @param {CreateBookingOnlineDto} createBookingOnlineDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bookingControllerCreateBookingOnline(createBookingOnlineDto: CreateBookingOnlineDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Booking>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bookingControllerCreateBookingOnline(createBookingOnlineDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BookingApi.bookingControllerCreateBookingOnline']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get booking details
         * @param {string} bookingId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bookingControllerFindById(bookingId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Booking>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bookingControllerFindById(bookingId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BookingApi.bookingControllerFindById']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get all bookings with pagination and filters
         * @param {number} [page] 
         * @param {number} [pageSize] 
         * @param {string} [filters] JSON string of FilterBookingsDto
         * @param {string} [sort] JSON string of SortBookingsDto[]
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bookingControllerGetBookings(page?: number, pageSize?: number, filters?: string, sort?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingsPaginationResultDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bookingControllerGetBookings(page, pageSize, filters, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BookingApi.bookingControllerGetBookings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Get all my bookings with pagination and filters
         * @param {number} [page] 
         * @param {number} [pageSize] 
         * @param {string} [filters] Filter my bookings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bookingControllerGetMyBookings(page?: number, pageSize?: number, filters?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<BookingsPaginationResultDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bookingControllerGetMyBookings(page, pageSize, filters, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BookingApi.bookingControllerGetMyBookings']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Handle payment webhook from PayOS
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bookingControllerHandlePaymentWebhook(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bookingControllerHandlePaymentWebhook(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BookingApi.bookingControllerHandlePaymentWebhook']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @summary Update booking status
         * @param {string} bookingId 
         * @param {UpdateBookingStatusDto} updateBookingStatusDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async bookingControllerUpdateBookingStatus(bookingId: string, updateBookingStatusDto: UpdateBookingStatusDto, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Booking>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.bookingControllerUpdateBookingStatus(bookingId, updateBookingStatusDto, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BookingApi.bookingControllerUpdateBookingStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * BookingApi - factory interface
 * @export
 */
export const BookingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BookingApiFp(configuration)
    return {
        /**
         * 
         * @summary Cancel a booking
         * @param {BookingApiBookingControllerCancelBookingRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerCancelBooking(requestParameters: BookingApiBookingControllerCancelBookingRequest, options?: RawAxiosRequestConfig): AxiosPromise<Booking> {
            return localVarFp.bookingControllerCancelBooking(requestParameters.bookingId, requestParameters.cancelBookingDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a new booking directly at the hotel
         * @param {BookingApiBookingControllerCreateBookingDirectlyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerCreateBookingDirectly(requestParameters: BookingApiBookingControllerCreateBookingDirectlyRequest, options?: RawAxiosRequestConfig): AxiosPromise<Booking> {
            return localVarFp.bookingControllerCreateBookingDirectly(requestParameters.createBookingAtHotelDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Create a new booking online
         * @param {BookingApiBookingControllerCreateBookingOnlineRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerCreateBookingOnline(requestParameters: BookingApiBookingControllerCreateBookingOnlineRequest, options?: RawAxiosRequestConfig): AxiosPromise<Booking> {
            return localVarFp.bookingControllerCreateBookingOnline(requestParameters.createBookingOnlineDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get booking details
         * @param {BookingApiBookingControllerFindByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerFindById(requestParameters: BookingApiBookingControllerFindByIdRequest, options?: RawAxiosRequestConfig): AxiosPromise<Booking> {
            return localVarFp.bookingControllerFindById(requestParameters.bookingId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all bookings with pagination and filters
         * @param {BookingApiBookingControllerGetBookingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerGetBookings(requestParameters: BookingApiBookingControllerGetBookingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BookingsPaginationResultDto> {
            return localVarFp.bookingControllerGetBookings(requestParameters.page, requestParameters.pageSize, requestParameters.filters, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get all my bookings with pagination and filters
         * @param {BookingApiBookingControllerGetMyBookingsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerGetMyBookings(requestParameters: BookingApiBookingControllerGetMyBookingsRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<BookingsPaginationResultDto> {
            return localVarFp.bookingControllerGetMyBookings(requestParameters.page, requestParameters.pageSize, requestParameters.filters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Handle payment webhook from PayOS
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerHandlePaymentWebhook(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.bookingControllerHandlePaymentWebhook(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update booking status
         * @param {BookingApiBookingControllerUpdateBookingStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        bookingControllerUpdateBookingStatus(requestParameters: BookingApiBookingControllerUpdateBookingStatusRequest, options?: RawAxiosRequestConfig): AxiosPromise<Booking> {
            return localVarFp.bookingControllerUpdateBookingStatus(requestParameters.bookingId, requestParameters.updateBookingStatusDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for bookingControllerCancelBooking operation in BookingApi.
 * @export
 * @interface BookingApiBookingControllerCancelBookingRequest
 */
export interface BookingApiBookingControllerCancelBookingRequest {
    /**
     * 
     * @type {string}
     * @memberof BookingApiBookingControllerCancelBooking
     */
    readonly bookingId: string

    /**
     * 
     * @type {CancelBookingDto}
     * @memberof BookingApiBookingControllerCancelBooking
     */
    readonly cancelBookingDto: CancelBookingDto
}

/**
 * Request parameters for bookingControllerCreateBookingDirectly operation in BookingApi.
 * @export
 * @interface BookingApiBookingControllerCreateBookingDirectlyRequest
 */
export interface BookingApiBookingControllerCreateBookingDirectlyRequest {
    /**
     * 
     * @type {CreateBookingAtHotelDto}
     * @memberof BookingApiBookingControllerCreateBookingDirectly
     */
    readonly createBookingAtHotelDto: CreateBookingAtHotelDto
}

/**
 * Request parameters for bookingControllerCreateBookingOnline operation in BookingApi.
 * @export
 * @interface BookingApiBookingControllerCreateBookingOnlineRequest
 */
export interface BookingApiBookingControllerCreateBookingOnlineRequest {
    /**
     * 
     * @type {CreateBookingOnlineDto}
     * @memberof BookingApiBookingControllerCreateBookingOnline
     */
    readonly createBookingOnlineDto: CreateBookingOnlineDto
}

/**
 * Request parameters for bookingControllerFindById operation in BookingApi.
 * @export
 * @interface BookingApiBookingControllerFindByIdRequest
 */
export interface BookingApiBookingControllerFindByIdRequest {
    /**
     * 
     * @type {string}
     * @memberof BookingApiBookingControllerFindById
     */
    readonly bookingId: string
}

/**
 * Request parameters for bookingControllerGetBookings operation in BookingApi.
 * @export
 * @interface BookingApiBookingControllerGetBookingsRequest
 */
export interface BookingApiBookingControllerGetBookingsRequest {
    /**
     * 
     * @type {number}
     * @memberof BookingApiBookingControllerGetBookings
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof BookingApiBookingControllerGetBookings
     */
    readonly pageSize?: number

    /**
     * JSON string of FilterBookingsDto
     * @type {string}
     * @memberof BookingApiBookingControllerGetBookings
     */
    readonly filters?: string

    /**
     * JSON string of SortBookingsDto[]
     * @type {string}
     * @memberof BookingApiBookingControllerGetBookings
     */
    readonly sort?: string
}

/**
 * Request parameters for bookingControllerGetMyBookings operation in BookingApi.
 * @export
 * @interface BookingApiBookingControllerGetMyBookingsRequest
 */
export interface BookingApiBookingControllerGetMyBookingsRequest {
    /**
     * 
     * @type {number}
     * @memberof BookingApiBookingControllerGetMyBookings
     */
    readonly page?: number

    /**
     * 
     * @type {number}
     * @memberof BookingApiBookingControllerGetMyBookings
     */
    readonly pageSize?: number

    /**
     * Filter my bookings
     * @type {string}
     * @memberof BookingApiBookingControllerGetMyBookings
     */
    readonly filters?: string
}

/**
 * Request parameters for bookingControllerUpdateBookingStatus operation in BookingApi.
 * @export
 * @interface BookingApiBookingControllerUpdateBookingStatusRequest
 */
export interface BookingApiBookingControllerUpdateBookingStatusRequest {
    /**
     * 
     * @type {string}
     * @memberof BookingApiBookingControllerUpdateBookingStatus
     */
    readonly bookingId: string

    /**
     * 
     * @type {UpdateBookingStatusDto}
     * @memberof BookingApiBookingControllerUpdateBookingStatus
     */
    readonly updateBookingStatusDto: UpdateBookingStatusDto
}

/**
 * BookingApi - object-oriented interface
 * @export
 * @class BookingApi
 * @extends {BaseAPI}
 */
export class BookingApi extends BaseAPI {
    /**
     * 
     * @summary Cancel a booking
     * @param {BookingApiBookingControllerCancelBookingRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookingApi
     */
    public bookingControllerCancelBooking(requestParameters: BookingApiBookingControllerCancelBookingRequest, options?: RawAxiosRequestConfig) {
        return BookingApiFp(this.configuration).bookingControllerCancelBooking(requestParameters.bookingId, requestParameters.cancelBookingDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a new booking directly at the hotel
     * @param {BookingApiBookingControllerCreateBookingDirectlyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookingApi
     */
    public bookingControllerCreateBookingDirectly(requestParameters: BookingApiBookingControllerCreateBookingDirectlyRequest, options?: RawAxiosRequestConfig) {
        return BookingApiFp(this.configuration).bookingControllerCreateBookingDirectly(requestParameters.createBookingAtHotelDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Create a new booking online
     * @param {BookingApiBookingControllerCreateBookingOnlineRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookingApi
     */
    public bookingControllerCreateBookingOnline(requestParameters: BookingApiBookingControllerCreateBookingOnlineRequest, options?: RawAxiosRequestConfig) {
        return BookingApiFp(this.configuration).bookingControllerCreateBookingOnline(requestParameters.createBookingOnlineDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get booking details
     * @param {BookingApiBookingControllerFindByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookingApi
     */
    public bookingControllerFindById(requestParameters: BookingApiBookingControllerFindByIdRequest, options?: RawAxiosRequestConfig) {
        return BookingApiFp(this.configuration).bookingControllerFindById(requestParameters.bookingId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all bookings with pagination and filters
     * @param {BookingApiBookingControllerGetBookingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookingApi
     */
    public bookingControllerGetBookings(requestParameters: BookingApiBookingControllerGetBookingsRequest = {}, options?: RawAxiosRequestConfig) {
        return BookingApiFp(this.configuration).bookingControllerGetBookings(requestParameters.page, requestParameters.pageSize, requestParameters.filters, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get all my bookings with pagination and filters
     * @param {BookingApiBookingControllerGetMyBookingsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookingApi
     */
    public bookingControllerGetMyBookings(requestParameters: BookingApiBookingControllerGetMyBookingsRequest = {}, options?: RawAxiosRequestConfig) {
        return BookingApiFp(this.configuration).bookingControllerGetMyBookings(requestParameters.page, requestParameters.pageSize, requestParameters.filters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Handle payment webhook from PayOS
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookingApi
     */
    public bookingControllerHandlePaymentWebhook(options?: RawAxiosRequestConfig) {
        return BookingApiFp(this.configuration).bookingControllerHandlePaymentWebhook(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update booking status
     * @param {BookingApiBookingControllerUpdateBookingStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BookingApi
     */
    public bookingControllerUpdateBookingStatus(requestParameters: BookingApiBookingControllerUpdateBookingStatusRequest, options?: RawAxiosRequestConfig) {
        return BookingApiFp(this.configuration).bookingControllerUpdateBookingStatus(requestParameters.bookingId, requestParameters.updateBookingStatusDto, options).then((request) => request(this.axios, this.basePath));
    }
}

