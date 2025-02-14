/**
 * Timesheet.Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class LoginRequest {
    'email': string | null;
    'password': string | null;
    'twoFactorCode'?: string | null;
    'twoFactorRecoveryCode'?: string | null;
    'rememberMe'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": ""
        },
        {
            "name": "twoFactorCode",
            "baseName": "twoFactorCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "twoFactorRecoveryCode",
            "baseName": "twoFactorRecoveryCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "rememberMe",
            "baseName": "rememberMe",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LoginRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
