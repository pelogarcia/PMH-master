import {Component, Input, OnInit} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  closeResult: string;

  constructor(private modalService: NgbModal) {} 
 
    // clickedMarker(label: string, index: number) {
    //     console.log(`clicked the marker: ${label || index}`)
    // }
    //
    // mapClicked($event: MouseEvent) {
    //     this.markers.push({
    //         lat: $event.coords.lat,
    //         lng: $event.coords.lng
    //     });
    // }
    //
    // markerDragEnd(m: marker, $event: MouseEvent) {
    //     console.log('dragEnd', m, $event);
    // }
    ngOnInit() {
    //   var myLatlng = new google.maps.LatLng(44.445248, 26.099672);
    //   var mapOptions = {
    //     // zoom: 14,
    //     center: myLatlng,
    //     styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}],
    //     scrollwheel: false, //we disable de scroll over the map, it is a really annoing when you scroll through page
    //   }
      //
    //   var map = new google.maps.Map(document.getElementById("contactUsMap2"), mapOptions);
      //
    //   var marker = new google.maps.Marker({
    //       position: myLatlng,
    //       title:"Creative Tim Office"
    //   });
      //
    //   // To add the marker to the map, call setMap();
    //   marker.setMap(map);
    }
     // google maps zoom level
 
     open(content, type) {
      if (type === 'sm') {
          console.log('aici');
          this.modalService.open(content, { size: 'sm' }).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      } else {
          this.modalService.open(content).result.then((result) => {
              this.closeResult = `Closed with: ${result}`;
          }, (reason) => {
              this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
      }
  }

  private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
      } else {
          return  `with: ${reason}`;
      }
  }

}

//Cada vez que quieras hacer un modal siempre va este bakcend
//hace que aba y cierr el el modal
 