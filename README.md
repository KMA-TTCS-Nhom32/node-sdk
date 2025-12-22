## @ahomevilla-hotel/node-sdk@latest

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @ahomevilla-hotel/node-sdk@latest --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AmenitiesApi* | [**amenitiesControllerCreate**](docs/AmenitiesApi.md#amenitiescontrollercreate) | **POST** /api/amenities | Create new amenity
*AmenitiesApi* | [**amenitiesControllerFindMany**](docs/AmenitiesApi.md#amenitiescontrollerfindmany) | **GET** /api/amenities | Get amenities
*AmenitiesApi* | [**amenitiesControllerFindOne**](docs/AmenitiesApi.md#amenitiescontrollerfindone) | **GET** /api/amenities/{id} | Get amenity by ID
*AmenitiesApi* | [**amenitiesControllerRemove**](docs/AmenitiesApi.md#amenitiescontrollerremove) | **DELETE** /api/amenities/{id} | Delete amenity
*AmenitiesApi* | [**amenitiesControllerUpdate**](docs/AmenitiesApi.md#amenitiescontrollerupdate) | **PUT** /api/amenities/{id} | Update amenity
*AnalyticsApi* | [**analyticsControllerGetAnalyticsSummary**](docs/AnalyticsApi.md#analyticscontrollergetanalyticssummary) | **GET** /api/analytics/summary | Get analytics summary for a branch
*AnalyticsApi* | [**analyticsControllerGetOccupancyRate**](docs/AnalyticsApi.md#analyticscontrollergetoccupancyrate) | **GET** /api/analytics/occupancy | Get occupancy rate analytics
*AnalyticsApi* | [**analyticsControllerGetRevenueAnalytics**](docs/AnalyticsApi.md#analyticscontrollergetrevenueanalytics) | **GET** /api/analytics/revenue | Get revenue analytics
*AnalyticsApi* | [**analyticsControllerGetRoomPerformance**](docs/AnalyticsApi.md#analyticscontrollergetroomperformance) | **GET** /api/analytics/room-performance | Get room performance analytics
*AppApi* | [**appControllerGetHello**](docs/AppApi.md#appcontrollergethello) | **GET** / | 
*AuthApi* | [**authControllerChangePassword**](docs/AuthApi.md#authcontrollerchangepassword) | **POST** /api/auth/change-password | Change user password
*AuthApi* | [**authControllerGetActiveSessions**](docs/AuthApi.md#authcontrollergetactivesessions) | **GET** /api/auth/sessions | Get active sessions
*AuthApi* | [**authControllerGetProfile**](docs/AuthApi.md#authcontrollergetprofile) | **GET** /api/auth/profile | Get current user profile
*AuthApi* | [**authControllerGetSessionAnalytics**](docs/AuthApi.md#authcontrollergetsessionanalytics) | **GET** /api/auth/sessions/analytics | Get session analytics
*AuthApi* | [**authControllerGetSuspiciousActivities**](docs/AuthApi.md#authcontrollergetsuspiciousactivities) | **GET** /api/auth/users/{userId}/suspicious-activities | Get suspicious activities
*AuthApi* | [**authControllerInitiateForgotPassword**](docs/AuthApi.md#authcontrollerinitiateforgotpassword) | **POST** /api/auth/forgot-password/email/initiate | Initiate forgot password process
*AuthApi* | [**authControllerLogin**](docs/AuthApi.md#authcontrollerlogin) | **POST** /api/auth/login | 
*AuthApi* | [**authControllerLogout**](docs/AuthApi.md#authcontrollerlogout) | **POST** /api/auth/logout | Logout user
*AuthApi* | [**authControllerRefreshTokens**](docs/AuthApi.md#authcontrollerrefreshtokens) | **POST** /api/auth/refresh | Refresh access token
*AuthApi* | [**authControllerRegister**](docs/AuthApi.md#authcontrollerregister) | **POST** /api/auth/register | 
*AuthApi* | [**authControllerResetPasswordWithOTP**](docs/AuthApi.md#authcontrollerresetpasswordwithotp) | **POST** /api/auth/forgot-password/email/reset | Reset password using OTP
*AuthApi* | [**authControllerRevokeSession**](docs/AuthApi.md#authcontrollerrevokesession) | **POST** /api/auth/sessions/{sessionId}/revoke | Revoke specific session
*AuthApi* | [**authControllerUpdateProfile**](docs/AuthApi.md#authcontrollerupdateprofile) | **PATCH** /api/auth/profile | Update user profile
*AuthApi* | [**authControllerVerifyEmail**](docs/AuthApi.md#authcontrollerverifyemail) | **POST** /api/auth/verify-email | Verify email with OTP code
*BookingApi* | [**bookingControllerCancelBooking**](docs/BookingApi.md#bookingcontrollercancelbooking) | **PATCH** /api/booking/cancel/{bookingId} | Cancel a booking
*BookingApi* | [**bookingControllerCreateBookingDirectly**](docs/BookingApi.md#bookingcontrollercreatebookingdirectly) | **POST** /api/booking/directly | Create a new booking directly at the hotel
*BookingApi* | [**bookingControllerCreateBookingOnline**](docs/BookingApi.md#bookingcontrollercreatebookingonline) | **POST** /api/booking | Create a new booking online
*BookingApi* | [**bookingControllerFindById**](docs/BookingApi.md#bookingcontrollerfindbyid) | **GET** /api/booking/{bookingId} | Get booking details
*BookingApi* | [**bookingControllerGetBookings**](docs/BookingApi.md#bookingcontrollergetbookings) | **GET** /api/booking | Get all bookings with pagination and filters
*BookingApi* | [**bookingControllerGetMyBookings**](docs/BookingApi.md#bookingcontrollergetmybookings) | **GET** /api/booking/my-bookings | Get all my bookings with pagination and filters
*BookingApi* | [**bookingControllerHandlePaymentWebhook**](docs/BookingApi.md#bookingcontrollerhandlepaymentwebhook) | **POST** /api/booking/webhook/payment | Handle payment webhook from PayOS
*BookingApi* | [**bookingControllerUpdateBookingStatus**](docs/BookingApi.md#bookingcontrollerupdatebookingstatus) | **PATCH** /api/booking/update-status/{bookingId} | Update booking status
*BranchesApi* | [**branchControllerCreate**](docs/BranchesApi.md#branchcontrollercreate) | **POST** /api/branches | Create a new branch
*BranchesApi* | [**branchControllerFindDeleted**](docs/BranchesApi.md#branchcontrollerfinddeleted) | **GET** /api/branches/deleted | Get all soft-deleted branches
*BranchesApi* | [**branchControllerFindMany**](docs/BranchesApi.md#branchcontrollerfindmany) | **GET** /api/branches | Get all branches with pagination and filters
*BranchesApi* | [**branchControllerFindManyInfinite**](docs/BranchesApi.md#branchcontrollerfindmanyinfinite) | **GET** /api/branches/infinite | Get branches with infinite scroll for client app
*BranchesApi* | [**branchControllerFindOne**](docs/BranchesApi.md#branchcontrollerfindone) | **GET** /api/branches/{idOrSlug} | Get branch by ID or slug
*BranchesApi* | [**branchControllerGetLatestBranches**](docs/BranchesApi.md#branchcontrollergetlatestbranches) | **GET** /api/branches/latest | Get latest branches
*BranchesApi* | [**branchControllerRemove**](docs/BranchesApi.md#branchcontrollerremove) | **DELETE** /api/branches/{id} | Delete a branch
*BranchesApi* | [**branchControllerRestore**](docs/BranchesApi.md#branchcontrollerrestore) | **POST** /api/branches/{id}/restore | Restore a soft-deleted branch
*BranchesApi* | [**branchControllerUpdate**](docs/BranchesApi.md#branchcontrollerupdate) | **PATCH** /api/branches/{id} | Update a branch
*EmailApi* | [**emailControllerSendVerificationEmail**](docs/EmailApi.md#emailcontrollersendverificationemail) | **POST** /api/email/send-verification | Send verification email
*ImagesApi* | [**imagesControllerGetImageByPublicId**](docs/ImagesApi.md#imagescontrollergetimagebypublicid) | **GET** /api/images/{publicId} | Get image by public id
*ImagesApi* | [**imagesControllerUploadIcon**](docs/ImagesApi.md#imagescontrolleruploadicon) | **POST** /api/images/icon | Upload amenity icon
*ImagesApi* | [**imagesControllerUploadImages**](docs/ImagesApi.md#imagescontrolleruploadimages) | **POST** /api/images | Upload multiple image
*POEditorApi* | [**poeditorControllerAddTranslation**](docs/POEditorApi.md#poeditorcontrolleraddtranslation) | **POST** /api/poeditor/translations | Add translations to POEditor project
*POEditorApi* | [**poeditorControllerGetTranslations**](docs/POEditorApi.md#poeditorcontrollergettranslations) | **POST** /api/poeditor/translations-list | Get translations from POEditor project
*PayOSApi* | [**payosControllerCancelPayment**](docs/PayOSApi.md#payoscontrollercancelpayment) | **POST** /api/payos/cancel-payment | Cancel a payment link
*PayOSApi* | [**payosControllerCreatePaymentRequest**](docs/PayOSApi.md#payoscontrollercreatepaymentrequest) | **POST** /api/payos/payment-request | Create a new payment request
*PayOSApi* | [**payosControllerGetPaymentStatus**](docs/PayOSApi.md#payoscontrollergetpaymentstatus) | **GET** /api/payos/payment-status/{paymentLinkId} | Get payment status
*PayOSApi* | [**payosControllerHandleWebhook**](docs/PayOSApi.md#payoscontrollerhandlewebhook) | **POST** /api/payos/webhook | Handle payment confirmation webhook
*ProvincesApi* | [**provincesControllerCreate**](docs/ProvincesApi.md#provincescontrollercreate) | **POST** /api/provinces | Create a new province
*ProvincesApi* | [**provincesControllerFindDeleted**](docs/ProvincesApi.md#provincescontrollerfinddeleted) | **GET** /api/provinces/deleted | Get all soft-deleted provinces
*ProvincesApi* | [**provincesControllerFindMany**](docs/ProvincesApi.md#provincescontrollerfindmany) | **GET** /api/provinces | Get all provinces with pagination and filters
*ProvincesApi* | [**provincesControllerFindOne**](docs/ProvincesApi.md#provincescontrollerfindone) | **GET** /api/provinces/{id} | Get province by ID
*ProvincesApi* | [**provincesControllerRemove**](docs/ProvincesApi.md#provincescontrollerremove) | **DELETE** /api/provinces/{id} | Delete a province
*ProvincesApi* | [**provincesControllerRestore**](docs/ProvincesApi.md#provincescontrollerrestore) | **POST** /api/provinces/{id}/restore | Restore a soft-deleted province
*ProvincesApi* | [**provincesControllerUpdate**](docs/ProvincesApi.md#provincescontrollerupdate) | **PATCH** /api/provinces/{id} | Update a province
*RoomDetailsApi* | [**roomDetailControllerCreate**](docs/RoomDetailsApi.md#roomdetailcontrollercreate) | **POST** /api/room-details | Create a new room detail
*RoomDetailsApi* | [**roomDetailControllerFindDeleted**](docs/RoomDetailsApi.md#roomdetailcontrollerfinddeleted) | **GET** /api/room-details/deleted | Get all soft-deleted room details
*RoomDetailsApi* | [**roomDetailControllerFindMany**](docs/RoomDetailsApi.md#roomdetailcontrollerfindmany) | **GET** /api/room-details | Get all room details with pagination and filters
*RoomDetailsApi* | [**roomDetailControllerFindManyInfinite**](docs/RoomDetailsApi.md#roomdetailcontrollerfindmanyinfinite) | **GET** /api/room-details/infinite | Get all room details with infinite pagination and filters
*RoomDetailsApi* | [**roomDetailControllerFindOne**](docs/RoomDetailsApi.md#roomdetailcontrollerfindone) | **GET** /api/room-details/{id} | Get a room detail by id
*RoomDetailsApi* | [**roomDetailControllerRemove**](docs/RoomDetailsApi.md#roomdetailcontrollerremove) | **DELETE** /api/room-details/{id} | Soft delete a room detail
*RoomDetailsApi* | [**roomDetailControllerRestore**](docs/RoomDetailsApi.md#roomdetailcontrollerrestore) | **POST** /api/room-details/{id}/restore | Restore a soft-deleted room detail
*RoomDetailsApi* | [**roomDetailControllerUpdate**](docs/RoomDetailsApi.md#roomdetailcontrollerupdate) | **PATCH** /api/room-details/{id} | Update a room detail
*RoomPriceHistoriesApi* | [**roomPriceHistoryControllerCreate**](docs/RoomPriceHistoriesApi.md#roompricehistorycontrollercreate) | **POST** /api/room-price-histories | Create a new room price history
*RoomPriceHistoriesApi* | [**roomPriceHistoryControllerFindManyByRoomDetail**](docs/RoomPriceHistoriesApi.md#roompricehistorycontrollerfindmanybyroomdetail) | **GET** /api/room-price-histories/room-detail/{roomDetailId} | Get all price histories for a specific room detail
*RoomPriceHistoriesApi* | [**roomPriceHistoryControllerRemove**](docs/RoomPriceHistoriesApi.md#roompricehistorycontrollerremove) | **DELETE** /api/room-price-histories/{id} | Delete a room price history
*RoomPriceHistoriesApi* | [**roomPriceHistoryControllerUpdate**](docs/RoomPriceHistoriesApi.md#roompricehistorycontrollerupdate) | **PATCH** /api/room-price-histories/{id} | Update a room price history
*RoomPromotionsApi* | [**roomPromotionControllerCreate**](docs/RoomPromotionsApi.md#roompromotioncontrollercreate) | **POST** /api/room-promotions | Create a new room promotion
*RoomPromotionsApi* | [**roomPromotionControllerFindDeleted**](docs/RoomPromotionsApi.md#roompromotioncontrollerfinddeleted) | **GET** /api/room-promotions/deleted | Get all soft-deleted room promotions
*RoomPromotionsApi* | [**roomPromotionControllerFindMany**](docs/RoomPromotionsApi.md#roompromotioncontrollerfindmany) | **GET** /api/room-promotions | Get all room promotions with pagination and filters
*RoomPromotionsApi* | [**roomPromotionControllerFindOne**](docs/RoomPromotionsApi.md#roompromotioncontrollerfindone) | **GET** /api/room-promotions/{id} | Get room promotion by ID
*RoomPromotionsApi* | [**roomPromotionControllerRemove**](docs/RoomPromotionsApi.md#roompromotioncontrollerremove) | **DELETE** /api/room-promotions/{id} | Delete a room promotion
*RoomPromotionsApi* | [**roomPromotionControllerRestore**](docs/RoomPromotionsApi.md#roompromotioncontrollerrestore) | **POST** /api/room-promotions/{id}/restore | Restore a soft-deleted room promotion
*RoomPromotionsApi* | [**roomPromotionControllerUpdate**](docs/RoomPromotionsApi.md#roompromotioncontrollerupdate) | **PATCH** /api/room-promotions/{id} | Update a room promotion
*RoomPromotionsApi* | [**roomPromotionControllerValidatePromotionCode**](docs/RoomPromotionsApi.md#roompromotioncontrollervalidatepromotioncode) | **GET** /api/room-promotions/validate/{code}/room/{roomDetailId} | Validate a promotion code for a specific room
*RoomsApi* | [**roomControllerCreate**](docs/RoomsApi.md#roomcontrollercreate) | **POST** /api/rooms | Create a new room
*RoomsApi* | [**roomControllerFindDeleted**](docs/RoomsApi.md#roomcontrollerfinddeleted) | **GET** /api/rooms/deleted | Get all soft-deleted rooms
*RoomsApi* | [**roomControllerFindMany**](docs/RoomsApi.md#roomcontrollerfindmany) | **GET** /api/rooms | Get all rooms with pagination and filters
*RoomsApi* | [**roomControllerFindManyByBranchId**](docs/RoomsApi.md#roomcontrollerfindmanybybranchid) | **GET** /api/rooms/in-branch/{branchId} | ADMIN - STAFF Get all rooms by branch ID
*RoomsApi* | [**roomControllerFindOne**](docs/RoomsApi.md#roomcontrollerfindone) | **GET** /api/rooms/{id} | Get a room by id
*RoomsApi* | [**roomControllerPermanentDelete**](docs/RoomsApi.md#roomcontrollerpermanentdelete) | **DELETE** /api/rooms/permanent-delete | ADMIN - Delete rooms permanently
*RoomsApi* | [**roomControllerRemove**](docs/RoomsApi.md#roomcontrollerremove) | **DELETE** /api/rooms/{id} | Soft delete a room
*RoomsApi* | [**roomControllerRestore**](docs/RoomsApi.md#roomcontrollerrestore) | **POST** /api/rooms/{id}/restore | Restore a soft-deleted room
*RoomsApi* | [**roomControllerUpdate**](docs/RoomsApi.md#roomcontrollerupdate) | **PATCH** /api/rooms/{id} | Update a room
*UsersApi* | [**usersControllerAdminGetUserDetail**](docs/UsersApi.md#userscontrolleradmingetuserdetail) | **GET** /api/users/admin/{id} | Get detailed user information (Admin only)
*UsersApi* | [**usersControllerAdminUpdateUser**](docs/UsersApi.md#userscontrolleradminupdateuser) | **PATCH** /api/users/admin/{id} | Update user information (Admin only)
*UsersApi* | [**usersControllerBlockUser**](docs/UsersApi.md#userscontrollerblockuser) | **POST** /api/users/block-action/{id} | Block or unblock a user
*UsersApi* | [**usersControllerDeleteUser**](docs/UsersApi.md#userscontrollerdeleteuser) | **DELETE** /api/users/{id} | Soft delete a user (Admin only)
*UsersApi* | [**usersControllerGetUsers**](docs/UsersApi.md#userscontrollergetusers) | **GET** /api/users | 
*UsersApi* | [**usersControllerRestoreUser**](docs/UsersApi.md#userscontrollerrestoreuser) | **POST** /api/users/{id}/restore | Restore a deleted user (Admin only)
*VerificationApi* | [**verificationControllerVerifyCode**](docs/VerificationApi.md#verificationcontrollerverifycode) | **POST** /api/verification/verify | Verify a code
*VerificationApi* | [**verificationControllerVerifyEmailOTP**](docs/VerificationApi.md#verificationcontrollerverifyemailotp) | **POST** /api/verification/verify-email-otp | Verify an email OTP


### Documentation For Models

 - [AddTranslationDto](docs/AddTranslationDto.md)
 - [AdminUpdateUserDto](docs/AdminUpdateUserDto.md)
 - [AmenitiesPaginationResultDto](docs/AmenitiesPaginationResultDto.md)
 - [Amenity](docs/Amenity.md)
 - [AmenityTranslationDto](docs/AmenityTranslationDto.md)
 - [AnalyticsSummaryDto](docs/AnalyticsSummaryDto.md)
 - [AuthErrorMessageEnum](docs/AuthErrorMessageEnum.md)
 - [BlockActivity](docs/BlockActivity.md)
 - [BlockOrUnblockUserDto](docs/BlockOrUnblockUserDto.md)
 - [Booking](docs/Booking.md)
 - [BookingErrorMessagesEnum](docs/BookingErrorMessagesEnum.md)
 - [BookingsPaginationResultDto](docs/BookingsPaginationResultDto.md)
 - [Branch](docs/Branch.md)
 - [BranchDetail](docs/BranchDetail.md)
 - [BranchTranslationDto](docs/BranchTranslationDto.md)
 - [BranchTranslationsInner](docs/BranchTranslationsInner.md)
 - [BranchesInfinitePaginationResultDto](docs/BranchesInfinitePaginationResultDto.md)
 - [BranchesPaginationResultDto](docs/BranchesPaginationResultDto.md)
 - [CancelBookingDto](docs/CancelBookingDto.md)
 - [CancelPaymentRequestDto](docs/CancelPaymentRequestDto.md)
 - [ChangePasswordDto](docs/ChangePasswordDto.md)
 - [CommonErrorMessagesEnum](docs/CommonErrorMessagesEnum.md)
 - [ConfirmPaymentWebhookDto](docs/ConfirmPaymentWebhookDto.md)
 - [CreateAmenityDto](docs/CreateAmenityDto.md)
 - [CreateBookingAtHotelDto](docs/CreateBookingAtHotelDto.md)
 - [CreateBookingOnlineDto](docs/CreateBookingOnlineDto.md)
 - [CreateBranchDto](docs/CreateBranchDto.md)
 - [CreateHotelRoomDto](docs/CreateHotelRoomDto.md)
 - [CreatePaymentRequestDto](docs/CreatePaymentRequestDto.md)
 - [CreateProvinceDto](docs/CreateProvinceDto.md)
 - [CreateRoomDetailDto](docs/CreateRoomDetailDto.md)
 - [CreateRoomPriceHistoryDto](docs/CreateRoomPriceHistoryDto.md)
 - [CreateRoomPromotionDto](docs/CreateRoomPromotionDto.md)
 - [CreateUserDto](docs/CreateUserDto.md)
 - [DeleteUserDto](docs/DeleteUserDto.md)
 - [DetailTranslationContent](docs/DetailTranslationContent.md)
 - [ExposedEnumsDto](docs/ExposedEnumsDto.md)
 - [FilterAmenityDto](docs/FilterAmenityDto.md)
 - [FilterBookingsDto](docs/FilterBookingsDto.md)
 - [FilterBranchesDto](docs/FilterBranchesDto.md)
 - [FilterHotelRoomDto](docs/FilterHotelRoomDto.md)
 - [FilterMyBookingsDto](docs/FilterMyBookingsDto.md)
 - [FilterProvincesDto](docs/FilterProvincesDto.md)
 - [FilterRoomDetailDto](docs/FilterRoomDetailDto.md)
 - [FilterRoomPromotionDto](docs/FilterRoomPromotionDto.md)
 - [FilterUserDto](docs/FilterUserDto.md)
 - [GetAnalyticsQueryDto](docs/GetAnalyticsQueryDto.md)
 - [GetTranslationsRequestDto](docs/GetTranslationsRequestDto.md)
 - [GuestDetail](docs/GuestDetail.md)
 - [HotelRoom](docs/HotelRoom.md)
 - [HotelRoomPaginationResultDto](docs/HotelRoomPaginationResultDto.md)
 - [HotelRoomTranslationDto](docs/HotelRoomTranslationDto.md)
 - [Image](docs/Image.md)
 - [ImageErrorMessagesEnum](docs/ImageErrorMessagesEnum.md)
 - [ImageUploadResponseDto](docs/ImageUploadResponseDto.md)
 - [ImmediateDeleteRoomsDto](docs/ImmediateDeleteRoomsDto.md)
 - [InitiateForgotPasswordEmailDto](docs/InitiateForgotPasswordEmailDto.md)
 - [ListTranslationResponseDto](docs/ListTranslationResponseDto.md)
 - [ListTranslationResult](docs/ListTranslationResult.md)
 - [Location](docs/Location.md)
 - [LoginDto](docs/LoginDto.md)
 - [LoginResponseDto](docs/LoginResponseDto.md)
 - [LogoutResponseDto](docs/LogoutResponseDto.md)
 - [NearBy](docs/NearBy.md)
 - [OccupancyRateResponseDto](docs/OccupancyRateResponseDto.md)
 - [PaymentItemDto](docs/PaymentItemDto.md)
 - [PromotionTranslation](docs/PromotionTranslation.md)
 - [PromotionTranslationDto](docs/PromotionTranslationDto.md)
 - [Province](docs/Province.md)
 - [ProvinceCount](docs/ProvinceCount.md)
 - [ProvincePaginationResultDto](docs/ProvincePaginationResultDto.md)
 - [ProvinceTranslationDto](docs/ProvinceTranslationDto.md)
 - [ProvinceTranslationsInner](docs/ProvinceTranslationsInner.md)
 - [QueryAmenityDto](docs/QueryAmenityDto.md)
 - [QueryBookingsDto](docs/QueryBookingsDto.md)
 - [QueryBranchesDto](docs/QueryBranchesDto.md)
 - [QueryHotelRoomDto](docs/QueryHotelRoomDto.md)
 - [QueryMyBookingsDto](docs/QueryMyBookingsDto.md)
 - [QueryProvincesDto](docs/QueryProvincesDto.md)
 - [QueryRoomDetailDto](docs/QueryRoomDetailDto.md)
 - [QueryRoomPromotionDto](docs/QueryRoomPromotionDto.md)
 - [QueryUsersDto](docs/QueryUsersDto.md)
 - [RefreshTokenDto](docs/RefreshTokenDto.md)
 - [RefreshTokenResponseDto](docs/RefreshTokenResponseDto.md)
 - [RegisterDto](docs/RegisterDto.md)
 - [RegisterResponseDto](docs/RegisterResponseDto.md)
 - [ResetPasswordWithOTPEmailDto](docs/ResetPasswordWithOTPEmailDto.md)
 - [ResponseStatus](docs/ResponseStatus.md)
 - [ResponseWithMessage](docs/ResponseWithMessage.md)
 - [RevenueByRoomTypeDto](docs/RevenueByRoomTypeDto.md)
 - [RevenueTimelineDto](docs/RevenueTimelineDto.md)
 - [RevokeSessionResponseDto](docs/RevokeSessionResponseDto.md)
 - [RoleErrorMessagesEnum](docs/RoleErrorMessagesEnum.md)
 - [RoomDetail](docs/RoomDetail.md)
 - [RoomDetailInfinitePaginationResultDto](docs/RoomDetailInfinitePaginationResultDto.md)
 - [RoomDetailPaginationResultDto](docs/RoomDetailPaginationResultDto.md)
 - [RoomDetailTranslationDto](docs/RoomDetailTranslationDto.md)
 - [RoomErrorMessagesEnum](docs/RoomErrorMessagesEnum.md)
 - [RoomPerformanceDto](docs/RoomPerformanceDto.md)
 - [RoomPriceHistory](docs/RoomPriceHistory.md)
 - [RoomPriceHistoryTranslationDto](docs/RoomPriceHistoryTranslationDto.md)
 - [RoomPriceHistoryTranslationsInner](docs/RoomPriceHistoryTranslationsInner.md)
 - [RoomPromotion](docs/RoomPromotion.md)
 - [RoomPromotionPaginationResultDto](docs/RoomPromotionPaginationResultDto.md)
 - [SessionResponseDto](docs/SessionResponseDto.md)
 - [SortAmenityDto](docs/SortAmenityDto.md)
 - [SortBookingsDto](docs/SortBookingsDto.md)
 - [SortBranchDto](docs/SortBranchDto.md)
 - [SortCaseEnum](docs/SortCaseEnum.md)
 - [SortHotelRoomDto](docs/SortHotelRoomDto.md)
 - [SortProvinceDto](docs/SortProvinceDto.md)
 - [SortRoomDetailDto](docs/SortRoomDetailDto.md)
 - [SortRoomPromotionDto](docs/SortRoomPromotionDto.md)
 - [SortUserDto](docs/SortUserDto.md)
 - [Term](docs/Term.md)
 - [TranslationContent](docs/TranslationContent.md)
 - [TranslationData](docs/TranslationData.md)
 - [UpdateAmenityDto](docs/UpdateAmenityDto.md)
 - [UpdateBookingStatusDto](docs/UpdateBookingStatusDto.md)
 - [UpdateBranchDto](docs/UpdateBranchDto.md)
 - [UpdateHotelRoomDto](docs/UpdateHotelRoomDto.md)
 - [UpdateProfileDto](docs/UpdateProfileDto.md)
 - [UpdateProvinceDto](docs/UpdateProvinceDto.md)
 - [UpdateRoomDetailDto](docs/UpdateRoomDetailDto.md)
 - [UpdateRoomPriceHistoryDto](docs/UpdateRoomPriceHistoryDto.md)
 - [UpdateRoomPromotionDto](docs/UpdateRoomPromotionDto.md)
 - [User](docs/User.md)
 - [UserCount](docs/UserCount.md)
 - [UserDetail](docs/UserDetail.md)
 - [UsersPaginationResultDto](docs/UsersPaginationResultDto.md)
 - [UsersPaginationResultDtoMeta](docs/UsersPaginationResultDtoMeta.md)
 - [VerificationEmailDto](docs/VerificationEmailDto.md)
 - [VerifyCodeDto](docs/VerifyCodeDto.md)
 - [VerifyCodeResponseDto](docs/VerifyCodeResponseDto.md)
 - [VerifyEmailDto](docs/VerifyEmailDto.md)
 - [VerifyEmailOTP](docs/VerifyEmailOTP.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="bearer"></a>
### bearer

- **Type**: Bearer authentication (JWT)

