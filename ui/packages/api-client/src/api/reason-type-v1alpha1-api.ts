/* tslint:disable */
/* eslint-disable */
/**
 * Halo
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.20.0-SNAPSHOT
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
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { JsonPatchInner } from '../models';
// @ts-ignore
import { ReasonType } from '../models';
// @ts-ignore
import { ReasonTypeList } from '../models';
/**
 * ReasonTypeV1alpha1Api - axios parameter creator
 * @export
 */
export const ReasonTypeV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create ReasonType
         * @param {ReasonType} [reasonType] Fresh reasontype
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReasonType: async (reasonType?: ReasonType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/notification.halo.run/v1alpha1/reasontypes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reasonType, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete ReasonType
         * @param {string} name Name of reasontype
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteReasonType: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteReasonType', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/reasontypes/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get ReasonType
         * @param {string} name Name of reasontype
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReasonType: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getReasonType', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/reasontypes/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List ReasonType
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listReasonType: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/notification.halo.run/v1alpha1/reasontypes`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (size !== undefined) {
                localVarQueryParameter['size'] = size;
            }

            if (labelSelector) {
                localVarQueryParameter['labelSelector'] = labelSelector;
            }

            if (fieldSelector) {
                localVarQueryParameter['fieldSelector'] = fieldSelector;
            }

            if (sort) {
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
         * Patch ReasonType
         * @param {string} name Name of reasontype
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchReasonType: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchReasonType', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/reasontypes/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(jsonPatchInner, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update ReasonType
         * @param {string} name Name of reasontype
         * @param {ReasonType} [reasonType] Updated reasontype
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateReasonType: async (name: string, reasonType?: ReasonType, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateReasonType', 'name', name)
            const localVarPath = `/apis/notification.halo.run/v1alpha1/reasontypes/{name}`
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication basicAuth required
            // http basic authentication required
            setBasicAuthToObject(localVarRequestOptions, configuration)

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(reasonType, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ReasonTypeV1alpha1Api - functional programming interface
 * @export
 */
export const ReasonTypeV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ReasonTypeV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create ReasonType
         * @param {ReasonType} [reasonType] Fresh reasontype
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createReasonType(reasonType?: ReasonType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReasonType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createReasonType(reasonType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReasonTypeV1alpha1Api.createReasonType']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete ReasonType
         * @param {string} name Name of reasontype
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteReasonType(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteReasonType(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReasonTypeV1alpha1Api.deleteReasonType']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get ReasonType
         * @param {string} name Name of reasontype
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getReasonType(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReasonType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getReasonType(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReasonTypeV1alpha1Api.getReasonType']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List ReasonType
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listReasonType(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReasonTypeList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listReasonType(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReasonTypeV1alpha1Api.listReasonType']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch ReasonType
         * @param {string} name Name of reasontype
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchReasonType(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReasonType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchReasonType(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReasonTypeV1alpha1Api.patchReasonType']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update ReasonType
         * @param {string} name Name of reasontype
         * @param {ReasonType} [reasonType] Updated reasontype
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateReasonType(name: string, reasonType?: ReasonType, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReasonType>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateReasonType(name, reasonType, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ReasonTypeV1alpha1Api.updateReasonType']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * ReasonTypeV1alpha1Api - factory interface
 * @export
 */
export const ReasonTypeV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ReasonTypeV1alpha1ApiFp(configuration)
    return {
        /**
         * Create ReasonType
         * @param {ReasonTypeV1alpha1ApiCreateReasonTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createReasonType(requestParameters: ReasonTypeV1alpha1ApiCreateReasonTypeRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ReasonType> {
            return localVarFp.createReasonType(requestParameters.reasonType, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete ReasonType
         * @param {ReasonTypeV1alpha1ApiDeleteReasonTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteReasonType(requestParameters: ReasonTypeV1alpha1ApiDeleteReasonTypeRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteReasonType(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get ReasonType
         * @param {ReasonTypeV1alpha1ApiGetReasonTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getReasonType(requestParameters: ReasonTypeV1alpha1ApiGetReasonTypeRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReasonType> {
            return localVarFp.getReasonType(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List ReasonType
         * @param {ReasonTypeV1alpha1ApiListReasonTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listReasonType(requestParameters: ReasonTypeV1alpha1ApiListReasonTypeRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<ReasonTypeList> {
            return localVarFp.listReasonType(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch ReasonType
         * @param {ReasonTypeV1alpha1ApiPatchReasonTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchReasonType(requestParameters: ReasonTypeV1alpha1ApiPatchReasonTypeRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReasonType> {
            return localVarFp.patchReasonType(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update ReasonType
         * @param {ReasonTypeV1alpha1ApiUpdateReasonTypeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateReasonType(requestParameters: ReasonTypeV1alpha1ApiUpdateReasonTypeRequest, options?: RawAxiosRequestConfig): AxiosPromise<ReasonType> {
            return localVarFp.updateReasonType(requestParameters.name, requestParameters.reasonType, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createReasonType operation in ReasonTypeV1alpha1Api.
 * @export
 * @interface ReasonTypeV1alpha1ApiCreateReasonTypeRequest
 */
export interface ReasonTypeV1alpha1ApiCreateReasonTypeRequest {
    /**
     * Fresh reasontype
     * @type {ReasonType}
     * @memberof ReasonTypeV1alpha1ApiCreateReasonType
     */
    readonly reasonType?: ReasonType
}

/**
 * Request parameters for deleteReasonType operation in ReasonTypeV1alpha1Api.
 * @export
 * @interface ReasonTypeV1alpha1ApiDeleteReasonTypeRequest
 */
export interface ReasonTypeV1alpha1ApiDeleteReasonTypeRequest {
    /**
     * Name of reasontype
     * @type {string}
     * @memberof ReasonTypeV1alpha1ApiDeleteReasonType
     */
    readonly name: string
}

/**
 * Request parameters for getReasonType operation in ReasonTypeV1alpha1Api.
 * @export
 * @interface ReasonTypeV1alpha1ApiGetReasonTypeRequest
 */
export interface ReasonTypeV1alpha1ApiGetReasonTypeRequest {
    /**
     * Name of reasontype
     * @type {string}
     * @memberof ReasonTypeV1alpha1ApiGetReasonType
     */
    readonly name: string
}

/**
 * Request parameters for listReasonType operation in ReasonTypeV1alpha1Api.
 * @export
 * @interface ReasonTypeV1alpha1ApiListReasonTypeRequest
 */
export interface ReasonTypeV1alpha1ApiListReasonTypeRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof ReasonTypeV1alpha1ApiListReasonType
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof ReasonTypeV1alpha1ApiListReasonType
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof ReasonTypeV1alpha1ApiListReasonType
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof ReasonTypeV1alpha1ApiListReasonType
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof ReasonTypeV1alpha1ApiListReasonType
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchReasonType operation in ReasonTypeV1alpha1Api.
 * @export
 * @interface ReasonTypeV1alpha1ApiPatchReasonTypeRequest
 */
export interface ReasonTypeV1alpha1ApiPatchReasonTypeRequest {
    /**
     * Name of reasontype
     * @type {string}
     * @memberof ReasonTypeV1alpha1ApiPatchReasonType
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof ReasonTypeV1alpha1ApiPatchReasonType
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateReasonType operation in ReasonTypeV1alpha1Api.
 * @export
 * @interface ReasonTypeV1alpha1ApiUpdateReasonTypeRequest
 */
export interface ReasonTypeV1alpha1ApiUpdateReasonTypeRequest {
    /**
     * Name of reasontype
     * @type {string}
     * @memberof ReasonTypeV1alpha1ApiUpdateReasonType
     */
    readonly name: string

    /**
     * Updated reasontype
     * @type {ReasonType}
     * @memberof ReasonTypeV1alpha1ApiUpdateReasonType
     */
    readonly reasonType?: ReasonType
}

/**
 * ReasonTypeV1alpha1Api - object-oriented interface
 * @export
 * @class ReasonTypeV1alpha1Api
 * @extends {BaseAPI}
 */
export class ReasonTypeV1alpha1Api extends BaseAPI {
    /**
     * Create ReasonType
     * @param {ReasonTypeV1alpha1ApiCreateReasonTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReasonTypeV1alpha1Api
     */
    public createReasonType(requestParameters: ReasonTypeV1alpha1ApiCreateReasonTypeRequest = {}, options?: RawAxiosRequestConfig) {
        return ReasonTypeV1alpha1ApiFp(this.configuration).createReasonType(requestParameters.reasonType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete ReasonType
     * @param {ReasonTypeV1alpha1ApiDeleteReasonTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReasonTypeV1alpha1Api
     */
    public deleteReasonType(requestParameters: ReasonTypeV1alpha1ApiDeleteReasonTypeRequest, options?: RawAxiosRequestConfig) {
        return ReasonTypeV1alpha1ApiFp(this.configuration).deleteReasonType(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get ReasonType
     * @param {ReasonTypeV1alpha1ApiGetReasonTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReasonTypeV1alpha1Api
     */
    public getReasonType(requestParameters: ReasonTypeV1alpha1ApiGetReasonTypeRequest, options?: RawAxiosRequestConfig) {
        return ReasonTypeV1alpha1ApiFp(this.configuration).getReasonType(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List ReasonType
     * @param {ReasonTypeV1alpha1ApiListReasonTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReasonTypeV1alpha1Api
     */
    public listReasonType(requestParameters: ReasonTypeV1alpha1ApiListReasonTypeRequest = {}, options?: RawAxiosRequestConfig) {
        return ReasonTypeV1alpha1ApiFp(this.configuration).listReasonType(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch ReasonType
     * @param {ReasonTypeV1alpha1ApiPatchReasonTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReasonTypeV1alpha1Api
     */
    public patchReasonType(requestParameters: ReasonTypeV1alpha1ApiPatchReasonTypeRequest, options?: RawAxiosRequestConfig) {
        return ReasonTypeV1alpha1ApiFp(this.configuration).patchReasonType(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update ReasonType
     * @param {ReasonTypeV1alpha1ApiUpdateReasonTypeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReasonTypeV1alpha1Api
     */
    public updateReasonType(requestParameters: ReasonTypeV1alpha1ApiUpdateReasonTypeRequest, options?: RawAxiosRequestConfig) {
        return ReasonTypeV1alpha1ApiFp(this.configuration).updateReasonType(requestParameters.name, requestParameters.reasonType, options).then((request) => request(this.axios, this.basePath));
    }
}

