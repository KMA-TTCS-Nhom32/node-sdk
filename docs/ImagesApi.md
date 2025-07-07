# ImagesApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**imagesControllerGetImageByPublicId**](#imagescontrollergetimagebypublicid) | **GET** /api/images/{publicId} | Get image by public id|
|[**imagesControllerUploadIcon**](#imagescontrolleruploadicon) | **POST** /api/images/icon | Upload amenity icon|
|[**imagesControllerUploadImages**](#imagescontrolleruploadimages) | **POST** /api/images | Upload multiple image|

# **imagesControllerGetImageByPublicId**
> ImageUploadResponseDto imagesControllerGetImageByPublicId()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

let publicId: string; //Public ID of the image (default to undefined)

const { status, data } = await apiInstance.imagesControllerGetImageByPublicId(
    publicId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **publicId** | [**string**] | Public ID of the image | defaults to undefined|


### Return type

**ImageUploadResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Image found |  -  |
|**404** | Image not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imagesControllerUploadIcon**
> ImageUploadResponseDto imagesControllerUploadIcon()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

const { status, data } = await apiInstance.imagesControllerUploadIcon();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ImageUploadResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Icon uploaded |  -  |
|**413** | Icon size too large, maximum 2 MB |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **imagesControllerUploadImages**
> Array<ImageUploadResponseDto> imagesControllerUploadImages()


### Example

```typescript
import {
    ImagesApi,
    Configuration
} from '@ahomevilla-hotel/node-sdk';

const configuration = new Configuration();
const apiInstance = new ImagesApi(configuration);

const { status, data } = await apiInstance.imagesControllerUploadImages();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**Array<ImageUploadResponseDto>**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** | Images uploaded |  -  |
|**413** | Image size too large, maximum 10 MB, and maximum 5 images |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

