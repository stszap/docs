---
title: REST API
id: api
---

> You are viewing the REST API documentation. This documentation is auto-generated
from a swagger specification which itself is generated from annotations in the source files of the project. This
transformation pipeline is far from perfect but the best we have so far. If you find issues in the respective
documentation, please do not edit the markdown files directly (as they are generated) but raise an issue
on the project's GitHub instead. This documentation will improve over time with your help! If you have ideas
how to improve this part of the documentation, feel free to share them in a
[GitHub issue](https://github.com/ory/docs/issues/new) any time.

ORY Oathkeeper is a reverse proxy that checks the HTTP Authorization for validity against a set of rules. This service uses Hydra to validate access tokens and policies.

Email: <a href="mailto:hi@ory.am">ORY</a> Web: <a href="https://www.ory.am">ORY</a> 

<h1 id="ory-oathkeeper-default">Default</h1>

## Returns well known keys

<a id="opIdgetWellKnown"></a>

`GET /.well-known/jwks.json`

This endpoint returns public keys for validating the ID tokens issued by ORY Oathkeeper.

### Responses

#### 200 response

```json
{
  "keys": [
    {
      "alg": "string",
      "crv": "string",
      "d": "string",
      "dp": "string",
      "dq": "string",
      "e": "string",
      "k": "string",
      "kid": "string",
      "kty": "string",
      "n": "string",
      "p": "string",
      "q": "string",
      "qi": "string",
      "use": "string",
      "x": "string",
      "x5c": [
        "string"
      ],
      "y": "string"
    }
  ]
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|jsonWebKeySet|[jsonWebKeySet](#schemajsonwebkeyset)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|

<h3 id="returns-well-known-keys-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ory-oathkeeper-health">health</h1>

## Check the Alive Status

<a id="opIdisInstanceAlive"></a>

`GET /health/alive`

This endpoint returns a 200 status code when the HTTP server is up running.
This status does currently not include checks whether the database connection is working.
This endpoint does not require the `X-Forwarded-Proto` header when TLS termination is set.

Be aware that if you are running multiple nodes of ORY Oathkeeper, the health status will never refer to the cluster state, only to a single instance.

### Responses

#### 200 response

```json
{
  "status": "string"
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|healthStatus|[healthStatus](#schemahealthstatus)|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="check-the-alive-status-responseschema">Response Schema</h3>

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Check the Readiness Status

<a id="opIdisInstanceReady"></a>

`GET /health/ready`

This endpoint returns a 200 status code when the HTTP server is up running and the environment dependencies (e.g.
the database) are responsive as well.

This status does currently not include checks whether the database connection is working.
This endpoint does not require the `X-Forwarded-Proto` header when TLS termination is set.

Be aware that if you are running multiple nodes of ORY Oathkeeper, the health status will never refer to the cluster state, only to a single instance.

### Responses

#### 200 response

```json
{
  "status": "string"
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|healthStatus|[healthStatus](#schemahealthstatus)|
|503|[Service Unavailable](https://tools.ietf.org/html/rfc7231#section-6.6.4)|healthNotReadyStatus|[healthNotReadyStatus](#schemahealthnotreadystatus)|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ory-oathkeeper-judge">judge</h1>

## Judge if a request should be allowed or not

<a id="opIdjudge"></a>

`GET /judge`

This endpoint mirrors the proxy capability of ORY Oathkeeper's proxy functionality but instead of forwarding the
request to the upstream server, returns 200 (request should be allowed), 401 (unauthorized), or 403 (forbidden)
status codes. This endpoint can be used to integrate with other API Proxies like Ambassador, Kong, Envoy, and many more.

### Responses

#### 401 response

```json
{
  "code": 0,
  "details": [
    {
      "property1": {},
      "property2": {}
    }
  ],
  "message": "string",
  "reason": "string",
  "request": "string",
  "status": "string"
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|An empty response|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="judge-if-a-request-should-be-allowed-or-not-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ory-oathkeeper-rule">rule</h1>

## List all rules

<a id="opIdlistRules"></a>

`GET /rules`

This method returns an array of all rules that are stored in the backend. This is useful if you want to get a full
view of what rules you have currently in place.

<h3 id="list-all-rules-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|limit|query|integer(int64)|false|The maximum amount of rules returned.|
|offset|query|integer(int64)|false|The offset from where to start looking.|

### Responses

#### 200 response

```json
[
  {
    "authenticators": [
      {
        "config": "string",
        "handler": "string"
      }
    ],
    "authorizer": {
      "config": "string",
      "handler": "string"
    },
    "credentials_issuer": {
      "config": "string",
      "handler": "string"
    },
    "description": "string",
    "id": "string",
    "match": {
      "methods": [
        "string"
      ],
      "url": "string"
    },
    "upstream": {
      "preserve_host": true,
      "strip_path": "string",
      "url": "string"
    }
  }
]
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of rules|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="list-all-rules-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[rule](#schemarule)]|false|none|none|
|» swaggerRule is a single rule that will get checked on every HTTP request.|[rule](#schemarule)|false|none|none|
|»» authenticators|[[ruleHandler](#schemarulehandler)]|false|none|Authenticators is a list of authentication handlers that will try and authenticate the provided credentials. Authenticators are checked iteratively from index 0 to n and if the first authenticator to return a positive result will be the one used.  If you want the rule to first check a specific authenticator  before "falling back" to others, have that authenticator as the first item in the array.|
|»»» config|string|false|none|Config contains the configuration for the handler. Please read the user guide for a complete list of each handler's available settings.|
|»»» handler|string|false|none|Handler identifies the implementation which will be used to handle this specific request. Please read the user guide for a complete list of available handlers.|
|»» authorizer|[ruleHandler](#schemarulehandler)|false|none|none|
|»» credentials_issuer|[ruleHandler](#schemarulehandler)|false|none|none|
|»» description|string|false|none|Description is a human readable description of this rule.|
|»» id|string|false|none|ID is the unique id of the rule. It can be at most 190 characters long, but the layout of the ID is up to you. You will need this ID later on to update or delete the rule.|
|»» match|[ruleMatch](#schemarulematch)|false|none|none|
|»»» methods|[string]|false|none|An array of HTTP methods (e.g. GET, POST, PUT, DELETE, ...). When ORY Oathkeeper searches for rules to decide what to do with an incoming request to the proxy server, it compares the HTTP method of the incoming request with the HTTP methods of each rules. If a match is found, the rule is considered a partial match. If the matchesUrl field is satisfied as well, the rule is considered a full match.|
|»»» url|string|false|none|This field represents the URL pattern this rule matches. When ORY Oathkeeper searches for rules to decide what to do with an incoming request to the proxy server, it compares the full request URL (e.g. https://mydomain.com/api/resource) without query parameters of the incoming request with this field. If a match is found, the rule is considered a partial match. If the matchesMethods field is satisfied as well, the rule is considered a full match.  You can use regular expressions in this field to match more than one url. Regular expressions are encapsulated in brackets < and >. The following example matches all paths of the domain `mydomain.com`: `https://mydomain.com/<.*>`.|
|»» upstream|[Upstream](#schemaupstream)|false|none|none|
|»»» preserve_host|boolean|false|none|PreserveHost, if false (the default), tells ORY Oathkeeper to set the upstream request's Host header to the hostname of the API's upstream's URL. Setting this flag to true instructs ORY Oathkeeper not to do so.|
|»»» strip_path|string|false|none|StripPath if set, replaces the provided path prefix when forwarding the requested URL to the upstream URL.|
|»»» url|string|false|none|URL is the URL the request will be proxied to.|

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Create a rule

<a id="opIdcreateRule"></a>

`POST /rules`

This method allows creation of rules. If a rule id exists, you will receive an error.

### Request body

```json
{
  "authenticators": [
    {
      "config": "string",
      "handler": "string"
    }
  ],
  "authorizer": {
    "config": "string",
    "handler": "string"
  },
  "credentials_issuer": {
    "config": "string",
    "handler": "string"
  },
  "description": "string",
  "id": "string",
  "match": {
    "methods": [
      "string"
    ],
    "url": "string"
  },
  "upstream": {
    "preserve_host": true,
    "strip_path": "string",
    "url": "string"
  }
}
```

<h3 id="create-a-rule-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[rule](#schemarule)|false|none|

### Responses

#### 201 response

```json
{
  "authenticators": [
    {
      "config": "string",
      "handler": "string"
    }
  ],
  "authorizer": {
    "config": "string",
    "handler": "string"
  },
  "credentials_issuer": {
    "config": "string",
    "handler": "string"
  },
  "description": "string",
  "id": "string",
  "match": {
    "methods": [
      "string"
    ],
    "url": "string"
  },
  "upstream": {
    "preserve_host": true,
    "strip_path": "string",
    "url": "string"
  }
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|A rule|[rule](#schemarule)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="create-a-rule-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Retrieve a rule

<a id="opIdgetRule"></a>

`GET /rules/{id}`

Use this method to retrieve a rule from the storage. If it does not exist you will receive a 404 error.

<h3 id="retrieve-a-rule-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

### Responses

#### 200 response

```json
{
  "authenticators": [
    {
      "config": "string",
      "handler": "string"
    }
  ],
  "authorizer": {
    "config": "string",
    "handler": "string"
  },
  "credentials_issuer": {
    "config": "string",
    "handler": "string"
  },
  "description": "string",
  "id": "string",
  "match": {
    "methods": [
      "string"
    ],
    "url": "string"
  },
  "upstream": {
    "preserve_host": true,
    "strip_path": "string",
    "url": "string"
  }
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A rule|[rule](#schemarule)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="retrieve-a-rule-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Update a rule

<a id="opIdupdateRule"></a>

`PUT /rules/{id}`

Use this method to update a rule. Keep in mind that you need to send the full rule payload as this endpoint does
not support patching.

### Request body

```json
{
  "authenticators": [
    {
      "config": "string",
      "handler": "string"
    }
  ],
  "authorizer": {
    "config": "string",
    "handler": "string"
  },
  "credentials_issuer": {
    "config": "string",
    "handler": "string"
  },
  "description": "string",
  "id": "string",
  "match": {
    "methods": [
      "string"
    ],
    "url": "string"
  },
  "upstream": {
    "preserve_host": true,
    "strip_path": "string",
    "url": "string"
  }
}
```

<h3 id="update-a-rule-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[rule](#schemarule)|false|none|

### Responses

#### 200 response

```json
{
  "authenticators": [
    {
      "config": "string",
      "handler": "string"
    }
  ],
  "authorizer": {
    "config": "string",
    "handler": "string"
  },
  "credentials_issuer": {
    "config": "string",
    "handler": "string"
  },
  "description": "string",
  "id": "string",
  "match": {
    "methods": [
      "string"
    ],
    "url": "string"
  },
  "upstream": {
    "preserve_host": true,
    "strip_path": "string",
    "url": "string"
  }
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A rule|[rule](#schemarule)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="update-a-rule-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

## Delete a rule

<a id="opIddeleteRule"></a>

`DELETE /rules/{id}`

Use this endpoint to delete a rule.

<h3 id="delete-a-rule-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

### Responses

#### 401 response

```json
{
  "code": 0,
  "details": [
    {
      "property1": {},
      "property2": {}
    }
  ],
  "message": "string",
  "reason": "string",
  "request": "string",
  "status": "string"
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="delete-a-rule-responseschema">Response Schema</h3>

Status Code **401**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **403**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **404**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

Status Code **500**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|» code|integer(int64)|false|none|none|
|» details|[object]|false|none|none|
|»» **additionalProperties**|object|false|none|none|
|» message|string|false|none|none|
|» reason|string|false|none|none|
|» request|string|false|none|none|
|» status|string|false|none|none|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="ory-oathkeeper-version">version</h1>

## Get the version of Oathkeeper

<a id="opIdgetVersion"></a>

`GET /version`

This endpoint returns the version as `{ "version": "VERSION" }`. The version is only correct with the prebuilt binary and not custom builds.

### Responses

#### 200 response

```json
{
  "version": "string"
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|version|[version](#schemaversion)|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

## Upstream
<a id="schemaupstream"></a>

```json
{
  "preserve_host": true,
  "strip_path": "string",
  "url": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|preserve_host|boolean|false|none|PreserveHost, if false (the default), tells ORY Oathkeeper to set the upstream request's Host header to the hostname of the API's upstream's URL. Setting this flag to true instructs ORY Oathkeeper not to do so.|
|strip_path|string|false|none|StripPath if set, replaces the provided path prefix when forwarding the requested URL to the upstream URL.|
|url|string|false|none|URL is the URL the request will be proxied to.|

## healthNotReadyStatus
<a id="schemahealthnotreadystatus"></a>

```json
{
  "errors": {
    "property1": "string",
    "property2": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|errors|object|false|none|Errors contains a list of errors that caused the not ready status.|
|» **additionalProperties**|string|false|none|none|

## healthStatus
<a id="schemahealthstatus"></a>

```json
{
  "status": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|status|string|false|none|Status always contains "ok".|

## jsonWebKey
<a id="schemajsonwebkey"></a>

```json
{
  "alg": "string",
  "crv": "string",
  "d": "string",
  "dp": "string",
  "dq": "string",
  "e": "string",
  "k": "string",
  "kid": "string",
  "kty": "string",
  "n": "string",
  "p": "string",
  "q": "string",
  "qi": "string",
  "use": "string",
  "x": "string",
  "x5c": [
    "string"
  ],
  "y": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|alg|string|false|none|The "alg" (algorithm) parameter identifies the algorithm intended for use with the key.  The values used should either be registered in the IANA "JSON Web Signature and Encryption Algorithms" registry established by [JWA] or be a value that contains a Collision- Resistant Name.|
|crv|string|false|none|none|
|d|string|false|none|none|
|dp|string|false|none|none|
|dq|string|false|none|none|
|e|string|false|none|none|
|k|string|false|none|none|
|kid|string|false|none|The "kid" (key ID) parameter is used to match a specific key.  This is used, for instance, to choose among a set of keys within a JWK Set during key rollover.  The structure of the "kid" value is unspecified.  When "kid" values are used within a JWK Set, different keys within the JWK Set SHOULD use distinct "kid" values.  (One example in which different keys might use the same "kid" value is if they have different "kty" (key type) values but are considered to be equivalent alternatives by the application using them.)  The "kid" value is a case-sensitive string.|
|kty|string|false|none|The "kty" (key type) parameter identifies the cryptographic algorithm family used with the key, such as "RSA" or "EC". "kty" values should either be registered in the IANA "JSON Web Key Types" registry established by [JWA] or be a value that contains a Collision- Resistant Name.  The "kty" value is a case-sensitive string.|
|n|string|false|none|none|
|p|string|false|none|none|
|q|string|false|none|none|
|qi|string|false|none|none|
|use|string|false|none|The "use" (public key use) parameter identifies the intended use of the public key. The "use" parameter is employed to indicate whether a public key is used for encrypting data or verifying the signature on data. Values are commonly "sig" (signature) or "enc" (encryption).|
|x|string|false|none|none|
|x5c|[string]|false|none|The "x5c" (X.509 certificate chain) parameter contains a chain of one or more PKIX certificates [RFC5280].  The certificate chain is represented as a JSON array of certificate value strings.  Each string in the array is a base64-encoded (Section 4 of [RFC4648] -- not base64url-encoded) DER [ITU.X690.1994] PKIX certificate value. The PKIX certificate containing the key value MUST be the first certificate.|
|y|string|false|none|none|

## jsonWebKeySet
<a id="schemajsonwebkeyset"></a>

```json
{
  "keys": [
    {
      "alg": "string",
      "crv": "string",
      "d": "string",
      "dp": "string",
      "dq": "string",
      "e": "string",
      "k": "string",
      "kid": "string",
      "kty": "string",
      "n": "string",
      "p": "string",
      "q": "string",
      "qi": "string",
      "use": "string",
      "x": "string",
      "x5c": [
        "string"
      ],
      "y": "string"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|keys|[[jsonWebKey](#schemajsonwebkey)]|false|none|The value of the "keys" parameter is an array of JWK values.  By default, the order of the JWK values within the array does not imply an order of preference among them, although applications of JWK Sets can choose to assign a meaning to the order for their purposes, if desired.|

## rule
<a id="schemarule"></a>

```json
{
  "authenticators": [
    {
      "config": "string",
      "handler": "string"
    }
  ],
  "authorizer": {
    "config": "string",
    "handler": "string"
  },
  "credentials_issuer": {
    "config": "string",
    "handler": "string"
  },
  "description": "string",
  "id": "string",
  "match": {
    "methods": [
      "string"
    ],
    "url": "string"
  },
  "upstream": {
    "preserve_host": true,
    "strip_path": "string",
    "url": "string"
  }
}

```

*swaggerRule is a single rule that will get checked on every HTTP request.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|authenticators|[[ruleHandler](#schemarulehandler)]|false|none|Authenticators is a list of authentication handlers that will try and authenticate the provided credentials. Authenticators are checked iteratively from index 0 to n and if the first authenticator to return a positive result will be the one used.  If you want the rule to first check a specific authenticator  before "falling back" to others, have that authenticator as the first item in the array.|
|authorizer|[ruleHandler](#schemarulehandler)|false|none|none|
|credentials_issuer|[ruleHandler](#schemarulehandler)|false|none|none|
|description|string|false|none|Description is a human readable description of this rule.|
|id|string|false|none|ID is the unique id of the rule. It can be at most 190 characters long, but the layout of the ID is up to you. You will need this ID later on to update or delete the rule.|
|match|[ruleMatch](#schemarulematch)|false|none|none|
|upstream|[Upstream](#schemaupstream)|false|none|none|

## ruleHandler
<a id="schemarulehandler"></a>

```json
{
  "config": "string",
  "handler": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|config|string|false|none|Config contains the configuration for the handler. Please read the user guide for a complete list of each handler's available settings.|
|handler|string|false|none|Handler identifies the implementation which will be used to handle this specific request. Please read the user guide for a complete list of available handlers.|

## ruleMatch
<a id="schemarulematch"></a>

```json
{
  "methods": [
    "string"
  ],
  "url": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|methods|[string]|false|none|An array of HTTP methods (e.g. GET, POST, PUT, DELETE, ...). When ORY Oathkeeper searches for rules to decide what to do with an incoming request to the proxy server, it compares the HTTP method of the incoming request with the HTTP methods of each rules. If a match is found, the rule is considered a partial match. If the matchesUrl field is satisfied as well, the rule is considered a full match.|
|url|string|false|none|This field represents the URL pattern this rule matches. When ORY Oathkeeper searches for rules to decide what to do with an incoming request to the proxy server, it compares the full request URL (e.g. https://mydomain.com/api/resource) without query parameters of the incoming request with this field. If a match is found, the rule is considered a partial match. If the matchesMethods field is satisfied as well, the rule is considered a full match.  You can use regular expressions in this field to match more than one url. Regular expressions are encapsulated in brackets < and >. The following example matches all paths of the domain `mydomain.com`: `https://mydomain.com/<.*>`.|

## swaggerCreateRuleParameters
<a id="schemaswaggercreateruleparameters"></a>

```json
{
  "Body": {
    "authenticators": [
      {
        "config": "string",
        "handler": "string"
      }
    ],
    "authorizer": {
      "config": "string",
      "handler": "string"
    },
    "credentials_issuer": {
      "config": "string",
      "handler": "string"
    },
    "description": "string",
    "id": "string",
    "match": {
      "methods": [
        "string"
      ],
      "url": "string"
    },
    "upstream": {
      "preserve_host": true,
      "strip_path": "string",
      "url": "string"
    }
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|[rule](#schemarule)|false|none|none|

## swaggerGetRuleParameters
<a id="schemaswaggergetruleparameters"></a>

```json
{
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|true|none|in: path|

## swaggerListRulesParameters
<a id="schemaswaggerlistrulesparameters"></a>

```json
{
  "limit": 0,
  "offset": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer(int64)|false|none|The maximum amount of rules returned. in: query|
|offset|integer(int64)|false|none|The offset from where to start looking. in: query|

## swaggerRuleResponse
<a id="schemaswaggerruleresponse"></a>

```json
{
  "Body": {
    "authenticators": [
      {
        "config": "string",
        "handler": "string"
      }
    ],
    "authorizer": {
      "config": "string",
      "handler": "string"
    },
    "credentials_issuer": {
      "config": "string",
      "handler": "string"
    },
    "description": "string",
    "id": "string",
    "match": {
      "methods": [
        "string"
      ],
      "url": "string"
    },
    "upstream": {
      "preserve_host": true,
      "strip_path": "string",
      "url": "string"
    }
  }
}

```

*A rule*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|[rule](#schemarule)|false|none|none|

## swaggerRulesResponse
<a id="schemaswaggerrulesresponse"></a>

```json
{
  "Body": [
    {
      "authenticators": [
        {
          "config": "string",
          "handler": "string"
        }
      ],
      "authorizer": {
        "config": "string",
        "handler": "string"
      },
      "credentials_issuer": {
        "config": "string",
        "handler": "string"
      },
      "description": "string",
      "id": "string",
      "match": {
        "methods": [
          "string"
        ],
        "url": "string"
      },
      "upstream": {
        "preserve_host": true,
        "strip_path": "string",
        "url": "string"
      }
    }
  ]
}

```

*A list of rules*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|[[rule](#schemarule)]|false|none|in: body type: array|

## swaggerUpdateRuleParameters
<a id="schemaswaggerupdateruleparameters"></a>

```json
{
  "Body": {
    "authenticators": [
      {
        "config": "string",
        "handler": "string"
      }
    ],
    "authorizer": {
      "config": "string",
      "handler": "string"
    },
    "credentials_issuer": {
      "config": "string",
      "handler": "string"
    },
    "description": "string",
    "id": "string",
    "match": {
      "methods": [
        "string"
      ],
      "url": "string"
    },
    "upstream": {
      "preserve_host": true,
      "strip_path": "string",
      "url": "string"
    }
  },
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|[rule](#schemarule)|false|none|none|
|id|string|true|none|in: path|

## version
<a id="schemaversion"></a>

```json
{
  "version": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|version|string|false|none|none|

