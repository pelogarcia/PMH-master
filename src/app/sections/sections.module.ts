import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionsComponent } from './sections.component';
import { HeadersComponent } from './headers/headers.component';
import { FeaturesComponent } from './features/features.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TeamsComponent } from './teams/teams.component';
import { ProjectsComponent } from './projects/projects.component';
import { PricingComponent } from './pricing/pricing.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JWBootstrapSwitchModule } from 'jw-bootstrap-switch-ng2';
import { TagInputModule } from 'ngx-chips';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgxGalleryModule } from 'ngx-gallery';
import { ImageUploadModule } from '../shared/image-upload/image-upload.module'
import { ToastrModule } from 'ng6-toastr-notifications';
import { AgmCoreModule } from '@agm/core';
 import { BrowserModule } from '@angular/platform-browser';
 import { HttpClientModule } from '@angular/common/http';
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 import { CircleComponent} from './circle/circle.component';
 import { MessageService } from '../services/message.service';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        BrowserAnimationsModule,
        NouisliderModule,
        TagInputModule,
        JWBootstrapSwitchModule,
        BrowserModule,
        AngularMultiSelectModule,
        NgxGalleryModule,
        ImageUploadModule,
        ToastrModule.forRoot(),
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDDUxwKzeghJSaOiwj9yVxw6uLbLujhiBg'
        }),
        RouterModule,
        HttpClientModule

    ],
    declarations: [
        SectionsComponent,
        HeadersComponent,
        FeaturesComponent,
        BlogsComponent,
        TeamsComponent,
        ProjectsComponent,
        PricingComponent,
        TestimonialsComponent,
        CircleComponent,
        ContactsComponent
    ],
    providers: [MessageService],
    exports: [
        SectionsComponent
    ]
})
export class SectionsModule { }
