/**
 * WorkTimeTracker.Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserPosition } from '../models/UserPosition';
import { UserStatus } from '../models/UserStatus';
import { HttpFile } from '../http/http';

export class UserMinimalDto {
    'id': string;
    'email': string;
    'fullName': string;
    'phoneNumber'?: string | null;
    'image'?: string | null;
    'userPosition': UserPosition;
    'userStatus': UserStatus;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "fullName",
            "baseName": "fullName",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phoneNumber",
            "type": "string",
            "format": ""
        },
        {
            "name": "image",
            "baseName": "image",
            "type": "string",
            "format": ""
        },
        {
            "name": "userPosition",
            "baseName": "userPosition",
            "type": "UserPosition",
            "format": ""
        },
        {
            "name": "userStatus",
            "baseName": "userStatus",
            "type": "UserStatus",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserMinimalDto.attributeTypeMap;
    }

    public constructor() {
    }
}


