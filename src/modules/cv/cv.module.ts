import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BioComponent } from './components/bio/bio.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CvComponent } from './cv.component';
import { CardModule } from 'primeng/card';
import { PanelModule} from 'primeng/panel'


@NgModule({
  declarations: [
    BioComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    CvComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    PanelModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class CvModule { }
