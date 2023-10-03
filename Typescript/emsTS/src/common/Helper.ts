import { API_VERSION } from "../common/env";

export class Helpers {
  static successResponse(statusCode: number,responseBody: any,message: string = ""): Object {
    let response: any = {
      statusCode: statusCode,
      body: {
        success: true,
        statusCode,
        payload: {
          message,
          data: responseBody,
        },
      },
    };
    if (responseBody && Object.keys(responseBody).length == 0) {
      response = {
        statusCode: statusCode,
        body: {
          success: true,
          statusCode,
          message,
          payload: {},
        },
      };
    }

    if (responseBody.api && responseBody.api === "license") {
      response.body.payload.role = responseBody.role;
    } else if (responseBody.api && responseBody.api === "userlogin") {
      response.body.error = {};
    }
    response.body = JSON.stringify(response.body);
    return response;
  }

  static errorResponse(statusCode: number,error: object,message: string = ""): Object {
    return {
      statusCode,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      },
      body: JSON.stringify({
        success: false,
        statusCode,
        message,
        error,
        payload: {},
      }),
    };
  }

  static generateString(length: number): string {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static validation(schema: any,requestObject: object | Array<object>): Array<object> {
    const { error } = schema.validate(requestObject);
    let errors: Array<object> = [];
    if (error && error?.details) {
      for (let errorObject of error.details) {
        const { path, type, context, ...error } = errorObject;
        errors.push(error);
      }
    }
    return errors;
  }

  static initiateRequest(event: any): object {
    const requestObject: object = event.body ? JSON.parse(event.body) : {};
    const params = event.pathParameters ? event.pathParameters : {};
    const headers: object = event.headers ? event.headers : {};
    const httpMethod: object = event.httpMethod ? event.httpMethod : 'GET';
    const path = event.path
      ? event.path.replace(`/api/${API_VERSION}/`, "")
      : "";
    const triggerSource = event.triggerSource ? event.triggerSource : "";
    return {
      requestObject,
      params,
      headers,
      path,
      triggerSource,
      httpMethod
    };
  }

  static getAutherizationToken(headers: any): string {
    return !headers["Authorization"]
      ? ""
      : headers["Authorization"].split(" ")[0] === "Bearer"
      ? headers["Authorization"].split(" ")[1]
      : headers["Authorization"];
  }

}