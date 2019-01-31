import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss']
})
export class HeadersComponent implements OnInit {



  date: {year: number, month: number};
  model: NgbDateStruct;
  model1: NgbDateStruct;

  public isCollapsed = true;
  public isCollapsed1 = true;
  public isCollapsed2 = true;

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  state_icon_primary = true;

  constructor( private renderer : Renderer, config: NgbAccordionConfig, public toastr: ToastrManager) {
      config.closeOthers = true;
      config.type = 'info';
  }
  isWeekend(date: NgbDateStruct) {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
  }

  isDisabled(date: NgbDateStruct, current: {month: number}) {
      return date.month !== current.month;
  }
  showSuccess() {
    this.toastr.successToastr('Nos estaremos comunicando a la brevedad.', 'Gracias por visitarnos!');
}

  simpleSlider = 40;
  doubleSlider = [20, 60];
  state_primary = true;
  state_succes = true;
  state_warning = true;


  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownList1 = [];
  selectedItems1 = [];
  dropdownSettings1 = {};

  ngOnInit() {
    this.dropdownList1 = [
                          {"id":1,"itemName":"Roman"},
                          {"id":2,"itemName":"Paris"},
                          {"id":3,"itemName":"Bucharest"},
                          {"id":4,"itemName":"Rome"},
                          {"id":5,"itemName":"New York"},
                          {"id":6,"itemName":"Miami"},
                          {"id":7,"itemName":"Piatra Neamt"},
                          {"id":8,"itemName":"Paris"},
                          {"id":9,"itemName":"Bucharest"},
                          {"id":10,"itemName":"Rome"},
                          {"id":11,"itemName":"New York"},
                          {"id":12,"itemName":"Miami"},
                          {"id":13,"itemName":"Piatra Neamt"}
                        ];
    this.selectedItems1 = [
                        ];
    this.dropdownSettings1 = {
                              singleSelection: true,
                              text:"Select City",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              search: true,
                              classes:""
                            };
                            this.dropdownList  = [
                                                  {"id":1,"itemName":"Roman"},
                                                  {"id":2,"itemName":"Paris"},
                                                  {"id":3,"itemName":"Bucharest"},
                                                  {"id":4,"itemName":"Rome"},
                                                  {"id":5,"itemName":"New York"},
                                                  {"id":6,"itemName":"Miami"},
                                                  {"id":7,"itemName":"Piatra Neamt"},
                                                  {"id":8,"itemName":"Paris"},
                                                  {"id":9,"itemName":"Bucharest"},
                                                  {"id":10,"itemName":"Rome"},
                                                  {"id":11,"itemName":"New York"},
                                                  {"id":12,"itemName":"Miami"},
                                                  {"id":13,"itemName":"Piatra Neamt"}
                                                ];
                            this.selectedItems = [
                                                ];
                            this.dropdownSettings = {
                                                      singleSelection: true,
                                                      text:"Select City",
                                                      selectAllText:'Select All',
                                                      unSelectAllText:'UnSelect All',
                                                      enableSearchFilter: true,
                                                      classes:""
                                                    };

  }
  onItemSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
      console.log(item);
      console.log(this.selectedItems);
  }
  onSelectAll(items: any){
      console.log(items);
  }
  onDeSelectAll(items: any){
      console.log(items);
  }

}
