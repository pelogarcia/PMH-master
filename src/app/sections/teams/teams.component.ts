 import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import { ToastrManager } from 'ng6-toastr-notifications';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor() { }


  state_icon_primary1 = false;
  state_icon_primary2= false;
  state_icon_primary3 = false;
  state_icon_primary4= false;
  state_icon_primary5 = false;
  state_icon_primary6 = false;
  state_icon_primary7 = false;
  state_icon_primary8 = false;
  state_icon_primary9 = false;
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
                          {"id":1,"itemName":"1"},
                          {"id":2,"itemName":"2"},
                          {"id":3,"itemName":"3"},
                          {"id":4,"itemName":"4"},
                          {"id":5,"itemName":"5"},
                          {"id":6,"itemName":"6"}
                        ];
    this.selectedItems1 = [
                        ];
    this.dropdownSettings1 = {
                              singleSelection: true,
                              text:"Seleccióne la cantidad",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              search: true,
                              classes:""
                            };
                            this.dropdownList = [
                              {"id":1,"itemName":"1"},
                              {"id":2,"itemName":"2"},
                              {"id":3,"itemName":"3"},
                              {"id":4,"itemName":"4"},
                              {"id":5,"itemName":"5"},
                              {"id":6,"itemName":"6"}
                                                ];
                            this.selectedItems = [
                                                ];
                            this.dropdownSettings = {
                                                      singleSelection: true,
                                                      text:"Seleccióne la cantidad",
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
