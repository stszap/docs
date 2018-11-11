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

Package main ORY Keto

Email: <a href="mailto:hi@ory.am">ORY</a> Web: <a href="https://www.ory.sh">ORY</a> 
License: <a href="https://github.com/ory/keto/blob/master/LICENSE">Apache 2.0</a>

<h1 id="api-health">health</h1>

## Check the Alive Status

<a id="opIdisInstanceAlive"></a>

`GET /health/alive`

This endpoint returns a 200 status code when the HTTP server is up running.
This status does currently not include checks whether the database connection is working.
This endpoint does not require the `X-Forwarded-Proto` header when TLS termination is set.

Be aware that if you are running multiple nodes of ORY Keto, the health status will never refer to the cluster state, only to a single instance.

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

Be aware that if you are running multiple nodes of ORY Keto, the health status will never refer to the cluster state, only to a single instance.

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

<h1 id="api-policy">policy</h1>

## listPolicies

<a id="opIdlistPolicies"></a>

`GET /policies`

List Access Control Policies

<h3 id="listpolicies-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|offset|query|integer(int64)|false|The offset from where to start looking.|
|limit|query|integer(int64)|false|The maximum amount of policies returned.|

### Responses

#### 200 response

```json
[
  {
    "actions": [
      "string"
    ],
    "conditions": {
      "property1": {
        "options": {
          "property1": {},
          "property2": {}
        },
        "type": "string"
      },
      "property2": {
        "options": {
          "property1": {},
          "property2": {}
        },
        "type": "string"
      }
    },
    "description": "string",
    "effect": "string",
    "id": "string",
    "resources": [
      "string"
    ],
    "subjects": [
      "string"
    ]
  }
]
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A policy|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="listpolicies-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[policy](#schemapolicy)]|false|none|none|
|» actions|[string]|false|none|Actions impacted by the policy.|
|» conditions|object|false|none|Conditions under which the policy is active.|
|»» **additionalProperties**|object|false|none|none|
|»»» options|object|false|none|none|
|»»»» **additionalProperties**|object|false|none|none|
|»»» type|string|false|none|none|
|»» description|string|false|none|Description of the policy.|
|»» effect|string|false|none|Effect of the policy|
|»» id|string|false|none|ID of the policy.|
|»» resources|[string]|false|none|Resources impacted by the policy.|
|»» subjects|[string]|false|none|Subjects impacted by the policy.|

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

## createPolicy

<a id="opIdcreatePolicy"></a>

`POST /policies`

Create an Access Control Policy

### Request body

```json
{
  "actions": [
    "string"
  ],
  "conditions": {
    "property1": {
      "options": {
        "property1": {},
        "property2": {}
      },
      "type": "string"
    },
    "property2": {
      "options": {
        "property1": {},
        "property2": {}
      },
      "type": "string"
    }
  },
  "description": "string",
  "effect": "string",
  "id": "string",
  "resources": [
    "string"
  ],
  "subjects": [
    "string"
  ]
}
```

<h3 id="createpolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[policy](#schemapolicy)|false|none|

### Responses

#### 201 response

```json
{
  "actions": [
    "string"
  ],
  "conditions": {
    "property1": {
      "options": {
        "property1": {},
        "property2": {}
      },
      "type": "string"
    },
    "property2": {
      "options": {
        "property1": {},
        "property2": {}
      },
      "type": "string"
    }
  },
  "description": "string",
  "effect": "string",
  "id": "string",
  "resources": [
    "string"
  ],
  "subjects": [
    "string"
  ]
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|policy|[policy](#schemapolicy)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="createpolicy-responseschema">Response Schema</h3>

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

## getPolicy

<a id="opIdgetPolicy"></a>

`GET /policies/{id}`

Get an Access Control Policy

<h3 id="getpolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the policy.|

### Responses

#### 200 response

```json
{
  "actions": [
    "string"
  ],
  "conditions": {
    "property1": {
      "options": {
        "property1": {},
        "property2": {}
      },
      "type": "string"
    },
    "property2": {
      "options": {
        "property1": {},
        "property2": {}
      },
      "type": "string"
    }
  },
  "description": "string",
  "effect": "string",
  "id": "string",
  "resources": [
    "string"
  ],
  "subjects": [
    "string"
  ]
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|policy|[policy](#schemapolicy)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="getpolicy-responseschema">Response Schema</h3>

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

## updatePolicy

<a id="opIdupdatePolicy"></a>

`PUT /policies/{id}`

Update an Access Control Policy

### Request body

```json
{
  "actions": [
    "string"
  ],
  "conditions": {
    "property1": {
      "options": {
        "property1": {},
        "property2": {}
      },
      "type": "string"
    },
    "property2": {
      "options": {
        "property1": {},
        "property2": {}
      },
      "type": "string"
    }
  },
  "description": "string",
  "effect": "string",
  "id": "string",
  "resources": [
    "string"
  ],
  "subjects": [
    "string"
  ]
}
```

<h3 id="updatepolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the policy.|
|body|body|[policy](#schemapolicy)|false|none|

### Responses

#### 200 response

```json
{
  "actions": [
    "string"
  ],
  "conditions": {
    "property1": {
      "options": {
        "property1": {},
        "property2": {}
      },
      "type": "string"
    },
    "property2": {
      "options": {
        "property1": {},
        "property2": {}
      },
      "type": "string"
    }
  },
  "description": "string",
  "effect": "string",
  "id": "string",
  "resources": [
    "string"
  ],
  "subjects": [
    "string"
  ]
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|policy|[policy](#schemapolicy)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="updatepolicy-responseschema">Response Schema</h3>

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

## deletePolicy

<a id="opIddeletePolicy"></a>

`DELETE /policies/{id}`

Delete an Access Control Policy

<h3 id="deletepolicy-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the policy.|

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
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="deletepolicy-responseschema">Response Schema</h3>

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

<h1 id="api-role">role</h1>

## List all roles

<a id="opIdlistRoles"></a>

`GET /roles`

A Role represents a group of users that share the same role and thus permissions. A role could be an administrator, a moderator, a regular
user or some other sort of role.

This endpoint allows you to retrieve all roles that are stored in the system.

<h3 id="list-all-roles-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|member|query|string|false|The id of the member to look up.|
|limit|query|integer(int64)|false|The maximum amount of policies returned.|
|offset|query|integer(int64)|false|The offset from where to start looking.|

### Responses

#### 200 response

```json
[
  {
    "id": "string",
    "members": [
      "string"
    ]
  }
]
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A list of roles the member is belonging to|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="list-all-roles-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[role](#schemarole)]|false|none|[Role represents a group of users that share the same role. A role could be an administrator, a moderator, a regular user or some other sort of role.]|
|» id|string|false|none|ID is the role's unique id.|
|» members|[string]|false|none|Members is who belongs to the role.|

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

## Create a role

<a id="opIdcreateRole"></a>

`POST /roles`

A Role represents a group of users that share the same role and thus permissions. A role could be an administrator, a moderator, a regular
user or some other sort of role.

This endpoint allows you to create a new role. You may define members as well but you don't have to.

### Request body

```json
{
  "id": "string",
  "members": [
    "string"
  ]
}
```

<h3 id="create-a-role-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[role](#schemarole)|false|none|

### Responses

#### 201 response

```json
{
  "id": "string",
  "members": [
    "string"
  ]
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|role|[role](#schemarole)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="create-a-role-responseschema">Response Schema</h3>

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

## Get a role by its ID

<a id="opIddeleteRole"></a>

`DELETE /roles/{id}`

A Role represents a group of users that share the same role and thus permissions. A role could be an administrator, a moderator, a regular
user or some other sort of role.

This endpoint allows you to delete an existing role. You have to know the role's ID.

<h3 id="get-a-role-by-its-id-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the role to look up.|

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
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="get-a-role-by-its-id-responseschema">Response Schema</h3>

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

## A Role represents a group of users that share the same role and thus permissions. A role could be an administrator, a moderator, a regular
user or some other sort of role.

<a id="opIdsetRole"></a>

`PUT /roles/{id}`

This endpoint allows you to overwrite a role. You have to know the role's ID.

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

<h3 id="a-role-represents-a-group-of-users-that-share-the-same-role-and-thus-permissions.-a-role-could-be-an-administrator,-a-moderator,-a-regular
user-or-some-other-sort-of-role.-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|204|[No Content](https://tools.ietf.org/html/rfc7231#section-6.3.5)|An empty response|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="a-role-represents-a-group-of-users-that-share-the-same-role-and-thus-permissions.-a-role-could-be-an-administrator,-a-moderator,-a-regular
user-or-some-other-sort-of-role.-responseschema">Response Schema</h3>

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

## Add members to a role

<a id="opIdaddMembersToRole"></a>

`POST /roles/{id}/members`

A Role represents a group of users that share the same role and thus permissions. A role could be an administrator, a moderator, a regular
user or some other sort of role.

This endpoint allows you to add members (users, applications, ...) to a specific role. You have to know the role's ID.

### Request body

```json
{
  "members": [
    "string"
  ]
}
```

<h3 id="add-members-to-a-role-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the role to modify.|
|body|body|[roleMembers](#schemarolemembers)|false|none|

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
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="add-members-to-a-role-responseschema">Response Schema</h3>

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

## Remove members from a role

<a id="opIdremoveMembersFromRole"></a>

`DELETE /roles/{id}/members`

A Role represents a group of users that share the same role and thus permissions. A role could be an administrator, a moderator, a regular
user or some other sort of role.

This endpoint allows you to remove members (users, applications, ...) from a specific role. You have to know the role's ID.

### Request body

```json
{
  "members": [
    "string"
  ]
}
```

<h3 id="remove-members-from-a-role-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|The id of the role to modify.|
|body|body|[roleMembers](#schemarolemembers)|false|none|

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
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="remove-members-from-a-role-responseschema">Response Schema</h3>

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

<h1 id="api-version">version</h1>

## Get the version of Keto

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

<h1 id="api-warden">warden</h1>

## Check if an OAuth 2.0 access token is authorized to access a resource

<a id="opIdisOAuth2AccessTokenAuthorized"></a>

`POST /warden/oauth2/access-tokens/authorize`

Checks if a token is valid and if the token subject is allowed to perform an action on a resource.
This endpoint requires a token, a scope, a resource name, an action name and a context.

If a token is expired/invalid, has not been granted the requested scope or the subject is not allowed to
perform the action on the resource, this endpoint returns a 200 response with `{ "allowed": false }`.

This endpoint passes all data from the upstream OAuth 2.0 token introspection endpoint. If you use ORY Hydra as an
upstream OAuth 2.0 provider, data set through the `accessTokenExtra` field in the consent flow will be included in this
response as well.

### Request body

```json
{
  "action": "string",
  "context": {
    "property1": {},
    "property2": {}
  },
  "resource": "string",
  "scope": [
    "string"
  ],
  "token": "string"
}
```

<h3 id="check-if-an-oauth-2.0-access-token-is-authorized-to-access-a-resource-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[wardenOAuth2AccessTokenAuthorizationRequest](#schemawardenoauth2accesstokenauthorizationrequest)|false|none|

### Responses

#### 200 response

```json
{
  "allowed": true,
  "aud": [
    "string"
  ],
  "client_id": "string",
  "exp": "2018-11-11T11:05:42Z",
  "iat": "2018-11-11T11:05:42Z",
  "iss": "string",
  "nbf": "2018-11-11T11:05:42Z",
  "scope": "string",
  "session": {
    "property1": {},
    "property2": {}
  },
  "sub": "string",
  "username": "string"
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|wardenOAuth2AccessTokenAuthorizationResponse|[wardenOAuth2AccessTokenAuthorizationResponse](#schemawardenoauth2accesstokenauthorizationresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="check-if-an-oauth-2.0-access-token-is-authorized-to-access-a-resource-responseschema">Response Schema</h3>

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

## Check if an OAuth 2.0 Client is authorized to access a resource

<a id="opIdisOAuth2ClientAuthorized"></a>

`POST /warden/oauth2/clients/authorize`

Checks if an OAuth 2.0 Client provided the correct access credentials and and if the client is allowed to perform
an action on a resource. This endpoint requires a client id, a client secret, a scope, a resource name, an action name and a context.

### Request body

```json
{
  "action": "string",
  "client_id": "string",
  "client_secret": "string",
  "context": {
    "property1": {},
    "property2": {}
  },
  "resource": "string",
  "scope": [
    "string"
  ]
}
```

<h3 id="check-if-an-oauth-2.0-client-is-authorized-to-access-a-resource-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[wardenOAuth2ClientAuthorizationRequest](#schemawardenoauth2clientauthorizationrequest)|false|none|

### Responses

#### 200 response

```json
{
  "allowed": true,
  "sub": "string"
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|wardenOAuth2ClientAuthorizationResponse|[wardenOAuth2ClientAuthorizationResponse](#schemawardenoauth2clientauthorizationresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="check-if-an-oauth-2.0-client-is-authorized-to-access-a-resource-responseschema">Response Schema</h3>

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

## Check if a subject is authorized to access a resource

<a id="opIdisSubjectAuthorized"></a>

`POST /warden/subjects/authorize`

Checks if a subject (e.g. user ID, API key, ...) is allowed to perform a certain action on a resource.

### Request body

```json
{
  "action": "string",
  "context": {
    "property1": {},
    "property2": {}
  },
  "resource": "string",
  "subject": "string"
}
```

<h3 id="check-if-a-subject-is-authorized-to-access-a-resource-parameters">Parameters</h3>

|Parameter|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[WardenSubjectAuthorizationRequest](#schemawardensubjectauthorizationrequest)|false|none|

### Responses

#### 200 response

```json
{
  "allowed": true,
  "sub": "string"
}
```

#### Summary

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|wardenSubjectAuthorizationResponse|[wardenSubjectAuthorizationResponse](#schemawardensubjectauthorizationresponse)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|The standard error format|Inline|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|The standard error format|Inline|
|500|[Internal Server Error](https://tools.ietf.org/html/rfc7231#section-6.6.1)|The standard error format|Inline|

<h3 id="check-if-a-subject-is-authorized-to-access-a-resource-responseschema">Response Schema</h3>

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

# Schemas

## AuthenticationOAuth2ClientCredentialsRequest
<a id="schemaauthenticationoauth2clientcredentialsrequest"></a>

```json
{
  "client_id": "string",
  "client_secret": "string",
  "scope": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|client_id|string|false|none|Token is the token to introspect.|
|client_secret|string|false|none|none|
|scope|[string]|false|none|Scope is an array of scopes that are required.|

## AuthenticationOAuth2IntrospectionRequest
<a id="schemaauthenticationoauth2introspectionrequest"></a>

```json
{
  "scope": [
    "string"
  ],
  "token": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|scope|[string]|false|none|Scope is an array of scopes that are required.|
|token|string|false|none|Token is the token to introspect.|

## Authenticator
<a id="schemaauthenticator"></a>

```json
{}

```

### Properties

*None*

## Firewall
<a id="schemafirewall"></a>

```json
{}

```

*Firewall offers various validation strategies for access tokens.*

### Properties

*None*

## Handler
<a id="schemahandler"></a>

```json
{
  "H": {},
  "Manager": {}
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|H|[Writer](#schemawriter)|false|none|Writer is a helper to write arbitrary data to a ResponseWriter|
|Manager|[Manager](#schemamanager)|false|none|none|

## IntrospectionResponse
<a id="schemaintrospectionresponse"></a>

```json
{
  "active": true,
  "aud": [
    "string"
  ],
  "client_id": "string",
  "exp": 0,
  "ext": {
    "property1": {},
    "property2": {}
  },
  "iat": 0,
  "iss": "string",
  "nbf": 0,
  "scope": "string",
  "sub": "string",
  "token_type": "string",
  "username": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|active|boolean|false|none|none|
|aud|[string]|false|none|none|
|client_id|string|false|none|none|
|exp|integer(int64)|false|none|none|
|ext|object|false|none|Session represents arbitrary session data.|
|» **additionalProperties**|object|false|none|none|
|iat|integer(int64)|false|none|none|
|iss|string|false|none|none|
|nbf|integer(int64)|false|none|none|
|scope|string|false|none|none|
|sub|string|false|none|Here, it's sub|
|token_type|string|false|none|none|
|username|string|false|none|none|

## Manager
<a id="schemamanager"></a>

```json
{}

```

### Properties

*None*

## OAuth2ClientCredentialsAuthentication
<a id="schemaoauth2clientcredentialsauthentication"></a>

```json
{}

```

### Properties

*None*

## OAuth2IntrospectionAuthentication
<a id="schemaoauth2introspectionauthentication"></a>

```json
{}

```

### Properties

*None*

## Session
<a id="schemasession"></a>

```json
{
  "GetSubject": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|GetSubject|string|false|none|none|

## WardenSubjectAuthorizationRequest
<a id="schemawardensubjectauthorizationrequest"></a>

```json
{
  "action": "string",
  "context": {
    "property1": {},
    "property2": {}
  },
  "resource": "string",
  "subject": "string"
}

```

*AccessRequest is the warden's request object.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action is the action that is requested on the resource.|
|context|object|false|none|Context is the request's environmental context.|
|» **additionalProperties**|object|false|none|none|
|resource|string|false|none|Resource is the resource that access is requested to.|
|subject|string|false|none|Subejct is the subject that is requesting access.|

## Writer
<a id="schemawriter"></a>

```json
{}

```

*Writer is a helper to write arbitrary data to a ResponseWriter*

### Properties

*None*

## authenticationDefaultSession
<a id="schemaauthenticationdefaultsession"></a>

```json
{
  "allowed": true,
  "sub": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|Allowed is true if the request is allowed and false otherwise.|
|sub|string|false|none|Subject is the identity that authorized issuing the token, for example a user or an OAuth2 app. This is usually a uuid but you can choose a urn or some other id too.|

## authenticationOAuth2ClientCredentialsSession
<a id="schemaauthenticationoauth2clientcredentialssession"></a>

```json
{
  "allowed": true,
  "sub": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|Allowed is true if the request is allowed and false otherwise.|
|sub|string|false|none|Subject is the identity that authorized issuing the token, for example a user or an OAuth2 app. This is usually a uuid but you can choose a urn or some other id too.|

## authenticationOAuth2Session
<a id="schemaauthenticationoauth2session"></a>

```json
{
  "allowed": true,
  "aud": [
    "string"
  ],
  "client_id": "string",
  "exp": "2018-11-11T11:05:42Z",
  "iat": "2018-11-11T11:05:42Z",
  "iss": "string",
  "nbf": "2018-11-11T11:05:42Z",
  "scope": "string",
  "session": {
    "property1": {},
    "property2": {}
  },
  "sub": "string",
  "username": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|Allowed is true if the request is allowed and false otherwise.|
|aud|[string]|false|none|none|
|client_id|string|false|none|ClientID is the id of the OAuth2 client that requested the token.|
|exp|string(date-time)|false|none|ExpiresAt is the expiry timestamp.|
|iat|string(date-time)|false|none|IssuedAt is the token creation time stamp.|
|iss|string|false|none|Issuer is the id of the issuer, typically an hydra instance.|
|nbf|string(date-time)|false|none|none|
|scope|string|false|none|GrantedScopes is a list of scopes that the subject authorized when asked for consent.|
|session|object|false|none|Session represents arbitrary session data.|
|» **additionalProperties**|object|false|none|none|
|sub|string|false|none|Subject is the identity that authorized issuing the token, for example a user or an OAuth2 app. This is usually a uuid but you can choose a urn or some other id too.|
|username|string|false|none|none|

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

## policy
<a id="schemapolicy"></a>

```json
{
  "actions": [
    "string"
  ],
  "conditions": {
    "property1": {
      "options": {
        "property1": {},
        "property2": {}
      },
      "type": "string"
    },
    "property2": {
      "options": {
        "property1": {},
        "property2": {}
      },
      "type": "string"
    }
  },
  "description": "string",
  "effect": "string",
  "id": "string",
  "resources": [
    "string"
  ],
  "subjects": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|actions|[string]|false|none|Actions impacted by the policy.|
|conditions|object|false|none|Conditions under which the policy is active.|
|» **additionalProperties**|object|false|none|none|
|»» options|object|false|none|none|
|»»» **additionalProperties**|object|false|none|none|
|»» type|string|false|none|none|
|» description|string|false|none|Description of the policy.|
|» effect|string|false|none|Effect of the policy|
|» id|string|false|none|ID of the policy.|
|» resources|[string]|false|none|Resources impacted by the policy.|
|» subjects|[string]|false|none|Subjects impacted by the policy.|

## role
<a id="schemarole"></a>

```json
{
  "id": "string",
  "members": [
    "string"
  ]
}

```

*Role represents a group of users that share the same role. A role could be an administrator, a moderator, a regular
user or some other sort of role.*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|ID is the role's unique id.|
|members|[string]|false|none|Members is who belongs to the role.|

## roleMembers
<a id="schemarolemembers"></a>

```json
{
  "members": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|members|[string]|false|none|none|

## swaggerCreatePolicyParameters
<a id="schemaswaggercreatepolicyparameters"></a>

```json
{
  "Body": {
    "actions": [
      "string"
    ],
    "conditions": {
      "property1": {
        "options": {
          "property1": {},
          "property2": {}
        },
        "type": "string"
      },
      "property2": {
        "options": {
          "property1": {},
          "property2": {}
        },
        "type": "string"
      }
    },
    "description": "string",
    "effect": "string",
    "id": "string",
    "resources": [
      "string"
    ],
    "subjects": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|[policy](#schemapolicy)|false|none|none|

## swaggerDoesWardenAllowAccessRequestParameters
<a id="schemaswaggerdoeswardenallowaccessrequestparameters"></a>

```json
{
  "Body": {
    "action": "string",
    "context": {
      "property1": {},
      "property2": {}
    },
    "resource": "string",
    "subject": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|[WardenSubjectAuthorizationRequest](#schemawardensubjectauthorizationrequest)|false|none|none|

## swaggerDoesWardenAllowClientRequestParameters
<a id="schemaswaggerdoeswardenallowclientrequestparameters"></a>

```json
{
  "Body": {
    "action": "string",
    "client_id": "string",
    "client_secret": "string",
    "context": {
      "property1": {},
      "property2": {}
    },
    "resource": "string",
    "scope": [
      "string"
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|[wardenOAuth2ClientAuthorizationRequest](#schemawardenoauth2clientauthorizationrequest)|false|none|none|

## swaggerDoesWardenAllowTokenAccessRequestParameters
<a id="schemaswaggerdoeswardenallowtokenaccessrequestparameters"></a>

```json
{
  "Body": {
    "action": "string",
    "context": {
      "property1": {},
      "property2": {}
    },
    "resource": "string",
    "scope": [
      "string"
    ],
    "token": "string"
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|[wardenOAuth2AccessTokenAuthorizationRequest](#schemawardenoauth2accesstokenauthorizationrequest)|false|none|none|

## swaggerGetPolicyParameters
<a id="schemaswaggergetpolicyparameters"></a>

```json
{
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|id|string|false|none|The id of the policy. in: path|

## swaggerListPolicyParameters
<a id="schemaswaggerlistpolicyparameters"></a>

```json
{
  "limit": 0,
  "offset": 0
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|limit|integer(int64)|false|none|The maximum amount of policies returned. in: query|
|offset|integer(int64)|false|none|The offset from where to start looking. in: query|

## swaggerListPolicyResponse
<a id="schemaswaggerlistpolicyresponse"></a>

```json
{
  "Body": [
    {
      "actions": [
        "string"
      ],
      "conditions": {
        "property1": {
          "options": {
            "property1": {},
            "property2": {}
          },
          "type": "string"
        },
        "property2": {
          "options": {
            "property1": {},
            "property2": {}
          },
          "type": "string"
        }
      },
      "description": "string",
      "effect": "string",
      "id": "string",
      "resources": [
        "string"
      ],
      "subjects": [
        "string"
      ]
    }
  ]
}

```

*A policy*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|[[policy](#schemapolicy)]|false|none|in: body type: array|

## swaggerUpdatePolicyParameters
<a id="schemaswaggerupdatepolicyparameters"></a>

```json
{
  "Body": {
    "actions": [
      "string"
    ],
    "conditions": {
      "property1": {
        "options": {
          "property1": {},
          "property2": {}
        },
        "type": "string"
      },
      "property2": {
        "options": {
          "property1": {},
          "property2": {}
        },
        "type": "string"
      }
    },
    "description": "string",
    "effect": "string",
    "id": "string",
    "resources": [
      "string"
    ],
    "subjects": [
      "string"
    ]
  },
  "id": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|Body|[policy](#schemapolicy)|false|none|none|
|id|string|false|none|The id of the policy. in: path|

## swaggerWardenBaseRequest
<a id="schemaswaggerwardenbaserequest"></a>

```json
{
  "action": "string",
  "context": {
    "property1": {},
    "property2": {}
  },
  "resource": "string"
}

```

*swager:model authorizedBaseRequest*

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action is the action that is requested on the resource.|
|context|object|false|none|Context is the request's environmental context.|
|» **additionalProperties**|object|false|none|none|
|resource|string|false|none|Resource is the resource that access is requested to.|

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

## wardenOAuth2AccessTokenAuthorizationRequest
<a id="schemawardenoauth2accesstokenauthorizationrequest"></a>

```json
{
  "action": "string",
  "context": {
    "property1": {},
    "property2": {}
  },
  "resource": "string",
  "scope": [
    "string"
  ],
  "token": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action is the action that is requested on the resource.|
|context|object|false|none|Context is the request's environmental context.|
|» **additionalProperties**|object|false|none|none|
|resource|string|false|none|Resource is the resource that access is requested to.|
|scope|[string]|false|none|Scope is an array of scopes that are required.|
|token|string|false|none|Token is the token to introspect.|

## wardenOAuth2AccessTokenAuthorizationResponse
<a id="schemawardenoauth2accesstokenauthorizationresponse"></a>

```json
{
  "allowed": true,
  "aud": [
    "string"
  ],
  "client_id": "string",
  "exp": "2018-11-11T11:05:42Z",
  "iat": "2018-11-11T11:05:42Z",
  "iss": "string",
  "nbf": "2018-11-11T11:05:42Z",
  "scope": "string",
  "session": {
    "property1": {},
    "property2": {}
  },
  "sub": "string",
  "username": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|Allowed is true if the request is allowed and false otherwise.|
|aud|[string]|false|none|none|
|client_id|string|false|none|ClientID is the id of the OAuth2 client that requested the token.|
|exp|string(date-time)|false|none|ExpiresAt is the expiry timestamp.|
|iat|string(date-time)|false|none|IssuedAt is the token creation time stamp.|
|iss|string|false|none|Issuer is the id of the issuer, typically an hydra instance.|
|nbf|string(date-time)|false|none|none|
|scope|string|false|none|GrantedScopes is a list of scopes that the subject authorized when asked for consent.|
|session|object|false|none|Session represents arbitrary session data.|
|» **additionalProperties**|object|false|none|none|
|sub|string|false|none|Subject is the identity that authorized issuing the token, for example a user or an OAuth2 app. This is usually a uuid but you can choose a urn or some other id too.|
|username|string|false|none|none|

## wardenOAuth2ClientAuthorizationRequest
<a id="schemawardenoauth2clientauthorizationrequest"></a>

```json
{
  "action": "string",
  "client_id": "string",
  "client_secret": "string",
  "context": {
    "property1": {},
    "property2": {}
  },
  "resource": "string",
  "scope": [
    "string"
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|action|string|false|none|Action is the action that is requested on the resource.|
|client_id|string|false|none|Token is the token to introspect.|
|client_secret|string|false|none|none|
|context|object|false|none|Context is the request's environmental context.|
|» **additionalProperties**|object|false|none|none|
|resource|string|false|none|Resource is the resource that access is requested to.|
|scope|[string]|false|none|Scope is an array of scopes that are required.|

## wardenOAuth2ClientAuthorizationResponse
<a id="schemawardenoauth2clientauthorizationresponse"></a>

```json
{
  "allowed": true,
  "sub": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|Allowed is true if the request is allowed and false otherwise.|
|sub|string|false|none|Subject is the identity that authorized issuing the token, for example a user or an OAuth2 app. This is usually a uuid but you can choose a urn or some other id too.|

## wardenSubjectAuthorizationResponse
<a id="schemawardensubjectauthorizationresponse"></a>

```json
{
  "allowed": true,
  "sub": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|allowed|boolean|false|none|Allowed is true if the request is allowed and false otherwise.|
|sub|string|false|none|Subject is the identity that authorized issuing the token, for example a user or an OAuth2 app. This is usually a uuid but you can choose a urn or some other id too.|

