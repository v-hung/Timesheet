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

export class RefreshTokenResponse {
    'token': string;
    'refreshToken': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "string",
            "format": ""
        },
        {
            "name": "refreshToken",
            "baseName": "refreshToken",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RefreshTokenResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
