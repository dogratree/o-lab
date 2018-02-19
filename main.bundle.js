webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"theme-cyan\">\r\n    <app-header></app-header>\r\n    <app-add-sidebar></app-add-sidebar>\r\n    <app-sidebar></app-sidebar>\r\n\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_datepicker__ = __webpack_require__("../../../../ng2-datepicker/bundles/ng2-datepicker.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_datepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_datepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/core/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_header_header_component__ = __webpack_require__("../../../../../src/app/core/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_add_sidebar_add_sidebar_component__ = __webpack_require__("../../../../../src/app/core/add-sidebar/add-sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__core_sidebar_profile_login_profile_login_component__ = __webpack_require__("../../../../../src/app/core/sidebar/profile-login/profile-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__core_sidebar_menu_menu_component__ = __webpack_require__("../../../../../src/app/core/sidebar/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__patients_patients_component__ = __webpack_require__("../../../../../src/app/patients/patients.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__doctors_doctors_component__ = __webpack_require__("../../../../../src/app/doctors/doctors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__hospitals_hospitals_component__ = __webpack_require__("../../../../../src/app/hospitals/hospitals.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__wards_wards_component__ = __webpack_require__("../../../../../src/app/wards/wards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__medicaltechnicians_medicaltechnicians_component__ = __webpack_require__("../../../../../src/app/medicaltechnicians/medicaltechnicians.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__labs_groups_groups_component__ = __webpack_require__("../../../../../src/app/labs/groups/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__labs_specimens_specimens_component__ = __webpack_require__("../../../../../src/app/labs/specimens/specimens.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__labs_labs_labs_component__ = __webpack_require__("../../../../../src/app/labs/labs/labs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__orders_orders_component__ = __webpack_require__("../../../../../src/app/orders/orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__results_results_component__ = __webpack_require__("../../../../../src/app/results/results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__securityusers_rules_rules_component__ = __webpack_require__("../../../../../src/app/securityusers/rules/rules.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__securityusers_users_users_component__ = __webpack_require__("../../../../../src/app/securityusers/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__patients_patient_add_component__ = __webpack_require__("../../../../../src/app/patients/patient-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__doctors_doctor_add_component__ = __webpack_require__("../../../../../src/app/doctors/doctor-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__hospitals_hospital_add_component__ = __webpack_require__("../../../../../src/app/hospitals/hospital-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__medicaltechnicians_medicaltechnician_add_component__ = __webpack_require__("../../../../../src/app/medicaltechnicians/medicaltechnician-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__wards_ward_add_component__ = __webpack_require__("../../../../../src/app/wards/ward-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__labs_groups_group_add_component__ = __webpack_require__("../../../../../src/app/labs/groups/group-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__labs_specimens_specimen_add_component__ = __webpack_require__("../../../../../src/app/labs/specimens/specimen-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__labs_labs_lab_add_component__ = __webpack_require__("../../../../../src/app/labs/labs/lab-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__results_result_detail_component__ = __webpack_require__("../../../../../src/app/results/result-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__orders_order_detail_component__ = __webpack_require__("../../../../../src/app/orders/order-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__patients_patient_info_component__ = __webpack_require__("../../../../../src/app/patients/patient-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__orders_order_price_component__ = __webpack_require__("../../../../../src/app/orders/order-price.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__core_sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__core_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__core_add_sidebar_add_sidebar_component__["a" /* AddSidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__core_sidebar_profile_login_profile_login_component__["a" /* ProfileLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_9__core_sidebar_menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__patients_patients_component__["a" /* PatientsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__doctors_doctors_component__["a" /* DoctorsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__hospitals_hospitals_component__["a" /* HospitalsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__wards_wards_component__["a" /* WardsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__medicaltechnicians_medicaltechnicians_component__["a" /* MedicaltechniciansComponent */],
                __WEBPACK_IMPORTED_MODULE_16__labs_groups_groups_component__["a" /* GroupsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__labs_specimens_specimens_component__["a" /* SpecimensComponent */],
                __WEBPACK_IMPORTED_MODULE_18__labs_labs_labs_component__["a" /* LabsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__orders_orders_component__["a" /* OrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_20__results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__securityusers_rules_rules_component__["a" /* RulesComponent */],
                __WEBPACK_IMPORTED_MODULE_22__securityusers_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_23__patients_patient_add_component__["a" /* PatientAddComponent */],
                __WEBPACK_IMPORTED_MODULE_24__doctors_doctor_add_component__["a" /* DoctorAddComponent */],
                __WEBPACK_IMPORTED_MODULE_25__hospitals_hospital_add_component__["a" /* HospitalAddComponent */],
                __WEBPACK_IMPORTED_MODULE_26__medicaltechnicians_medicaltechnician_add_component__["a" /* MedicaltechnicianAddComponent */],
                __WEBPACK_IMPORTED_MODULE_27__wards_ward_add_component__["a" /* WardAddComponent */],
                __WEBPACK_IMPORTED_MODULE_28__labs_groups_group_add_component__["a" /* GroupAddComponent */],
                __WEBPACK_IMPORTED_MODULE_29__labs_specimens_specimen_add_component__["a" /* SpecimenAddComponent */],
                __WEBPACK_IMPORTED_MODULE_30__labs_labs_lab_add_component__["a" /* LabAddComponent */],
                __WEBPACK_IMPORTED_MODULE_31__results_result_detail_component__["a" /* ResultDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_32__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_33__orders_order_detail_component__["a" /* OrderDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_34__patients_patient_info_component__["a" /* PatientInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_35__orders_order_price_component__["a" /* OrderPriceComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_datepicker__["NgDatepickerModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_20__results_results_component__["a" /* ResultsComponent */] },
                    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_10__dashboard_dashboard_component__["a" /* DashboardComponent */] },
                    { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_19__orders_orders_component__["a" /* OrdersComponent */] },
                    { path: 'orders/prices', component: __WEBPACK_IMPORTED_MODULE_35__orders_order_price_component__["a" /* OrderPriceComponent */] },
                    { path: 'orders/details', component: __WEBPACK_IMPORTED_MODULE_33__orders_order_detail_component__["a" /* OrderDetailComponent */] },
                    { path: 'results', component: __WEBPACK_IMPORTED_MODULE_20__results_results_component__["a" /* ResultsComponent */] },
                    { path: 'results/details', component: __WEBPACK_IMPORTED_MODULE_31__results_result_detail_component__["a" /* ResultDetailComponent */] },
                    { path: 'patients', component: __WEBPACK_IMPORTED_MODULE_11__patients_patients_component__["a" /* PatientsComponent */] },
                    { path: 'patients/add', component: __WEBPACK_IMPORTED_MODULE_23__patients_patient_add_component__["a" /* PatientAddComponent */] },
                    { path: 'patients/info', component: __WEBPACK_IMPORTED_MODULE_34__patients_patient_info_component__["a" /* PatientInfoComponent */] },
                    { path: 'doctors', component: __WEBPACK_IMPORTED_MODULE_12__doctors_doctors_component__["a" /* DoctorsComponent */] },
                    { path: 'doctors/add', component: __WEBPACK_IMPORTED_MODULE_24__doctors_doctor_add_component__["a" /* DoctorAddComponent */] },
                    { path: 'hospitals', component: __WEBPACK_IMPORTED_MODULE_13__hospitals_hospitals_component__["a" /* HospitalsComponent */] },
                    { path: 'hospitals/add', component: __WEBPACK_IMPORTED_MODULE_25__hospitals_hospital_add_component__["a" /* HospitalAddComponent */] },
                    { path: 'wards', component: __WEBPACK_IMPORTED_MODULE_14__wards_wards_component__["a" /* WardsComponent */] },
                    { path: 'wards/add', component: __WEBPACK_IMPORTED_MODULE_27__wards_ward_add_component__["a" /* WardAddComponent */] },
                    { path: 'medicaltechnicians', component: __WEBPACK_IMPORTED_MODULE_15__medicaltechnicians_medicaltechnicians_component__["a" /* MedicaltechniciansComponent */] },
                    { path: 'medicaltechnicians/add', component: __WEBPACK_IMPORTED_MODULE_26__medicaltechnicians_medicaltechnician_add_component__["a" /* MedicaltechnicianAddComponent */] },
                    { path: 'groups', component: __WEBPACK_IMPORTED_MODULE_16__labs_groups_groups_component__["a" /* GroupsComponent */] },
                    { path: 'groups/add', component: __WEBPACK_IMPORTED_MODULE_28__labs_groups_group_add_component__["a" /* GroupAddComponent */] },
                    { path: 'specimens', component: __WEBPACK_IMPORTED_MODULE_17__labs_specimens_specimens_component__["a" /* SpecimensComponent */] },
                    { path: 'specimens/add', component: __WEBPACK_IMPORTED_MODULE_29__labs_specimens_specimen_add_component__["a" /* SpecimenAddComponent */] },
                    { path: 'labs', component: __WEBPACK_IMPORTED_MODULE_18__labs_labs_labs_component__["a" /* LabsComponent */] },
                    { path: 'labs/add', component: __WEBPACK_IMPORTED_MODULE_30__labs_labs_lab_add_component__["a" /* LabAddComponent */] },
                    { path: 'rules', component: __WEBPACK_IMPORTED_MODULE_21__securityusers_rules_rules_component__["a" /* RulesComponent */] },
                    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_22__securityusers_users_users_component__["a" /* UsersComponent */] },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_32__login_login_component__["a" /* LoginComponent */] }
                ], { useHash: true })
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/add-sidebar/add-sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ul id=\"f-menu\" class=\"mfb-component--br mfb-zoomin\" data-mfb-toggle=\"hover\">\n    <li class=\"mfb-component__wrap\">\n      <a href=\"#\" class=\"mfb-component__button--main g-bg-cyan\">\n        <i class=\"mfb-component__main-icon--resting zmdi zmdi-plus\"></i>\n        <i class=\"mfb-component__main-icon--active zmdi zmdi-close\"></i>\n      </a>\n      <ul class=\"mfb-component__list\">\n        <li>\n          <a [routerLink]=\"['/orders']\" data-mfb-label=\"Add Order\" class=\"mfb-component__button--child bg-blue\">\n            <i class=\"zmdi zmdi-calendar mfb-component__child-icon\"></i>\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/patients/add']\" data-mfb-label=\"Add Patient\" class=\"mfb-component__button--child bg-orange\">\n            <i class=\"zmdi zmdi-account-o mfb-component__child-icon\"></i>\n          </a>\n        </li>\n      </ul>\n    </li>\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/core/add-sidebar/add-sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddSidebarComponent = (function () {
    function AddSidebarComponent() {
    }
    AddSidebarComponent.prototype.ngOnInit = function () {
    };
    AddSidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-sidebar',
            template: __webpack_require__("../../../../../src/app/core/add-sidebar/add-sidebar.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], AddSidebarComponent);
    return AddSidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-loader-wrapper\">\n  <div class=\"loader\">\n    <div class=\"preloader\">\n      <div class=\"spinner-layer pl-cyan\">\n        <div class=\"circle-clipper left\">\n          <div class=\"circle\"></div>\n        </div>\n        <div class=\"circle-clipper right\">\n          <div class=\"circle\"></div>\n        </div>\n      </div>\n    </div>\n    <p>Please wait...</p>\n  </div>\n</div>\n\n<div class=\"overlay\"></div>\n<div class=\"color-bg\"></div>\n\n<nav class=\"navbar clearHeader\">\n    <div class=\"col-12\">\n      <div class=\"navbar-header\">\n        <a href=\"javascript:void(0);\" class=\"bars\"></a>\n        <a class=\"navbar-brand\" href=\"index.html\">SUNPASIT HOSPITAL</a>\n      </div>\n    </div>\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/core/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/core/header/header.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/sidebar/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"menu\">\n  <ul class=\"list demo-icon-container\">\n\n\n    <li class=\"header\">Main Navigation</li>\n    <li>\n      <a [routerLink]=\"['dashboard']\">\n        <i class=\"fas fa-chart-pie\"></i>\n        <span>Dash Board</span>\n      </a>\n    </li>\n    <li>\n      <a [routerLink]=\"['orders']\">\n        <i class=\"fas fa-heartbeat\"></i>\n        <span>Order Entry</span>\n      </a>\n    </li>\n    <li class=\"active open\">\n      <a [routerLink]=\"['results']\">\n        <i class=\"fas fa-chart-bar\"></i>\n        <span>Result Entry</span>\n      </a>\n    </li>\n\n\n    <li>\n      <a href=\"javascript:void(0);\" class=\"header menu-toggle\">\n        <i class=\"fas fa-wrench\"></i>\n        <span>Master Data</span>\n      </a>\n      <ul class=\"ml-menu\">\n        <li>\n          <a [routerLink]=\"['patients']\">\n            <i class=\"fas fa-user\"></i>\n            <span>Patient</span>\n          </a>\n          <a [routerLink]=\"['doctors']\">\n            <i class=\"fas fa-stethoscope\"></i>\n            <span>Doctor</span>\n          </a>\n          <a [routerLink]=\"['hospitals']\">\n            <i class=\"fas fa-hospital\"></i>\n            <span>Hospital</span>\n          </a>\n          <a [routerLink]=\"['medicaltechnicians']\">\n            <i class=\"fas fa-user-md\"></i>\n            <span>Medical Technician </span>\n          </a>\n        </li>\n      </ul>\n    </li>\n\n\n    <li>\n      <a href=\"javascript:void(0);\" class=\"header menu-toggle\">\n        <i class=\"fas fa-flask\"></i>\n        <span>Laboratory</span>\n      </a>\n      <ul class=\"ml-menu\">\n        <li>\n          <a [routerLink]=\"['groups']\">\n            <i class=\"fas fa-sitemap\"></i>\n            <span>Groups</span>\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['specimens']\">\n            <i class=\"fas fa-eye-dropper\"></i>\n            <span>Specimens</span>\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['labs']\">\n            <i class=\"fas fa-list-alt\"></i>\n            <span>Labs</span>\n          </a>\n        </li>\n      </ul>\n    </li>\n\n\n\n    <li>\n      <a href=\"javascript:void(0);\" class=\"header menu-toggle\">\n        <i class=\"fas fa-lock\"></i>\n        <span>Security Users</span>\n      </a>\n      <ul class=\"ml-menu\">\n        <li>\n            <a [routerLink]=\"['rules']\">\n            <i class=\"fas fa-users\"></i>\n            <span>Rule Engine</span>\n          </a>\n        </li>\n        <li>\n            <a [routerLink]=\"['users']\">\n            <i class=\"fas fa-user\"></i>\n            <span>User Accounts</span>\n          </a>\n        </li>\n      </ul>\n    </li>\n\n\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/core/sidebar/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/core/sidebar/menu/menu.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/sidebar/profile-login/profile-login.component.html":
/***/ (function(module, exports) {

module.exports = "      <div class=\"user-info\">\n        <div class=\"admin-image\">\n          <img src=\"assets/images/random-avatar7.jpg\" alt=\"\"> </div>\n        <div class=\"admin-action-info\">\n          <span>Welcome</span>\n          <h3>Dr. John</h3>\n          <ul>\n            <li>\n              <a data-placement=\"bottom\" title=\"Go to Profile\" href=\"profile.html\">\n                <i class=\"zmdi zmdi-account\"></i>\n              </a>\n            </li>\n            <li>\n              <a href=\"javascript:void(0);\" class=\"js-right-sidebar\" data-close=\"true\">\n                <i class=\"zmdi zmdi-settings\"></i>\n              </a>\n            </li>\n            <li>\n              <a data-placement=\"bottom\" title=\"Full Screen\" href=\"sign-in.html\">\n                <i class=\"zmdi zmdi-sign-in\"></i>\n              </a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"quick-stats\">\n          <h5>Today Report</h5>\n          <ul>\n            <li>\n              <span>16\n                <i>Patients</i>\n              </span>\n            </li>\n            <li>\n              <span>20\n                <i>Orders</i>\n              </span>\n            </li>\n            <li>\n                <span>3\n                  <i>Prints</i>\n                </span>\n              </li>\n          </ul>\n        </div>\n      </div>\n"

/***/ }),

/***/ "../../../../../src/app/core/sidebar/profile-login/profile-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileLoginComponent = (function () {
    function ProfileLoginComponent() {
    }
    ProfileLoginComponent.prototype.ngOnInit = function () {
    };
    ProfileLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile-login',
            template: __webpack_require__("../../../../../src/app/core/sidebar/profile-login/profile-login.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ProfileLoginComponent);
    return ProfileLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/core/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\n  <aside id=\"leftsidebar\" class=\"sidebar\">\n    <app-profile-login></app-profile-login>\n    <app-menu></app-menu>\n  </aside>\n</section>"

/***/ }),

/***/ "../../../../../src/app/core/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/core/sidebar/sidebar.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content home\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <h2>Dashboard</h2>\n            <small class=\"text-muted\">Welcome to Swift application</small>\n        </div>\n        \n        <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"info-box-4 hover-zoom-effect\">\n                    <div class=\"icon\"> <i class=\"zmdi zmdi-account col-blue\"></i> </div>\n                    <div class=\"content\">\n                        <div class=\"text\">New Patient</div>\n                        <div class=\"number\">27</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"info-box-4 hover-zoom-effect\">\n                    <div class=\"icon\"> <i class=\"zmdi zmdi-account col-green\"></i> </div>\n                    <div class=\"content\">\n                        <div class=\"text\">OPD Patient</div>\n                        <div class=\"number\">12</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"info-box-4 hover-zoom-effect\">\n                    <div class=\"icon\"> <i class=\"zmdi zmdi-bug col-blush\"></i> </div>\n                    <div class=\"content\">\n                        <div class=\"text\">Today's Operations</div>\n                        <div class=\"number\">05</div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-3 col-sm-6\">\n                <div class=\"info-box-4 hover-zoom-effect\">\n                    <div class=\"icon\"> <i class=\"zmdi zmdi-balance col-cyan\"></i> </div>\n                    <div class=\"content\">\n                        <div class=\"text\">Hospital Earning</div>\n                        <div class=\"number\">$3,540</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2>Hospital Survey</h2>\n                        <ul class=\"header-dropdown\">\n                            <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"zmdi zmdi-more-vert\"></i></a>\n                                <ul class=\"dropdown-menu float-right\">\n                                    <li><a href=\"javascript:void(0);\">Action</a></li>\n                                    <li><a href=\"javascript:void(0);\">Another action</a></li>\n                                    <li><a href=\"javascript:void(0);\">Something else here</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <canvas id=\"line_chart\" height=\"70\"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2>New Patient <small >18% High then last month</small></h2>\n                        <ul class=\"header-dropdown\">\n                            <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"zmdi zmdi-more-vert\"></i></a>\n                                <ul class=\"dropdown-menu float-right\">\n                                    <li><a href=\"javascript:void(0);\">Action</a></li>\n                                    <li><a href=\"javascript:void(0);\">Another action</a></li>\n                                    <li><a href=\"javascript:void(0);\">Something else here</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <div class=\"stats-report\">\n                          <div class=\"stat-item\">\n                            <h5>Overall</h5>\n                            <b class=\"col-indigo\">70.40%</b></div>\n                          <div class=\"stat-item\">\n                            <h5>Montly</h5>\n                            <b class=\"col-indigo\">25.80%</b></div>\n                          <div class=\"stat-item\">\n                            <h5>Day</h5>\n                            <b class=\"col-indigo\">12.50%</b></div>\n                        </div>\n                        <div class=\"sparkline\" data-type=\"line\" data-spot-Radius=\"3\" data-highlight-Spot-Color=\"rgb(63, 81, 181)\" data-highlight-Line-Color=\"#222\"\n                                 data-min-Spot-Color=\"rgb(233, 30, 99)\" data-max-Spot-Color=\"rgb(63, 81, 181)\" data-spot-Color=\"rgb(63, 81, 181, 0.7)\"\n                                 data-offset=\"90\" data-width=\"100%\" data-height=\"100px\" data-line-Width=\"1\" data-line-Color=\"rgb(63, 81, 181, 0.7)\"\n                                 data-fill-Color=\"rgba(63, 81, 181, 0.3)\"> 6,1,3,3,6,3,2,2,8,2 </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2>Heart Surgeries <small>18% High then last month</small></h2>\n                        <ul class=\"header-dropdown\">\n                            <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"zmdi zmdi-more-vert\"></i></a>\n                                <ul class=\"dropdown-menu float-right\">\n                                    <li><a href=\"javascript:void(0);\">Action</a></li>\n                                    <li><a href=\"javascript:void(0);\">Another action</a></li>\n                                    <li><a href=\"javascript:void(0);\">Something else here</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <div class=\"stats-report\">\n                          <div class=\"stat-item\">\n                            <h5>Overall</h5>\n                            <b class=\"col-blue-grey\">80.40%</b></div>\n                          <div class=\"stat-item\">\n                            <h5>Montly</h5>\n                            <b class=\"col-blue-grey\">13.00%</b></div>\n                          <div class=\"stat-item\">\n                            <h5>Day</h5>\n                            <b class=\"col-blue-grey\">9.50%</b></div>\n                        </div>\n                        <div class=\"sparkline\" data-type=\"line\" data-spot-Radius=\"3\" data-highlight-Spot-Color=\"rgb(233, 30, 99)\" data-highlight-Line-Color=\"#222\"\n                                 data-min-Spot-Color=\"rgb(233, 30, 99)\" data-max-Spot-Color=\"rgb(96, 125, 139)\" data-spot-Color=\"rgb(96, 125, 139, 0.7)\"\n                                 data-offset=\"90\" data-width=\"100%\" data-height=\"100px\" data-line-Width=\"1\" data-line-Color=\"rgb(96, 125, 139, 0.7)\"\n                                 data-fill-Color=\"rgba(96, 125, 139, 0.3)\"> 6,4,7,8,4,3,2,2,5,6,7,4,1,5,7,9,9,8,7,6 </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-4 col-lg-4\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2>Medical Treatment <small>18% High then last month</small></h2>\n                        <ul class=\"header-dropdown\">\n                            <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"zmdi zmdi-more-vert\"></i></a>\n                                <ul class=\"dropdown-menu float-right\">\n                                    <li><a href=\"javascript:void(0);\">Action</a></li>\n                                    <li><a href=\"javascript:void(0);\">Another action</a></li>\n                                    <li><a href=\"javascript:void(0);\">Something else here</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <div class=\"stats-report\">\n                          <div class=\"stat-item\">\n                            <h5>Overall</h5>\n                            <b class=\"col-green\">84.60%</b></div>\n                          <div class=\"stat-item\">\n                            <h5>Montly</h5>\n                            <b class=\"col-green\">15.40%</b></div>\n                          <div class=\"stat-item\">\n                            <h5>Day</h5>\n                            <b class=\"col-green\">5.10%</b></div>\n                        </div>\n                        <div class=\"sparkline\" data-type=\"line\" data-spot-Radius=\"3\" data-highlight-Spot-Color=\"rgb(233, 30, 99)\" data-highlight-Line-Color=\"#222\"\n                                 data-min-Spot-Color=\"rgb(233, 30, 99)\" data-max-Spot-Color=\"rgb(120, 184, 62)\" data-spot-Color=\"rgb(120, 184, 62, 0.7)\"\n                                 data-offset=\"90\" data-width=\"100%\" data-height=\"100px\" data-line-Width=\"1\" data-line-Color=\"rgb(120, 184, 62, 0.7)\"\n                                 data-fill-Color=\"rgba(120, 184, 62, 0.3)\"> 6,4,7,6,9,3,3,5,7,4,2,3,7,6 </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2> New Patient List <small>Description text here...</small> </h2>\n                        <ul class=\"header-dropdown\">\n                            <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"zmdi zmdi-more-vert\"></i></a>\n                                <ul class=\"dropdown-menu float-right\">\n                                    <li><a href=\"javascript:void(0);\" class=\" waves-effect waves-block\">Action</a></li>\n                                    <li><a href=\"javascript:void(0);\" class=\" waves-effect waves-block\">Another action</a></li>\n                                    <li><a href=\"javascript:void(0);\" class=\" waves-effect waves-block\">Something else here</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <div class=\"table-responsive\">\n                          <table class=\"table table-striped\">\n                            <thead>\n                              <tr>\n                                <th>#</th>\n                                <th>First Name</th>\n                                <th>Last Name</th>\n                                <th>Username</th>\n                                <th>Diseases</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr>\n                                <td>1</td>\n                                <td>Virginia </td>\n                                <td>Rose</td>\n                                <td>@Rose</td>\n                                <td><span class=\"label label-danger\">Fever</span> </td>\n                              </tr>\n                              <tr>\n                                <td>2</td>\n                                <td>Julie </td>\n                                <td>Gaylord</td>\n                                <td>@Julie </td>\n                                <td><span class=\"label label-info\">Cancer</span> </td>\n                              </tr>\n                              <tr>\n                                <td>3</td>\n                                <td>Jacqueline </td>\n                                <td>Woods</td>\n                                <td>@Woods</td>\n                                <td><span class=\"label label-warning\">Lakva</span> </td>\n                              </tr>\n                              <tr>\n                                <td>4</td>\n                                <td>Jonathan </td>\n                                <td>Lewis</td>\n                                <td>@Jonathan </td>\n                                <td><span class=\"label label-success\">Dental</span> </td>\n                              </tr>\n                              <tr>\n                                <td>5</td>\n                                <td>Margaret </td>\n                                <td>Griffin</td>\n                                <td>@Margaret </td>\n                                <td><span class=\"label label-info\">Cancer</span> </td>\n                              </tr>\n                              <tr>\n                                <td>6</td>\n                                <td>Joseph </td>\n                                <td>Hunter</td>\n                                <td>@Hunter</td>\n                                <td><span class=\"label label-success\">Dental</span> </td>\n                              </tr>\n                            </tbody>\n                          </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-4 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2>PATIENT Reports</h2>\n                        <ul class=\"header-dropdown\">\n                            <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"zmdi zmdi-more-vert\"></i></a>\n                                <ul class=\"dropdown-menu float-right\">\n                                    <li><a href=\"javascript:void(0);\">Action</a></li>\n                                    <li><a href=\"javascript:void(0);\">Another action</a></li>\n                                    <li><a href=\"javascript:void(0);\">Something else here</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <div class=\"table-responsive\">\n                            <table class=\"table table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th>First Name</th>\n                                        <th>Charts</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Dean Otto</td>\n                                        <td>\n                                            <span class=\"sparkbar\">5,8,6,3,5,9,2</span>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>K. Thornton</td>\n                                        <td>\n                                        <span class=\"sparkbar\">10,8,9,3,5,8,5</span>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Kane D.</td>\n                                        <td>\n                                            <span class=\"sparkbar\">7,5,9,3,5,2,5</span>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Jack Bird</td>\n                                        <td>\n                                            <span class=\"sparkbar\">10,8,1,3,3,8,7</span>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Hughe L.</td>\n                                        <td>\n                                            <span class=\"sparkbar\">2,8,9,8,5,1,5</span>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Jack Bird</td>\n                                        <td>\n                                            <span class=\"sparkbar\">1,8,2,3,9,8,5</span>\n                                        </td>\n                                    </tr>\n                                    <tr>\n                                        <td>Hughe L.</td>\n                                        <td>\n                                            <span class=\"sparkbar\">10,8,1,3,2,8,5</span>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2>Visits from countries</h2>\n                        <ul class=\"header-dropdown\">\n                            <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"zmdi zmdi-more-vert\"></i></a>\n                                <ul class=\"dropdown-menu float-right\">\n                                    <li><a href=\"javascript:void(0);\" class=\" waves-effect waves-block\">Action</a></li>\n                                    <li><a href=\"javascript:void(0);\" class=\" waves-effect waves-block\">Another action</a></li>\n                                    <li><a href=\"javascript:void(0);\" class=\" waves-effect waves-block\">Something else here</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <ul class=\"country-state\">\n                            <li class=\"m-b-20\">\n                                <h4 class=\"m-b-0\">6350</h4> <small>From India</small>\n                                <div class=\"float-right\">58%</div>\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:58%;\"> <span class=\"sr-only\">58% Complete</span></div>\n                                </div>\n                            </li>\n                            <li class=\"m-b-20\">\n                                <h4 class=\"m-b-0\">3250</h4> <small>From UAE</small>\n                                <div class=\"float-right\">90%</div>\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar progress-bar-inverse\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:90%;\"> <span class=\"sr-only\">90% Complete</span></div>\n                                </div>\n                            </li>\n                            <li class=\"m-b-20\">\n                                <h4 class=\"m-b-0\">1250</h4> <small>From Australia</small>\n                                <div class=\"float-right\">70%</div>\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%;\"> <span class=\"sr-only\">70% Complete</span></div>\n                                </div>\n                            </li>\n                            <li  class=\"m-b-20\">\n                                <h4 class=\"m-b-0\">1350</h4> <small>From USA</small>\n                                <div class=\"float-right\">70%</div>\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:70%;\"> <span class=\"sr-only\">70% Complete</span></div>\n                                </div>\n                            </li>\n                            <li>\n                                <h4 class=\"m-b-0\">1250</h4> <small>From UK</small>\n                                <div class=\"float-right\">65%</div>\n                                <div class=\"progress\">\n                                    <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width:65%;\"> <span class=\"sr-only\">65% Complete</span></div>\n                                </div>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"header\">\n                        <h2>PATIENT prograss</h2>\n                        <ul class=\"header-dropdown\">\n                            <li class=\"dropdown\"> <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\"><i class=\"zmdi zmdi-more-vert\"></i></a>\n                                <ul class=\"dropdown-menu float-right\">\n                                    <li><a href=\"javascript:void(0);\" class=\" waves-effect waves-block\">Action</a></li>\n                                    <li><a href=\"javascript:void(0);\" class=\" waves-effect waves-block\">Another action</a></li>\n                                    <li><a href=\"javascript:void(0);\" class=\" waves-effect waves-block\">Something else here</a></li>\n                                </ul>\n                            </li>\n                        </ul>\n                    </div>\n                    <div class=\"body\">\n                        <ul class=\"basic-list\">\n                            <li>Mark Otto <span class=\"label-danger label\">21%</span></li>\n                            <li>Jacob Thornton <span class=\"label-purple label\">50%</span></li>\n                            <li>Jacob Thornton<span class=\"label-success label\">90%</span></li>\n                            <li>M. Arthur <span class=\"label-info label\">75%</span></li>\n                            <li>Jacob Thornton <span class=\"label-warning label\">60%</span></li>\n                            <li>M. Arthur <span class=\"label-success label\">91%</span></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </div>\n\t</div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/doctors/doctor-add.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content patients\">\n  <div class=\"container-fluid\">\n    <div class=\"block-header\">\n      <h2>Add Doctor</h2>\n    </div>\n\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"body\">\n            <div class=\"row clearfix\">\n\n\n              <div class=\"col-lg-4 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Doctor Code\">\n                  </div>\n                </div>\n              </div>\n              \n              <div class=\"col-lg-4 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Doctor Name\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-4 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Phone\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <form action=\"/\" id=\"frmFileUpload\" class=\"dropzone\" method=\"post\" enctype=\"multipart/form-data\">\n                  <div class=\"dz-message\">\n                    <div class=\"drag-icon-cph\">\n                      <i class=\"material-icons\">touch_app</i>\n                    </div>\n                    <h3>Drop files here or click to upload.</h3>\n                    <em>(This is just a demo dropzone. Selected files are\n                      <strong>not</strong> actually uploaded.)</em>\n                  </div>\n                  <div class=\"fallback\">\n                    <input name=\"file\" type=\"file\" multiple />\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <textarea rows=\"4\" class=\"form-control no-resize\" placeholder=\"Description\"></textarea>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-xs-12\">\n                <button type=\"submit\" class=\"btn btn-raised g-bg-cyan\">Submit</button>\n                <button type=\"submit\" class=\"btn btn-raised\">Cancel</button>\n              </div>\n            </div>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/doctors/doctor-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoctorAddComponent = (function () {
    function DoctorAddComponent() {
    }
    DoctorAddComponent.prototype.ngOnInit = function () {
    };
    DoctorAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-doctor-add',
            template: __webpack_require__("../../../../../src/app/doctors/doctor-add.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], DoctorAddComponent);
    return DoctorAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/doctors/doctors.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <h2>All Doctors</h2>\n            <a [routerLink]=\"['add']\" class=\"btn btn-raised g-bg-cyan\">Add</a>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"member-card\">                                                \n                            <img src=\"assets/images/random-avatar3.jpg\" class=\"img-thumbnail rounded-circle\" alt=\"profile-image\">                               \n                            <h4 class=\"m-b-5 m-t-20\">Dr. John</h4>\n                            <p class=\"text-muted\">001</p>\n                            <p><i class=\"fas fa-phone mr-2\"></i>085-123xxxx</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"member-card\">                            \n                            <img src=\"assets/images/random-avatar4.jpg\" class=\"img-thumbnail rounded-circle\" alt=\"profile-image\">                               \n                            <h4 class=\"m-b-5 m-t-20\">Kendra V. Alfaro</h4>\n                            <p class=\"text-muted\">002</p>\n                            <p><i class=\"fas fa-phone mr-2\"></i>085-123xxxx</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"member-card\">                           \n                            <img src=\"assets/images/random-avatar6.jpg\" class=\"img-thumbnail rounded-circle\" alt=\"profile-image\">                              \n                            <h4 class=\"m-b-5 m-t-20\">Kendra V. Alfaro</h4>\n                            <p class=\"text-muted\">003</p>\n                            <p><i class=\"fas fa-phone mr-2\"></i>085-123xxxx</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"member-card\">                           \n                            <img src=\"assets/images/random-avatar6.jpg\" class=\"img-thumbnail rounded-circle\" alt=\"profile-image\">                             \n                            <h4 class=\"m-b-5 m-t-20\">Kendra V. Alfaro</h4>\n                            <p class=\"text-muted\">004</p>\n                            <p><i class=\"fas fa-phone mr-2\"></i>085-123xxxx</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"member-card verified\">\n                            <img src=\"assets/images/random-avatar3.jpg\" class=\"img-thumbnail rounded-circle\" alt=\"profile-image\">                              \n                            <h4 class=\"m-b-5 m-t-20\">Kendra V. Alfaro</h4>\n                            <p class=\"text-muted\">005</p>\n                            <p><i class=\"fas fa-phone mr-2\"></i>085-123xxxx</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"member-card\">\n                            <img src=\"assets/images/random-avatar4.jpg\" class=\"img-thumbnail rounded-circle\" alt=\"profile-image\">\n                            <h4 class=\"m-b-5 m-t-20\">Kendra V. Alfaro</h4>\n                            <p class=\"text-muted\">006</p>\n                            <p><i class=\"fas fa-phone mr-2\"></i>085-123xxxx</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"member-card verified\">\n                            <img src=\"assets/images/random-avatar6.jpg\" class=\"img-thumbnail rounded-circle\" alt=\"profile-image\">                               \n                            <h4 class=\"m-b-5 m-t-20\">Kendra V. Alfaro</h4>\n                            <p class=\"text-muted\">007</p>\n                            <p><i class=\"fas fa-phone mr-2\"></i>085-123xxxx</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"member-card verified\">\n                            <img src=\"assets/images/random-avatar6.jpg\" class=\"img-thumbnail rounded-circle\" alt=\"profile-image\">                             \n                            <h4 class=\"m-b-5 m-t-20\">Kendra V. Alfaro</h4>\n                            <p class=\"text-muted\">008</p>\n                            <p><i class=\"fas fa-phone mr-2\"></i>085-123xxxx</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"member-card verified\">\n                            <img src=\"assets/images/random-avatar6.jpg\" class=\"img-thumbnail rounded-circle\" alt=\"profile-image\">                             \n                            <h4 class=\"m-b-5 m-t-20\">Kendra V. Alfaro</h4>\n                            <p class=\"text-muted\">009</p>\n                            <p><i class=\"fas fa-phone mr-2\"></i>085-123xxxx</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"member-card verified\">\n                            <img src=\"assets/images/random-avatar6.jpg\" class=\"img-thumbnail rounded-circle\" alt=\"profile-image\">                              \n                            <h4 class=\"m-b-5 m-t-20\">Kendra V. Alfaro</h4>\n                            <p class=\"text-muted\">010</p>\n                            <p><i class=\"fas fa-phone mr-2\"></i>085-123xxxx</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"member-card verified\">\n                            <img src=\"assets/images/random-avatar3.jpg\" class=\"img-thumbnail rounded-circle\" alt=\"profile-image\">                             \n                            <h4 class=\"m-b-5 m-t-20\">Kendra V. Alfaro</h4>\n                            <p class=\"text-muted\">011</p>\n                            <p><i class=\"fas fa-phone mr-2\"></i>085-123xxxx</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-xl-2 col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"member-card\">\n                            <img src=\"assets/images/random-avatar4.jpg\" class=\"img-thumbnail rounded-circle\" alt=\"profile-image\">                              \n                            <h4 class=\"m-b-5 m-t-20\">Kendra V. Alfaro</h4>\n                            <p class=\"text-muted\">012</p>\n                            <p><i class=\"fas fa-phone mr-2\"></i>085-123xxxx</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/doctors/doctors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoctorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DoctorsComponent = (function () {
    function DoctorsComponent() {
    }
    DoctorsComponent.prototype.ngOnInit = function () {
    };
    DoctorsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-doctors',
            template: __webpack_require__("../../../../../src/app/doctors/doctors.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], DoctorsComponent);
    return DoctorsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hospitals/hospital-add.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content patients\">\n  <div class=\"container-fluid\">\n    <div class=\"block-header\">\n      <h2>Add Hospital</h2>\n    </div>\n\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"body\">\n            <div class=\"row clearfix\">\n\n              <div class=\"col-lg-5 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Hospital Code\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-5 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Hospital Name\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-2 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <div class=\"row\">\n                      <label for=\"example-number-input\" class=\"col-6 col-form-label\">Seq</label>\n                      <div class=\"col-6\">\n                        <input class=\"form-control\" type=\"number\" value=\"42\" id=\"example-number-input\">\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <textarea rows=\"4\" class=\"form-control no-resize\" placeholder=\"Description\"></textarea>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-check\">\n                    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                    <label class=\"form-check-label\" for=\"exampleCheck1\">Active</label>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-xs-12\">\n                <button type=\"submit\" class=\"btn btn-raised g-bg-cyan\">Submit</button>\n                <button type=\"submit\" class=\"btn btn-raised\">Cancel</button>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/hospitals/hospital-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HospitalAddComponent = (function () {
    function HospitalAddComponent() {
    }
    HospitalAddComponent.prototype.ngOnInit = function () {
    };
    HospitalAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hospital-add',
            template: __webpack_require__("../../../../../src/app/hospitals/hospital-add.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HospitalAddComponent);
    return HospitalAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/hospitals/hospitals.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <h2>All Hospitals</h2>\n            <a [routerLink]=\"['add']\" class=\"btn btn-raised g-bg-cyan\">Add</a>\n        </div>\n        <div class=\"row clearfix\">\n\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"body table-responsive\">\n                        <table class=\"table table-bordered table-striped table-hover\">\n                            <thead>\n                                <tr>\n                                    <th>#Id</th>\n                                    <th>Code</th>\n                                    <th>Name</th>\n                                    <th>Seq.</th>\n                                    <th>Active</th>\n                                </tr>\n                            </thead>\n                            <tbody style=\"cursor: pointer;\" [routerLink]=\"['/wards']\">\n                                <tr>\n                                    <td>1</td>\n                                    <td>01</td>\n                                    <td>โรงพยาบาลสรรพสิทธิประสงค์</td>\n                                    <td>1</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                                <tr>\n                                    <td>2</td>\n                                    <td>02</td>\n                                    <td>โรงพยาบาลศูนย์ 1</td>\n                                    <td>2</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                                <tr>\n                                    <td>3</td>\n                                    <td>03</td>\n                                    <td>โรงพยาบาลศูนย์ 2</td>\n                                    <td>3</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                                <tr>\n                                    <td>4</td>\n                                    <td>04</td>\n                                    <td>โรงพยาบาลศูนย์ 3</td>\n                                    <td>4</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                                <tr>\n                                    <td>5</td>\n                                    <td>05</td>\n                                    <td>โรงพยาบาลศูนย์ 4</td>\n                                    <td>5</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                                <tr>\n                                    <td>6</td>\n                                    <td>06</td>\n                                    <td>โรงพยาบาลศูนย์ 5</td>\n                                    <td>6</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                                <tr>\n                                    <td>7</td>\n                                    <td>07</td>\n                                    <td>โรงพยาบาลศูนย์ 6</td>\n                                    <td>7</td>\n                                    <td><span class=\"label label-danger\">false</span></td>\n                                </tr>\n                                <tr>\n                                    <td>8</td>\n                                    <td>08</td>\n                                    <td>โรงพยาบาลศูนย์ 7</td>\n                                    <td>8</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/hospitals/hospitals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HospitalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HospitalsComponent = (function () {
    function HospitalsComponent() {
    }
    HospitalsComponent.prototype.ngOnInit = function () {
    };
    HospitalsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-hospitals',
            template: __webpack_require__("../../../../../src/app/hospitals/hospitals.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], HospitalsComponent);
    return HospitalsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/labs/groups/group-add.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content patients\">\n    <div class=\"container-fluid\">\n      <div class=\"block-header\">\n        <h2>Add Groups</h2>\n      </div>\n  \n      <div class=\"row clearfix\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n          <div class=\"card\">\n            <div class=\"body\">\n              <div class=\"row clearfix\">\n                <div class=\"col-lg-5 col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Group Code\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-5 col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Group Name\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <div class=\"row\">\n                        <label for=\"example-number-input\" class=\"col-6 col-form-label\">Seq</label>\n                        <div class=\"col-6\">\n                          <input class=\"form-control\" type=\"number\" value=\"42\" id=\"example-number-input\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n  \n              </div>\n  \n  \n              <div class=\"row clearfix\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <textarea rows=\"4\" class=\"form-control no-resize\" placeholder=\"Description\"></textarea>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                      <label class=\"form-check-label\" for=\"exampleCheck1\">Active</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-xs-12\">\n                  <button type=\"submit\" class=\"btn btn-raised g-bg-cyan\">Submit</button>\n                  <button type=\"submit\" class=\"btn btn-raised\">Cancel</button>\n                </div>\n              </div>\n  \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "../../../../../src/app/labs/groups/group-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupAddComponent = (function () {
    function GroupAddComponent() {
    }
    GroupAddComponent.prototype.ngOnInit = function () {
    };
    GroupAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-group-add',
            template: __webpack_require__("../../../../../src/app/labs/groups/group-add.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], GroupAddComponent);
    return GroupAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/labs/groups/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <h2>All Groups</h2>\n            <a [routerLink]=\"['add']\" class=\"btn btn-raised g-bg-cyan\">Add</a>\n        </div>\n        <div class=\"row clearfix\">\n\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"body table-responsive\">\n                        <table class=\"table table-bordered table-striped table-hover\">\n                            <thead>\n                                <tr>\n                                    <th>#Id</th>\n                                    <th>Code</th>\n                                    <th>Name</th>\n                                    <th>Seq.</th>\n                                    <th>Active</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>1</td>\n                                    <td>CHM</td>\n                                    <td>Chemistry</td>\n                                    <td>1</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                                <tr>\n                                    <td>2</td>\n                                    <td>CHM-U</td>\n                                    <td>Chemistry (Urine)</td>\n                                    <td>2</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                                <tr>\n                                    <td>3</td>\n                                    <td>HEM</td>\n                                    <td>Hematology</td>\n                                    <td>3</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                                <tr>\n                                    <td>4</td>\n                                    <td>IMM</td>\n                                    <td>Immunology</td>\n                                    <td>4</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                                <tr>\n                                    <td>5</td>\n                                    <td>DRG&THY</td>\n                                    <td>Drug & Thyroid Function Test</td>\n                                    <td>5</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                                <tr>\n                                    <td>6</td>\n                                    <td>MIC</td>\n                                    <td>Microscopy</td>\n                                    <td>6</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                                <tr>\n                                    <td>7</td>\n                                    <td>HIV</td>\n                                    <td>HIV</td>\n                                    <td>7</td>\n                                    <td><span class=\"label label-danger\">false</span></td>\n                                </tr>\n                                <tr>\n                                    <td>8</td>\n                                    <td>OUT</td>\n                                    <td>Out Lab</td>\n                                    <td>8</td>\n                                    <td><span class=\"label label-success\">true</span></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/labs/groups/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GroupsComponent = (function () {
    function GroupsComponent() {
    }
    GroupsComponent.prototype.ngOnInit = function () {
    };
    GroupsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__("../../../../../src/app/labs/groups/groups.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/labs/labs/lab-add.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"block-header\">\n      <h2>Add Labs</h2>\n    </div>\n\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"body\">\n\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Lab Code\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Lab Name\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Short Name\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Price\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"form-group drop-custum\">\n                  <select class=\"form-control show-tick\">\n                    <option value=\"\">-- Group --</option>\n                    <option value=\"1\">Chemistry</option>\n                    <option value=\"2\">Chemistry (Urine)</option>\n                    <option value=\"3\">Hematology</option>\n                    <option value=\"4\">Immunology</option>\n                    <option value=\"5\">Drug & Thyroid Function Test</option>\n                    <option value=\"6\">Microscopy</option>\n                    <option value=\"7\">HIV</option>\n                    <option value=\"8\">Out Lab</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"form-group drop-custum\">\n                  <select class=\"form-control show-tick\">\n                    <option value=\"\">-- Specimen --</option>\n                    <option value=\"1\">EDTA</option>\n                    <option value=\"1\">Clot Blood</option>\n                    <option value=\"1\">Urine</option>\n                    <option value=\"1\">CSF</option>\n                    <option value=\"1\">Fluid</option>\n                    <option value=\"1\">Stool</option>\n                    <option value=\"1\">Semen</option>\n                    <option value=\"1\">Skin</option>\n                    <option value=\"1\">NaF</option>\n                    <option value=\"1\">Micro Specimen</option>\n                    <option value=\"1\">Sputum</option>\n                    <option value=\"1\">Blood</option>\n                    <option value=\"1\">Pus</option>\n                    <option value=\"1\">Sodium Citrate</option>\n                    <option value=\"1\">Urine 24 hrs.</option>\n                    <option value=\"1\">Rectal swab</option>\n                    <option value=\"1\">Throat swab</option>\n                    <option value=\"1\">Nasal swab</option>\n                    <option value=\"1\">Genital</option>\n                    <option value=\"1\">Hemo</option>\n                    <option value=\"1\">swab</option>\n                    <option value=\"1\">Lithium Heparin</option>\n                    <option value=\"1\">Biopsy</option>\n                    <option value=\"1\">Amniotic Fluid</option>\n                  </select>\n                </div>\n              </div>\n\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <textarea rows=\"4\" class=\"form-control no-resize\" placeholder=\"Description\"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-check\">\n                    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                    <label class=\"form-check-label\" for=\"exampleCheck1\">Active</label>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xs-12\">\n                <button type=\"submit\" class=\"btn btn-raised g-bg-cyan\">Submit</button>\n                <button type=\"submit\" class=\"btn btn-raised\">Cancel</button>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/labs/labs/lab-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabAddComponent = (function () {
    function LabAddComponent() {
    }
    LabAddComponent.prototype.ngOnInit = function () {
    };
    LabAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lab-add',
            template: __webpack_require__("../../../../../src/app/labs/labs/lab-add.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], LabAddComponent);
    return LabAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/labs/labs/labs.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n        <div class=\"container-fluid\">\n            <div class=\"block-header\">\n                <h2>All Labs</h2>\n                <a [routerLink]=\"['add']\" class=\"btn btn-raised g-bg-cyan\">Add</a>\n            </div>\n            <div class=\"row clearfix\">\n    \n                <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                    <div class=\"card\">\n                        <div class=\"body table-responsive\">\n                            <table class=\"table table-bordered table-striped table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th>Code</th>\n                                        <th>Name</th>\n                                        <th>Group</th>\n                                        <th>Specimen</th>\n                                        <th>Active</th>\n                                    </tr>\n                                </thead>\n                                <tbody style=\"cursor: pointer;\">\n                                    <tr>\n                                        <td>H001</td>\n                                        <td>CBC</td>\n                                        <td>Hematology</td>\n                                        <td>EDTA</td>\n                                        <td><span class=\"label label-success\">true</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td>U001</td>\n                                        <td>Urine Analysis</td>\n                                        <td>Microscopy</td>\n                                        <td>Urine</td>\n                                        <td><span class=\"label label-success\">true</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td>C001</td>\n                                        <td>Electrolyte</td>\n                                        <td>Chemistry</td>\n                                        <td>Clot Blood</td>\n                                        <td><span class=\"label label-success\">true</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td>S001</td>\n                                        <td>Widal Test</td>\n                                        <td>Serology</td>\n                                        <td>Clot Blood</td>\n                                        <td><span class=\"label label-success\">true</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td>U002</td>\n                                        <td>Stool examination</td>\n                                        <td>Microscopy</td>\n                                        <td>Stool</td>\n                                        <td><span class=\"label label-success\">true</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td>C002</td>\n                                        <td>Lipid profile</td>\n                                        <td>Chemistry</td>\n                                        <td>Clot Blood</td>\n                                        <td><span class=\"label label-success\">true</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td>GLU</td>\n                                        <td>Glucose</td>\n                                        <td>Chemistry</td>\n                                        <td>Clot Blood</td>\n                                        <td><span class=\"label label-danger\">false</span></td>\n                                    </tr>\n                                    <tr>\n                                        <td>BUN</td>\n                                        <td>BUN</td>\n                                        <td>Chemistry</td>\n                                        <td>Clot Blood</td>\n                                        <td><span class=\"label label-success\">true</span></td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>"

/***/ }),

/***/ "../../../../../src/app/labs/labs/labs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabsComponent = (function () {
    function LabsComponent() {
    }
    LabsComponent.prototype.ngOnInit = function () {
    };
    LabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-labs',
            template: __webpack_require__("../../../../../src/app/labs/labs/labs.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], LabsComponent);
    return LabsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/labs/specimens/specimen-add.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content patients\">\n    <div class=\"container-fluid\">\n      <div class=\"block-header\">\n        <h2>Add Specimens</h2>\n      </div>\n  \n      <div class=\"row clearfix\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n          <div class=\"card\">\n            <div class=\"body\">\n              <div class=\"row clearfix\">\n                <div class=\"col-lg-5 col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Specimen Code\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-5 col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Specimen Name\">\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-2 col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <div class=\"row\">\n                        <label for=\"example-number-input\" class=\"col-6 col-form-label\">Seq</label>\n                        <div class=\"col-6\">\n                          <input class=\"form-control\" type=\"number\" value=\"42\" id=\"example-number-input\">\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>  \n              </div>\n  \n              <div class=\"row clearfix\">\n                  <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                    <form action=\"/\" id=\"frmFileUpload\" class=\"dropzone\" method=\"post\" enctype=\"multipart/form-data\">\n                      <div class=\"dz-message\">\n                        <div class=\"drag-icon-cph\">\n                          <i class=\"material-icons\">touch_app</i>\n                        </div>\n                        <h3>Drop files here or click to upload.</h3>\n                        <em>(This is just a demo dropzone. Selected files are\n                          <strong>not</strong> actually uploaded.)</em>\n                      </div>\n                      <div class=\"fallback\">\n                        <input name=\"file\" type=\"file\" multiple />\n                      </div>\n                    </form>\n                  </div>\n                </div>\n  \n              <div class=\"row clearfix\">\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <textarea rows=\"4\" class=\"form-control no-resize\" placeholder=\"Description\"></textarea>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                      <label class=\"form-check-label\" for=\"exampleCheck1\">Active</label>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-xs-12\">\n                  <button type=\"submit\" class=\"btn btn-raised g-bg-cyan\">Submit</button>\n                  <button type=\"submit\" class=\"btn btn-raised\">Cancel</button>\n                </div>\n              </div>\n  \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "../../../../../src/app/labs/specimens/specimen-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecimenAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpecimenAddComponent = (function () {
    function SpecimenAddComponent() {
    }
    SpecimenAddComponent.prototype.ngOnInit = function () {
    };
    SpecimenAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-specimen-add',
            template: __webpack_require__("../../../../../src/app/labs/specimens/specimen-add.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SpecimenAddComponent);
    return SpecimenAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/labs/specimens/specimens.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content patients\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <h2>All Specimens</h2>\n            <a [routerLink]=\"['add']\" class=\"btn btn-raised g-bg-cyan\">Add</a>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/edta.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"mb-0\">EDTA</h5>\n                                <h5>01</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/clotblood.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Clot Blood</h5>\n                                <h5>02</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/urine.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Urine</h5>\n                                <h5>03</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/csf.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">CSF</h5>\n                                <h5>04</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/fluid.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Fluid</h5>\n                                <h5>05</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/stool.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Stool</h5>\n                                <h5>06</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/semen.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Semen</h5>\n                                <h5>07</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/skin.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Skin</h5>\n                                <h5>08</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/naf.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">NaF</h5>\n                                <h5>09</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/microspecimen.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Micro Specimen</h5>\n                                <h5>10</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/sputum.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Sputum</h5>\n                                <h5>11</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/blood.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Blood</h5>\n                                <h5>12</h5>\n                                <label class=\"label label-danger\">Non active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/pus.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Pus</h5>\n                                <h5>13</h5>\n                                <label class=\"label label-danger\">Non active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/sodiumcitrate.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Sodium Citrate</h5>\n                                <h5>14</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/urine24hrs.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Urine 24 hrs.</h5>\n                                <h5>15</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/rectalswab.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Rectal swab</h5>\n                                <h5>16</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/throatswab.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Throat swab</h5>\n                                <h5>17</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/nasalswab.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Nasal swab</h5>\n                                <h5>18</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/genital.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Genital</h5>\n                                <h5>19</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/hemo.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Hemo</h5>\n                                <h5>20</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/swab.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">swab</h5>\n                                <h5>21</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/lithiumheparin.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Lithium Heparin</h5>\n                                <h5>22</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/biopsy.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Biopsy</h5>\n                                <h5>23</h5>\n                                <label class=\"label label-danger\">Non active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3 col-md-4 col-sm-6\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/specimens/amnioticfluid.png\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"m-b-0\">Amniotic Fluid</h5>\n                                <h5>24</h5>\n                                <label class=\"label label-success\">Active</label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    </div>\n  </section>\n  "

/***/ }),

/***/ "../../../../../src/app/labs/specimens/specimens.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecimensComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpecimensComponent = (function () {
    function SpecimensComponent() {
    }
    SpecimensComponent.prototype.ngOnInit = function () {
    };
    SpecimensComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-specimens',
            template: __webpack_require__("../../../../../src/app/labs/specimens/specimens.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], SpecimensComponent);
    return SpecimensComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".authentication {\r\n    background-image: url('/assets/images/bg-1.jpg');\r\n    background-size: cover;\r\n    background-position: top center;\r\n}\r\n.authentication .theme-bg {\r\n    background: linear-gradient(45deg, #49cdd0, #ab9ae5);\r\n    height: 150px;\r\n    position: absolute;\r\n    width: 50%;\r\n    left: 0;\r\n    top: 144px;\r\n    z-index: -1;\r\n}\r\n/* Pen Title */\r\n.pen-title {\r\n    padding: 50px 0;\r\n    text-align: center;\r\n    letter-spacing: 2px;\r\n}\r\n.pen-title h1 {\r\n    margin: 0 0 20px;\r\n    font-size: 48px;\r\n    font-weight: 300;\r\n}\r\n.pen-title span { font-size: 12px; }\r\n.pen-title span .fa { color: #ed2553; }\r\n.pen-title span a {\r\n    color: #ed2553;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n/* Scroll To Bottom */\r\n#codepen, #portfolio {\r\n    position: fixed;\r\n    bottom: 30px;\r\n    right: 30px;\r\n    background: #363636;\r\n    width: 56px;\r\n    height: 56px;\r\n    border-radius: 100%;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: 0.3s ease;\r\n    color: #ffffff;\r\n    text-align: center;\r\n}\r\n#codepen i, #portfolio i { line-height: 56px; }\r\n#codepen:hover, #portfolio:hover { box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23); }\r\n/* CodePen */\r\n#portfolio {\r\n    bottom: 96px;\r\n    right: 36px;\r\n    background: #ed2553;\r\n    width: 44px;\r\n    height: 44px;\r\n    -webkit-animation: buttonFadeInUp 1s ease;\r\n    animation: buttonFadeInUp 1s ease;\r\n}\r\n#portfolio i { line-height: 44px; }\r\n/* Container */\r\n.container {\r\n    position: relative;\r\n    max-width: 460px;\r\n    width: 100%;\r\n    margin: 0 auto 100px;\r\n}\r\n.container.active .card:first-child {\r\n    background: #f2f2f2;\r\n    margin: 0 15px;\r\n}\r\n.container.active .card:nth-child(2) { background: #fafafa; }\r\n.container.active .card.alt {\r\n    top: 20px;\r\n    right: 0;\r\n    width: 100%;\r\n    min-width: 100%;\r\n    height: auto;\r\n    border-radius: 5px;\r\n    padding: 50px 0 40px;\r\n    overflow: hidden;\r\n}\r\n.container.active .card.alt .toggle {\r\n    position: absolute;\r\n    top: 40px;\r\n    right: -10px;\r\n    box-shadow: none;\r\n    -webkit-transform: scale(50);\r\n    transform: scale(50);\r\n    transition: -webkit-transform .3s ease;\r\n    transition: transform .3s ease;\r\n    transition: transform .3s ease, -webkit-transform .3s ease;\r\n}\r\n.container.active .card.alt .toggle:before { content: ''; }\r\n.sign-up, .card.alt .title { display: none; }\r\n.container.active .card.alt .title, .container.active .card.alt .sign-up {\r\n    left: 0;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transition: .3s ease;\r\n    display: block;\r\n}\r\n/* Card */\r\n.card {\r\n    position: relative;\r\n    background: #ffffff;\r\n    border-radius: 5px;\r\n    padding: 50px 0 40px 0;\r\n    box-sizing: border-box;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    transition: .3s ease;/* Title *//* Inputs */\r\n  /* Button */\r\n  /* Footer */\r\n  /* Alt Card */\r\n}\r\n.locked .thumb {\r\n    float: left;\r\n    margin-left: 35px;\r\n}\r\n.locked .thumb .media-object {\r\n    display: inline-block;\r\n    border-radius: 5px;\r\n    width: 70px;\r\n}\r\n.locked .col-md-7 { padding-left: 0; }\r\n.locked .col-md-12 { margin-top: 25px; }\r\n.locked .media-heading {\r\n    padding-top: 10px;\r\n    color: #555;\r\n}\r\n.locked .media-heading strong {\r\n    display: block;\r\n    font-weight: normal;\r\n}\r\n.card-top:first-child {\r\n    background: #fafafa;\r\n    height: 10px;\r\n    border-radius: 5px 5px 0 0;\r\n    margin: 0 10px;\r\n    padding: 0;\r\n}\r\n.card .title {\r\n    position: relative;\r\n    z-index: 1;\r\n    border-left: 5px solid #01c0c8;\r\n    margin: 0 0 25px;\r\n    padding: 10px 0 10px 42px;\r\n    color: #01c0c8;\r\n    font-size: 22px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n}\r\n.card .title span {\r\n    font-size: 13px;\r\n    display: block;\r\n    margin: 0;\r\n    line-height: 18px;\r\n    font-weight: 400;\r\n    color: #444;\r\n}\r\n.card .title .msg {\r\n    font-size: 13px;\r\n    color: #666;\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-weight: normal;\r\n    line-height: 18px;\r\n    margin-top: 10px;\r\n    text-transform: none;\r\n}\r\n.card .input-container {\r\n    position: relative;\r\n    margin: 0 0px 30px;\r\n}\r\n.form-line .search-btn {\r\n    display: inline-block;\r\n    position: absolute;\r\n    right: 50px;\r\n    top: 0;\r\n}\r\n.form-line .search-btn button {\r\n    box-shadow: none;\r\n    margin: 0;\r\n}\r\n.card.alt {\r\n    position: absolute;\r\n    top: 80px;\r\n    margin: 0;\r\n    border: none;\r\n    right: -10px;\r\n    z-index: 10;\r\n    width: 70px;\r\n    height: 70px;\r\n    background: none;\r\n    border-radius: 100%;\r\n    box-shadow: none;\r\n    padding: 0;\r\n    transition: .3s ease;/* Toggle *//* Title */\r\n  /* Input */\r\n  /* Button */\r\n}\r\n.card.alt .toggle {\r\n    position: relative;\r\n    background: #fff;\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 100%;\r\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\r\n    color: #444;\r\n    font-size: 22px;\r\n    line-height: 70px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n.card.alt .toggle:before {\r\n    content: '\\F158';\r\n    display: inline-block;\r\n    font-family: 'Material-Design-Iconic-Font';\r\n    font-size: inherit;\r\n    text-rendering: auto;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    -webkit-transform: translate(0, 0);\r\n    transform: translate(0, 0);\r\n}\r\n.card.alt .title, .card.alt .input-container, .card.alt .button-container {\r\n    left: 100px;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n}\r\n.card.alt .title {\r\n    position: relative;\r\n    border-color: #01c0c8;\r\n    color: #01c0c8;\r\n}\r\n.card.alt .title .close {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 0;\r\n    right: 60px;\r\n    display: inline;\r\n    color: #444;\r\n    font-size: 58px;\r\n    font-weight: 400;\r\n}\r\n.card.alt .title .close:before {\r\n    content: '\\F136';\r\n    font-family: 'Material-Design-Iconic-Font';\r\n    font-size: 35px;\r\n}\r\n.card.alt .input-container input { color: #ffffff; }\r\n.card.alt .input-container input:focus ~ label { color: #ffffff; }\r\n.card.alt .input-container input:focus ~ .bar:before, .card.alt .input-container input:focus ~ .bar:after { background: #ffffff; }\r\n.card.alt .input-container input:valid ~ label {\r\n color: #ffffff;\r\n}\r\n.card.alt .input-container label { color: rgba(255, 255, 255, 0.8); }\r\n.card.alt .input-container .bar { background: rgba(255, 255, 255, 0.8); }\r\n.card.alt .button-container button {\r\n    width: 100%;\r\n    background: #ffffff;\r\n    border-color: #ffffff;\r\n}\r\n.card.alt .button-container button span { color: #ed2553; }\r\n.card.alt .button-container button:hover { background: rgba(255, 255, 255, 0.9); }\r\n.card.alt .button-container button:active:before, .card.alt .button-container button:focus:before { display: none; }\r\n\r\n/* Keyframes */\r\n@-webkit-keyframes buttonFadeInUp {\r\n 0% {\r\n bottom: 30px;\r\n opacity: 0;\r\n}\r\n}\r\n@keyframes buttonFadeInUp {\r\n 0% {\r\n bottom: 30px;\r\n opacity: 0;\r\n}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"card-top\"></div>\n  <div class=\"card\">\n    <h1 class=\"title\">\n      <span>Sunpasit Hospital</span>Login\n      <span class=\"msg\">Sign in to start your session</span>\n    </h1>\n    <div class=\"col-md-12\">\n      <form id=\"sign_in\" method=\"POST\">\n\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"zmdi zmdi-account\"></i>\n          </span>\n          <div class=\"form-line\">\n            <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Username\" required autofocus>\n          </div>\n        </div>\n        <div class=\"input-group\">\n          <span class=\"input-group-addon\">\n            <i class=\"zmdi zmdi-lock\"></i>\n          </span>\n          <div class=\"form-line\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required>\n          </div>\n        </div>\n        <div>\n          <div class=\"\">\n            <input type=\"checkbox\" name=\"rememberme\" id=\"rememberme\" class=\"filled-in chk-col-pink\">\n            <label for=\"rememberme\">Remember Me</label>\n          </div>\n          <div class=\"text-center\">\n            <a href=\"index.html\" class=\"btn btn-raised waves-effect g-bg-cyan\">SIGN IN</a>\n            <a href=\"sign-up.html\" class=\"btn btn-raised waves-effect\">SIGN UP</a>\n          </div>\n          <div class=\"text-center\">\n            <a href=\"forgot-password.html\">Forgot Password?</a>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/medicaltechnicians/medicaltechnician-add.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content patients\">\n    <div class=\"container-fluid\">\n      <div class=\"block-header\">\n        <h2>Add Medical Technician</h2>\n      </div>\n  \n      <div class=\"row clearfix\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n          <div class=\"card\">\n            <div class=\"body\">\n              <div class=\"row clearfix\">\n                \n                <div class=\"col-lg-4 col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"MT Code\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-4 col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"MT Name\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-4 col-sm-12\">\n                    <div class=\"form-group\">\n                      <div class=\"form-line\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"MT ID\">\n                      </div>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <textarea rows=\"4\" class=\"form-control no-resize\" placeholder=\"Description\"></textarea>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                      <label class=\"form-check-label\" for=\"exampleCheck1\">Active</label>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12\">\n                  <button type=\"submit\" class=\"btn btn-raised g-bg-cyan\">Submit</button>\n                  <button type=\"submit\" class=\"btn btn-raised\">Cancel</button>\n                </div>\n\n              </div> \n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "../../../../../src/app/medicaltechnicians/medicaltechnician-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicaltechnicianAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MedicaltechnicianAddComponent = (function () {
    function MedicaltechnicianAddComponent() {
    }
    MedicaltechnicianAddComponent.prototype.ngOnInit = function () {
    };
    MedicaltechnicianAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-medicaltechnician-add',
            template: __webpack_require__("../../../../../src/app/medicaltechnicians/medicaltechnician-add.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], MedicaltechnicianAddComponent);
    return MedicaltechnicianAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/medicaltechnicians/medicaltechnicians.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <h2>All Medical Technicians</h2>\n            <a [routerLink]=\"['add']\" class=\"btn btn-raised g-bg-cyan\">Add</a>\n        </div>\n        <div class=\"row clearfix\">\n\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"body table-responsive\">\n                        <table class=\"table table-bordered table-striped table-hover\">\n                            <thead>\n                                <tr>\n                                    <th>Username</th>\n                                    <th>Name</th>\n                                    <th>MT ID</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>admin</td>\n                                    <td>Administrator</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Garrett</td>\n                                    <td>Garrett Winters</td>\n                                    <td>9366</td>\n                                </tr>\n                                <tr>\n                                    <td>Ashton</td>\n                                    <td>Ashton Cox</td>\n                                    <td>5192</td>\n                                </tr>\n                                <tr>\n                                    <td>Brielle</td>\n                                    <td>Brielle Williamson</td>\n                                    <td>5218</td>\n                                </tr>\n                                <tr>\n                                    <td>Tiger</td>\n                                    <td>Tiger Nixon</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Quinn</td>\n                                    <td>Quinn Flynn</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>Haley</td>\n                                    <td>Haley Kennedy</td>\n                                    <td>13229</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/medicaltechnicians/medicaltechnicians.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MedicaltechniciansComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MedicaltechniciansComponent = (function () {
    function MedicaltechniciansComponent() {
    }
    MedicaltechniciansComponent.prototype.ngOnInit = function () {
    };
    MedicaltechniciansComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-medicaltechnicians',
            template: __webpack_require__("../../../../../src/app/medicaltechnicians/medicaltechnicians.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], MedicaltechniciansComponent);
    return MedicaltechniciansComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/order-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <h2>Patient's Results</h2>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                <address>\n                                    <strong>HN : </strong> 5022896\n                                    <br>\n                                    <strong>Patient : </strong> นางจินตนา บุญใบ\n                                    <br>\n                                    <strong>Gender : </strong> หญิง\n                                    <strong>Age : </strong> 36 ปี\n                                    <br>\n                                    <strong>LN : </strong> 10069744\n                                </address>\n                            </div>\n                            <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                                <address>\n                                    <strong>Ward : </strong> หอผู้ป่วยพิเศษสูติ-นรีเวช อาคาร 1 ชั้น 4 (NE)\n                                    <br>\n                                    <strong>Doctor : </strong> Kendra V. Alfaro\n                                    <br>\n                                    <strong>Order Date : </strong> 12/01/2017 12:01:04\n                                    <br>\n                                    <strong>Approve Date : </strong> 12/01/2017 15:21:39\n                                </address>\n                            </div>\n                        </div>\n\n                        <div class=\"row mt-5\">\n                            <div class=\"col-md-12\">\n                                <div class=\"table-responsive\">\n                                    <table id=\"mainTable\" class=\"table table-striped\" style=\"cursor: pointer;\">\n                                        <thead class=\"g-bg-cyan\">\n                                            <tr>\n                                                <th>#</th>\n                                                <th>NAME</th>\n                                                <th>SAMPLE NO</th>\n                                                <th>DETAIL</th>\n                                                <th>CHECKIN</th>\n                                                <th>BARCODE</th>\n                                                <th>REJECT</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <td><img src=\"assets/images/specimens/urine.png\" width=\"100\" alt=\"velonic\"></td>\n                                                <td class=\"align-middle\">URINE</td>\n                                                <td class=\"align-middle\">12301</td>\n                                                <td class=\"align-middle\">Protein</td>\n                                                <td><a href=\"#\"><img src=\"assets/images/checkin.png\" width=\"100\" alt=\"velonic\"></a></td>\n                                                <td><a href=\"#\"><img src=\"assets/images/barcode-icon.png\" width=\"100\" alt=\"velonic\"></a></td>\n                                                <td><a href=\"#\"><img src=\"assets/images/reject.png\" width=\"100\" alt=\"velonic\"></a></td>\n                                            </tr>\n                                            <tr>\n                                                <td><img src=\"assets/images/specimens/edta.png\" width=\"100\" alt=\"velonic\"></td>\n                                                <td class=\"align-middle\">EDTA</td>\n                                                <td class=\"align-middle\">12302</td>\n                                                <td class=\"align-middle\">HCT</td>\n                                                <td><a href=\"#\"><img src=\"assets/images/checkin.png\" width=\"100\" alt=\"velonic\"></a></td>\n                                                <td><a href=\"#\"><img src=\"assets/images/barcode-icon.png\" width=\"100\" alt=\"velonic\"></a></td>\n                                                <td><a href=\"#\"><img src=\"assets/images/reject.png\" width=\"100\" alt=\"velonic\"></a></td>\n                                            </tr>\n                                            <tr>\n                                                <td><img src=\"assets/images/specimens/clotblood.png\" width=\"100\" alt=\"velonic\"></td>\n                                                <td class=\"align-middle\">Clot Blood</td>\n                                                <td class=\"align-middle\">12303</td>\n                                                <td class=\"align-middle\">GLU,BUN,LIPID</td>\n                                                <td><a href=\"#\"><img src=\"assets/images/checkin.png\" width=\"100\" alt=\"velonic\"></a></td>\n                                                <td><a href=\"#\"><img src=\"assets/images/barcode-icon.png\" width=\"100\" alt=\"velonic\"></a></td>\n                                                <td><a href=\"#\"><img src=\"assets/images/reject.png\" width=\"100\" alt=\"velonic\"></a></td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                        <hr>\n\n                        <div class=\"hidden-print col-md-12 text-right\">\n                            <a href=\"#\" class=\"btn btn-raised btn-info\"><i class=\"zmdi zmdi-print\"></i></a>\n                            <a href=\"#\" class=\"btn btn-raised btn-default\">Back</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/orders/order-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderDetailComponent = (function () {
    function OrderDetailComponent() {
    }
    OrderDetailComponent.prototype.ngOnInit = function () {
    };
    OrderDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__("../../../../../src/app/orders/order-detail.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], OrderDetailComponent);
    return OrderDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/order-price.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"block-header\">\n      <h2>Patient's Results</h2>\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n        <div class=\"card\">\n          <div class=\"body\">\n            <div class=\"row clearfix\">\n              <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <address>\n                  <strong>HN : </strong> 5022896\n                  <br>\n                  <strong>Patient : </strong> นางจินตนา บุญใบ\n                  <br>\n                  <strong>Gender : </strong> หญิง\n                  <strong>Age : </strong> 36 ปี\n                  <br>\n                  <strong>LN : </strong> 10069744\n                </address>\n              </div>\n              <div class=\"col-lg-6 col-md-6 col-sm-12\">\n                <address>\n                  <strong>Ward : </strong> หอผู้ป่วยพิเศษสูติ-นรีเวช อาคาร 1 ชั้น 4 (NE)\n                  <br>\n                  <strong>Doctor : </strong> Kendra V. Alfaro\n                  <br>\n                  <strong>Order Date : </strong> 12/01/2017 12:01:04\n                  <br>\n                  <strong>Approve Date : </strong> 12/01/2017 15:21:39\n                </address>\n              </div>\n            </div>\n\n            <div class=\"row mt-5\">\n              <div class=\"col-md-12\">\n                <div class=\"table-responsive\">\n                  <table id=\"mainTable\" class=\"table table-striped\" style=\"cursor: pointer;\">\n                    <thead class=\"g-bg-cyan\">\n                      <tr>\n                        <th>CODE</th>\n                        <th>NAME</th>\n                        <th>UNIT COST</th>\n                        <th>PRICE</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr>\n                        <td class=\"align-middle\">Protein</td>\n                        <td class=\"align-middle\">Protein</td>\n                        <td class=\"align-middle\">฿70</td>\n                        <td><input type=\"text\" value=\"70\"></td>\n                      </tr>\n                      <tr>\n                        <td class=\"align-middle\">HCT</td>\n                        <td class=\"align-middle\">Hematocrit</td>\n                        <td class=\"align-middle\">฿120</td>\n                        <td><input type=\"text\" value=\"120\"></td>\n                      </tr>\n                      <tr>\n                        <td class=\"align-middle\">GLU</td>\n                        <td class=\"align-middle\">Glucose</td>\n                        <td class=\"align-middle\">฿12</td>\n                        <td><input type=\"text\" value=\"12\"></td>\n                      </tr>\n                      <tr>\n                        <td class=\"align-middle\">BUN</td>\n                        <td class=\"align-middle\">BUN</td>\n                        <td class=\"align-middle\">฿25</td>\n                        <td><input type=\"text\" value=\"25\"></td>\n                      </tr>\n                      <tr>\n                        <td class=\"align-middle\">LIPID</td>\n                        <td class=\"align-middle\">Lipid Profile</td>\n                        <td class=\"align-middle\">฿200</td>\n                        <td><input type=\"text\" value=\"200\"></td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n            <hr>\n            <div class=\"row\" ng-style=\"border-radius: 0px\">\n              <div class=\"col-md-12 text-right\">\n                <h3 class=\"text-right\"> ยอดรวมทั้งสิ้น 427 บาท</h3>\n              </div>\n            </div>\n            <hr>\n            <div class=\"hidden-print col-md-12 text-right\">\n              <a [routerLink]=\"['/orders/details']\" class=\"btn btn-raised btn-info\">\n                <i class=\"zmdi zmdi-save\"></i>\n              </a>\n              <a href=\"#\" class=\"btn btn-raised btn-default\">Back</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/orders/order-price.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPriceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrderPriceComponent = (function () {
    function OrderPriceComponent() {
    }
    OrderPriceComponent.prototype.ngOnInit = function () {
    };
    OrderPriceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-price',
            template: __webpack_require__("../../../../../src/app/orders/order-price.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], OrderPriceComponent);
    return OrderPriceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/orders.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"row clearfix\">\n                            <div class=\"col-sm-6 col-xs-12\">\n                                <div class=\"form-group\">\n                                    <div class=\"form-line\">\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Order Date\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-12\">\n                                <div class=\"form-group\">\n                                    <div class=\"form-line\">\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"LN\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-sm-3 col-xs-12\">\n                                <div class=\"form-group\">\n                                    <div class=\"form-line\">\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"HN\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3 col-xs-12\">\n                                <div class=\"form-group\">\n                                    <div class=\"form-line\">\n                                        <label class=\"form-control\">นางสาวคนไข้ ทดสอบ</label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3 col-xs-12\">\n                                <div class=\"form-group\">\n                                    <div class=\"form-line\">\n                                        <label class=\"form-control\">34 ปี</label>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3 col-xs-12\">\n                                <div class=\"form-group drop-custum\">\n                                    <select class=\"form-control show-tick\">\n                                        <option value=\"\">-- ประเภทคนไข้ --</option>\n                                        <option>IPD</option>\n                                        <option>OPD</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row clearfix\">\n                            <div class=\"col-sm-6 col-xs-12\">\n                                <div class=\"form-group\">\n                                    <div class=\"form-line\">\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"WARD\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6 col-xs-12\">\n                                <div class=\"form-group\">\n                                    <div class=\"form-line\">\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"DOCTOR\">\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"body\">\n                            <!-- Nav tabs -->\n                            <ul class=\"nav nav-tabs\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#1\">HEM</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#2\">CHEM</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#3\">SERO</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#4\">MIC</a>\n                                </li>\n                            </ul>\n                            <!-- Tab panes -->\n                            <div class=\"tab-content\">\n                                <div role=\"tabpanel\" class=\"row tab-pane in active\" id=\"1\">\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox1\">CBC</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox2\" value=\"option2\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox2\">Hct</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox3\" value=\"option3\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox3\">Hb Typing</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox4\" value=\"option4\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox4\">Coomb test</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox5\" value=\"option5\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox5\">Malaria</label>\n                                    </div>\n                                </div>\n                                <div role=\"tabpanel\" class=\"tab-pane\" id=\"2\">\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox6\" value=\"option6\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox6\">GLU</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox7\" value=\"option7\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox7\">BUN</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox8\" value=\"option8\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox8\">Creatinine</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox9\" value=\"option9\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox9\">Uric</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox10\" value=\"option10\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox10\">Cholesterol</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox11\" value=\"option11\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox11\">Triglyceride</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox12\" value=\"option12\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox12\">HDL</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox13\" value=\"option13\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox13\">LDL</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox14\" value=\"option14\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox14\">TP</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox15\" value=\"option15\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox15\">ALB</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox16\" value=\"option16\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox16\">SGOT</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox17\" value=\"option17\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox17\">SGPT</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox18\" value=\"option18\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox18\">ALP</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox19\" value=\"option19\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox19\">TP</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox20\" value=\"option20\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox20\">DB</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox21\" value=\"option21\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox21\">AMYL</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox22\" value=\"option22\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox22\">Calcium</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox23\" value=\"option23\">\n                                        <label class=\"form-check-label\" for=\"inlineCheckbox23\">Phosphorous</label>\n                                    </div>\n                                </div>\n                                <div role=\"tabpanel\" class=\"tab-pane\" id=\"3\">\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"option24\" value=\"option24\">\n                                        <label class=\"form-check-label\" for=\"option24\">T3</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"option25\" value=\"option25\">\n                                        <label class=\"form-check-label\" for=\"option25\">TT4</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"option26\" value=\"option26\">\n                                        <label class=\"form-check-label\" for=\"option26\">TSH</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"option27\" value=\"option27\">\n                                        <label class=\"form-check-label\" for=\"option27\">AFP</label>\n                                    </div>\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"option28\" value=\"option28\">\n                                        <label class=\"form-check-label\" for=\"option28\">CA 125</label>\n                                    </div>\n                                </div>\n                                <div role=\"tabpanel\" class=\"tab-pane\" id=\"4\">\n                                    <div class=\"form-check form-check-inline col-lg-2 col-sm-5\">\n                                        <input class=\"form-check-input\" type=\"checkbox\" id=\"option29\" value=\"option29\">\n                                        <label class=\"form-check-label\" for=\"option29\">MetAmp</label>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n\n                        <div class=\"row clearfix\">\n                            <div class=\"col-sm-12\">\n                                <button type=\"submit\" class=\"btn btn-raised g-bg-cyan\" [routerLink]=\"['/orders/prices']\">Submit</button>\n                                <button type=\"submit\" class=\"btn btn-raised\">Cancel</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/orders/orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OrdersComponent = (function () {
    function OrdersComponent() {
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    OrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-orders',
            template: __webpack_require__("../../../../../src/app/orders/orders.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], OrdersComponent);
    return OrdersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patients/patient-add.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content patients\">\n  <div class=\"container-fluid\">\n    <div class=\"block-header\">\n      <h2>Add Patient</h2>\n    </div>\n\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"body\">\n            <div class=\"row clearfix\">\n\n              <div class=\"col-lg-4 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"HN\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"First Name\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-4 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"datepicker form-control\" placeholder=\"Date of Birth\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Age\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <div class=\"form-group drop-custum\">\n                  <select class=\"form-control show-tick\">\n                    <option value=\"\">-- Gender --</option>\n                    <option value=\"10\">Male</option>\n                    <option value=\"20\">Female</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Phone\">\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <form action=\"/\" id=\"frmFileUpload\" class=\"dropzone\" method=\"post\" enctype=\"multipart/form-data\">\n                  <div class=\"dz-message\">\n                    <div class=\"drag-icon-cph\">\n                      <i class=\"material-icons\">touch_app</i>\n                    </div>\n                    <h3>Drop files here or click to upload.</h3>\n                    <em>(This is just a demo dropzone. Selected files are\n                      <strong>not</strong> actually uploaded.)</em>\n                  </div>\n                  <div class=\"fallback\">\n                    <input name=\"file\" type=\"file\" multiple />\n                  </div>\n                </form>\n              </div>\n\n              <div class=\"col-sm-12\">\n                <div class=\"form-group\">\n                  <div class=\"form-line\">\n                    <textarea rows=\"4\" class=\"form-control no-resize\" placeholder=\"Description\"></textarea>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-xs-12\">\n                <button type=\"submit\" class=\"btn btn-raised g-bg-cyan\">Submit</button>\n                <button type=\"submit\" class=\"btn btn-raised\">Cancel</button>\n              </div>\n            </div>\n\n            \n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/patients/patient-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PatientAddComponent = (function () {
    function PatientAddComponent() {
    }
    PatientAddComponent.prototype.ngOnInit = function () {
    };
    PatientAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-patient-add',
            template: __webpack_require__("../../../../../src/app/patients/patient-add.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], PatientAddComponent);
    return PatientAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patients/patient-info.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content profile-page\">\n  <div class=\"container-fluid\">\n    <div class=\"block-header\">\n      <h2>Patient Profile</h2>\n      <small class=\"text-muted\">Welcome to Swift application</small>\n    </div>\n    <div class=\"row clearfix\">\n      <div class=\"col-lg-4 col-md-12 col-sm-12\">\n        <div class=\" card patient-profile\">\n          <img src=\"assets/images/image-1.jpg\" class=\"img-fluid\" alt=\"\">\n        </div>\n        <div class=\"card\">\n          <div class=\"header\">\n            <h2>About Patient</h2>\n          </div>\n          <div class=\"body\">\n              <strong>HN</strong>\n              <p>007</p>\n            <strong>First Name</strong>\n            <p>กิตติพงษ์</p>\n            <strong>Last Name</strong>\n            <p>แก้วโสภณ</p>\n            <strong>Gerder</strong>\n            <p>ชาย</p>\n            <strong>Date of Birth</strong>\n            <p>09/03/1984</p>\n            <strong>Phone</strong>\n            <p>0909740058</p>\n            <hr>\n            <strong>Address</strong>\n            <address>14/152 เดอะวิลล่า บางเขน กรุงเทพฯ</address>\n            <hr>\n            <a [routerLink]=\"['']\" class=\"btn btn-raised g-bg-cyan\">EDIT</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-8 col-md-12 col-sm-12\">\n        <div class=\"card\">\n          <div class=\"body\">\n            <!-- Nav tabs -->\n            <ul class=\"nav nav-tabs\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#timeline\">Timeline</a>\n              </li>\n            </ul>\n\n            <!-- Tab panes -->\n            <div class=\"tab-content\">\n              <div role=\"tabpanel\" class=\"tab-pane in active\" id=\"timeline\">\n                <div class=\"timeline-body\">\n                  <div class=\"timeline m-border\">\n                    <div class=\"timeline-item\">\n                      <div class=\"item-content\">\n                        <div class=\"text-small\">12/03/2013 07:31:25</div>\n                        <a [routerLink]=\"['/results/details']\">CBC</a>\n                      </div>\n                    </div>\n                    <div class=\"timeline-item border-info\">\n                      <div class=\"item-content\">\n                        <div class=\"text-small\">12/03/2013 07:31:25</div>\n                        <a [routerLink]=\"['/results/details']\">UA</a>\n                      </div>\n                    </div>\n                    <div class=\"timeline-item border-warning border-l\">\n                      <div class=\"item-content\">\n                        <div class=\"text-small\">01/05/2014 17:35:52</div>\n                        <a [routerLink]=\"['/results/details']\">ELYTE,FBS,Lipid,Widal</a>\n                      </div>\n                    </div>\n                    <div class=\"timeline-item border-warning\">\n                      <div class=\"item-content\">\n                        <div class=\"text-small\">21/10/2014 09:10:11</div>\n                        <a [routerLink]=\"['/results/details']\">FBS</a>\n                      </div>\n                    </div>\n                    <div class=\"timeline-item border-danger\">\n                      <div class=\"item-content\">\n                        <div class=\"text--muted\">12/03/2015 01:33:22</div>\n                        <a [routerLink]=\"['/results/details']\">CBC,UA,GLU,BUN,Stool exam</a>\n                      </div>\n                    </div>\n                    <div class=\"timeline-item border-info\">\n                      <div class=\"item-content\">\n                        <div class=\"text-small\">21/07/2015 07:31:25</div>\n                        <a [routerLink]=\"['/results/details']\">Lipid</a>\n                      </div>\n                    </div>\n                    <div class=\"timeline-item border-danger\">\n                      <div class=\"item-content\">\n                        <div class=\"text-small\">21/09/2017 17:13:25</div>\n                        <a [routerLink]=\"['/results/details']\">Creatinine</a>\n                      </div>\n                    </div>\n                    <div class=\"timeline-item border-info\">\n                      <div class=\"item-content\">\n                        <div class=\"text-small\">17/11/2017 16:24:25</div>\n                        <a [routerLink]=\"['/results/details']\">CBC</a>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/patients/patient-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PatientInfoComponent = (function () {
    function PatientInfoComponent() {
    }
    PatientInfoComponent.prototype.ngOnInit = function () {
    };
    PatientInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-patient-info',
            template: __webpack_require__("../../../../../src/app/patients/patient-info.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], PatientInfoComponent);
    return PatientInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/patients/patients.component.html":
/***/ (function(module, exports) {

module.exports = "\n<section class=\"content patients\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <h2>All Patients</h2>\n            <a [routerLink]=\"['add']\" class=\"btn btn-raised g-bg-cyan\">Add</a>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a [routerLink]=\"['/patients/info']\" class=\"p-profile-pix\"><img src=\"assets/images/image-1.jpg\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"font font-bold col-blue\">12345/61</h5>\n                                <h5 class=\"m-b-0\">นาย กิตติพงษ์ แก้วโสภณ</h5>\n                                <small>ชาย</small>\n                                <h6>9 Mar 1985</h6>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/patients/random-avatar4.jpg\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"font font-bold col-blue\">12345/61</h5>\n                                <h5 class=\"m-b-0\">นางสาว สินีนาถ ยวงทอง</h5>\n                                <small>หญิง</small>\n                                <h6>2 Nov 1984</h6>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/patients/random-avatar5.jpg\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"font font-bold col-blue\">12345/61</h5>\n                                <h5 class=\"m-b-0\">นาย สมพงษ์ พวงมาลัย</h5>\n                                <small>ชาย</small>\n                                <h6>2 Dec 1984</h6>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/patients/random-avatar6.jpg\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"font font-bold col-blue\">12345/61</h5>\n                                <h5 class=\"m-b-0\">นาย วุฒิชัย ศรีพูล</h5>\n                                <small>ชาย</small>\n                                <h6>12 Jan 1983</h6>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/patients/random-avatar1.jpg\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"font font-bold col-blue\">12345/61</h5>\n                                <h5 class=\"m-b-0\">นาย สันติ สมบูรณ์</h5>\n                                <small>ชาย</small>\n                                <h6>2 Nov 1984</h6>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/patients/random-avatar1.jpg\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"font font-bold col-blue\">12345/61</h5>\n                                <h5 class=\"m-b-0\">นาย มาโนช ฉัตรทอง</h5>\n                                <small>ชาย</small>\n                                <h6>2 Oct 1984</h6>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/patients/random-avatar2.jpg\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"font font-bold col-blue\">12345/61</h5>\n                                <h5 class=\"m-b-0\">นาย อภิวัฒน์ คำสิงห์</h5>\n                                <small>ชาย</small>\n                                <h6>22 Feb 1985</h6>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/patients/random-avatar3.jpg\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"font font-bold col-blue\">12345/61</h5>\n                                <h5 class=\"m-b-0\">นางสาว นฤทัย ธรรมแก้ว</h5>\n                                <small>หญิง</small>\n                                <h6>2 May 1978</h6>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 col-md-6 col-sm-12\">\n                <div class=\"card all-patients\">\n                    <div class=\"body\">\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 text-center m-b-0\">\n                                <a href=\"#\" class=\"p-profile-pix\"><img src=\"assets/images/patients/random-avatar4.jpg\" alt=\"user\" class=\"img-thumbnail img-fluid\"></a>\n                            </div>\n                            <div class=\"col-md-8 col-sm-8 m-b-0\">\n                                <h5 class=\"font font-bold col-blue\">12345/61</h5>\n                                <h5 class=\"m-b-0\">นางสาว จันทร์ทิพย์ ศรีจาด</h5>\n                                <small>หญิง</small>\n                                <h6>21 May 1983</h6>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </section>\n  "

/***/ }),

/***/ "../../../../../src/app/patients/patients.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatientsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PatientsComponent = (function () {
    function PatientsComponent() {
    }
    PatientsComponent.prototype.ngOnInit = function () {
    };
    PatientsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-patients',
            template: __webpack_require__("../../../../../src/app/patients/patients.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], PatientsComponent);
    return PatientsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/results/result-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <h2>Patient's Results</h2>\n        </div>\n        <div class=\"row clearfix\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                <div class=\"card\">\n                    <div class=\"body\">\n                        <div class=\"row clearfix\">\n                            <div class=\"col-lg-2 col-md-5 col-sm-12\">\n                                <h4>\n                                    <img src=\"assets/images/logo-hospital.png\" width=\"120\" alt=\"velonic\">\n                                </h4>\n                            </div>\n                            <div class=\"col-lg-3 col-md-7 col-sm-12\">\n                                <address>\n                                    <strong>โรงพยาบาลสรรพสิทธิประสงค์</strong>\n                                    <br> เลขที่ 122 ถนนสรรพสิทธิ์\n                                    <br> อำเภอเมือง จังหวัดอุบลราชธานี 34000\n                                    <br> โทรศัพท์ 045-244973\n                                </address>\n                            </div>\n                            <div class=\"col-lg-3 col-md-5 col-sm-12\">\n                                <address>\n                                    <strong>HN : </strong> 5022896\n                                    <br>\n                                    <strong>Patient : </strong> นายกิตติพงษ์ แก้วโสภณ\n                                    <br>\n                                    <strong>Gender : </strong> ชาย\n                                    <strong>Age : </strong> 34 ปี\n                                    <br>\n                                    <strong>LN : </strong> 10069744\n                                </address>\n                            </div>\n                            <div class=\"col-lg-4 col-md-7 col-sm-12\">\n                                <address>\n                                    <strong>Ward : </strong> หอผู้ป่วยพิเศษสูติ-นรีเวช อาคาร 1 ชั้น 4 (NE)\n                                    <br>\n                                    <strong>Doctor : </strong> Kendra V. Alfaro\n                                    <br>\n                                    <strong>Order Date : </strong> 12/01/2017 12:01:04\n                                    <br>\n                                    <strong>Approve Date : </strong> 12/01/2017 15:21:39\n                                </address>\n                            </div>\n                        </div>\n\n                        <div class=\"row mt-5\">\n                            <div class=\"col-md-12\">\n                                <div class=\"table-responsive\">\n                                    <table id=\"mainTable\" class=\"table table-striped\" style=\"cursor: pointer;\">\n                                        <thead class=\"g-bg-cyan\">\n                                            <tr>\n                                                <th>CODE</th>\n                                                <th>TEST NAME</th>\n                                                <th>RESULT</th>\n                                                <th>FLAG</th>\n                                                <th>LAST RESULT</th>\n                                                <th>RANGE</th>\n                                                <th>UNIT</th>\n                                            </tr>\n                                        </thead>\n                                        <tbody>\n                                            <tr>\n                                                <td>BUN</td>\n                                                <td>BUN</td>\n                                                <td>19.8</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td>7.9 - 23.0</td>\n                                                <td>mg%</td>\n                                            </tr>\n                                            <tr>\n                                                <td>GLU</td>\n                                                <td>Blood Sugar(FBS)</td>\n                                                <td>214</td>\n                                                <td><span class=\"badge bg-red\"> Panic High</span></td>\n                                                <td></td>\n                                                <td>70 - 110</td>\n                                                <td>mg%</td>\n                                            </tr>\n                                            <tr>\n                                                <td colspan=\"7\"><strong><u>CBC</u></strong></td>\n                                            </tr>\n                                            <tr>\n                                                <td>WBC</td>\n                                                <td>WBC</td>\n                                                <td>9,620</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td>5,000 - 10,000</td>\n                                                <td>cells/cumm</td>\n                                            </tr>\n                                            <tr>\n                                                <td>HGB</td>\n                                                <td>HGB</td>\n                                                <td>12.4</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td>9.9 - 17.3</td>\n                                                <td>g/dl</td>\n                                            </tr>\n                                            <tr>\n                                                <td>Hct</td>\n                                                <td>Hct</td>\n                                                <td>33</td>\n                                                <td>\n                                                    <span class=\"badge bg-orange\"> Low</span>\n                                                </td>\n                                                <td></td>\n                                                <td>35.0 - 45.0</td>\n                                                <td>%</td>\n                                            </tr>\n                                            <tr>\n                                                <td>MCV</td>\n                                                <td>MCV</td>\n                                                <td>87.5</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td>80.0 - 97.8</td>\n                                                <td>fl</td>\n                                            </tr>\n                                            <tr>\n                                                <td>PLT</td>\n                                                <td>PLT</td>\n                                                <td>296,000</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td>140,000 - 440,000</td>\n                                                <td>cells/cumm</td>\n                                            </tr>\n                                            <tr>\n                                                <td>PLTS</td>\n                                                <td>Platelet smear</td>\n                                                <td>Adequate (140,000 - 400,000 cells/cumm)</td>\n                                                <td>\n                                                    <span class=\"badge bg-orange\"> Abnormal</span>\n                                                </td>\n                                                <td></td>\n                                                <td>Adequate</td>\n                                                <td></td>\n                                            </tr>\n                                            <tr>\n                                                <td>PMN</td>\n                                                <td>PMN</td>\n                                                <td>65</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td>43.7 - 70.9</td>\n                                                <td>%/td>\n                                            </tr>\n                                            <tr>\n                                                <td>LYMP</td>\n                                                <td>Lymphocyte</td>\n                                                <td>30</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td>20.1 - 44.5</td>\n                                                <td>%</td>\n                                            </tr>\n                                            <tr>\n                                                <td>EOS</td>\n                                                <td>Eosinophil</td>\n                                                <td>-</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td>0.7 - 9.2</td>\n                                                <td>%</td>\n                                            </tr>\n                                            <tr>\n                                                <td>MONO</td>\n                                                <td>Monocyte</td>\n                                                <td>-</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td>3.4 - 9.8</td>\n                                                <td>%</td>\n                                            </tr>\n                                            <tr>\n                                                <td>BASO</td>\n                                                <td>Basophil</td>\n                                                <td>-</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td>0.0 - 1.0</td>\n                                                <td>%</td>\n                                            </tr>\n                                            <tr>\n                                                <td>ATYP</td>\n                                                <td>Atypical Lymphocyte</td>\n                                                <td>5</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td></td>\n                                                <td>%</td>\n                                            </tr>\n                                            <tr>\n                                                <td>OTH</td>\n                                                <td>Other</td>\n                                                <td>-</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td></td>\n                                                <td></td>\n                                            </tr>\n                                            <tr>\n                                                <td>RBC</td>\n                                                <td>RBC Morphology</td>\n                                                <td>Normal</td>\n                                                <td></td>\n                                                <td></td>\n                                                <td></td>\n                                                <td></td>\n                                            </tr>\n                                        </tbody>\n                                    </table>\n                                </div>\n                            </div>\n                        </div>\n                        <hr>\n\n                        <div class=\"hidden-print col-md-12 text-right\">\n                            <a href=\"javascript:window.print()\" class=\"btn btn-raised btn-success\">\n                                <i class=\"zmdi zmdi-print\"></i>\n                            </a>\n                            <a href=\"#\" class=\"btn btn-raised btn-danger\"><i class=\"fas fa-file-pdf\"></i></a>\n                            <a href=\"#\" class=\"btn btn-raised btn-default\">Back</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/results/result-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResultDetailComponent = (function () {
    function ResultDetailComponent() {
    }
    ResultDetailComponent.prototype.ngOnInit = function () {
    };
    ResultDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-result-detail',
            template: __webpack_require__("../../../../../src/app/results/result-detail.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ResultDetailComponent);
    return ResultDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/results/results.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"row clearfix\">\n\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"row clearfix ml-2 mr-2\">\n                        <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                            <div class=\"form-group drop-custum\">\n                                <select class=\"form-control show-tick\">\n                                    <option value=\"\">-- โรงพยาบาลทั้งหมด --</option>\n                                    <option value=\"10\">โรงพยาบาลสรรพสิทธิ์</option>\n                                    <option value=\"20\">โรงพยาบาลศูนย์ 5</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                            <div class=\"form-group\">\n                                <div class=\"form-line\">\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                            <div class=\"form-group\">\n                                <div class=\"form-line\">\n                                    <ng-datepicker [(ngModel)]=\"startDate\" [options]=\"options\" class=\"datepicker form-control\"></ng-datepicker>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"col-lg-3 col-md-6 col-sm-12\">\n                            <div class=\"form-group\">\n                                <div class=\"form-line\">\n                                    <ng-datepicker [(ngModel)]=\"endDate\" [options]=\"options\" class=\"datepicker form-control\"></ng-datepicker>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class=\"row\">\n                        <div class=\"col-lg-3 col-sm-6\">\n                            <button class=\"btn bg-teal btn-lg btn-block waves-effect\" type=\"button\">Alls\n                                <span class=\"badge\"> 17</span>\n                            </button>\n                        </div>\n                        <div class=\"col-lg-3 col-sm-6\">\n                            <button class=\"btn bg-blue btn-lg btn-block waves-effect\" type=\"button\">Orders\n                                <span class=\"badge\"> 3</span>\n                            </button>\n                        </div>\n                        <div class=\"col-lg-3 col-sm-6\">\n                            <button class=\"btn bg-orange btn-lg btn-block waves-effect\" type=\"button\">Process\n                                <span class=\"badge\"> 6</span>\n                            </button>\n                        </div>\n                        <div class=\"col-lg-3 col-sm-6\">\n                            <button class=\"btn bg-green btn-lg btn-block waves-effect\" type=\"button\">Complete\n                                <span class=\"badge\"> 8</span>\n                            </button>\n                        </div>\n                    </div>\n\n                    <div class=\"body table-responsive\">\n                        <table class=\"table table-bordered table-striped table-hover\">\n                            <thead class=\"g-bg-cyan\">\n                                <tr>\n                                    <th>ORDER DATE/TIME</th>\n                                    <th>LN</th>\n                                    <th>HN</th>\n                                    <th>PATIENT NAME</th>\n                                    <th>SEX</th>\n                                    <th>WARD</th>\n                                    <th>TARGET</th>\n                                    <th>STATUS</th>\n                                    <th>ORDER</th>\n                                    <th>RESULT</th>\n                                </tr>\n                            </thead>\n                            <tbody style=\"cursor: pointer;\" [routerLink]=\"['/results/details']\">\n                                <tr>\n                                    <td>09/03/1984 12:01:04</td>\n                                    <td>10069744</td>\n                                    <td>5022896</td>\n                                    <td>นาย กิตติพงษ์ แก้วโสภณ</td>\n                                    <td>ชาย</td>\n                                    <td>หอผู้ป่วยพิเศษสูติ-นรีเวช อาคาร 1 ชั้น 4 (NE)</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\">100%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-orange\">Process</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 09:58:48</td>\n                                    <td>10069745</td>\n                                    <td>5353236</td>\n                                    <td>ด.ช.ธนกฤต พวงพลอย</td>\n                                    <td>ชาย</td>\n                                    <td>4SP-หอผู้ป่วยทารกแรกเกิด</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"44\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 44%;\">44%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-orange\">Process</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 09:57:40</td>\n                                    <td>10069746</td>\n                                    <td>5022896</td>\n                                    <td>นางจิตนา บุญใบ</td>\n                                    <td>หญิง</td>\n                                    <td>หอผู้ป่วยพิเศษสูติ-นรีเวช อาคาร 1 ชั้น 4 (NE)</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\">100%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-green\">Complete</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\" alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 09:28:28</td>\n                                    <td>10069747</td>\n                                    <td>5353230</td>\n                                    <td>ด.ช.แอล นวลเมฆ</td>\n                                    <td>ชาย</td>\n                                    <td>8IC-หอผู้ป่วยวิกฤตทารกแรกเกิด</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 75%;\">75%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-orange\">Process</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\" alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 09:23:34</td>\n                                    <td>10069748</td>\n                                    <td>5352004</td>\n                                    <td>ด.ญ.ฟอร์จูน สุนทรพิพิธ</td>\n                                    <td>หญิง</td>\n                                    <td>4SP-หอผู้ป่วยทารกแรกเกิด</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\">100%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-green\">Complete</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 09:00:32</td>\n                                    <td>10069749</td>\n                                    <td>5340259</td>\n                                    <td>ด.ช.น้อง Max Wackerbauer</td>\n                                    <td>ชาย</td>\n                                    <td>8IC-หอผู้ป่วยวิกฤตทารกแรกเกิด</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\">100%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-green\">Complete</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 07:43:04</td>\n                                    <td>10069750</td>\n                                    <td>5340263</td>\n                                    <td>ด.ช.ไตเติ้ล ฤาวิชา</td>\n                                    <td>ชาย</td>\n                                    <td>8IC-หอผู้ป่วยวิกฤตทารกแรกเกิด</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"12\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 12%;\">12%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-orange\">Process</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 07:54:07</td>\n                                    <td>10069751</td>\n                                    <td>5022896</td>\n                                    <td>นางจินตนา บุญใบ</td>\n                                    <td>หญิง</td>\n                                    <td>หอผู้ป่วยพิเศษสูติ-นรีเวช อาคาร 1 ชั้น 4 (NE)</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%;\"></div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-blue\">Order</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\" alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 07:24:12</td>\n                                    <td>10069752</td>\n                                    <td>5353202</td>\n                                    <td>ด.ญ.กอญ่า ตันติฉายาการ</td>\n                                    <td>หญิง</td>\n                                    <td>8IC-หอผู้ป่วยวิกฤตทารกแรกเกิด</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\">100%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-orange\">Process</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\" alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 06:23:45</td>\n                                    <td>10069753</td>\n                                    <td>5260559</td>\n                                    <td>น.ส.นภา ราตรี</td>\n                                    <td>หญิง</td>\n                                    <td>หอผู้ป่วยพิเศษสูติ-นรีเวช อาคาร 1 ชั้น 4 (NE)</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\">100%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-green\">Complete</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 05:01:56</td>\n                                    <td>10069754</td>\n                                    <td>5022896</td>\n                                    <td>นางจินตนา บุญใบ</td>\n                                    <td>หญิง</td>\n                                    <td>หอผู้ป่วยพิเศษสูติ-นรีเวช อาคาร 1 ชั้น 4 (NE)</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"55\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 55%;\">55%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-orange\">Process</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 02:47:51</td>\n                                    <td>10069755</td>\n                                    <td>5359418</td>\n                                    <td>ด.ช.พีท บุญรัตน์</td>\n                                    <td>ชาย</td>\n                                    <td>SDNICU6-หอผู้ป่วยวิกฤตทารกแรกเกิด</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\">100%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-green\">Complete</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 02:57:22</td>\n                                    <td>10069756</td>\n                                    <td>5340259</td>\n                                    <td>ด.ช.น้อง Max Wackerbauer</td>\n                                    <td>ชาย</td>\n                                    <td>8IC-หอผู้ป่วยวิกฤตทารกแรกเกิด</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\">100%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-green\">Complete</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\" alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 00:49:18</td>\n                                    <td>10069757</td>\n                                    <td>5022896</td>\n                                    <td>นางจินตนา บุญใบ</td>\n                                    <td>หญิง</td>\n                                    <td>หอผู้ป่วยพิเศษสูติ-นรีเวช อาคาร 1 ชั้น 4 (NE)</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%;\"></div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-blue\">Order</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>12/01/2017 00:53:28</td>\n                                    <td>10069758</td>\n                                    <td>5359418</td>\n                                    <td>ด.ช.พีท บุญรัตน์</td>\n                                    <td>ชาย</td>\n                                    <td>SDNICU6-หอผู้ป่วยวิกฤตทารกแรกเกิด</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\">100%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-green progress-bar-success\">Complete</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>11/01/2017 23:46:38</td>\n                                    <td>10069759</td>\n                                    <td>5359418</td>\n                                    <td>ด.ช.พีท บุญรัตน์</td>\n                                    <td>ชาย</td>\n                                    <td>SDNICU6-หอผู้ป่วยวิกฤตทารกแรกเกิด</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\"0\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 0%;\"></div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-blue\">Order</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                                <tr>\n                                    <td>11/01/2017 23:22:01</td>\n                                    <td>10069760</td>\n                                    <td>5353234</td>\n                                    <td>ด.ญ.กิ๊ฟ มณฑป</td>\n                                    <td>หญิง</td>\n                                    <td>4SP-หอผู้ป่วยทารกแรกเกิด</td>\n                                    <td>\n                                        <div class=\"progress\">\n                                            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%;\">100%</div>\n                                        </div>\n                                    </td>\n                                    <td><span class=\"label bg-green\">Complete</span></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/order.png\"  alt=\"velonic\"></a></td>\n                                    <td class=\"align-center\"><a href=\"#\"><img src=\"assets/images/result.png\"  alt=\"velonic\"></a></td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/results/results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_locale_en__ = __webpack_require__("../../../../date-fns/locale/en/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_locale_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_locale_en__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsComponent = (function () {
    function ResultsComponent() {
        this.options = {
            minYear: 1970,
            maxYear: 2030,
            displayFormat: 'D MMM YYYY',
            barTitleFormat: 'MMMM YYYY',
            firstCalendarDay: 0,
            locale: __WEBPACK_IMPORTED_MODULE_1_date_fns_locale_en__
        };
        this.startDate = new Date();
        this.endDate = new Date();
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-results',
            template: __webpack_require__("../../../../../src/app/results/results.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/securityusers/rules/rules.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <h2>All Rules</h2>\n            <small class=\"text-muted\">Welcome to Swift application</small>\n        </div>\n    </div>\n    <div class=\"row clearfix\">\n    </div>\n  </section>"

/***/ }),

/***/ "../../../../../src/app/securityusers/rules/rules.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RulesComponent = (function () {
    function RulesComponent() {
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    RulesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rules',
            template: __webpack_require__("../../../../../src/app/securityusers/rules/rules.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], RulesComponent);
    return RulesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/securityusers/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <h2>All Users</h2>\n            <small class=\"text-muted\">Welcome to Swift application</small>\n        </div>\n    </div>\n    <div class=\"row clearfix\">\n    </div>\n  </section>"

/***/ }),

/***/ "../../../../../src/app/securityusers/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/securityusers/users/users.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/wards/ward-add.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content patients\">\n    <div class=\"container-fluid\">\n      <div class=\"block-header\">\n        <h2>Add Ward</h2>\n      </div>\n  \n      <div class=\"row clearfix\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n          <div class=\"card\">\n            <div class=\"body\">\n              <div class=\"row clearfix\">\n\n                <div class=\"col-lg-4 col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Ward Code\">\n                    </div>\n                  </div>\n                </div>\n                \n                <div class=\"col-lg-4 col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Ward Name\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-lg-4 col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Phone\">\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-line\">\n                      <textarea rows=\"4\" class=\"form-control no-resize\" placeholder=\"Description\"></textarea>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-sm-12\">\n                  <div class=\"form-group\">\n                    <div class=\"form-check\">\n                      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n                      <label class=\"form-check-label\" for=\"exampleCheck1\">Active</label>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-xs-12\">\n                  <button type=\"submit\" class=\"btn btn-raised g-bg-cyan\">Submit</button>\n                  <button type=\"submit\" class=\"btn btn-raised\">Cancel</button>\n                </div>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "../../../../../src/app/wards/ward-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WardAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WardAddComponent = (function () {
    function WardAddComponent() {
    }
    WardAddComponent.prototype.ngOnInit = function () {
    };
    WardAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ward-add',
            template: __webpack_require__("../../../../../src/app/wards/ward-add.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], WardAddComponent);
    return WardAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/wards/wards.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content\">\n    <div class=\"container-fluid\">\n        <div class=\"block-header\">\n            <h2>โรงพยาบาลสรรพสิทธิประสงค์</h2>\n            <h2>01</h2>\n            <a [routerLink]=\"['add']\" class=\"btn btn-raised g-bg-cyan\">Add</a>\n        </div>\n        <div class=\"row clearfix\">\n\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"card\">\n                    <div class=\"body table-responsive\">\n                        <table class=\"table table-bordered table-striped table-hover\">\n                            <thead>\n                                <tr>\n                                    <th>Code</th>\n                                    <th>Name</th>\n                                    <th>Tel</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr>\n                                    <td>4IC</td>\n                                    <td>หอผู้ป่วยวิกฤตศัลยกรรมหัวใจและทรวงอก อาคารศูนย์การแพทย์สริริกิติ์ ชั้น 4</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>4NE1</td>\n                                    <td>หอผู้ป่วยพิเศษสูติ-นรีเวช อาคาร 1  ชั้น 4 (NE)</td>\n                                    <td>02-2011413</td>\n                                </tr>\n                                <tr>\n                                    <td>4NE2</td>\n                                    <td>4NE-หอผู้ป่วยพิเศษสูติ - นรีเวช</td>\n                                    <td>1413, 1423</td>\n                                </tr>\n                                <tr>\n                                    <td>4SE1</td>\n                                    <td>4SE-ห้องคลอด</td>\n                                    <td>1427, 1417, 1418, 1428</td>\n                                </tr>\n                                <tr>\n                                    <td>4SP</td>\n                                    <td>4SP-หอผู้ป่วยทารกแรกเกิด</td>\n                                    <td>1410, 1420, 2860</td>\n                                </tr>\n                                <tr>\n                                    <td>5SW</td>\n                                    <td>หอผู้ป่วยศัลยกรรมชาย อาคาร 1  ชั้น 5 (SW)</td>\n                                    <td>02-2011519</td>\n                                </tr>\n                                <tr>\n                                    <td>6SW1</td>\n                                    <td>6SW-หอผู้ป่วยสูติกรรม</td>\n                                    <td>1616, 1626</td>\n                                </tr>\n                                <tr>\n                                    <td>6SW2</td>\n                                    <td>4SW-หอผู้ป่วยสูติกรรม</td>\n                                    <td>1616, 1626</td>\n                                </tr>\n                                <tr>\n                                    <td>8IC</td>\n                                    <td>8IC-หอผู้ป่วยวิกฤตทารกแรกเกิด</td>\n                                    <td>1810, 1818</td>\n                                </tr>\n                                <tr>\n                                    <td>9NK2</td>\n                                    <td>หอพิเศษสิริกิติ์ 9 น. อาคารสิริกิตติ์  ชั้น 9 (N)</td>\n                                    <td>02-2011956</td>\n                                </tr>\n                                <tr>\n                                    <td>MDJ1</td>\n                                    <td>หอผู้ป่วยโรคหลอดเลือดสมอง อาคารจอดรถ (ไทยพาณิชย์)</td>\n                                    <td>02-2011956</td>\n                                </tr>\n                                <tr>\n                                    <td>OER101</td>\n                                    <td>แผนกผู้ป่วยฉุกเฉิน อาคารฉุกเฉิน ชั้น 1</td>\n                                    <td>02-2011182</td>\n                                </tr>\n                                <tr>\n                                    <td>SDIPD62</td>\n                                    <td>หอผู้ป่วยพิเศษ 62</td>\n                                    <td>3635-7</td>\n                                </tr>\n                                <tr>\n                                    <td>SDIPD63</td>\n                                    <td>หอผู้ป่วย 63 ศูนย์การแพทย์สมเด็จพระเทพรัตน์ ชั้น 6</td>\n                                    <td></td>\n                                </tr>\n                                <tr>\n                                    <td>SDLR6</td>\n                                    <td>ห้องคลอด</td>\n                                    <td>3678-9</td>\n                                </tr>\n                                <tr>\n                                    <td>SDNICU6</td>\n                                    <td>SDNICU6-หอผู้ป่วยวิกฤตทารกแรกเกิด</td>\n                                    <td>4517, 4518, 4519</td>\n                                </tr>\n                                <tr>\n                                    <td>SDNS61</td>\n                                    <td>SDNS61-หอบริบาลทารกแรกเกิด</td>\n                                    <td> 3682, 2686 3681</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/wards/wards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WardsComponent = (function () {
    function WardsComponent() {
    }
    WardsComponent.prototype.ngOnInit = function () {
    };
    WardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-wards',
            template: __webpack_require__("../../../../../src/app/wards/wards.component.html"),
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], WardsComponent);
    return WardsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map