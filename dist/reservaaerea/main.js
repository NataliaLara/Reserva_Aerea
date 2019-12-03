(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-dashboard></app-dashboard>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _endereco_endereco_list_endereco_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./endereco/endereco-list/endereco-list.component */ "./src/app/endereco/endereco-list/endereco-list.component.ts");
/* harmony import */ var _endereco_endereco_create_endereco_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./endereco/endereco-create/endereco-create.component */ "./src/app/endereco/endereco-create/endereco-create.component.ts");
/* harmony import */ var _endereco_endereco_detail_endereco_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./endereco/endereco-detail/endereco-detail.component */ "./src/app/endereco/endereco-detail/endereco-detail.component.ts");
/* harmony import */ var _endereco_endereco_edit_endereco_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./endereco/endereco-edit/endereco-edit.component */ "./src/app/endereco/endereco-edit/endereco-edit.component.ts");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inicio/inicio.component */ "./src/app/inicio/inicio.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _casa_casa_list_casa_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./casa/casa-list/casa-list.component */ "./src/app/casa/casa-list/casa-list.component.ts");
/* harmony import */ var _casa_casa_create_casa_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./casa/casa-create/casa-create.component */ "./src/app/casa/casa-create/casa-create.component.ts");
/* harmony import */ var _casa_casa_detail_casa_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./casa/casa-detail/casa-detail.component */ "./src/app/casa/casa-detail/casa-detail.component.ts");
/* harmony import */ var _casa_casa_edit_casa_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./casa/casa-edit/casa-edit.component */ "./src/app/casa/casa-edit/casa-edit.component.ts");
/* harmony import */ var _voo_voo_list_voo_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./voo/voo-list/voo-list.component */ "./src/app/voo/voo-list/voo-list.component.ts");
/* harmony import */ var _voo_voo_create_voo_create_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./voo/voo-create/voo-create.component */ "./src/app/voo/voo-create/voo-create.component.ts");
/* harmony import */ var _voo_voo_detail_voo_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./voo/voo-detail/voo-detail.component */ "./src/app/voo/voo-detail/voo-detail.component.ts");
/* harmony import */ var _voo_voo_edit_voo_edit_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./voo/voo-edit/voo-edit.component */ "./src/app/voo/voo-edit/voo-edit.component.ts");
/* harmony import */ var _reserva_reserva_list_reserva_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reserva/reserva-list/reserva-list.component */ "./src/app/reserva/reserva-list/reserva-list.component.ts");
/* harmony import */ var _reserva_reserva_create_reserva_create_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./reserva/reserva-create/reserva-create.component */ "./src/app/reserva/reserva-create/reserva-create.component.ts");
/* harmony import */ var _reserva_reserva_detail_reserva_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./reserva/reserva-detail/reserva-detail.component */ "./src/app/reserva/reserva-detail/reserva-detail.component.ts");
/* harmony import */ var _reserva_reserva_edit_reserva_edit_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./reserva/reserva-edit/reserva-edit.component */ "./src/app/reserva/reserva-edit/reserva-edit.component.ts");
/* harmony import */ var _passagemaerea_passagemaerea_list_passagemaerea_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./passagemaerea/passagemaerea-list/passagemaerea-list.component */ "./src/app/passagemaerea/passagemaerea-list/passagemaerea-list.component.ts");
/* harmony import */ var _passagemaerea_passagemaerea_create_passagemaerea_create_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./passagemaerea/passagemaerea-create/passagemaerea-create.component */ "./src/app/passagemaerea/passagemaerea-create/passagemaerea-create.component.ts");
/* harmony import */ var _passagemaerea_passagemaerea_detail_passagemaerea_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./passagemaerea/passagemaerea-detail/passagemaerea-detail.component */ "./src/app/passagemaerea/passagemaerea-detail/passagemaerea-detail.component.ts");
/* harmony import */ var _passagemaerea_passagemaerea_edit_passagemaerea_edit_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./passagemaerea/passagemaerea-edit/passagemaerea-edit.component */ "./src/app/passagemaerea/passagemaerea-edit/passagemaerea-edit.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! primeng/listbox */ "./node_modules/primeng/listbox.js");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(primeng_listbox__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/button.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(primeng_button__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/accordion.js");
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(primeng_accordion__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_39__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









































var appRoutes = [
    { path: '',
        redirectTo: '/inicio',
        pathMatch: 'full'
    },
    { path: 'inicio',
        component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_11__["InicioComponent"],
        data: { title: 'Inicio' }
    },
    {
        path: 'enderecos',
        component: _endereco_endereco_list_endereco_list_component__WEBPACK_IMPORTED_MODULE_7__["EnderecoListComponent"],
        data: { title: 'Endereco List' }
    },
    {
        path: 'inicio',
        component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_11__["InicioComponent"],
        data: { title: 'Inicio' }
    },
    {
        path: 'endereco-create',
        component: _endereco_endereco_create_endereco_create_component__WEBPACK_IMPORTED_MODULE_8__["EnderecoCreateComponent"],
        data: { title: 'Create Endereco' }
    },
    {
        path: 'endereco-edit/:id',
        component: _endereco_endereco_edit_endereco_edit_component__WEBPACK_IMPORTED_MODULE_10__["EnderecoEditComponent"],
        data: { title: 'Edit Endereco' }
    },
    {
        path: 'endereco-details/:id',
        component: _endereco_endereco_detail_endereco_detail_component__WEBPACK_IMPORTED_MODULE_9__["EnderecoDetailComponent"],
        data: { title: 'Endereco Details' }
    },
    {
        path: 'casa-create',
        component: _casa_casa_create_casa_create_component__WEBPACK_IMPORTED_MODULE_14__["CasaCreateComponent"],
        data: { title: 'Create Casa' }
    },
    {
        path: 'casas',
        component: _casa_casa_list_casa_list_component__WEBPACK_IMPORTED_MODULE_13__["CasaListComponent"],
        data: { title: 'Casa List' }
    },
    {
        path: 'casa-details/:id',
        component: _casa_casa_detail_casa_detail_component__WEBPACK_IMPORTED_MODULE_15__["CasaDetailComponent"],
        data: { title: 'Casa Details' }
    },
    {
        path: 'casa-edit/:id',
        component: _casa_casa_edit_casa_edit_component__WEBPACK_IMPORTED_MODULE_16__["CasaEditComponent"],
        data: { title: 'Edit Casa' }
    },
    {
        path: 'voo-create',
        component: _voo_voo_create_voo_create_component__WEBPACK_IMPORTED_MODULE_18__["VooCreateComponent"],
        data: { title: 'Create Voo' }
    },
    {
        path: 'voos',
        component: _voo_voo_list_voo_list_component__WEBPACK_IMPORTED_MODULE_17__["VooListComponent"],
        data: { title: 'Voo List' }
    },
    {
        path: 'voo-details/:id',
        component: _voo_voo_detail_voo_detail_component__WEBPACK_IMPORTED_MODULE_19__["VooDetailComponent"],
        data: { title: 'Voo Details' }
    },
    {
        path: 'voo-edit/:id',
        component: _voo_voo_edit_voo_edit_component__WEBPACK_IMPORTED_MODULE_20__["VooEditComponent"],
        data: { title: 'Edit Voo' }
    },
    {
        path: 'reserva-create',
        component: _reserva_reserva_create_reserva_create_component__WEBPACK_IMPORTED_MODULE_22__["ReservaCreateComponent"],
        data: { title: 'Create Reserva' }
    },
    {
        path: 'reservas',
        component: _reserva_reserva_list_reserva_list_component__WEBPACK_IMPORTED_MODULE_21__["ReservaListComponent"],
        data: { title: 'Reserva List' }
    },
    {
        path: 'reserva-details/:id',
        component: _reserva_reserva_detail_reserva_detail_component__WEBPACK_IMPORTED_MODULE_23__["ReservaDetailComponent"],
        data: { title: 'Reserva Details' }
    },
    {
        path: 'reserva-edit/:id',
        component: _reserva_reserva_edit_reserva_edit_component__WEBPACK_IMPORTED_MODULE_24__["ReservaEditComponent"],
        data: { title: 'Edit Reserva' }
    },
    {
        path: 'passagemaerea-create',
        component: _passagemaerea_passagemaerea_create_passagemaerea_create_component__WEBPACK_IMPORTED_MODULE_26__["PassagemAereaCreateComponent"],
        data: { title: 'Create Passagem Aerea' }
    },
    {
        path: 'passagensaereas',
        component: _passagemaerea_passagemaerea_list_passagemaerea_list_component__WEBPACK_IMPORTED_MODULE_25__["PassagemAereaListComponent"],
        data: { title: 'Passagem Aerea List' }
    },
    {
        path: 'passagemaerea-details/:id',
        component: _passagemaerea_passagemaerea_detail_passagemaerea_detail_component__WEBPACK_IMPORTED_MODULE_27__["PassagemAereaDetailComponent"],
        data: { title: 'Passagem Aerea Details' }
    },
    {
        path: 'passagemaerea-edit/:id',
        component: _passagemaerea_passagemaerea_edit_passagemaerea_edit_component__WEBPACK_IMPORTED_MODULE_28__["PassagemAereaEditComponent"],
        data: { title: 'Edit Passagem Aerea' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _endereco_endereco_list_endereco_list_component__WEBPACK_IMPORTED_MODULE_7__["EnderecoListComponent"],
                _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_11__["InicioComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
                _endereco_endereco_create_endereco_create_component__WEBPACK_IMPORTED_MODULE_8__["EnderecoCreateComponent"],
                _endereco_endereco_detail_endereco_detail_component__WEBPACK_IMPORTED_MODULE_9__["EnderecoDetailComponent"],
                _endereco_endereco_edit_endereco_edit_component__WEBPACK_IMPORTED_MODULE_10__["EnderecoEditComponent"],
                _casa_casa_list_casa_list_component__WEBPACK_IMPORTED_MODULE_13__["CasaListComponent"],
                _casa_casa_create_casa_create_component__WEBPACK_IMPORTED_MODULE_14__["CasaCreateComponent"],
                _casa_casa_detail_casa_detail_component__WEBPACK_IMPORTED_MODULE_15__["CasaDetailComponent"],
                _casa_casa_edit_casa_edit_component__WEBPACK_IMPORTED_MODULE_16__["CasaEditComponent"],
                _voo_voo_list_voo_list_component__WEBPACK_IMPORTED_MODULE_17__["VooListComponent"],
                _voo_voo_create_voo_create_component__WEBPACK_IMPORTED_MODULE_18__["VooCreateComponent"],
                _voo_voo_detail_voo_detail_component__WEBPACK_IMPORTED_MODULE_19__["VooDetailComponent"],
                _voo_voo_edit_voo_edit_component__WEBPACK_IMPORTED_MODULE_20__["VooEditComponent"],
                _reserva_reserva_list_reserva_list_component__WEBPACK_IMPORTED_MODULE_21__["ReservaListComponent"],
                _reserva_reserva_create_reserva_create_component__WEBPACK_IMPORTED_MODULE_22__["ReservaCreateComponent"],
                _reserva_reserva_detail_reserva_detail_component__WEBPACK_IMPORTED_MODULE_23__["ReservaDetailComponent"],
                _reserva_reserva_edit_reserva_edit_component__WEBPACK_IMPORTED_MODULE_24__["ReservaEditComponent"],
                _passagemaerea_passagemaerea_list_passagemaerea_list_component__WEBPACK_IMPORTED_MODULE_25__["PassagemAereaListComponent"],
                _passagemaerea_passagemaerea_create_passagemaerea_create_component__WEBPACK_IMPORTED_MODULE_26__["PassagemAereaCreateComponent"],
                _passagemaerea_passagemaerea_detail_passagemaerea_detail_component__WEBPACK_IMPORTED_MODULE_27__["PassagemAereaDetailComponent"],
                _passagemaerea_passagemaerea_edit_passagemaerea_edit_component__WEBPACK_IMPORTED_MODULE_28__["PassagemAereaEditComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_33__["MatListModule"],
                primeng_listbox__WEBPACK_IMPORTED_MODULE_34__["ListboxModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_35__["DropdownModule"],
                //novos
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatMenuModule"],
                primeng_button__WEBPACK_IMPORTED_MODULE_36__["ButtonModule"],
                primeng_accordion__WEBPACK_IMPORTED_MODULE_37__["AccordionModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__["MatCheckboxModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_29__["MatNativeDateModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_39__["CalendarModule"]
            ],
            providers: [
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_38__["MatDatepickerModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/casa/casa-create/casa-create.component.css":
/*!************************************************************!*\
  !*** ./src/app/casa/casa-create/casa-create.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/casa/casa-create/casa-create.component.html":
/*!*************************************************************!*\
  !*** ./src/app/casa/casa-create/casa-create.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/casas']\"><mat-icon>list</mat-icon></a>\n</div>\n<form [formGroup]=\"casaForm\" (ngSubmit)=\"onFormSubmit(casaForm.value)\">    \n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Quartos\" formControlName=\"quartos\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!casaForm.get('quartos').valid && casaForm.get('quartos').touched\">Quantidade de Quartos</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Suites\" formControlName=\"suites\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!casaForm.get('suites').valid && casaForm.get('suites').touched\">Quantidade de Suítes</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Sala de estar\" formControlName=\"sala_estar\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!casaForm.get('sala_estar').valid && casaForm.get('sala_estar').touched\">Quantidade de Salas de Estar</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Vagas\" formControlName=\"vagas\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!casaForm.get('vagas').valid && casaForm.get('vagas').touched\">Quantidade de Vagas</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Area\" formControlName=\"area\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!casaForm.get('area').valid && casaForm.get('area').touched\">Área (em metros quadrados)</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Valor do aluguel\" formControlName=\"valoraluguel\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!casaForm.get('valoraluguel').valid && casaForm.get('valoraluguel').touched\">Valor do aluguel</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Descricao\" formControlName=\"descricao\"\n             [errorStateMatcher]=\"matcher\">\n      <mat-error>\n        <span *ngIf=\"!casaForm.get('descricao').valid && casaForm.get('descricao').touched\">Descrição</span>\n      </mat-error>\n    </mat-form-field>\n\n    <mat-grid-list cols=\"2\" rowHeight=\"100px\">\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" >\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Rua\" formControlName=\"rua\"\n                       [errorStateMatcher]=\"matcher\">\n                <mat-error>\n                  <span *ngIf=\"!casaForm.get('rua').valid && casaForm.get('rua').touched\">Rua</span>\n                </mat-error>\n              </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" >\n            <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Número\" formControlName=\"numero\"\n                       [errorStateMatcher]=\"matcher\">\n                <mat-error>\n                  <span *ngIf=\"!casaForm.get('numero').valid && casaForm.get('numero').touched\">Número</span>\n                </mat-error>\n              </mat-form-field>\n        </mat-grid-tile>\n    </mat-grid-list>\n\n    <mat-grid-list cols=\"2\" rowHeight=\"50px\">\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" >\n            <mat-form-field>\n                <mat-label>Bairro</mat-label>\n                <mat-select formControlName=\"endereco\">\n                  <mat-option  *ngFor=\"let endereco of enderecos\" [value]=\"endereco\">\n                    {{endereco.bairro}}\n                    -\n                    {{endereco.cidade}}  \n                    ({{endereco.siglaestado}})       \n                  </mat-option>\n                </mat-select>\n              </mat-form-field>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n\n            <mat-checkbox (click)='toggleDisable()'>Outro: </mat-checkbox> \n                        \n            <input [disabled]='disableTextbox'>\n          \n        </mat-grid-tile>\n    </mat-grid-list>\n    <mat-checkbox formControlName=\"armario_embutido\">Armário Embutido</mat-checkbox>   \n\n    \n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!casaForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n\n<!--\n  <mat-checkbox class=\"example-margin\" [(ngModel)]=\"disabled\">Outro: </mat-checkbox>      \n            <mat-checkbox class=\"example-margin\" [labelPosition]=\"labelPosition\" [disabled]=\"disabled\"> I'm a checkbox </mat-checkbox>\n         \n-->\n\n\n\n    \n      \n       \n    \n"

/***/ }),

/***/ "./src/app/casa/casa-create/casa-create.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/casa/casa-create/casa-create.component.ts ***!
  \***********************************************************/
/*! exports provided: Page, CasaCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasaCreateComponent", function() { return CasaCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _casa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../casa.service */ "./src/app/casa/casa.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../endereco/endereco.service */ "./src/app/endereco/endereco.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Page = /** @class */ (function () {
    function Page() {
    }
    return Page;
}());

var CasaCreateComponent = /** @class */ (function () {
    function CasaCreateComponent(router, casaService, formBuilder, enderecoService) {
        //this.findByNomeEndereco();
        //this.findByEndereco();
        var _this = this;
        this.router = router;
        this.casaService = casaService;
        this.formBuilder = formBuilder;
        this.enderecoService = enderecoService;
        this.checked = false;
        this.indeterminate = false;
        this.labelPosition = 'after';
        this.disabled = false;
        this.disableTextbox = true;
        this.enderecoService.getEnderecos()
            .subscribe(function (res) {
            console.log(res);
            _this.enderecos = res;
        }, function (err) {
            console.log(err);
        });
        //console.log("End"+this.enderecos);
    }
    CasaCreateComponent.prototype.toggleDisable = function () {
        this.disableTextbox = !this.disableTextbox;
    };
    CasaCreateComponent.prototype.ngOnInit = function () {
        //this.disableTextbox=false;
        this.casaForm = this.formBuilder.group({
            'quartos': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'suites': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'sala_estar': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'vagas': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'area': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'armario_embutido': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"]],
            'descricao': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'valoraluguel': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'endereco': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"]],
            'numero': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'rua': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'outrobairro': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"]]
        });
    };
    CasaCreateComponent.prototype.findByEndereco = function () {
        var _this = this;
        this.enderecoService.getEnderecos()
            .subscribe(function (res) {
            console.log("Endereco" + res);
            _this.enderecos = res;
        }, function (err) {
            console.log("Erro" + err);
        });
    };
    CasaCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.casaService.postCasa(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/casa-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CasaCreateComponent.prototype, "outrobairro", void 0);
    CasaCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-casa-create',
            template: __webpack_require__(/*! ./casa-create.component.html */ "./src/app/casa/casa-create/casa-create.component.html"),
            styles: [__webpack_require__(/*! ./casa-create.component.css */ "./src/app/casa/casa-create/casa-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _casa_service__WEBPACK_IMPORTED_MODULE_2__["CasaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__["EnderecoService"]])
    ], CasaCreateComponent);
    return CasaCreateComponent;
}());



/***/ }),

/***/ "./src/app/casa/casa-detail/casa-detail.component.css":
/*!************************************************************!*\
  !*** ./src/app/casa/casa-detail/casa-detail.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 500px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/casa/casa-detail/casa-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/casa/casa-detail/casa-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/casas']\"><mat-icon>list</mat-icon></a>\n</div>\n\n<mat-card class=\"example-card\">\n  <mat-card-content>\n    <dl>\n      <dt>Qtd. quartos: {{casa.quartos}}</dt>\n      <dt>Qtd. suítes: {{casa.suites}}</dt>\n      <dt>Qtd. salas de estar: {{casa.sala_estar}}</dt>\n      <dt>Nro de vagas na garagem: {{casa.vagas}}</dt>\n      <dt>Área (em metros quadrados): {{casa.area}}</dt>\n      <dt>Possui armário embutido: {{getBoolValue(casa.armario_embutido)}}</dt>      \n      <dt>Descrição: </dt>\n      <dd>{{casa.descricao}}</dd>\n      <dt>Endereço Completo:</dt>\n      <dt>{{casa.rua}},{{casa.numero}}</dt>\n      <dt>Bairro: {{casa.endereco.bairro}}</dt>\n      <dt>Cidade: {{casa.endereco.cidade}}-{{casa.endereco.siglaestado}}</dt>\n      <dt>Valor do aluguel: R$ {{casa.valoraluguel}}</dt>\n    </dl>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/casa-edit', casa._id]\"><mat-icon>edit</mat-icon></a>\n    <a mat-raised-button color=\"warn\" (click)=\"deleteCasa(casa._id)\"><mat-icon>delete</mat-icon></a>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/casa/casa-detail/casa-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/casa/casa-detail/casa-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: CasaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasaDetailComponent", function() { return CasaDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _casa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../casa.service */ "./src/app/casa/casa.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CasaDetailComponent = /** @class */ (function () {
    function CasaDetailComponent(route, casaService, router) {
        this.route = route;
        this.casaService = casaService;
        this.router = router;
        this.casa = {};
    }
    CasaDetailComponent.prototype.ngOnInit = function () {
        this.getCasaDetails(this.route.snapshot.params['id']);
    };
    CasaDetailComponent.prototype.getCasaDetails = function (id) {
        var _this = this;
        this.casaService.getCasa(id)
            .subscribe(function (data) {
            console.log(data);
            _this.casa = data;
        });
        console.log(this.casa);
    };
    CasaDetailComponent.prototype.deleteCasa = function (id) {
        var _this = this;
        this.casaService.deleteCasa(id)
            .subscribe(function (res) {
            _this.router.navigate(['/casas']);
        }, function (err) {
            console.log(err);
        });
    };
    CasaDetailComponent.prototype.getBoolValue = function (bool) {
        if (bool == true) {
            return "Sim";
        }
        else
            return "Não";
    };
    CasaDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-casa-detail',
            template: __webpack_require__(/*! ./casa-detail.component.html */ "./src/app/casa/casa-detail/casa-detail.component.html"),
            styles: [__webpack_require__(/*! ./casa-detail.component.css */ "./src/app/casa/casa-detail/casa-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _casa_service__WEBPACK_IMPORTED_MODULE_2__["CasaService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CasaDetailComponent);
    return CasaDetailComponent;
}());



/***/ }),

/***/ "./src/app/casa/casa-edit/casa-edit.component.css":
/*!********************************************************!*\
  !*** ./src/app/casa/casa-edit/casa-edit.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/casa/casa-edit/casa-edit.component.html":
/*!*********************************************************!*\
  !*** ./src/app/casa/casa-edit/casa-edit.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" (click)=\"casaDetails()\"><mat-icon>show</mat-icon></a>\n</div>\n<form [formGroup]=\"casaForm\" (ngSubmit)=\"onFormSubmit(casaForm.value)\">\n    <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Quartos\" formControlName=\"quartos\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!casaForm.get('quartos').valid && casaForm.get('quartos').touched\">Quantidade de Quartos</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Suites\" formControlName=\"suites\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!casaForm.get('suites').valid && casaForm.get('suites').touched\">Quantidade de Suítes</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Sala_estar\" formControlName=\"sala_estar\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!casaForm.get('sala_estar').valid && casaForm.get('sala_estar').touched\">Quantidade de Salas de Estar</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <textarea matInput placeholder=\"Vagas\" formControlName=\"vagas\"\n                 [errorStateMatcher]=\"matcher\"></textarea>\n          <mat-error>\n            <span *ngIf=\"!casaForm.get('vagas').valid && casaForm.get('vagas').touched\">Quantidade de Vagas</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Area\" formControlName=\"area\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!casaForm.get('area').valid && casaForm.get('area').touched\">Área</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n          <input matInput placeholder=\"Valor do aluguel\" formControlName=\"valoraluguel\"\n                 [errorStateMatcher]=\"matcher\">\n          <mat-error>\n            <span *ngIf=\"!casaForm.get('valoraluguel').valid && casaForm.get('valoraluguel').touched\">Valor do Aluguel</span>\n          </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Descricao\" formControlName=\"descricao\"\n                   [errorStateMatcher]=\"matcher\">\n            <mat-error>\n              <span *ngIf=\"!casaForm.get('descricao').valid && casaForm.get('descricao').touched\">Descrição</span>\n            </mat-error>\n          </mat-form-field>\n          <mat-grid-list cols=\"2\" rowHeight=\"100px\">\n              <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" >\n                  <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Rua\" formControlName=\"rua\"\n                             [errorStateMatcher]=\"matcher\">\n                      <mat-error>\n                        <span *ngIf=\"!casaForm.get('rua').valid && casaForm.get('rua').touched\">Rua</span>\n                      </mat-error>\n                    </mat-form-field>\n              </mat-grid-tile>\n              <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" >\n                  <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"Número\" formControlName=\"numero\"\n                             [errorStateMatcher]=\"matcher\">\n                      <mat-error>\n                        <span *ngIf=\"!casaForm.get('numero').valid && casaForm.get('numero').touched\">Número</span>\n                      </mat-error>\n                    </mat-form-field>\n              </mat-grid-tile>\n          </mat-grid-list>\n          <mat-grid-list cols=\"2\" rowHeight=\"50px\">\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" >\n                <mat-form-field>\n                    <mat-label>Bairro</mat-label>\n                    <mat-select formControlName=\"endereco\">\n                      <mat-option  *ngFor=\"let endereco of enderecos\" [value]=\"endereco\">\n                        {{endereco.bairro}}\n                        -\n                        {{endereco.cidade}}      \n                      </mat-option>\n                    </mat-select>\n                  </mat-form-field>\n            </mat-grid-tile>\n            <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n                <mat-checkbox formControlName=\"armario_embutido\">Armário Embutido</mat-checkbox>   \n            </mat-grid-tile>\n        </mat-grid-list>\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!casaForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/casa/casa-edit/casa-edit.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/casa/casa-edit/casa-edit.component.ts ***!
  \*******************************************************/
/*! exports provided: CasaEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasaEditComponent", function() { return CasaEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _casa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../casa.service */ "./src/app/casa/casa.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../endereco/endereco.service */ "./src/app/endereco/endereco.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CasaEditComponent = /** @class */ (function () {
    function CasaEditComponent(router, route, casaService, formBuilder, enderecoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.casaService = casaService;
        this.formBuilder = formBuilder;
        this.enderecoService = enderecoService;
        this.id = '';
        this.enderecoService.getEnderecos()
            .subscribe(function (res) {
            console.log(res);
            _this.enderecos = res;
        }, function (err) {
            console.log(err);
        });
    }
    CasaEditComponent.prototype.ngOnInit = function () {
        this.getCasa(this.route.snapshot.params['id']);
        this.casaForm = this.formBuilder.group({
            'quartos': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'suites': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'sala_estar': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'vagas': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'area': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'armario_embutido': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'descricao': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'endereco': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'valoraluguel': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'numero': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'rua': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    CasaEditComponent.prototype.getCasa = function (id) {
        var _this = this;
        this.casaService.getCasa(id).subscribe(function (data) {
            _this.id = data._id;
            _this.casaForm.setValue({
                quartos: data.quarto,
                suites: data.suite,
                sala_estar: data.sala_estar,
                vagas: data.vagas,
                area: data.area,
                armario_embutido: data.armario_embutido,
                descricao: data.descricao,
                endereco: data.endereco,
                valoraluguel: data.valoraluguel
            });
        });
    };
    CasaEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.casaService.updateCasa(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/casa-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    CasaEditComponent.prototype.casaDetails = function () {
        this.router.navigate(['/casa-details', this.id]);
    };
    CasaEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-casa-edit',
            template: __webpack_require__(/*! ./casa-edit.component.html */ "./src/app/casa/casa-edit/casa-edit.component.html"),
            styles: [__webpack_require__(/*! ./casa-edit.component.css */ "./src/app/casa/casa-edit/casa-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _casa_service__WEBPACK_IMPORTED_MODULE_2__["CasaService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__["EnderecoService"]])
    ], CasaEditComponent);
    return CasaEditComponent;
}());



/***/ }),

/***/ "./src/app/casa/casa-list/casa-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/casa/casa-list/casa-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n\n.isbn-col {\n  flex: 0 0 100px !important;\n  white-space: unset !important;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/casa/casa-list/casa-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/casa/casa-list/casa-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/casa-create']\"><mat-icon>add</mat-icon></a>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"bairro\">\n        <th mat-header-cell *matHeaderCellDef> Bairro </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.endereco.bairro}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"quartos\">\n      <th mat-header-cell *matHeaderCellDef> Quartos</th>\n      <td mat-cell *matCellDef=\"let element\" > {{element.quartos}} </td>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"suites\">\n      <th mat-header-cell *matHeaderCellDef> Suites </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.suites}} </td>\n    </ng-container>\n\n    <!-- Author Column -->\n    <ng-container matColumnDef=\"vagas\">\n      <th mat-header-cell *matHeaderCellDef> Vagas </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.vagas}} </td>\n    </ng-container>   \n\n    <ng-container matColumnDef=\"valoraluguel\">\n      <th mat-header-cell *matHeaderCellDef> Valor aluguel </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.valoraluguel}} </td>\n    </ng-container>   \n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/casa-details/', row._id]\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/casa/casa-list/casa-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/casa/casa-list/casa-list.component.ts ***!
  \*******************************************************/
/*! exports provided: CasaListComponent, CasaDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasaListComponent", function() { return CasaListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasaDataSource", function() { return CasaDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _casa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../casa.service */ "./src/app/casa/casa.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CasaListComponent = /** @class */ (function () {
    function CasaListComponent(casaService) {
        this.casaService = casaService;
        this.displayedColumns = ['quartos', 'suites', 'vagas', 'bairro', 'valoraluguel'];
        this.dataSource = new CasaDataSource(this.casaService);
    }
    CasaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.casaService.getCasas()
            .subscribe(function (res) {
            console.log(res);
            _this.casas = res;
        }, function (err) {
            console.log(err);
        });
    };
    CasaListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-casa-list',
            template: __webpack_require__(/*! ./casa-list.component.html */ "./src/app/casa/casa-list/casa-list.component.html"),
            styles: [__webpack_require__(/*! ./casa-list.component.css */ "./src/app/casa/casa-list/casa-list.component.css")]
        }),
        __metadata("design:paramtypes", [_casa_service__WEBPACK_IMPORTED_MODULE_1__["CasaService"]])
    ], CasaListComponent);
    return CasaListComponent;
}());

var CasaDataSource = /** @class */ (function (_super) {
    __extends(CasaDataSource, _super);
    function CasaDataSource(casaService) {
        var _this = _super.call(this) || this;
        _this.casaService = casaService;
        return _this;
    }
    CasaDataSource.prototype.connect = function () {
        return this.casaService.getCasas();
    };
    CasaDataSource.prototype.disconnect = function () {
    };
    return CasaDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/casa/casa.service.ts":
/*!**************************************!*\
  !*** ./src/app/casa/casa.service.ts ***!
  \**************************************/
/*! exports provided: CasaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CasaService", function() { return CasaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = "/apicasa";
var CasaService = /** @class */ (function () {
    function CasaService(http) {
        this.http = http;
    }
    CasaService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    CasaService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    CasaService.prototype.getCasas = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    CasaService.prototype.getCasa = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    CasaService.prototype.postCasa = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    CasaService.prototype.updateCasa = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    CasaService.prototype.deleteCasa = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    CasaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CasaService);
    return CasaService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav\n    #drawer\n    class=\"sidenav\"\n    fixedInViewport=\"true\"\n    [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n    [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n    [opened]=\"!(isHandset$ | async)\">\n    \n    \n    <mat-toolbar color=\"primary\">Menu</mat-toolbar>\n   \n    <mat-nav-list>\n      <!--\n      <a mat-list-item routerLink=\"/matiere\">Matiere</a>\n      <a mat-list-item href=\"/second-page\">Link 2</a>\n      <a mat-list-item href=\"#\">Link 3</a>\n      <a mat-list-item href=\"/pessoa\">Pessoa</a>      \n      <a mat-list-item routerLink=\"/books\">Livros</a>\n      -->\n      <mat-icon  mat-list-item  routerLink=\"/inicio\" aria-hidden=\"false\" aria-label=\"Example home icon\">home</mat-icon>\n      \n      <a mat-list-item routerLink=\"/enderecos\">Endereços</a>\n      <a mat-list-item routerLink=\"/voos\">Voos</a>\n      <a mat-list-item routerLink=\"/reservas\">Reservas</a>\n      <a mat-list-item routerLink=\"/passagensaereas\">Passagens Aéreas</a>\n\n    </mat-nav-list>    \n    <!--\n    <mat-nav-list>\n        <a mat-list-item routerLink=\"/reserva\">Reserva</a>\n    </mat-nav-list>\n    -->\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\">\n      <button\n        type=\"button\"\n        aria-label=\"Toggle sidenav\"\n        mat-icon-button\n        (click)=\"drawer.toggle()\"\n        *ngIf=\"isHandset$ | async\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n\n      </button>\n      <span>Reserva Aérea</span>\n\n\n    </mat-toolbar>\n    <!-- Add Content Here -->\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/endereco/endereco-create/endereco-create.component.css":
/*!************************************************************************!*\
  !*** ./src/app/endereco/endereco-create/endereco-create.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/endereco/endereco-create/endereco-create.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/endereco/endereco-create/endereco-create.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/enderecos']\"><mat-icon>list</mat-icon></a>\n</div>\n<form [formGroup]=\"enderecoForm\" (ngSubmit)=\"onFormSubmit(enderecoForm.value)\">\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"País\" formControlName=\"pais\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!enderecoForm.get('pais').valid && enderecoForm.get('pais').touched\">País</span>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Cidade\" formControlName=\"cidade\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!enderecoForm.get('cidade').valid && enderecoForm.get('cidade').touched\">Cidade</span>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Estado\" formControlName=\"estado\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!enderecoForm.get('estado').valid && enderecoForm.get('estado').touched\">Estado</span>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Sigla Estado\" formControlName=\"siglaestado\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!enderecoForm.get('siglaestado').valid && enderecoForm.get('siglaestado').touched\">Sigla do Estado</span>\n    </mat-error>\n  </mat-form-field>\n  \n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!enderecoForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/endereco/endereco-create/endereco-create.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/endereco/endereco-create/endereco-create.component.ts ***!
  \***********************************************************************/
/*! exports provided: EnderecoCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoCreateComponent", function() { return EnderecoCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _endereco_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endereco.service */ "./src/app/endereco/endereco.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnderecoCreateComponent = /** @class */ (function () {
    function EnderecoCreateComponent(router, enderecoService, formBuilder) {
        this.router = router;
        this.enderecoService = enderecoService;
        this.formBuilder = formBuilder;
        this.pais = '';
        this.cidade = '';
        this.estado = '';
        this.siglaestado = '';
    }
    EnderecoCreateComponent.prototype.ngOnInit = function () {
        this.enderecoForm = this.formBuilder.group({
            'pais': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'cidade': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'estado': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'siglaestado': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EnderecoCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.enderecoService.postEndereco(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/endereco-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    EnderecoCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-endereco-create',
            template: __webpack_require__(/*! ./endereco-create.component.html */ "./src/app/endereco/endereco-create/endereco-create.component.html"),
            styles: [__webpack_require__(/*! ./endereco-create.component.css */ "./src/app/endereco/endereco-create/endereco-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _endereco_service__WEBPACK_IMPORTED_MODULE_2__["EnderecoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EnderecoCreateComponent);
    return EnderecoCreateComponent;
}());



/***/ }),

/***/ "./src/app/endereco/endereco-detail/endereco-detail.component.css":
/*!************************************************************************!*\
  !*** ./src/app/endereco/endereco-detail/endereco-detail.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 500px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/endereco/endereco-detail/endereco-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/endereco/endereco-detail/endereco-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/enderecos']\"><mat-icon>list</mat-icon></a>\n</div>\n<mat-card class=\"example-card\">\n  \n  <mat-card-content>\n    <dl>\n      <dt>País:</dt>\n      <dd>{{endereco.pais}}</dd>\n      <dt>Cidade:</dt>\n      <dd>{{endereco.cidade}}</dd>\n      <dt>Estado:</dt>\n      <dd>{{endereco.estado}}</dd>\n      <dt>Sigla Estado:</dt>\n      <dd>{{endereco.siglaestado}}</dd>\n    </dl>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/endereco-edit', endereco._id]\"><mat-icon>edit</mat-icon></a>\n    <a mat-raised-button color=\"warn\" (click)=\"deleteEndereco(endereco._id)\"><mat-icon>delete</mat-icon></a>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/endereco/endereco-detail/endereco-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/endereco/endereco-detail/endereco-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: EnderecoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoDetailComponent", function() { return EnderecoDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _endereco_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endereco.service */ "./src/app/endereco/endereco.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnderecoDetailComponent = /** @class */ (function () {
    function EnderecoDetailComponent(route, enderecoService, router) {
        this.route = route;
        this.enderecoService = enderecoService;
        this.router = router;
        this.endereco = {};
    }
    EnderecoDetailComponent.prototype.ngOnInit = function () {
        this.getEnderecoDetails(this.route.snapshot.params['id']);
    };
    EnderecoDetailComponent.prototype.getEnderecoDetails = function (id) {
        var _this = this;
        this.enderecoService.getEndereco(id)
            .subscribe(function (data) {
            console.log(data);
            _this.endereco = data;
        });
        console.log("oi" + this.endereco);
    };
    EnderecoDetailComponent.prototype.deleteEndereco = function (id) {
        var _this = this;
        this.enderecoService.deleteEndereco(id)
            .subscribe(function (res) {
            _this.router.navigate(['/enderecos']);
        }, function (err) {
            console.log(err);
        });
    };
    EnderecoDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-endereco-detail',
            template: __webpack_require__(/*! ./endereco-detail.component.html */ "./src/app/endereco/endereco-detail/endereco-detail.component.html"),
            styles: [__webpack_require__(/*! ./endereco-detail.component.css */ "./src/app/endereco/endereco-detail/endereco-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _endereco_service__WEBPACK_IMPORTED_MODULE_2__["EnderecoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EnderecoDetailComponent);
    return EnderecoDetailComponent;
}());



/***/ }),

/***/ "./src/app/endereco/endereco-edit/endereco-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/endereco/endereco-edit/endereco-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/endereco/endereco-edit/endereco-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/endereco/endereco-edit/endereco-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" (click)=\"enderecoDetails()\"><mat-icon>show</mat-icon></a>\n</div>\n<form [formGroup]=\"enderecoForm\" (ngSubmit)=\"onFormSubmit(enderecoForm.value)\">\n  \n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"País\" formControlName=\"pais\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!enderecoForm.get('pais').valid && enderecoForm.get('pais').touched\">País</span>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Cidade\" formControlName=\"cidade\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!enderecoForm.get('cidade').valid && enderecoForm.get('cidade').touched\">Please enter Endereco Title</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Estado\" formControlName=\"estado\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!enderecoForm.get('estado').valid && enderecoForm.get('estado').touched\">Please enter Endereco Author</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Sigla Estado\" formControlName=\"siglaestado\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!enderecoForm.get('siglaestado').valid && enderecoForm.get('siglaestado').touched\">Please enter Endereco Author</span>\n    </mat-error>\n  </mat-form-field>\n\n  \n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!enderecoForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/endereco/endereco-edit/endereco-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/endereco/endereco-edit/endereco-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: EnderecoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoEditComponent", function() { return EnderecoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _endereco_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endereco.service */ "./src/app/endereco/endereco.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnderecoEditComponent = /** @class */ (function () {
    function EnderecoEditComponent(router, route, enderecoService, formBuilder) {
        this.router = router;
        this.route = route;
        this.enderecoService = enderecoService;
        this.formBuilder = formBuilder;
        this.id = '';
        this.pais = '';
        this.cidade = '';
        this.estado = '';
        this.siglaestado = '';
    }
    EnderecoEditComponent.prototype.ngOnInit = function () {
        this.getEndereco(this.route.snapshot.params['id']);
        this.enderecoForm = this.formBuilder.group({
            'pais': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'cidade': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'estado': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'siglaestado': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EnderecoEditComponent.prototype.getEndereco = function (id) {
        var _this = this;
        this.enderecoService.getEndereco(id).subscribe(function (data) {
            _this.id = data._id;
            _this.enderecoForm.setValue({
                pais: data.pais,
                cidade: data.cidade,
                estado: data.estado,
                siglaestado: data.siglaestado
            });
        });
    };
    EnderecoEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.enderecoService.updateEndereco(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/endereco-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    EnderecoEditComponent.prototype.enderecoDetails = function () {
        this.router.navigate(['/endereco-details', this.id]);
    };
    EnderecoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-endereco-edit',
            template: __webpack_require__(/*! ./endereco-edit.component.html */ "./src/app/endereco/endereco-edit/endereco-edit.component.html"),
            styles: [__webpack_require__(/*! ./endereco-edit.component.css */ "./src/app/endereco/endereco-edit/endereco-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _endereco_service__WEBPACK_IMPORTED_MODULE_2__["EnderecoService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EnderecoEditComponent);
    return EnderecoEditComponent;
}());



/***/ }),

/***/ "./src/app/endereco/endereco-list/endereco-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/endereco/endereco-list/endereco-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n\n.isbn-col {\n  flex: 0 0 100px !important;\n  white-space: unset !important;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/endereco/endereco-list/endereco-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/endereco/endereco-list/endereco-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/endereco-create']\"><mat-icon>add</mat-icon></a>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"pais\">\n      <th mat-header-cell *matHeaderCellDef> País </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.pais}} </td>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"cidade\">\n      <th mat-header-cell *matHeaderCellDef> Cidade</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.cidade}} </td>\n    </ng-container>\n\n    <!-- Author Column -->\n    <ng-container matColumnDef=\"estado\">\n      <th mat-header-cell *matHeaderCellDef> Estado </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.estado}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"siglaestado\">\n      <th mat-header-cell *matHeaderCellDef> Sigla Estado </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.siglaestado}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/endereco-details/', row._id]\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/endereco/endereco-list/endereco-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/endereco/endereco-list/endereco-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: EnderecoListComponent, EnderecoDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoListComponent", function() { return EnderecoListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoDataSource", function() { return EnderecoDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _endereco_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../endereco.service */ "./src/app/endereco/endereco.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EnderecoListComponent = /** @class */ (function () {
    function EnderecoListComponent(apiService) {
        this.apiService = apiService;
        this.displayedColumns = ['pais', 'cidade', 'estado', 'siglaestado'];
        this.dataSource = new EnderecoDataSource(this.apiService);
    }
    EnderecoListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getEnderecos()
            .subscribe(function (res) {
            console.log(res);
            _this.enderecos = res;
        }, function (err) {
            console.log(err);
        });
    };
    EnderecoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-endereco-list',
            template: __webpack_require__(/*! ./endereco-list.component.html */ "./src/app/endereco/endereco-list/endereco-list.component.html"),
            styles: [__webpack_require__(/*! ./endereco-list.component.css */ "./src/app/endereco/endereco-list/endereco-list.component.css")]
        }),
        __metadata("design:paramtypes", [_endereco_service__WEBPACK_IMPORTED_MODULE_1__["EnderecoService"]])
    ], EnderecoListComponent);
    return EnderecoListComponent;
}());

var EnderecoDataSource = /** @class */ (function (_super) {
    __extends(EnderecoDataSource, _super);
    function EnderecoDataSource(apiService) {
        var _this = _super.call(this) || this;
        _this.apiService = apiService;
        return _this;
    }
    EnderecoDataSource.prototype.connect = function () {
        return this.apiService.getEnderecos();
    };
    EnderecoDataSource.prototype.disconnect = function () {
    };
    return EnderecoDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/endereco/endereco.service.ts":
/*!**********************************************!*\
  !*** ./src/app/endereco/endereco.service.ts ***!
  \**********************************************/
/*! exports provided: EnderecoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnderecoService", function() { return EnderecoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = "/apiendereco";
var EnderecoService = /** @class */ (function () {
    function EnderecoService(http) {
        this.http = http;
    }
    EnderecoService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    EnderecoService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    EnderecoService.prototype.getEnderecos = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    EnderecoService.prototype.getEndereco = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    EnderecoService.prototype.postEndereco = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    EnderecoService.prototype.updateEndereco = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    EnderecoService.prototype.deleteEndereco = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    EnderecoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EnderecoService);
    return EnderecoService;
}());



/***/ }),

/***/ "./src/app/inicio/inicio.component.css":
/*!*********************************************!*\
  !*** ./src/app/inicio/inicio.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.mat-toolbar.mat-primary {\n  position: sticky;\n  top: 0;\n}*/\n\n/*.example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n\n.isbn-col {\n  flex: 0 0 100px !important;\n  white-space: unset !important;\n}\n\n.button-row {\n  margin: 10px 0;\n}*/\n"

/***/ }),

/***/ "./src/app/inicio/inicio.component.html":
/*!**********************************************!*\
  !*** ./src/app/inicio/inicio.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"3\" rowHeight=\"200px\">\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" >\n            <div class=\"col-md-12 pad-10\">\n                <button type=\"submit\" mat-raised-button color=\"primary\"  class=\"btn btn-primary\" (click)=\"goToAddEndereco()\">\n                <span class=\"glyphicon glyphicon-floppy-disk\"></span> Cadastro de Endereço\n                </button>\n            </div>\n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n            <div class=\"col-md-12 pad-10\">\n                    <button type=\"submit\" color=\"primary\" mat-raised-button color=\"primary\" class=\"btn btn-primary\" (click)=\"goToAddCasa()\">\n                    <span class=\"glyphicon glyphicon-floppy-disk\"></span> Cadastro de Casa\n                    </button>\n            </div>      \n        </mat-grid-tile>\n        <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\">\n            <div class=\"col-md-12 pad-10\">\n                    <button type=\"submit\" color=\"primary\" mat-raised-button color=\"primary\" class=\"btn btn-primary\" (click)=\"goToAddApartamento()\">\n                    <span class=\"glyphicon glyphicon-floppy-disk\"></span> Cadastro de Apartamento\n                    </button>\n            </div>      \n        </mat-grid-tile>\n    </mat-grid-list>\n<!--\n<mat-grid-list cols=\"2\" rowHeight=\"100px\">\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" [style.background]=\"'lightblue'\">\n        <div class=\"col-md-12 pad-10\">\n            <button type=\"submit\" mat-raised-button color=\"primary\"  class=\"btn btn-primary\" (click)=\"goToAddEndereco()\">\n            <span class=\"glyphicon glyphicon-floppy-disk\"></span> Adicionar Endereço\n            </button>\n        </div>\n    </mat-grid-tile>\n    <mat-grid-tile [colspan]=\"1\" [rowspan]=\"1\" [style.background]=\"'lightblue'\">\n        <div class=\"col-md-12 pad-10\">\n                <button type=\"submit\" color=\"primary\" mat-raised-button color=\"primary\" class=\"btn btn-primary\" (click)=\"goToAddCasa()\">\n                <span class=\"glyphicon glyphicon-floppy-disk\"></span> Adicionar Casa\n                </button>\n        </div>      \n    </mat-grid-tile>\n</mat-grid-list>\n-->\n<!--\n<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n    <mat-grid-tile\n        *ngFor=\"let tile of tiles\"\n        [colspan]=\"tile.cols\"\n        [rowspan]=\"tile.rows\"\n        [style.background]=\"tile.color\">\n      {{tile.text}}\n    </mat-grid-tile>\n  </mat-grid-list>\n  -->"

/***/ }),

/***/ "./src/app/inicio/inicio.component.ts":
/*!********************************************!*\
  !*** ./src/app/inicio/inicio.component.ts ***!
  \********************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InicioComponent = /** @class */ (function () {
    function InicioComponent(router, breakpointObserver) {
        this.router = router;
        this.breakpointObserver = breakpointObserver;
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
    }
    InicioComponent.prototype.goToAddEndereco = function () {
        this.router.navigateByUrl('/endereco-create');
    };
    InicioComponent.prototype.goToAddCasa = function () {
        this.router.navigateByUrl('/casa-create');
    };
    InicioComponent.prototype.goToAddApartamento = function () {
        this.router.navigateByUrl('/apartamento-create');
    };
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/inicio/inicio.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea-create/passagemaerea-create.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea-create/passagemaerea-create.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea-create/passagemaerea-create.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea-create/passagemaerea-create.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/passagemaereas']\"><mat-icon>list</mat-icon></a>\n</div>\n<form [formGroup]=\"passagemaereaForm\" (ngSubmit)=\"onFormSubmit(passagemaereaForm.value)\">\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Código\" formControlName=\"codigo\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!passagemaereaForm.get('codigo').valid && passagemaereaForm.get('codigo').touched\">Código</span>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Preço\" formControlName=\"preco\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!passagemaereaForm.get('preco').valid && passagemaereaForm.get('preco').touched\">Preço</span>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Ida</mat-label>\n    <mat-select formControlName=\"vooIda\">\n      <mat-option  *ngFor=\"let vooIda of idas\" [value]=\"vooIda\">\n        {{vooIda.dataPartida| date:\"dd/MM/yyyy HH:mm\"}} - {{vooIda.dataChegada | date:\"dd/MM/yyyy HH:mm\"}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Volta</mat-label>\n    <mat-select formControlName=\"vooVolta\">\n      <mat-option  *ngFor=\"let vooVolta of voltas\" [value]=\"vooVolta\">\n        {{vooVolta.dataPartida| date:\"dd/MM/yyyy HH:mm\"}} - {{vooVolta.dataChegada | date:\"dd/MM/yyyy HH:mm\"}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>  \n  \n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!passagemaereaForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea-create/passagemaerea-create.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea-create/passagemaerea-create.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PassagemAereaCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassagemAereaCreateComponent", function() { return PassagemAereaCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _passagemaerea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../passagemaerea.service */ "./src/app/passagemaerea/passagemaerea.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _voo_voo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../voo/voo.service */ "./src/app/voo/voo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PassagemAereaCreateComponent = /** @class */ (function () {
    function PassagemAereaCreateComponent(router, passagemaereaService, formBuilder, vooService) {
        var _this = this;
        this.router = router;
        this.passagemaereaService = passagemaereaService;
        this.formBuilder = formBuilder;
        this.vooService = vooService;
        this.vooService.getVoos()
            .subscribe(function (res) {
            console.log(res);
            _this.idas = res;
            _this.voltas = res;
        }, function (err) {
            console.log(err);
        });
    }
    PassagemAereaCreateComponent.prototype.ngOnInit = function () {
        this.passagemaereaForm = this.formBuilder.group({
            'codigo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'preco': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'vooIda': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'vooVolta': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"]],
        });
    };
    PassagemAereaCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.passagemaereaService.postPassagemAerea(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/passagemaerea-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    PassagemAereaCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passagemaerea-create',
            template: __webpack_require__(/*! ./passagemaerea-create.component.html */ "./src/app/passagemaerea/passagemaerea-create/passagemaerea-create.component.html"),
            styles: [__webpack_require__(/*! ./passagemaerea-create.component.css */ "./src/app/passagemaerea/passagemaerea-create/passagemaerea-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _passagemaerea_service__WEBPACK_IMPORTED_MODULE_2__["PassagemAereaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _voo_voo_service__WEBPACK_IMPORTED_MODULE_4__["VooService"]])
    ], PassagemAereaCreateComponent);
    return PassagemAereaCreateComponent;
}());



/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea-detail/passagemaerea-detail.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea-detail/passagemaerea-detail.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 500px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea-detail/passagemaerea-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea-detail/passagemaerea-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/passagensaereas']\"><mat-icon>list</mat-icon></a>\n</div>\n<mat-card class=\"example-card\">\n  \n  <mat-card-content>\n    <dl>\n      <dt>Código:</dt>\n      <dd>{{passagemaerea.codigo}}</dd>\n      <dt>Preco:</dt>\n      <dd>{{passagemaerea.preco}}</dd>\n      <dt>Ida:</dt>\n      <dd>{{passagemaerea.vooIda.dataPartida| date:\"dd/MM/yyyy HH:mm\"}}</dd>\n      <dd>{{passagemaerea.vooIda.dataChegada| date:\"dd/MM/yyyy HH:mm\"}}</dd>\n      <dt>Volta:</dt>\n      <dd>{{passagemaerea.vooVolta.dataPartida| date:\"dd/MM/yyyy HH:mm\"}}</dd>\n      <dd>{{passagemaerea.vooVolta.dataChegada| date:\"dd/MM/yyyy HH:mm\"}}</dd>\n      <dt>Cidade origem:</dt>\n      <dd>{{passagemaerea.vooIda.origem.cidade}}</dd>\n      <dt>Cidade destino:</dt>\n      <dd>{{passagemaerea.vooIda.destino.cidade}}</dd>\n    </dl>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/passagemaerea-edit', passagemaerea._id]\"><mat-icon>edit</mat-icon></a>\n    <a mat-raised-button color=\"warn\" (click)=\"deletePassagemAerea(passagemaerea._id)\"><mat-icon>delete</mat-icon></a>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea-detail/passagemaerea-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea-detail/passagemaerea-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PassagemAereaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassagemAereaDetailComponent", function() { return PassagemAereaDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _passagemaerea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../passagemaerea.service */ "./src/app/passagemaerea/passagemaerea.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PassagemAereaDetailComponent = /** @class */ (function () {
    function PassagemAereaDetailComponent(route, passagemaereaService, router) {
        this.route = route;
        this.passagemaereaService = passagemaereaService;
        this.router = router;
        this.passagemaerea = {};
    }
    PassagemAereaDetailComponent.prototype.ngOnInit = function () {
        this.getPassagemAereaDetails(this.route.snapshot.params['id']);
    };
    PassagemAereaDetailComponent.prototype.getPassagemAereaDetails = function (id) {
        var _this = this;
        this.passagemaereaService.getPassagemAerea(id)
            .subscribe(function (data) {
            console.log(data);
            _this.passagemaerea = data;
        });
        console.log("oi" + this.passagemaerea);
    };
    PassagemAereaDetailComponent.prototype.deletePassagemAerea = function (id) {
        var _this = this;
        this.passagemaereaService.deletePassagemAerea(id)
            .subscribe(function (res) {
            _this.router.navigate(['/passagensaereas']);
        }, function (err) {
            console.log(err);
        });
    };
    PassagemAereaDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passagemaerea-detail',
            template: __webpack_require__(/*! ./passagemaerea-detail.component.html */ "./src/app/passagemaerea/passagemaerea-detail/passagemaerea-detail.component.html"),
            styles: [__webpack_require__(/*! ./passagemaerea-detail.component.css */ "./src/app/passagemaerea/passagemaerea-detail/passagemaerea-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _passagemaerea_service__WEBPACK_IMPORTED_MODULE_2__["PassagemAereaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PassagemAereaDetailComponent);
    return PassagemAereaDetailComponent;
}());



/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea-edit/passagemaerea-edit.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea-edit/passagemaerea-edit.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea-edit/passagemaerea-edit.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea-edit/passagemaerea-edit.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" (click)=\"passagemaereaDetails()\"><mat-icon>show</mat-icon></a>\n</div>\n<form [formGroup]=\"passagemaereaForm\" (ngSubmit)=\"onFormSubmit(passagemaereaForm.value)\">\n  \n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Código\" formControlName=\"codigo\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!passagemaereaForm.get('codigo').valid && passagemaereaForm.get('codigo').touched\">Código</span>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Preço\" formControlName=\"preco\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!passagemaereaForm.get('preco').valid && passagemaereaForm.get('preco').touched\">Preço</span>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Ida</mat-label>\n    <mat-select formControlName=\"vooIda\">\n      <mat-option  *ngFor=\"let vooIda of idas\" [value]=\"vooIda\">\n        {{vooIda.dataPartida}} - {{vooIda.Chegada}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Volta</mat-label>\n    <mat-select formControlName=\"vooVolta\">\n      <mat-option  *ngFor=\"let vooVolta of voltas\" [value]=\"vooVolta\">\n        {{vooVolta.dataPartida}} - {{vooVolta.Chegada}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>  \n  \n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!passagemaereaForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea-edit/passagemaerea-edit.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea-edit/passagemaerea-edit.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PassagemAereaEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassagemAereaEditComponent", function() { return PassagemAereaEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _passagemaerea_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../passagemaerea.service */ "./src/app/passagemaerea/passagemaerea.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _voo_voo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../voo/voo.service */ "./src/app/voo/voo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PassagemAereaEditComponent = /** @class */ (function () {
    function PassagemAereaEditComponent(router, route, passagemaereaService, formBuilder, vooService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.passagemaereaService = passagemaereaService;
        this.formBuilder = formBuilder;
        this.vooService = vooService;
        this.id = '';
        this.vooService.getVoos()
            .subscribe(function (res) {
            console.log(res);
            _this.idas = res;
            _this.voltas = res;
        }, function (err) {
            console.log(err);
        });
    }
    PassagemAereaEditComponent.prototype.ngOnInit = function () {
        this.getPassagemAerea(this.route.snapshot.params['id']);
        this.passagemaereaForm = this.formBuilder.group({
            'codigo': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'preco': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'vooIda': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'vooVolta': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"]],
        });
    };
    PassagemAereaEditComponent.prototype.getPassagemAerea = function (id) {
        var _this = this;
        this.passagemaereaService.getPassagemAerea(id).subscribe(function (data) {
            _this.id = data._id;
            _this.passagemaereaForm.setValue({
                codigo: data.codigo,
                preco: data.preco,
                vooIda: data.vooIda,
                vooVolta: data.vooVolta
            });
        });
    };
    PassagemAereaEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.passagemaereaService.updatePassagemAerea(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/passagemaerea-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    PassagemAereaEditComponent.prototype.passagemaereaDetails = function () {
        this.router.navigate(['/passagemaerea-details', this.id]);
    };
    PassagemAereaEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passagemaerea-edit',
            template: __webpack_require__(/*! ./passagemaerea-edit.component.html */ "./src/app/passagemaerea/passagemaerea-edit/passagemaerea-edit.component.html"),
            styles: [__webpack_require__(/*! ./passagemaerea-edit.component.css */ "./src/app/passagemaerea/passagemaerea-edit/passagemaerea-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _passagemaerea_service__WEBPACK_IMPORTED_MODULE_2__["PassagemAereaService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _voo_voo_service__WEBPACK_IMPORTED_MODULE_4__["VooService"]])
    ], PassagemAereaEditComponent);
    return PassagemAereaEditComponent;
}());



/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea-list/passagemaerea-list.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea-list/passagemaerea-list.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n\n.isbn-col {\n  flex: 0 0 100px !important;\n  white-space: unset !important;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea-list/passagemaerea-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea-list/passagemaerea-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/passagemaerea-create']\"><mat-icon>add</mat-icon></a>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"codigo\">\n      <th mat-header-cell *matHeaderCellDef> Código </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.codigo}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"preco\">\n      <th mat-header-cell *matHeaderCellDef> Preço</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.preco}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"vooIda\">\n      <th mat-header-cell *matHeaderCellDef>Ida</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.vooIda.dataPartida | date:\"dd/MM/yyyy HH:mm\"}} </td>\n      <td mat-cell *matCellDef=\"let element\"> {{element.vooIda.dataChegada | date:\"dd/MM/yyyy HH:mm\"}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"vooVolta\">\n      <th mat-header-cell *matHeaderCellDef>Volta </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.vooVolta.dataPartida | date:\"dd/MM/yyyy HH:mm\"}} </td>\n      <td mat-cell *matCellDef=\"let element\"> {{element.vooVolta.dataChegada | date:\"dd/MM/yyyy HH:mm\"}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/passagemaerea-details/', row._id]\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea-list/passagemaerea-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea-list/passagemaerea-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PassagemAereaListComponent, PassagemAereaDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassagemAereaListComponent", function() { return PassagemAereaListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassagemAereaDataSource", function() { return PassagemAereaDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _passagemaerea_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../passagemaerea.service */ "./src/app/passagemaerea/passagemaerea.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PassagemAereaListComponent = /** @class */ (function () {
    function PassagemAereaListComponent(apiPassagemAerea) {
        this.apiPassagemAerea = apiPassagemAerea;
        this.displayedColumns = ['codigo', 'preco', 'vooIda', 'vooVolta'];
        this.dataSource = new PassagemAereaDataSource(this.apiPassagemAerea);
    }
    PassagemAereaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiPassagemAerea.getPassagemAereas()
            .subscribe(function (res) {
            console.log(res);
            _this.passagensaereas = res;
        }, function (err) {
            console.log(err);
        });
    };
    PassagemAereaListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passagemaerea-list',
            template: __webpack_require__(/*! ./passagemaerea-list.component.html */ "./src/app/passagemaerea/passagemaerea-list/passagemaerea-list.component.html"),
            styles: [__webpack_require__(/*! ./passagemaerea-list.component.css */ "./src/app/passagemaerea/passagemaerea-list/passagemaerea-list.component.css")]
        }),
        __metadata("design:paramtypes", [_passagemaerea_service__WEBPACK_IMPORTED_MODULE_1__["PassagemAereaService"]])
    ], PassagemAereaListComponent);
    return PassagemAereaListComponent;
}());

var PassagemAereaDataSource = /** @class */ (function (_super) {
    __extends(PassagemAereaDataSource, _super);
    function PassagemAereaDataSource(apiPassagemAerea) {
        var _this = _super.call(this) || this;
        _this.apiPassagemAerea = apiPassagemAerea;
        return _this;
    }
    PassagemAereaDataSource.prototype.connect = function () {
        return this.apiPassagemAerea.getPassagemAereas();
    };
    PassagemAereaDataSource.prototype.disconnect = function () {
    };
    return PassagemAereaDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/passagemaerea/passagemaerea.service.ts":
/*!********************************************************!*\
  !*** ./src/app/passagemaerea/passagemaerea.service.ts ***!
  \********************************************************/
/*! exports provided: PassagemAereaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassagemAereaService", function() { return PassagemAereaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = "/apipassagemaerea";
var PassagemAereaService = /** @class */ (function () {
    function PassagemAereaService(http) {
        this.http = http;
    }
    PassagemAereaService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    PassagemAereaService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    PassagemAereaService.prototype.getPassagemAereas = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PassagemAereaService.prototype.getPassagemAerea = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PassagemAereaService.prototype.postPassagemAerea = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PassagemAereaService.prototype.updatePassagemAerea = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PassagemAereaService.prototype.deletePassagemAerea = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    PassagemAereaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PassagemAereaService);
    return PassagemAereaService;
}());



/***/ }),

/***/ "./src/app/reserva/reserva-create/reserva-create.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/reserva/reserva-create/reserva-create.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/reserva/reserva-create/reserva-create.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/reserva/reserva-create/reserva-create.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/reservas']\"><mat-icon>list</mat-icon></a>\n</div>\n<form [formGroup]=\"reservaForm\" (ngSubmit)=\"onFormSubmit(reservaForm.value)\">\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Pessoas\" formControlName=\"pessoas\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!reservaForm.get('pessoas').valid && reservaForm.get('pessoas').touched\">Pessoas</span>\n    </mat-error>\n  </mat-form-field>\n\n  <div class=\"ui-g-12 ui-md-4\">\n      <h3>Data de ida</h3>\n      <p-calendar [(ngModel)]=\"dataIda\" formControlName=\"dataIda\"></p-calendar>\n  </div>\n\n  <div class=\"ui-g-12 ui-md-4\">\n    <h3>Data de volta</h3>\n    <p-calendar [(ngModel)]=\"dataVolta\" formControlName=\"dataVolta\"></p-calendar>\n  </div>\n\n  <mat-form-field>\n    <mat-label>Cidade Origem</mat-label>\n    <mat-select formControlName=\"origem\">\n      <mat-option  *ngFor=\"let origem of origens\" [value]=\"origem\">\n        {{origem.cidade}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Destino</mat-label>\n    <mat-select formControlName=\"destino\">\n      <mat-option  *ngFor=\"let destino of destinos\" [value]=\"destino\">\n        {{destino.cidade}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  \n  \n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!reservaForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/reserva/reserva-create/reserva-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/reserva/reserva-create/reserva-create.component.ts ***!
  \********************************************************************/
/*! exports provided: ReservaCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaCreateComponent", function() { return ReservaCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reserva_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reserva.service */ "./src/app/reserva/reserva.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../endereco/endereco.service */ "./src/app/endereco/endereco.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReservaCreateComponent = /** @class */ (function () {
    function ReservaCreateComponent(router, reservaService, formBuilder, enderecoService) {
        var _this = this;
        this.router = router;
        this.reservaService = reservaService;
        this.formBuilder = formBuilder;
        this.enderecoService = enderecoService;
        this.enderecoService.getEnderecos()
            .subscribe(function (res) {
            console.log(res);
            _this.origens = res;
            _this.destinos = res;
        }, function (err) {
            console.log(err);
        });
    }
    ReservaCreateComponent.prototype.ngOnInit = function () {
        this.reservaForm = this.formBuilder.group({
            'pessoas': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'dataIda': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'dataVolta': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"]],
            'origem': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'destino': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    ReservaCreateComponent.prototype.validaCidade = function () {
        if (this.origem.cidade == this.destino.cidade) {
            console.log("inválido!");
        }
    };
    ReservaCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.reservaService.postReserva(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/reserva-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    ReservaCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reserva-create',
            template: __webpack_require__(/*! ./reserva-create.component.html */ "./src/app/reserva/reserva-create/reserva-create.component.html"),
            styles: [__webpack_require__(/*! ./reserva-create.component.css */ "./src/app/reserva/reserva-create/reserva-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _reserva_service__WEBPACK_IMPORTED_MODULE_2__["ReservaService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__["EnderecoService"]])
    ], ReservaCreateComponent);
    return ReservaCreateComponent;
}());



/***/ }),

/***/ "./src/app/reserva/reserva-detail/reserva-detail.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/reserva/reserva-detail/reserva-detail.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 500px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/reserva/reserva-detail/reserva-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/reserva/reserva-detail/reserva-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/reservas']\"><mat-icon>list</mat-icon></a>\n</div>\n<mat-card class=\"example-card\">\n  \n  <mat-card-content>\n    <dl>\n      <dt>Quant. pessoas:</dt>\n      <dd>{{reserva.pessoas}}</dd>\n      <dt>Data de Ida:</dt>\n      <dd>{{reserva.dataIda}}</dd>\n      <dt>Data de Volta:</dt>\n      <dd>{{reserva.dataVolta}}</dd>\n      <dt>Cidade origem:</dt>\n      <dd>{{reserva.origem.cidade}}</dd>\n      <dt>Cidade destino:</dt>\n      <dd>{{reserva.destino.cidade}}</dd>\n    </dl>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/reserva-edit', reserva._id]\"><mat-icon>edit</mat-icon></a>\n    <a mat-raised-button color=\"warn\" (click)=\"deleteReserva(reserva._id)\"><mat-icon>delete</mat-icon></a>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/reserva/reserva-detail/reserva-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/reserva/reserva-detail/reserva-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ReservaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaDetailComponent", function() { return ReservaDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reserva_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reserva.service */ "./src/app/reserva/reserva.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservaDetailComponent = /** @class */ (function () {
    function ReservaDetailComponent(route, reservaService, router) {
        this.route = route;
        this.reservaService = reservaService;
        this.router = router;
        this.reserva = {};
    }
    ReservaDetailComponent.prototype.ngOnInit = function () {
        this.getReservaDetails(this.route.snapshot.params['id']);
    };
    ReservaDetailComponent.prototype.getReservaDetails = function (id) {
        var _this = this;
        this.reservaService.getReserva(id)
            .subscribe(function (data) {
            console.log(data);
            _this.reserva = data;
        });
        console.log("oi" + this.reserva);
    };
    ReservaDetailComponent.prototype.deleteReserva = function (id) {
        var _this = this;
        this.reservaService.deleteReserva(id)
            .subscribe(function (res) {
            _this.router.navigate(['/reservas']);
        }, function (err) {
            console.log(err);
        });
    };
    ReservaDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reserva-detail',
            template: __webpack_require__(/*! ./reserva-detail.component.html */ "./src/app/reserva/reserva-detail/reserva-detail.component.html"),
            styles: [__webpack_require__(/*! ./reserva-detail.component.css */ "./src/app/reserva/reserva-detail/reserva-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _reserva_service__WEBPACK_IMPORTED_MODULE_2__["ReservaService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ReservaDetailComponent);
    return ReservaDetailComponent;
}());



/***/ }),

/***/ "./src/app/reserva/reserva-edit/reserva-edit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/reserva/reserva-edit/reserva-edit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/reserva/reserva-edit/reserva-edit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/reserva/reserva-edit/reserva-edit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" (click)=\"reservaDetails()\"><mat-icon>show</mat-icon></a>\n</div>\n<form [formGroup]=\"reservaForm\" (ngSubmit)=\"onFormSubmit(reservaForm.value)\">\n  \n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Pessoas\" formControlName=\"pessoas\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!reservaForm.get('pessoas').valid && reservaForm.get('pessoas').touched\">Pessoas</span>\n    </mat-error>\n  </mat-form-field>\n\n  <div class=\"ui-g-12 ui-md-4\">\n      <h3>Data de ida</h3>\n      <p-calendar [(ngModel)]=\"dataIda\" formControlName=\"dataIda\"></p-calendar>\n  </div>\n\n  <div class=\"ui-g-12 ui-md-4\">\n    <h3>Data de volta</h3>\n    <p-calendar [(ngModel)]=\"dataVolta\" formControlName=\"dataVolta\"></p-calendar>\n  </div>\n\n  <mat-form-field>\n    <mat-label>Cidade Origem</mat-label>\n    <mat-select formControlName=\"origem\">\n      <mat-option  *ngFor=\"let origem of origens\" [value]=\"origem\">\n        {{origem.cidade}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Destino</mat-label>\n    <mat-select formControlName=\"destino\">\n      <mat-option  *ngFor=\"let destino of destinos\" [value]=\"destino\">\n        {{destino.cidade}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  \n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!reservaForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/reserva/reserva-edit/reserva-edit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/reserva/reserva-edit/reserva-edit.component.ts ***!
  \****************************************************************/
/*! exports provided: ReservaEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaEditComponent", function() { return ReservaEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reserva_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reserva.service */ "./src/app/reserva/reserva.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../endereco/endereco.service */ "./src/app/endereco/endereco.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReservaEditComponent = /** @class */ (function () {
    function ReservaEditComponent(router, route, reservaService, formBuilder, enderecoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.reservaService = reservaService;
        this.formBuilder = formBuilder;
        this.enderecoService = enderecoService;
        this.id = '';
        this.enderecoService.getEnderecos()
            .subscribe(function (res) {
            console.log(res);
            _this.origens = res;
            _this.destinos = res;
        }, function (err) {
            console.log(err);
        });
    }
    ReservaEditComponent.prototype.ngOnInit = function () {
        this.getReserva(this.route.snapshot.params['id']);
        this.reservaForm = this.formBuilder.group({
            'pessoas': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'dataIda': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'dataVolta': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"]],
            'origem': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'destino': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ReservaEditComponent.prototype.getReserva = function (id) {
        var _this = this;
        this.reservaService.getReserva(id).subscribe(function (data) {
            _this.id = data._id;
            _this.reservaForm.setValue({
                pessoas: data.pessoas,
                dataIda: data.dataIda,
                dataVolta: data.dataVolta,
                origem: data.origem,
                destino: data.destino
            });
        });
    };
    ReservaEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.reservaService.updateReserva(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/reserva-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    ReservaEditComponent.prototype.reservaDetails = function () {
        this.router.navigate(['/reserva-details', this.id]);
    };
    ReservaEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reserva-edit',
            template: __webpack_require__(/*! ./reserva-edit.component.html */ "./src/app/reserva/reserva-edit/reserva-edit.component.html"),
            styles: [__webpack_require__(/*! ./reserva-edit.component.css */ "./src/app/reserva/reserva-edit/reserva-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _reserva_service__WEBPACK_IMPORTED_MODULE_2__["ReservaService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__["EnderecoService"]])
    ], ReservaEditComponent);
    return ReservaEditComponent;
}());



/***/ }),

/***/ "./src/app/reserva/reserva-list/reserva-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/reserva/reserva-list/reserva-list.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n\n.isbn-col {\n  flex: 0 0 100px !important;\n  white-space: unset !important;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/reserva/reserva-list/reserva-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/reserva/reserva-list/reserva-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/reserva-create']\"><mat-icon>add</mat-icon></a>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"pessoas\">\n      <th mat-header-cell *matHeaderCellDef> Quant. pessoas </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.pessoas}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"dataIda\">\n      <th mat-header-cell *matHeaderCellDef> Data de Ida</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.dataIda| date:\"dd/MM/yyyy HH:mm\"}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"dataVolta\">\n      <th mat-header-cell *matHeaderCellDef>Data de Volta</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.dataVolta| date:\"dd/MM/yyyy HH:mm\"}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"origem\">\n      <th mat-header-cell *matHeaderCellDef>Cidade Origem </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.origem.cidade}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"destino\">\n      <th mat-header-cell *matHeaderCellDef> Cidade destino </th>\n      <td mat-cell *matCellDef=\"let element\">{{element.destino.cidade}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/reserva-details/', row._id]\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/reserva/reserva-list/reserva-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/reserva/reserva-list/reserva-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ReservaListComponent, ReservaDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaListComponent", function() { return ReservaListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaDataSource", function() { return ReservaDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reserva_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reserva.service */ "./src/app/reserva/reserva.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservaListComponent = /** @class */ (function () {
    function ReservaListComponent(apiReserva) {
        this.apiReserva = apiReserva;
        this.displayedColumns = ['pessoas', 'origem', 'destino', 'dataIda', 'dataVolta'];
        this.dataSource = new ReservaDataSource(this.apiReserva);
    }
    ReservaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiReserva.getReservas()
            .subscribe(function (res) {
            console.log(res);
            _this.reservas = res;
        }, function (err) {
            console.log(err);
        });
    };
    ReservaListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reserva-list',
            template: __webpack_require__(/*! ./reserva-list.component.html */ "./src/app/reserva/reserva-list/reserva-list.component.html"),
            styles: [__webpack_require__(/*! ./reserva-list.component.css */ "./src/app/reserva/reserva-list/reserva-list.component.css")]
        }),
        __metadata("design:paramtypes", [_reserva_service__WEBPACK_IMPORTED_MODULE_1__["ReservaService"]])
    ], ReservaListComponent);
    return ReservaListComponent;
}());

var ReservaDataSource = /** @class */ (function (_super) {
    __extends(ReservaDataSource, _super);
    function ReservaDataSource(apiReserva) {
        var _this = _super.call(this) || this;
        _this.apiReserva = apiReserva;
        return _this;
    }
    ReservaDataSource.prototype.connect = function () {
        return this.apiReserva.getReservas();
    };
    ReservaDataSource.prototype.disconnect = function () {
    };
    return ReservaDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/reserva/reserva.service.ts":
/*!********************************************!*\
  !*** ./src/app/reserva/reserva.service.ts ***!
  \********************************************/
/*! exports provided: ReservaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservaService", function() { return ReservaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = "/apireserva";
var ReservaService = /** @class */ (function () {
    function ReservaService(http) {
        this.http = http;
    }
    ReservaService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ReservaService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ReservaService.prototype.getReservas = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ReservaService.prototype.getReserva = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ReservaService.prototype.postReserva = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ReservaService.prototype.updateReserva = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ReservaService.prototype.deleteReserva = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ReservaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ReservaService);
    return ReservaService;
}());



/***/ }),

/***/ "./src/app/voo/voo-create/voo-create.component.css":
/*!*********************************************************!*\
  !*** ./src/app/voo/voo-create/voo-create.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/voo/voo-create/voo-create.component.html":
/*!**********************************************************!*\
  !*** ./src/app/voo/voo-create/voo-create.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/voos']\"><mat-icon>list</mat-icon></a>\n</div>\n<form [formGroup]=\"vooForm\" (ngSubmit)=\"onFormSubmit(vooForm.value)\">\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Número\" formControlName=\"numero\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!vooForm.get('numero').valid && vooForm.get('numero').touched\">Número</span>\n    </mat-error>\n  </mat-form-field>\n\n  <div class=\"ui-g-12 ui-md-4\">\n    <h3>Data de Partida</h3>\n    <p-calendar [(ngModel)]=\"dataPartida\" [showTime]=\"true\" formControlName=\"dataPartida\"></p-calendar>\n  </div>\n\n  <div class=\"ui-g-12 ui-md-4\">\n    <h3>Data de Chegada</h3>\n    <p-calendar [(ngModel)]=\"dataChegada\" [showTime]=\"true\" formControlName=\"dataChegada\"></p-calendar>\n  </div>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Passagens Disponíveis\" formControlName=\"passagensDisp\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!vooForm.get('passagensDisp').valid && vooForm.get('passagensDisp').touched\">Passagens Disponíveis</span>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Origem</mat-label>\n    <mat-select formControlName=\"origem\">\n      <mat-option  *ngFor=\"let origem of origens\" [value]=\"origem\">\n        {{origem.cidade}}\n        ({{origem.siglaestado}})-{{origem.pais}}   \n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Destino</mat-label>\n    <mat-select formControlName=\"destino\">\n      <mat-option  *ngFor=\"let destino of destinos\" [value]=\"destino\">\n        {{destino.cidade}}\n        ({{destino.siglaestado}})-{{destino.pais}}   \n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n\n<!--\n  <mat-form-field >\n    <input matInput [matDatepicker]=\"picker\" placeholder=\"Data de partida\" formControlName=\"dataPartida\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n\n  <mat-form-field >\n    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Data de chegada\" formControlName=\"dataChegada\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n  </mat-form-field>\n-->\n  \n  \n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!vooForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/voo/voo-create/voo-create.component.ts":
/*!********************************************************!*\
  !*** ./src/app/voo/voo-create/voo-create.component.ts ***!
  \********************************************************/
/*! exports provided: VooCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VooCreateComponent", function() { return VooCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _voo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../voo.service */ "./src/app/voo/voo.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../endereco/endereco.service */ "./src/app/endereco/endereco.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VooCreateComponent = /** @class */ (function () {
    function VooCreateComponent(router, vooService, formBuilder, enderecoService) {
        var _this = this;
        this.router = router;
        this.vooService = vooService;
        this.formBuilder = formBuilder;
        this.enderecoService = enderecoService;
        this.enderecoService.getEnderecos()
            .subscribe(function (res) {
            console.log(res);
            _this.origens = res;
            _this.destinos = res;
        }, function (err) {
            console.log(err);
        });
    }
    VooCreateComponent.prototype.ngOnInit = function () {
        this.vooForm = this.formBuilder.group({
            'numero': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'dataPartida': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'dataChegada': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'passagensDisp': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'origem': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'destino': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    VooCreateComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.vooService.postVoo(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/voo-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    VooCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voo-create',
            template: __webpack_require__(/*! ./voo-create.component.html */ "./src/app/voo/voo-create/voo-create.component.html"),
            styles: [__webpack_require__(/*! ./voo-create.component.css */ "./src/app/voo/voo-create/voo-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _voo_service__WEBPACK_IMPORTED_MODULE_2__["VooService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__["EnderecoService"]])
    ], VooCreateComponent);
    return VooCreateComponent;
}());



/***/ }),

/***/ "./src/app/voo/voo-detail/voo-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/voo/voo-detail/voo-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-width: 500px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/voo/voo-detail/voo-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/voo/voo-detail/voo-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/voos']\"><mat-icon>list</mat-icon></a>\n</div>\n<mat-card class=\"example-card\">\n  \n  <mat-card-content>\n    <dl>\n      <dt>Número:</dt>\n      <dd>{{voo.numero}}</dd>\n      <dt>Data de Partida:</dt>\n      <dd>{{voo.dataPartida| date:\"dd/MM/yyyy HH:mm\"}}</dd>\n      <dt>Data de Chegada:</dt>\n      <dd>{{voo.dataChegada| date:\"dd/MM/yyyy HH:mm\"}}</dd>\n      <dt>Passagens Disponíveis:</dt>\n      <dd>{{voo.passagensDisp}}</dd>\n      <dt>Origem:</dt>\n      <dd>{{voo.origem.cidade}}({{voo.origem.siglaestado}})</dd>\n      <dt>Destino:</dt>\n      <dd>{{voo.destino.cidade}}({{voo.destino.siglaestado}})</dd>\n    </dl>\n  </mat-card-content>\n  <mat-card-actions>\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/voo-edit', voo._id]\"><mat-icon>edit</mat-icon></a>\n    <a mat-raised-button color=\"warn\" (click)=\"deleteVoo(voo._id)\"><mat-icon>delete</mat-icon></a>\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/voo/voo-detail/voo-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/voo/voo-detail/voo-detail.component.ts ***!
  \********************************************************/
/*! exports provided: VooDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VooDetailComponent", function() { return VooDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _voo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../voo.service */ "./src/app/voo/voo.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VooDetailComponent = /** @class */ (function () {
    function VooDetailComponent(route, vooService, router) {
        this.route = route;
        this.vooService = vooService;
        this.router = router;
        this.voo = {};
    }
    VooDetailComponent.prototype.ngOnInit = function () {
        this.getVooDetails(this.route.snapshot.params['id']);
    };
    VooDetailComponent.prototype.getVooDetails = function (id) {
        var _this = this;
        this.vooService.getVoo(id)
            .subscribe(function (data) {
            console.log(data);
            _this.voo = data;
        });
        console.log("oi" + this.voo);
    };
    VooDetailComponent.prototype.deleteVoo = function (id) {
        var _this = this;
        this.vooService.deleteVoo(id)
            .subscribe(function (res) {
            _this.router.navigate(['/voos']);
        }, function (err) {
            console.log(err);
        });
    };
    VooDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voo-detail',
            template: __webpack_require__(/*! ./voo-detail.component.html */ "./src/app/voo/voo-detail/voo-detail.component.html"),
            styles: [__webpack_require__(/*! ./voo-detail.component.css */ "./src/app/voo/voo-detail/voo-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _voo_service__WEBPACK_IMPORTED_MODULE_2__["VooService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VooDetailComponent);
    return VooDetailComponent;
}());



/***/ }),

/***/ "./src/app/voo/voo-edit/voo-edit.component.css":
/*!*****************************************************!*\
  !*** ./src/app/voo/voo-edit/voo-edit.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.example-full-width:nth-last-child() {\n  margin-bottom: 10px;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/voo/voo-edit/voo-edit.component.html":
/*!******************************************************!*\
  !*** ./src/app/voo/voo-edit/voo-edit.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" (click)=\"vooDetails()\"><mat-icon>show</mat-icon></a>\n</div>\n<form [formGroup]=\"vooForm\" (ngSubmit)=\"onFormSubmit(vooForm.value)\">\n  \n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Número\" formControlName=\"numero\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!vooForm.get('numero').valid && vooForm.get('numero').touched\">Número</span>\n    </mat-error>\n  </mat-form-field>\n\n  <div class=\"ui-g-12 ui-md-4\">\n    <h3>Data de Partida</h3>\n    <p-calendar [(ngModel)]=\"dataPartida\" [showTime]=\"true\" formControlName=\"dataPartida\"></p-calendar>\n  </div>\n\n  <div class=\"ui-g-12 ui-md-4\">\n    <h3>Data de Chegada</h3>\n    <p-calendar [(ngModel)]=\"dataChegada\" [showTime]=\"true\" formControlName=\"dataChegada\"></p-calendar>\n  </div>\n\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Passagens Disponíveis\" formControlName=\"passagensDisp\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!vooForm.get('passagensDisp').valid && vooForm.get('passagensDisp').touched\">Passagens Disponíveis</span>\n    </mat-error>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Origem</mat-label>\n    <mat-select formControlName=\"origem\">\n      <mat-option  *ngFor=\"let origem of origens\" [value]=\"origem\">\n        {{origem.cidade}}\n        ({{origem.siglaestado}})-{{origem.pais}}   \n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Destino</mat-label>\n    <mat-select formControlName=\"destino\">\n      <mat-option  *ngFor=\"let destino of destinos\" [value]=\"destino\">\n        {{destino.cidade}}\n        ({{destino.siglaestado}})-{{destino.pais}}   \n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  \n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!vooForm.valid\" mat-raised-button color=\"primary\"><mat-icon>save</mat-icon></button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/voo/voo-edit/voo-edit.component.ts":
/*!****************************************************!*\
  !*** ./src/app/voo/voo-edit/voo-edit.component.ts ***!
  \****************************************************/
/*! exports provided: VooEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VooEditComponent", function() { return VooEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _voo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../voo.service */ "./src/app/voo/voo.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../endereco/endereco.service */ "./src/app/endereco/endereco.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VooEditComponent = /** @class */ (function () {
    function VooEditComponent(router, route, vooService, formBuilder, enderecoService) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.vooService = vooService;
        this.formBuilder = formBuilder;
        this.enderecoService = enderecoService;
        this.id = '';
        this.enderecoService.getEnderecos()
            .subscribe(function (res) {
            console.log(res);
            _this.origens = res;
            _this.destinos = res;
        }, function (err) {
            console.log(err);
        });
    }
    VooEditComponent.prototype.ngOnInit = function () {
        this.getVoo(this.route.snapshot.params['id']);
        this.vooForm = this.formBuilder.group({
            'numero': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'dataPartida': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'dataChegada': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'passagensDisp': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'origem': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'destino': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    VooEditComponent.prototype.getVoo = function (id) {
        var _this = this;
        this.vooService.getVoo(id).subscribe(function (data) {
            _this.id = data._id;
            _this.vooForm.setValue({
                numero: data.numero,
                dataPartida: data.dataPartida,
                dataChegada: data.dataChegada,
                passagensDisp: data.passagensDisp,
                origem: data.origem,
                destino: data.destino
            });
        });
    };
    VooEditComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.vooService.updateVoo(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/voo-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    VooEditComponent.prototype.vooDetails = function () {
        this.router.navigate(['/voo-details', this.id]);
    };
    VooEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voo-edit',
            template: __webpack_require__(/*! ./voo-edit.component.html */ "./src/app/voo/voo-edit/voo-edit.component.html"),
            styles: [__webpack_require__(/*! ./voo-edit.component.css */ "./src/app/voo/voo-edit/voo-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _voo_service__WEBPACK_IMPORTED_MODULE_2__["VooService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _endereco_endereco_service__WEBPACK_IMPORTED_MODULE_4__["EnderecoService"]])
    ], VooEditComponent);
    return VooEditComponent;
}());



/***/ }),

/***/ "./src/app/voo/voo-list/voo-list.component.css":
/*!*****************************************************!*\
  !*** ./src/app/voo/voo-list/voo-list.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  max-height: 500px;\n  min-width: 300px;\n  overflow: auto;\n}\n\n.isbn-col {\n  flex: 0 0 100px !important;\n  white-space: unset !important;\n}\n\n.button-row {\n  margin: 10px 0;\n}\n"

/***/ }),

/***/ "./src/app/voo/voo-list/voo-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/voo/voo-list/voo-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" [routerLink]=\"['/voo-create']\"><mat-icon>add</mat-icon></a>\n</div>\n<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"numero\">\n      <th mat-header-cell *matHeaderCellDef> Número </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.numero}} </td>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"dataPartida\">\n      <th mat-header-cell *matHeaderCellDef> Data de Partida</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.dataPartida| date:\"dd/MM/yyyy HH:mm\"}} </td>\n    </ng-container>\n\n    <!-- Author Column -->\n    <ng-container matColumnDef=\"dataChegada\">\n      <th mat-header-cell *matHeaderCellDef>Data de Chegada</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.dataChegada|date:\"dd/MM/yyyy HH:mm\"}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"passagensDisp\">\n      <th mat-header-cell *matHeaderCellDef> Passagens Disponíveis </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.passagensDisp}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"origem\">\n      <th mat-header-cell *matHeaderCellDef> Origem </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.origem.cidade}}({{element.origem.siglaestado}}) </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"destino\">\n      <th mat-header-cell *matHeaderCellDef> Destino </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.destino.cidade}}({{element.destino.siglaestado}}) </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [routerLink]=\"['/voo-details/', row._id]\"></tr>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/voo/voo-list/voo-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/voo/voo-list/voo-list.component.ts ***!
  \****************************************************/
/*! exports provided: VooListComponent, VooDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VooListComponent", function() { return VooListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VooDataSource", function() { return VooDataSource; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _voo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../voo.service */ "./src/app/voo/voo.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VooListComponent = /** @class */ (function () {
    function VooListComponent(apiVoo) {
        this.apiVoo = apiVoo;
        this.displayedColumns = ['numero', 'dataPartida', 'dataChegada', 'passagensDisp', 'origem', 'destino'];
        this.dataSource = new VooDataSource(this.apiVoo);
    }
    VooListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiVoo.getVoos()
            .subscribe(function (res) {
            console.log(res);
            _this.voos = res;
        }, function (err) {
            console.log(err);
        });
    };
    VooListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-voo-list',
            template: __webpack_require__(/*! ./voo-list.component.html */ "./src/app/voo/voo-list/voo-list.component.html"),
            styles: [__webpack_require__(/*! ./voo-list.component.css */ "./src/app/voo/voo-list/voo-list.component.css")]
        }),
        __metadata("design:paramtypes", [_voo_service__WEBPACK_IMPORTED_MODULE_1__["VooService"]])
    ], VooListComponent);
    return VooListComponent;
}());

var VooDataSource = /** @class */ (function (_super) {
    __extends(VooDataSource, _super);
    function VooDataSource(apiVoo) {
        var _this = _super.call(this) || this;
        _this.apiVoo = apiVoo;
        return _this;
    }
    VooDataSource.prototype.connect = function () {
        return this.apiVoo.getVoos();
    };
    VooDataSource.prototype.disconnect = function () {
    };
    return VooDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/voo/voo.service.ts":
/*!************************************!*\
  !*** ./src/app/voo/voo.service.ts ***!
  \************************************/
/*! exports provided: VooService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VooService", function() { return VooService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = "/apivoo";
var VooService = /** @class */ (function () {
    function VooService(http) {
        this.http = http;
    }
    VooService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    VooService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    VooService.prototype.getVoos = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    VooService.prototype.getVoo = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    VooService.prototype.postVoo = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    VooService.prototype.updateVoo = function (id, data) {
        var url = apiUrl + "/" + id;
        return this.http.put(url, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    VooService.prototype.deleteVoo = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    VooService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], VooService);
    return VooService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/natalia/Documentos/Engenharia de Software/reserva mongo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map