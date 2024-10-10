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
import { LocalThumbnail } from '../models';
// @ts-ignore
import { LocalThumbnailList } from '../models';
/**
 * LocalThumbnailV1alpha1Api - axios parameter creator
 * @export
 */
export const LocalThumbnailV1alpha1ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create LocalThumbnail
         * @param {LocalThumbnail} [localThumbnail] Fresh localthumbnail
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLocalThumbnail: async (localThumbnail?: LocalThumbnail, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/storage.halo.run/v1alpha1/localthumbnails`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(localThumbnail, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Delete LocalThumbnail
         * @param {string} name Name of localthumbnail
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLocalThumbnail: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteLocalThumbnail', 'name', name)
            const localVarPath = `/apis/storage.halo.run/v1alpha1/localthumbnails/{name}`
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
         * Get LocalThumbnail
         * @param {string} name Name of localthumbnail
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalThumbnail: async (name: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('getLocalThumbnail', 'name', name)
            const localVarPath = `/apis/storage.halo.run/v1alpha1/localthumbnails/{name}`
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
         * List LocalThumbnail
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listLocalThumbnail: async (page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/apis/storage.halo.run/v1alpha1/localthumbnails`;
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
         * Patch LocalThumbnail
         * @param {string} name Name of localthumbnail
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchLocalThumbnail: async (name: string, jsonPatchInner?: Array<JsonPatchInner>, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('patchLocalThumbnail', 'name', name)
            const localVarPath = `/apis/storage.halo.run/v1alpha1/localthumbnails/{name}`
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
         * Update LocalThumbnail
         * @param {string} name Name of localthumbnail
         * @param {LocalThumbnail} [localThumbnail] Updated localthumbnail
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLocalThumbnail: async (name: string, localThumbnail?: LocalThumbnail, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('updateLocalThumbnail', 'name', name)
            const localVarPath = `/apis/storage.halo.run/v1alpha1/localthumbnails/{name}`
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
            localVarRequestOptions.data = serializeDataIfNeeded(localThumbnail, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LocalThumbnailV1alpha1Api - functional programming interface
 * @export
 */
export const LocalThumbnailV1alpha1ApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LocalThumbnailV1alpha1ApiAxiosParamCreator(configuration)
    return {
        /**
         * Create LocalThumbnail
         * @param {LocalThumbnail} [localThumbnail] Fresh localthumbnail
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createLocalThumbnail(localThumbnail?: LocalThumbnail, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocalThumbnail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createLocalThumbnail(localThumbnail, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LocalThumbnailV1alpha1Api.createLocalThumbnail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Delete LocalThumbnail
         * @param {string} name Name of localthumbnail
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteLocalThumbnail(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteLocalThumbnail(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LocalThumbnailV1alpha1Api.deleteLocalThumbnail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get LocalThumbnail
         * @param {string} name Name of localthumbnail
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getLocalThumbnail(name: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocalThumbnail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLocalThumbnail(name, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LocalThumbnailV1alpha1Api.getLocalThumbnail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * List LocalThumbnail
         * @param {number} [page] Page number. Default is 0.
         * @param {number} [size] Size number. Default is 0.
         * @param {Array<string>} [labelSelector] Label selector. e.g.: hidden!&#x3D;true
         * @param {Array<string>} [fieldSelector] Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
         * @param {Array<string>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listLocalThumbnail(page?: number, size?: number, labelSelector?: Array<string>, fieldSelector?: Array<string>, sort?: Array<string>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocalThumbnailList>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listLocalThumbnail(page, size, labelSelector, fieldSelector, sort, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LocalThumbnailV1alpha1Api.listLocalThumbnail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Patch LocalThumbnail
         * @param {string} name Name of localthumbnail
         * @param {Array<JsonPatchInner>} [jsonPatchInner] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async patchLocalThumbnail(name: string, jsonPatchInner?: Array<JsonPatchInner>, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocalThumbnail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.patchLocalThumbnail(name, jsonPatchInner, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LocalThumbnailV1alpha1Api.patchLocalThumbnail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update LocalThumbnail
         * @param {string} name Name of localthumbnail
         * @param {LocalThumbnail} [localThumbnail] Updated localthumbnail
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateLocalThumbnail(name: string, localThumbnail?: LocalThumbnail, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<LocalThumbnail>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateLocalThumbnail(name, localThumbnail, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LocalThumbnailV1alpha1Api.updateLocalThumbnail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LocalThumbnailV1alpha1Api - factory interface
 * @export
 */
export const LocalThumbnailV1alpha1ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LocalThumbnailV1alpha1ApiFp(configuration)
    return {
        /**
         * Create LocalThumbnail
         * @param {LocalThumbnailV1alpha1ApiCreateLocalThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createLocalThumbnail(requestParameters: LocalThumbnailV1alpha1ApiCreateLocalThumbnailRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<LocalThumbnail> {
            return localVarFp.createLocalThumbnail(requestParameters.localThumbnail, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete LocalThumbnail
         * @param {LocalThumbnailV1alpha1ApiDeleteLocalThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteLocalThumbnail(requestParameters: LocalThumbnailV1alpha1ApiDeleteLocalThumbnailRequest, options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.deleteLocalThumbnail(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * Get LocalThumbnail
         * @param {LocalThumbnailV1alpha1ApiGetLocalThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getLocalThumbnail(requestParameters: LocalThumbnailV1alpha1ApiGetLocalThumbnailRequest, options?: RawAxiosRequestConfig): AxiosPromise<LocalThumbnail> {
            return localVarFp.getLocalThumbnail(requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * List LocalThumbnail
         * @param {LocalThumbnailV1alpha1ApiListLocalThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listLocalThumbnail(requestParameters: LocalThumbnailV1alpha1ApiListLocalThumbnailRequest = {}, options?: RawAxiosRequestConfig): AxiosPromise<LocalThumbnailList> {
            return localVarFp.listLocalThumbnail(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(axios, basePath));
        },
        /**
         * Patch LocalThumbnail
         * @param {LocalThumbnailV1alpha1ApiPatchLocalThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        patchLocalThumbnail(requestParameters: LocalThumbnailV1alpha1ApiPatchLocalThumbnailRequest, options?: RawAxiosRequestConfig): AxiosPromise<LocalThumbnail> {
            return localVarFp.patchLocalThumbnail(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(axios, basePath));
        },
        /**
         * Update LocalThumbnail
         * @param {LocalThumbnailV1alpha1ApiUpdateLocalThumbnailRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateLocalThumbnail(requestParameters: LocalThumbnailV1alpha1ApiUpdateLocalThumbnailRequest, options?: RawAxiosRequestConfig): AxiosPromise<LocalThumbnail> {
            return localVarFp.updateLocalThumbnail(requestParameters.name, requestParameters.localThumbnail, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createLocalThumbnail operation in LocalThumbnailV1alpha1Api.
 * @export
 * @interface LocalThumbnailV1alpha1ApiCreateLocalThumbnailRequest
 */
export interface LocalThumbnailV1alpha1ApiCreateLocalThumbnailRequest {
    /**
     * Fresh localthumbnail
     * @type {LocalThumbnail}
     * @memberof LocalThumbnailV1alpha1ApiCreateLocalThumbnail
     */
    readonly localThumbnail?: LocalThumbnail
}

/**
 * Request parameters for deleteLocalThumbnail operation in LocalThumbnailV1alpha1Api.
 * @export
 * @interface LocalThumbnailV1alpha1ApiDeleteLocalThumbnailRequest
 */
export interface LocalThumbnailV1alpha1ApiDeleteLocalThumbnailRequest {
    /**
     * Name of localthumbnail
     * @type {string}
     * @memberof LocalThumbnailV1alpha1ApiDeleteLocalThumbnail
     */
    readonly name: string
}

/**
 * Request parameters for getLocalThumbnail operation in LocalThumbnailV1alpha1Api.
 * @export
 * @interface LocalThumbnailV1alpha1ApiGetLocalThumbnailRequest
 */
export interface LocalThumbnailV1alpha1ApiGetLocalThumbnailRequest {
    /**
     * Name of localthumbnail
     * @type {string}
     * @memberof LocalThumbnailV1alpha1ApiGetLocalThumbnail
     */
    readonly name: string
}

/**
 * Request parameters for listLocalThumbnail operation in LocalThumbnailV1alpha1Api.
 * @export
 * @interface LocalThumbnailV1alpha1ApiListLocalThumbnailRequest
 */
export interface LocalThumbnailV1alpha1ApiListLocalThumbnailRequest {
    /**
     * Page number. Default is 0.
     * @type {number}
     * @memberof LocalThumbnailV1alpha1ApiListLocalThumbnail
     */
    readonly page?: number

    /**
     * Size number. Default is 0.
     * @type {number}
     * @memberof LocalThumbnailV1alpha1ApiListLocalThumbnail
     */
    readonly size?: number

    /**
     * Label selector. e.g.: hidden!&#x3D;true
     * @type {Array<string>}
     * @memberof LocalThumbnailV1alpha1ApiListLocalThumbnail
     */
    readonly labelSelector?: Array<string>

    /**
     * Field selector. e.g.: metadata.name&#x3D;&#x3D;halo
     * @type {Array<string>}
     * @memberof LocalThumbnailV1alpha1ApiListLocalThumbnail
     */
    readonly fieldSelector?: Array<string>

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @type {Array<string>}
     * @memberof LocalThumbnailV1alpha1ApiListLocalThumbnail
     */
    readonly sort?: Array<string>
}

/**
 * Request parameters for patchLocalThumbnail operation in LocalThumbnailV1alpha1Api.
 * @export
 * @interface LocalThumbnailV1alpha1ApiPatchLocalThumbnailRequest
 */
export interface LocalThumbnailV1alpha1ApiPatchLocalThumbnailRequest {
    /**
     * Name of localthumbnail
     * @type {string}
     * @memberof LocalThumbnailV1alpha1ApiPatchLocalThumbnail
     */
    readonly name: string

    /**
     * 
     * @type {Array<JsonPatchInner>}
     * @memberof LocalThumbnailV1alpha1ApiPatchLocalThumbnail
     */
    readonly jsonPatchInner?: Array<JsonPatchInner>
}

/**
 * Request parameters for updateLocalThumbnail operation in LocalThumbnailV1alpha1Api.
 * @export
 * @interface LocalThumbnailV1alpha1ApiUpdateLocalThumbnailRequest
 */
export interface LocalThumbnailV1alpha1ApiUpdateLocalThumbnailRequest {
    /**
     * Name of localthumbnail
     * @type {string}
     * @memberof LocalThumbnailV1alpha1ApiUpdateLocalThumbnail
     */
    readonly name: string

    /**
     * Updated localthumbnail
     * @type {LocalThumbnail}
     * @memberof LocalThumbnailV1alpha1ApiUpdateLocalThumbnail
     */
    readonly localThumbnail?: LocalThumbnail
}

/**
 * LocalThumbnailV1alpha1Api - object-oriented interface
 * @export
 * @class LocalThumbnailV1alpha1Api
 * @extends {BaseAPI}
 */
export class LocalThumbnailV1alpha1Api extends BaseAPI {
    /**
     * Create LocalThumbnail
     * @param {LocalThumbnailV1alpha1ApiCreateLocalThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalThumbnailV1alpha1Api
     */
    public createLocalThumbnail(requestParameters: LocalThumbnailV1alpha1ApiCreateLocalThumbnailRequest = {}, options?: RawAxiosRequestConfig) {
        return LocalThumbnailV1alpha1ApiFp(this.configuration).createLocalThumbnail(requestParameters.localThumbnail, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Delete LocalThumbnail
     * @param {LocalThumbnailV1alpha1ApiDeleteLocalThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalThumbnailV1alpha1Api
     */
    public deleteLocalThumbnail(requestParameters: LocalThumbnailV1alpha1ApiDeleteLocalThumbnailRequest, options?: RawAxiosRequestConfig) {
        return LocalThumbnailV1alpha1ApiFp(this.configuration).deleteLocalThumbnail(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get LocalThumbnail
     * @param {LocalThumbnailV1alpha1ApiGetLocalThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalThumbnailV1alpha1Api
     */
    public getLocalThumbnail(requestParameters: LocalThumbnailV1alpha1ApiGetLocalThumbnailRequest, options?: RawAxiosRequestConfig) {
        return LocalThumbnailV1alpha1ApiFp(this.configuration).getLocalThumbnail(requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List LocalThumbnail
     * @param {LocalThumbnailV1alpha1ApiListLocalThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalThumbnailV1alpha1Api
     */
    public listLocalThumbnail(requestParameters: LocalThumbnailV1alpha1ApiListLocalThumbnailRequest = {}, options?: RawAxiosRequestConfig) {
        return LocalThumbnailV1alpha1ApiFp(this.configuration).listLocalThumbnail(requestParameters.page, requestParameters.size, requestParameters.labelSelector, requestParameters.fieldSelector, requestParameters.sort, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Patch LocalThumbnail
     * @param {LocalThumbnailV1alpha1ApiPatchLocalThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalThumbnailV1alpha1Api
     */
    public patchLocalThumbnail(requestParameters: LocalThumbnailV1alpha1ApiPatchLocalThumbnailRequest, options?: RawAxiosRequestConfig) {
        return LocalThumbnailV1alpha1ApiFp(this.configuration).patchLocalThumbnail(requestParameters.name, requestParameters.jsonPatchInner, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update LocalThumbnail
     * @param {LocalThumbnailV1alpha1ApiUpdateLocalThumbnailRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LocalThumbnailV1alpha1Api
     */
    public updateLocalThumbnail(requestParameters: LocalThumbnailV1alpha1ApiUpdateLocalThumbnailRequest, options?: RawAxiosRequestConfig) {
        return LocalThumbnailV1alpha1ApiFp(this.configuration).updateLocalThumbnail(requestParameters.name, requestParameters.localThumbnail, options).then((request) => request(this.axios, this.basePath));
    }
}

