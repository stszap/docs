---
id: ecosystem
title: ORY Ecosystem
---

We provide an open source ecosystem of services with clear boundaries that solve authentication and authorization:

- ORY Hydra is an OAuth 2.0 and OpenID Connect provider.
- ORY Oathkeeper is an Identity and Access Proxy.
- ORY Keto is an access control server.
- *TBA is an identity management server.*

Each service works standalone but you can also combine them to get the full feature set. If you've never heard of an Identity & Access Proxy
before, or you want to learn more about the individual services and how they play together, stick with us through the
next paragraphs.

Almost every application has the concept of users and permissions. An anonymous user, for example, is allowed to
read blog posts while certain authenticated users are allowed to write blog posts. While this is the basis for most
applications out there, access control becomes increasingly complex as an application grows. What started out with
a user's username and password now shifted to machine-2-machine interaction, third party developers accessing your
user's data, and maybe even a micro service system architecture.

Our products solve the simplest use case and give you the ability to instantly ready the system for more complex scenarios without
painful and slow upgrade processes.

The first service, which is to be announced soon, focuses on identity management. Instead of re-writing login, logout,
activation emails, 2fa, and worring about GDPR, you spin up a docker image and write a simple UI for it in the language
or framework of your choice.

**ORY Hydra** enables you to become an OAuth 2.0 and OpenID Connect provider. If you're not writing a basic web app but something
that has to work on different devices, that has machine-2-machine interaction, or enables third-party developers to use
your API (and pay for it), then this is what you're looking for. ORY Hydra is not identity management, though. Instead,
it connects to your existing identity management (e.g. the one from the paragraph above, or your MySQL+PHP login service,
or your Federated SAML SSO) and is capable of issuing, in a secure and OpenID Certified manner, access, refresh, and ID tokens.
Of course, it's shipped as a 5MB Docker Image with almost no configuration required.

Now that your users access your application through, for example, a React/Angular app and a REST api, you need a way
to authenticate the user and to check if he/she has the necessary permissions (we call this "access control" from now on).
One way would be, of course, to add these checks in your code. Another is to deploy the 5MB **ORY Oathkeeper** Docker Image,
define access rules for your API endpoints (e.g. OAuth 2.0 Access Token + certain set of permissions, a valid JSON Web Token,
a valid SAML assertion, ...) and put it - like a firewall - in front of your services.

You might start out with a simple permission system. You've got different roles: anonymous users (not logged in),
authenticated users (logged in), and administrators. At some point however, the system gets more complex. You want
to distinct permissions based on the user's organization, the access time (think time lock in banking), or the billing
plan he/she's on. Big cloud providers such as Amazon Web Services or Google solve this using "Access Control Policies".
These policies represent flexible rules and allow you to express complex access control scenarios. You could, of course,
write your own system or spend a bit of time educating yourself about RBAC, ACL, ABAC, ACP - or (you probably already guessed it) -
boot up the 5MB **ORY Keto** Docker Image. ORY Keto is able to authenticate different types of credentials (e.g. OAuth 2.0 Access
Tokens, SAML Assertions, JSON Web Tokens, ...) and allows you to define advanced permission rules ("Access Control Policies").
And there's of course an endpoint that tells you if a certain set of credentials (e.g. an OAuth 2.0 Access Token) is allowed
to modify that blog post.

![The full ORY Ecosystem](../images/ory-ecosystem.png)
If you were to use the full ORY Ecosystem, it would probably look something like this. Keep in mind that any component
shown here can be replaced or removed, depending on your use case.

Now you know what this ecosystem has to offer you. To get some more information on the services, read the developer guide by
selecting the software of your choice from the navigation on the left!

Contact us at [hi@ory.sh](hi@ory.sh) if you need consulting with your specific project.

## Cloud Native Architecture

All ORY technology is built cloud native and follows [12factor.net](https://www.12factor.net) principles.

### 12 Factor Concepts

The following is a collection of core concepts to ORY's technological ideology. They are summaries of the
(12factor principles)[https://www.12factor.net] written by Adam Wiggins.

#### Codebase: One codebase tracked in revision control, many deploys

A twelve-factor app is always tracked in a version control system, such as Git, Mercurial, or Subversion. A copy of the
revision tracking database is known as a code repository, often shortened to code repo or just repo.

A codebase is any single repo (in a centralized revision control system like Subversion), or any set of repos who share
a root commit (in a decentralized revision control system like Git).

#### Dependencies: Explicitly declare and isolate dependencies

A twelve-factor app never relies on implicit existence of system-wide packages. It declares all dependencies,
completely and exactly, via a dependency declaration manifest. Furthermore, it uses a dependency isolation tool
during execution to ensure that no implicit dependencies “leak in” from the surrounding system. The full and explicit
dependency specification is applied uniformly to both production and development.

#### Config: Store config in the environment

The twelve-factor app stores config in environment variables (often shortened to env vars or env). Env vars are easy
to change between deploys without changing any code; unlike config files, there is little chance of them being checked
into the code repo accidentally; and unlike custom config files, or other config mechanisms such as Java System
Properties, they are a language- and OS-agnostic standard.

#### Backing services: Treat backing services as attached resources

A backing service is any service the app consumes over the network as part of its normal operation. Examples
include datastores (such as MySQL or CouchDB), messaging/queueing systems (such as RabbitMQ or Beanstalkd), SMTP
services for outbound email (such as Postfix), and caching systems (such as Memcached).

The code for a twelve-factor app makes no distinction between local and third party services. To the app, both are
attached resources, accessed via a URL or other locator/credentials stored in the config. A deploy of the twelve-factor
app should be able to swap out a local MySQL database with one managed by a third party (such as Amazon RDS) without
any changes to the app’s code. Likewise, a local SMTP server could be swapped with a third-party SMTP service
(such as Postmark) without code changes. In both cases, only the resource handle in the config needs to change.

#### Build, release, run: Strictly separate build and run stages

The twelve-factor app uses strict separation between the build, release, and run stages. For example, it is
impossible to make changes to the code at runtime, since there is no way to propagate those changes back
to the build stage.

#### Processes: Execute the app as one or more stateless processes

Twelve-factor processes are stateless and share-nothing. Any data that needs to persist must be stored
in a stateful backing service, typically a database.

#### Port binding: Export services via port binding

The twelve-factor app is completely self-contained and does not rely on runtime injection of a webserver into
the execution environment to create a web-facing service. The web app exports HTTP as a service by binding to a
port, and listening to requests coming in on that port.

#### Concurrency: Scale out via the process model

In the twelve-factor app, processes are a first class citizen. Processes in the twelve-factor app take strong
cues from the unix process model for running service daemons. Using this model, the developer can architect
their app to handle diverse workloads by assigning each type of work to a process type. For example, HTTP requests may
be handled by a web process, and long-running background tasks handled by a worker process.

#### Disposability: Maximize robustness with fast startup and graceful shutdown

The twelve-factor app’s processes are disposable, meaning they can be started or stopped at a moment’s notice.
This facilitates fast elastic scaling, rapid deployment of code or config changes, and robustness of production deploys.

Processes should strive to minimize startup time. Ideally, a process takes a few seconds from the time the launch
command is executed until the process is up and ready to receive requests or jobs. Short startup time provides more
agility for the release process and scaling up; and it aids robustness, because the process manager can more easily
move processes to new physical machines when warranted.

Processes shut down gracefully when they receive a SIGTERM signal from the process manager. For a web process, graceful
shutdown is achieved by ceasing to listen on the service port (thereby refusing any new requests), allowing any current
requests to finish, and then exiting. Implicit in this model is that HTTP requests are short (no more than a few seconds),
or in the case of long polling, the client should seamlessly attempt to reconnect when the connection is lost.

#### Admin processes: Run admin/management tasks as one-off processes

The process formation is the array of processes that are used to do the app’s regular business (such as handling web
requests) as it runs. Separately, developers will often wish to do one-off administrative or maintenance tasks for
the app, such as running database migrations (e.g. `hydra migrate sql`).

One-off admin processes should be run in an identical environment as the regular long-running processes of the app.
They run against a release, using the same codebase and config as any process run against that release. Admin code
must ship with application code to avoid synchronization issues.

#### Logs: Treat logs as event streams

A twelve-factor app never concerns itself with routing or storage of its output stream. It should not attempt
to write to or manage logfiles. Instead, each running process writes its event stream, unbuffered, to stdout.
During local development, the developer will view this stream in the foreground of their terminal to observe
the app’s behavior.

## Versioning Semantics

The ORY ecosystem consists of multiple services versioned using [semantic versioning](https://semver.org). This section
explains how we define service versions and what they mean.

There are two types of services:

- **Graduated services** change rarely in a backwards incompatible fashion. A service can be considered graduated if
the major version is >= 1 - for example: `v1.0.1`, `v2.2.2`. If a serious backwards incompatible
change is made, the major version jumps one up. Most, if not all, REST APIs will provide backwards compatible transformations that
make it possible to interact with the server using older API concepts.
- **Incubating services** have well defined concepts but do not provide backwards compatible REST APIs yet. Incubating
services are indicated by major version numbers of `0` - for example: `v0.10.0`
- **Sandbox services** may implement concepts, provide APIs and CLIs which are not fully baked yet. It is possible that
these services change in unpredictable ways. These services are indicated by major version numbers of `0` and the
`sandbox` label - for example: `v0.10.0-sandbox`.

To make deployment easier but stay compatible with semantic versioning, each service is equipped with a ecosystem version
number denoted by `+oryos.X` where `X` represents the version ecosystem. This is specifically useful when using
incubating or sandboxed services which do not share the version numbers of graduated services. Let's look at some examples:

- ORY Hydra `v1.0.1+oryos.6` is best compatible with ORY Oathkeeper `v0.12.1+oryos.6` and ORY Keto `v0.5.1-sandbox+oryos.6`.
- ORY Hydra `v1.0.2+oryos.7` is best compatible with ORY Oathkeeper `v0.12.2+oryos.7` and ORY Keto `v0.6.0-sandbox+oryos.7`.
- ORY Hydra `v1.0.3+oryos.8` is probably not fully compatible with ORY Oathkeeper `v0.12.1+oryos.6` nor with ORY Keto
`v0.5.1-sandbox+oryos.6`.
- ORY Hydra `v1.1.0+oryos.9` is best compatible with ORY Oathkeeper `v1.1.0+oryos.9` and ORY Keto `v1.1.0+oryos.9`.

**Important:** Each release - unless explicitly labeled as `-unstable` - is going through extensive quality assurance
and is considered secure and reliable enough to be run in production. If you choose to go with an incubating or sandbox
service, it is likely that you will spend some time addressing breaking changes.

We always provide ways to migrate breaking changes, and all breaking changes are meticolously described in each project's
`UPGRADE.md` as well as `HISTORY.md`.

### Compatibility Matrix

This section will feature a compatibility matrix for each `oryos` in the future.

## Performing Software Updates

Good software improves over time. If it wouldn't, you shouldn't use it. Unfortunately, some of these improvements
have breaking changes. We know that breaking changes are annoying so we want to make upgrading as painless as possible.

We document detailed changelogs and upgrade guides for this very reason:

* ORY Hydra: [upgrade guide](https://github.com/ory/hydra/blob/master/UPGRADE.md), [changelog](https://github.com/ory/hydra/blob/master/CHANGELOG.md)
* ORY Oathkeeper: [upgrade guide](https://github.com/ory/oathkeeper/blob/master/UPGRADE.md), [changelog](https://github.com/ory/oathkeeper/blob/master/CHANGELOG.md)
* ORY Keto: [upgrade guide](https://github.com/ory/keto/blob/master/UPGRADE.md), [changelog](https://github.com/ory/keto/blob/master/CHANGELOG.md)

Before upgrading to a newer version, please make sure to check with these documents first.

**If you have not already subscribed to our release announcements, [subscribe now](http://eepurl.com/di390P)!** We announce
important releases (e.g. security releases) in this newsletter.

## Learn by Example

Learning by example is a good way to get started, but **it does not replace** studying the docs.

### Example Environments

The [ory/examples](https://github.com/ory/examples) repository contains numerous examples of setting up these services
individually, and together. Check them out to get a real-world view of this ecosystem!

### Kubernetes

You can find all kubernetes-related examples and definitions at [github.com/ory/k8s](https://github.com/ory/k8s)
