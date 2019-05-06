import {Component} from '@angular/core';
import { fadeInOut } from './animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [fadeInOut]
})
export class AppComponent {

    onAnimationStart() {
        console.log('start');
    }

    onAnimationEnd() {
        console.log('end');
    }
}
