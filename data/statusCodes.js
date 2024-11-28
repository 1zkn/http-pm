export const statusCodes = {
        "100": {
          "code": 100,
          "name": "Continue",
          "description": "The server has received the request headers and the client should proceed to send the request body",
          "type": "Informational",
          "examples": [
            "Large file upload with Expect: 100-continue header",
            "Initial part of a multi-part request"
          ],
          "spec": "RFC 7231, Section 6.2.1"
        },
        "101": {
          "code": 101,
          "name": "Switching Protocols",
          "description": "The server agrees to switch protocols as requested by the client",
          "type": "Informational",
          "examples": [
            "Upgrading from HTTP/1.1 to WebSocket",
            "Switching to a newer HTTP version"
          ],
          "spec": "RFC 7231, Section 6.2.2"
        },
        "102": {
          "code": 102,
          "name": "Processing",
          "description": "The server has received and is processing the request, but no response is available yet",
          "type": "Informational",
          "examples": [
            "Long-running server operation in progress",
            "Complex request being processed"
          ],
          "spec": "RFC 2518, Section 10.1"
        },
        "103": {
          "code": 103,
          "name": "Early Hints",
          "description": "Used to send preliminary response headers before the final HTTP message",
          "type": "Informational",
          "examples": [
            "Preloading resources before main response",
            "Link headers for resource hints"
          ],
          "spec": "RFC 8297"
        },
        "104": {
          "code": 104,
          "name": "Connection Reset",
          "description": "Used by some CDNs to indicate connection was reset",
          "type": "Informational",
          "examples": [
            "Connection terminated unexpectedly",
            "Network interruption occurred"
          ],
          "spec": "Non-standard (Used by some CDNs)"
        },
        "199": {
          "code": 199,
          "name": "Early Response",
          "description": "Indicates an early response before the final response is ready",
          "type": "Informational",
          "examples": [
            "Partial data available",
            "Preliminary response while processing continues"
          ],
          "spec": "Non-standard"
        },
        "200": {
    "code": 200,
    "name": "OK",
    "description": "The request succeeded",
    "type": "Success",
    "examples": [
      "Successful GET request",
      "Resource retrieved correctly"
    ],
    "spec": "RFC 7231, Section 6.3.1"
  },
  "201": {
    "code": 201,
    "name": "Created",
    "description": "The request succeeded and a new resource was created",
    "type": "Success",
    "examples": [
      "New user registration",
      "File upload completed"
    ],
    "spec": "RFC 7231, Section 6.3.2"
  },
  "202": {
    "code": 202,
    "name": "Accepted",
    "description": "The request has been accepted for processing but has not been completed",
    "type": "Success",
    "examples": [
      "Batch processing request queued",
      "Asynchronous task initiated"
    ],
    "spec": "RFC 7231, Section 6.3.3"
  },
  "203": {
    "code": 203,
    "name": "Non-Authoritative Information",
    "description": "The server successfully processed the request but is returning information from another source",
    "type": "Success",
    "examples": [
      "Response from cached proxy",
      "Modified response from CDN"
    ],
    "spec": "RFC 7231, Section 6.3.4"
  },
  "204": {
    "code": 204,
    "name": "No Content",
    "description": "The server successfully processed the request but is not returning any content",
    "type": "Success",
    "examples": [
      "DELETE operation succeeded",
      "Update succeeded with no response body"
    ],
    "spec": "RFC 7231, Section 6.3.5"
  },
  "205": {
    "code": 205,
    "name": "Reset Content",
    "description": "The server successfully processed the request and asks the client to reset the document view",
    "type": "Success",
    "examples": [
      "Form submission requiring reset",
      "Clear user input fields"
    ],
    "spec": "RFC 7231, Section 6.3.6"
  },
  "206": {
    "code": 206,
    "name": "Partial Content",
    "description": "The server is delivering only part of the resource due to a range header sent by the client",
    "type": "Success",
    "examples": [
      "Resume interrupted download",
      "Video streaming with range requests"
    ],
    "spec": "RFC 7233, Section 4.1"
  },
  "207": {
    "code": 207,
    "name": "Multi-Status",
    "description": "Response provides status for multiple independent operations",
    "type": "Success",
    "examples": [
      "WebDAV batch operations",
      "Multiple file upload status"
    ],
    "spec": "RFC 4918, Section 11.1"
  },
  "208": {
    "code": 208,
    "name": "Already Reported",
    "description": "Used inside a DAV response to avoid enumerating members of a binding multiple times",
    "type": "Success",
    "examples": [
      "WebDAV binding loops",
      "Repeated resource status"
    ],
    "spec": "RFC 5842, Section 7.1"
  },
  "226": {
    "code": 226,
    "name": "IM Used",
    "description": "Server has fulfilled a GET request, and response is a representation of instance manipulations",
    "type": "Success",
    "examples": [
      "Delta encoding in HTTP",
      "Instance manipulation used"
    ],
    "spec": "RFC 3229, Section 10.4.1"
  },
  "300": {
    "code": 300,
    "name": "Multiple Choices",
    "description": "The request has more than one possible response and the user/user agent should choose one",
    "type": "Redirection",
    "examples": [
      "Multiple format options available",
      "Different language versions of a document"
    ],
    "spec": "RFC 7231, Section 6.4.1"
  },
  "301": {
    "code": 301,
    "name": "Moved Permanently",
    "description": "The requested resource has been permanently moved to another URI",
    "type": "Redirection",
    "examples": [
      "Website domain change",
      "Permanent URL restructuring"
    ],
    "spec": "RFC 7231, Section 6.4.2"
  },
  "302": {
    "code": 302,
    "name": "Found",
    "description": "The requested resource temporarily resides under a different URI",
    "type": "Redirection",
    "examples": [
      "Temporary URL change",
      "Load balancing redirect"
    ],
    "spec": "RFC 7231, Section 6.4.3"
  },
  "303": {
    "code": 303,
    "name": "See Other",
    "description": "The response to the request can be found under a different URI using GET",
    "type": "Redirection",
    "examples": [
      "Post-processing redirect",
      "Redirect after form submission"
    ],
    "spec": "RFC 7231, Section 6.4.4"
  },
  "304": {
    "code": 304,
    "name": "Not Modified",
    "description": "Resource hasn't been modified since last request",
    "type": "Redirection",
    "examples": [
      "Cached content still valid",
      "Conditional GET response"
    ],
    "spec": "RFC 7232, Section 4.1"
  },
  "305": {
    "code": 305,
    "name": "Use Proxy",
    "description": "Requested resource must be accessed through specified proxy",
    "type": "Redirection",
    "examples": [
      "Proxy requirement enforcement",
      "Gateway access required"
    ],
    "spec": "RFC 7231, Section 6.4.5 (Deprecated)"
  },
  "306": {
    "code": 306,
    "name": "Switch Proxy",
    "description": "No longer used. Originally meant 'Subsequent requests should use the specified proxy'",
    "type": "Redirection",
    "examples": [
      "Historical status code",
      "No longer in use"
    ],
    "spec": "RFC 7231, Section 6.4.6 (Deprecated)"
  },
  "307": {
    "code": 307,
    "name": "Temporary Redirect",
    "description": "The request should be repeated with another URI but future requests can still use the original URI",
    "type": "Redirection",
    "examples": [
      "Temporary server maintenance",
      "Load balancing with method preservation"
    ],
    "spec": "RFC 7231, Section 6.4.7"
  },
  "308": {
    "code": 308,
    "name": "Permanent Redirect",
    "description": "The request and all future requests should be repeated using another URI",
    "type": "Redirection",
    "examples": [
      "Permanent URL change with method preservation",
      "API version upgrade"
    ],
    "spec": "RFC 7538"
  },
  "380": {
    "code": 380,
    "name": "Alternative Service",
    "description": "Non-standard code suggesting an alternative service endpoint",
    "type": "Redirection",
    "examples": [
      "Alternative API endpoint suggestion",
      "Service mesh routing"
    ],
    "spec": "Non-standard"
  },
  "399": {
    "code": 399,
    "name": "Visited",
    "description": "Non-standard code used by some browsers/services to indicate a visited resource",
    "type": "Redirection",
    "examples": [
      "Browser history tracking",
      "Navigation state indication"
    ],
    "spec": "Non-standard"
  },
  "400": {
    "code": 400,
    "name": "Bad Request",
    "description": "The server cannot or will not process the request due to a client error",
    "type": "Client Error",
    "examples": [
      "Malformed request syntax",
      "Invalid request message framing"
    ],
    "spec": "RFC 7231, Section 6.5.1"
  },
  "401": {
    "code": 401,
    "name": "Unauthorized",
    "description": "Authentication is required and has failed or has not been provided",
    "type": "Client Error",
    "examples": [
      "Missing authentication token",
      "Invalid credentials provided"
    ],
    "spec": "RFC 7235, Section 3.1"
  },
  "402": {
    "code": 402,
    "name": "Payment Required",
    "description": "Reserved for future use. Originally intended for digital payment systems",
    "type": "Client Error",
    "examples": [
      "Subscription required",
      "Account payment needed"
    ],
    "spec": "RFC 7231, Section 6.5.2"
  },
  "403": {
    "code": 403,
    "name": "Forbidden",
    "description": "Server understood the request but refuses to authorize it",
    "type": "Client Error",
    "examples": [
      "Insufficient permissions",
      "IP address blocked"
    ],
    "spec": "RFC 7231, Section 6.5.3"
  },
  "404": {
    "code": 404,
    "name": "Not Found",
    "description": "The server cannot find the requested resource",
    "type": "Client Error",
    "examples": [
      "Page does not exist",
      "Resource deleted or moved"
    ],
    "spec": "RFC 7231, Section 6.5.4"
  },
  "405": {
    "code": 405,
    "name": "Method Not Allowed",
    "description": "The request method is not supported for the requested resource",
    "type": "Client Error",
    "examples": [
      "POST request to read-only resource",
      "DELETE not supported on endpoint"
    ],
    "spec": "RFC 7231, Section 6.5.5"
  },
  "406": {
    "code": 406,
    "name": "Not Acceptable",
    "description": "The requested resource is capable of generating only content not acceptable according to the Accept headers",
    "type": "Client Error",
    "examples": [
      "Unsupported content type requested",
      "Language version not available"
    ],
    "spec": "RFC 7231, Section 6.5.6"
  },
  "407": {
    "code": 407,
    "name": "Proxy Authentication Required",
    "description": "Authentication with proxy is required before serving the request",
    "type": "Client Error",
    "examples": [
      "Corporate proxy authentication needed",
      "Missing proxy credentials"
    ],
    "spec": "RFC 7235, Section 3.2"
  },
  "408": {
    "code": 408,
    "name": "Request Timeout",
    "description": "The server timed out waiting for the request",
    "type": "Client Error",
    "examples": [
      "Client took too long to send request",
      "Connection idle timeout"
    ],
    "spec": "RFC 7231, Section 6.5.7"
  },
  "409": {
    "code": 409,
    "name": "Conflict",
    "description": "Request conflicts with current state of the server",
    "type": "Client Error",
    "examples": [
      "Version conflict in resource update",
      "Duplicate entry creation attempt"
    ],
    "spec": "RFC 7231, Section 6.5.8"
  },
  "410": {
    "code": 410,
    "name": "Gone",
    "description": "Resource requested is no longer available and will not be available again",
    "type": "Client Error",
    "examples": [
      "Permanently deleted resource",
      "Expired temporary resource"
    ],
    "spec": "RFC 7231, Section 6.5.9"
  },
  "411": {
    "code": 411,
    "name": "Length Required",
    "description": "Server refuses to accept the request without a defined Content-Length",
    "type": "Client Error",
    "examples": [
      "Missing Content-Length header",
      "Streaming upload not supported"
    ],
    "spec": "RFC 7231, Section 6.5.10"
  },
  "412": {
    "code": 412,
    "name": "Precondition Failed",
    "description": "Server does not meet one of the preconditions specified in the request headers",
    "type": "Client Error",
    "examples": [
      "If-Match header condition not met",
      "If-Unmodified-Since check failed"
    ],
    "spec": "RFC 7232, Section 4.2"
  },
  "413": {
    "code": 413,
    "name": "Payload Too Large",
    "description": "Request entity is larger than limits defined by server",
    "type": "Client Error",
    "examples": [
      "File upload too large",
      "Request body exceeds limit"
    ],
    "spec": "RFC 7231, Section 6.5.11"
  },
  "414": {
    "code": 414,
    "name": "URI Too Long",
    "description": "The URI requested by the client is longer than the server is willing to interpret",
    "type": "Client Error",
    "examples": [
      "Extremely long query string",
      "URL exceeds server limits"
    ],
    "spec": "RFC 7231, Section 6.5.12"
  },
  "415": {
    "code": 415,
    "name": "Unsupported Media Type",
    "description": "The media format of the requested data is not supported",
    "type": "Client Error",
    "examples": [
      "Invalid content type in request",
      "Unsupported file format upload"
    ],
    "spec": "RFC 7231, Section 6.5.13"
  },
  "416": {
    "code": 416,
    "name": "Range Not Satisfiable",
    "description": "The range specified by the Range header field cannot be fulfilled",
    "type": "Client Error",
    "examples": [
      "Invalid byte range requested",
      "Range header exceeds file size"
    ],
    "spec": "RFC 7233, Section 4.4"
  },
  "417": {
    "code": 417,
    "name": "Expectation Failed",
    "description": "The expectation indicated by the Expect request header field cannot be met",
    "type": "Client Error",
    "examples": [
      "Server cannot meet Expect header",
      "100-continue expectation refused"
    ],
    "spec": "RFC 7231, Section 6.5.14"
  },
  "418": {
    "code": 418,
    "name": "I'm a teapot",
    "description": "Server refuses to brew coffee because it is a teapot (April Fools' joke)",
    "type": "Client Error",
    "examples": [
      "HTCPCP coffee request to teapot",
      "Joke response code"
    ],
    "spec": "RFC 2324, Section 2.3.2"
  },
  "421": {
    "code": 421,
    "name": "Misdirected Request",
    "description": "Request was directed at a server that is not able to produce a response",
    "type": "Client Error",
    "examples": [
      "Wrong server in load balancer",
      "Invalid connection reuse"
    ],
    "spec": "RFC 7540, Section 9.1.2"
  },
  "422": {
    "code": 422,
    "name": "Unprocessable Entity",
    "description": "Server understands content type but cannot process the contained instructions",
    "type": "Client Error",
    "examples": [
      "Invalid document structure",
      "Semantic errors in request"
    ],
    "spec": "RFC 4918, Section 11.2"
  },
  "423": {
    "code": 423,
    "name": "Locked",
    "description": "Resource that is being accessed is locked",
    "type": "Client Error",
    "examples": [
      "WebDAV resource locked",
      "Concurrent access denied"
    ],
    "spec": "RFC 4918, Section 11.3"
  },
  "424": {
    "code": 424,
    "name": "Failed Dependency",
    "description": "Request failed due to failure of a previous request",
    "type": "Client Error",
    "examples": [
      "Dependent WebDAV operation failed",
      "Cascade operation error"
    ],
    "spec": "RFC 4918, Section 11.4"
  },
  "425": {
    "code": 425,
    "name": "Too Early",
    "description": "Server is unwilling to risk processing a request that might be replayed",
    "type": "Client Error",
    "examples": [
      "Early 0-RTT data rejected",
      "TLS early data refused"
    ],
    "spec": "RFC 8470"
  },
  "426": {
    "code": 426,
    "name": "Upgrade Required",
    "description": "Server refuses to perform request using current protocol",
    "type": "Client Error",
    "examples": [
      "TLS upgrade required",
      "Protocol version too old"
    ],
    "spec": "RFC 7231, Section 6.5.15"
  },
  "428": {
    "code": 428,
    "name": "Precondition Required",
    "description": "Origin server requires the request to be conditional",
    "type": "Client Error",
    "examples": [
      "Missing If-Match header",
      "Conditional request required"
    ],
    "spec": "RFC 6585, Section 3"
  },
  "429": {
    "code": 429,
    "name": "Too Many Requests",
    "description": "User has sent too many requests in a given amount of time",
    "type": "Client Error",
    "examples": [
      "Rate limit exceeded",
      "API quota exhausted"
    ],
    "spec": "RFC 6585, Section 4"
  },
  "431": {
    "code": 431,
    "name": "Request Header Fields Too Large",
    "description": "Server is unwilling to process the request because its header fields are too large",
    "type": "Client Error",
    "examples": [
      "Header fields exceed limit",
      "Cookie too large"
    ],
    "spec": "RFC 6585, Section 5"
  },
  "444": {
    "code": 444,
    "name": "No Response",
    "description": "Server returns no information and closes the connection (Nginx)",
    "type": "Client Error",
    "examples": [
      "Connection closed without response",
      "Malicious request blocked"
    ],
    "spec": "Non-standard (Nginx)"
  },
  "449": {
    "code": 449,
    "name": "Retry With",
    "description": "Request should be retried after performing some action (Microsoft)",
    "type": "Client Error",
    "examples": [
      "Missing required information",
      "Retry after configuration"
    ],
    "spec": "Non-standard (Microsoft)"
  },
  "451": {
    "code": 451,
    "name": "Unavailable For Legal Reasons",
    "description": "Resource cannot be provided for legal reasons",
    "type": "Client Error",
    "examples": [
      "Geo-blocked content",
      "DMCA takedown"
    ],
    "spec": "RFC 7725"
  },
  "499": {
    "code": 499,
    "name": "Client Closed Request",
    "description": "Connection closed by client while server was processing request (Nginx)",
    "type": "Client Error",
    "examples": [
      "Client disconnected prematurely",
      "Request cancelled by user"
    ],
    "spec": "Non-standard (Nginx)"
  },
  "400": {
    "code": 400,
    "name": "Bad Request",
    "description": "The server cannot or will not process the request due to a client error",
    "type": "Client Error",
    "examples": [
      "Malformed request syntax",
      "Invalid request message framing"
    ],
    "spec": "RFC 7231, Section 6.5.1"
  },
  "401": {
    "code": 401,
    "name": "Unauthorized",
    "description": "Authentication is required and has failed or has not been provided",
    "type": "Client Error",
    "examples": [
      "Missing authentication token",
      "Invalid credentials provided"
    ],
    "spec": "RFC 7235, Section 3.1"
  },
  "402": {
    "code": 402,
    "name": "Payment Required",
    "description": "Reserved for future use. Originally intended for digital payment systems",
    "type": "Client Error",
    "examples": [
      "Subscription required",
      "Account payment needed"
    ],
    "spec": "RFC 7231, Section 6.5.2"
  },
  "403": {
    "code": 403,
    "name": "Forbidden",
    "description": "Server understood the request but refuses to authorize it",
    "type": "Client Error",
    "examples": [
      "Insufficient permissions",
      "IP address blocked"
    ],
    "spec": "RFC 7231, Section 6.5.3"
  },
  "404": {
    "code": 404,
    "name": "Not Found",
    "description": "The server cannot find the requested resource",
    "type": "Client Error",
    "examples": [
      "Page does not exist",
      "Resource deleted or moved"
    ],
    "spec": "RFC 7231, Section 6.5.4"
  },
  "405": {
    "code": 405,
    "name": "Method Not Allowed",
    "description": "The request method is not supported for the requested resource",
    "type": "Client Error",
    "examples": [
      "POST request to read-only resource",
      "DELETE not supported on endpoint"
    ],
    "spec": "RFC 7231, Section 6.5.5"
  },
  "406": {
    "code": 406,
    "name": "Not Acceptable",
    "description": "The requested resource is capable of generating only content not acceptable according to the Accept headers",
    "type": "Client Error",
    "examples": [
      "Unsupported content type requested",
      "Language version not available"
    ],
    "spec": "RFC 7231, Section 6.5.6"
  },
  "407": {
    "code": 407,
    "name": "Proxy Authentication Required",
    "description": "Authentication with proxy is required before serving the request",
    "type": "Client Error",
    "examples": [
      "Corporate proxy authentication needed",
      "Missing proxy credentials"
    ],
    "spec": "RFC 7235, Section 3.2"
  },
  "408": {
    "code": 408,
    "name": "Request Timeout",
    "description": "The server timed out waiting for the request",
    "type": "Client Error",
    "examples": [
      "Client took too long to send request",
      "Connection idle timeout"
    ],
    "spec": "RFC 7231, Section 6.5.7"
  },
  "409": {
    "code": 409,
    "name": "Conflict",
    "description": "Request conflicts with current state of the server",
    "type": "Client Error",
    "examples": [
      "Version conflict in resource update",
      "Duplicate entry creation attempt"
    ],
    "spec": "RFC 7231, Section 6.5.8"
  },
  "410": {
    "code": 410,
    "name": "Gone",
    "description": "Resource requested is no longer available and will not be available again",
    "type": "Client Error",
    "examples": [
      "Permanently deleted resource",
      "Expired temporary resource"
    ],
    "spec": "RFC 7231, Section 6.5.9"
  },
  "411": {
    "code": 411,
    "name": "Length Required",
    "description": "Server refuses to accept the request without a defined Content-Length",
    "type": "Client Error",
    "examples": [
      "Missing Content-Length header",
      "Streaming upload not supported"
    ],
    "spec": "RFC 7231, Section 6.5.10"
  },
  "412": {
    "code": 412,
    "name": "Precondition Failed",
    "description": "Server does not meet one of the preconditions specified in the request headers",
    "type": "Client Error",
    "examples": [
      "If-Match header condition not met",
      "If-Unmodified-Since check failed"
    ],
    "spec": "RFC 7232, Section 4.2"
  },
  "413": {
    "code": 413,
    "name": "Payload Too Large",
    "description": "Request entity is larger than limits defined by server",
    "type": "Client Error",
    "examples": [
      "File upload too large",
      "Request body exceeds limit"
    ],
    "spec": "RFC 7231, Section 6.5.11"
  },
  "414": {
    "code": 414,
    "name": "URI Too Long",
    "description": "The URI requested by the client is longer than the server is willing to interpret",
    "type": "Client Error",
    "examples": [
      "Extremely long query string",
      "URL exceeds server limits"
    ],
    "spec": "RFC 7231, Section 6.5.12"
  },
  "415": {
    "code": 415,
    "name": "Unsupported Media Type",
    "description": "The media format of the requested data is not supported",
    "type": "Client Error",
    "examples": [
      "Invalid content type in request",
      "Unsupported file format upload"
    ],
    "spec": "RFC 7231, Section 6.5.13"
  },
  "416": {
    "code": 416,
    "name": "Range Not Satisfiable",
    "description": "The range specified by the Range header field cannot be fulfilled",
    "type": "Client Error",
    "examples": [
      "Invalid byte range requested",
      "Range header exceeds file size"
    ],
    "spec": "RFC 7233, Section 4.4"
  },
  "417": {
    "code": 417,
    "name": "Expectation Failed",
    "description": "The expectation indicated by the Expect request header field cannot be met",
    "type": "Client Error",
    "examples": [
      "Server cannot meet Expect header",
      "100-continue expectation refused"
    ],
    "spec": "RFC 7231, Section 6.5.14"
  },
  "418": {
    "code": 418,
    "name": "I'm a teapot",
    "description": "Server refuses to brew coffee because it is a teapot (April Fools' joke)",
    "type": "Client Error",
    "examples": [
      "HTCPCP coffee request to teapot",
      "Joke response code"
    ],
    "spec": "RFC 2324, Section 2.3.2"
  },
  "421": {
    "code": 421,
    "name": "Misdirected Request",
    "description": "Request was directed at a server that is not able to produce a response",
    "type": "Client Error",
    "examples": [
      "Wrong server in load balancer",
      "Invalid connection reuse"
    ],
    "spec": "RFC 7540, Section 9.1.2"
  },
  "422": {
    "code": 422,
    "name": "Unprocessable Entity",
    "description": "Server understands content type but cannot process the contained instructions",
    "type": "Client Error",
    "examples": [
      "Invalid document structure",
      "Semantic errors in request"
    ],
    "spec": "RFC 4918, Section 11.2"
  },
  "423": {
    "code": 423,
    "name": "Locked",
    "description": "Resource that is being accessed is locked",
    "type": "Client Error",
    "examples": [
      "WebDAV resource locked",
      "Concurrent access denied"
    ],
    "spec": "RFC 4918, Section 11.3"
  },
  "424": {
    "code": 424,
    "name": "Failed Dependency",
    "description": "Request failed due to failure of a previous request",
    "type": "Client Error",
    "examples": [
      "Dependent WebDAV operation failed",
      "Cascade operation error"
    ],
    "spec": "RFC 4918, Section 11.4"
  },
  "425": {
    "code": 425,
    "name": "Too Early",
    "description": "Server is unwilling to risk processing a request that might be replayed",
    "type": "Client Error",
    "examples": [
      "Early 0-RTT data rejected",
      "TLS early data refused"
    ],
    "spec": "RFC 8470"
  },
  "426": {
    "code": 426,
    "name": "Upgrade Required",
    "description": "Server refuses to perform request using current protocol",
    "type": "Client Error",
    "examples": [
      "TLS upgrade required",
      "Protocol version too old"
    ],
    "spec": "RFC 7231, Section 6.5.15"
  },
  "428": {
    "code": 428,
    "name": "Precondition Required",
    "description": "Origin server requires the request to be conditional",
    "type": "Client Error",
    "examples": [
      "Missing If-Match header",
      "Conditional request required"
    ],
    "spec": "RFC 6585, Section 3"
  },
  "429": {
    "code": 429,
    "name": "Too Many Requests",
    "description": "User has sent too many requests in a given amount of time",
    "type": "Client Error",
    "examples": [
      "Rate limit exceeded",
      "API quota exhausted"
    ],
    "spec": "RFC 6585, Section 4"
  },
  "431": {
    "code": 431,
    "name": "Request Header Fields Too Large",
    "description": "Server is unwilling to process the request because its header fields are too large",
    "type": "Client Error",
    "examples": [
      "Header fields exceed limit",
      "Cookie too large"
    ],
    "spec": "RFC 6585, Section 5"
  },
  "444": {
    "code": 444,
    "name": "No Response",
    "description": "Server returns no information and closes the connection (Nginx)",
    "type": "Client Error",
    "examples": [
      "Connection closed without response",
      "Malicious request blocked"
    ],
    "spec": "Non-standard (Nginx)"
  },
  "449": {
    "code": 449,
    "name": "Retry With",
    "description": "Request should be retried after performing some action (Microsoft)",
    "type": "Client Error",
    "examples": [
      "Missing required information",
      "Retry after configuration"
    ],
    "spec": "Non-standard (Microsoft)"
  },
  "451": {
    "code": 451,
    "name": "Unavailable For Legal Reasons",
    "description": "Resource cannot be provided for legal reasons",
    "type": "Client Error",
    "examples": [
      "Geo-blocked content",
      "DMCA takedown"
    ],
    "spec": "RFC 7725"
  },
  "499": {
    "code": 499,
    "name": "Client Closed Request",
    "description": "Connection closed by client while server was processing request (Nginx)",
    "type": "Client Error",
    "examples": [
      "Client disconnected prematurely",
      "Request cancelled by user"
    ],
    "spec": "Non-standard (Nginx)"
  },
  "500": {
    "code": 500,
    "name": "Internal Server Error",
    "description": "A generic error message when an unexpected condition is encountered on the server",
    "type": "Server Error",
    "examples": [
      "Unhandled exception in code",
      "Database connection failure"
    ],
    "spec": "RFC 7231, Section 6.6.1"
  },
  "501": {
    "code": 501,
    "name": "Not Implemented",
    "description": "The server does not support the functionality required to fulfill the request",
    "type": "Server Error",
    "examples": [
      "Unsupported HTTP method",
      "Feature not available"
    ],
    "spec": "RFC 7231, Section 6.6.2"
  },
  "502": {
    "code": 502,
    "name": "Bad Gateway",
    "description": "The server received an invalid response from the upstream server",
    "type": "Server Error",
    "examples": [
      "Invalid proxy response",
      "Upstream service error"
    ],
    "spec": "RFC 7231, Section 6.6.3"
  },
  "503": {
    "code": 503,
    "name": "Service Unavailable",
    "description": "The server is temporarily unable to handle the request due to being overloaded or maintenance",
    "type": "Server Error",
    "examples": [
      "Server maintenance",
      "Rate limiting active"
    ],
    "spec": "RFC 7231, Section 6.6.4"
  },
  "504": {
    "code": 504,
    "name": "Gateway Timeout",
    "description": "The server did not receive a timely response from an upstream server",
    "type": "Server Error",
    "examples": [
      "Upstream service timeout",
      "Load balancer timeout"
    ],
    "spec": "RFC 7231, Section 6.6.5"
  },
  "505": {
    "code": 505,
    "name": "HTTP Version Not Supported",
    "description": "The server does not support the HTTP protocol version used in the request",
    "type": "Server Error",
    "examples": [
      "HTTP/2 not supported",
      "Protocol version too new"
    ],
    "spec": "RFC 7231, Section 6.6.6"
  },
  "506": {
    "code": 506,
    "name": "Variant Also Negotiates",
    "description": "The server has detected an internal configuration error where the chosen variant resource is configured to engage in transparent content negotiation itself",
    "type": "Server Error",
    "examples": [
      "Circular reference in content negotiation",
      "Configuration error"
    ],
    "spec": "RFC 2295"
  },
  "507": {
    "code": 507,
    "name": "Insufficient Storage",
    "description": "The server is unable to store the representation needed to complete the request",
    "type": "Server Error",
    "examples": [
      "WebDAV storage full",
      "Disk space exhausted"
    ],
    "spec": "RFC 4918"
  },
  "508": {
    "code": 508,
    "name": "Loop Detected",
    "description": "The server detected an infinite loop while processing the request",
    "type": "Server Error",
    "examples": [
      "WebDAV infinite loop",
      "Circular dependency detected"
    ],
    "spec": "RFC 5842"
  },
  "509": {
    "code": 509,
    "name": "Bandwidth Limit Exceeded",
    "description": "Server has exceeded the bandwidth specified by the server administrator",
    "type": "Server Error",
    "examples": [
      "Hosting bandwidth limit reached",
      "Traffic quota exceeded"
    ],
    "spec": "Non-standard"
  },
  "510": {
    "code": 510,
    "name": "Not Extended",
    "description": "Further extensions to the request are required for the server to fulfill it",
    "type": "Server Error",
    "examples": [
      "Missing required extension",
      "Protocol extension needed"
    ],
    "spec": "RFC 2774"
  },
  "511": {
    "code": 511,
    "name": "Network Authentication Required",
    "description": "Client needs to authenticate to gain network access",
    "type": "Server Error",
    "examples": [
      "Captive portal login needed",
      "WiFi authentication required"
    ],
    "spec": "RFC 6585"
  },
  "598": {
    "code": 598,
    "name": "Network Read Timeout Error",
    "description": "Used by some proxies to signal a network read timeout behind the proxy",
    "type": "Server Error",
    "examples": [
      "Proxy read timeout",
      "Network connectivity issues"
    ],
    "spec": "Non-standard"
  },
  "599": {
    "code": 599,
    "name": "Network Connect Timeout Error",
    "description": "Used by some proxies to signal when the connection to the upstream server times out",
    "type": "Server Error",
    "examples": [
      "Proxy connection timeout",
      "Upstream server unreachable"
    ],
    "spec": "Non-standard"
  }
}

export function getStatusCode(code) {
    return statusCodes[code] || {
        code: code,
        name: "Unknown",
        description: "Unknown status code"
    };
}