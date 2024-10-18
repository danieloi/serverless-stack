/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "MyApp": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "MyConfig": {
      "database": string
      "host": string
      "namespace": string
      "password": string
      "port": number
      "type": "sst.sst.Linkable"
      "username": string
    }
    "MyService": {
      "service": string
      "type": "sst.aws.Service"
    }
    "MyVpc": {
      "type": "sst.aws.Vpc"
    }
  }
}
