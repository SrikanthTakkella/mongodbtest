import {Component,OnInit} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector:'app-carousel',
    templateUrl:'./carousel.component.html',
    styleUrls:['./carousel.component.css']
})

export class CarouselComponent implements OnInit {
    ngOnInit(){

    }

    image:string[] = ['./assets/images/Head-LineMountainHoliday_PhotoMarcDionne-2.jpg','./assets/images/MMR_2013-08-14_2550-Bearbeitet.jpg','./assets/images/snowshoeing-bc-winter.jpg'];

    constructor(config:NgbCarouselConfig){
        console.log(this.image[0]);
        config.interval=5000;
        config.wrap=true;
        config.keyboard=false;
        config.pauseOnHover=false;
        config.showNavigationArrows=false;
        config.showNavigationIndicators=false;
    }
}