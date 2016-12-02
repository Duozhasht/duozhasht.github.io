import { NgModule } from '@angular/core';

import { AboutComponent } from './_base/about.component'
import { AcademicComponent } from './academic/academic.component'
import { IntroComponent } from './intro/intro.component'
import { SkillsComponent } from './skills/skills.component'

@NgModule({
  imports: [],
  exports: [],
  declarations: [
  	AboutComponent,
  	AcademicComponent,
  	IntroComponent,
  	SkillsComponent
  ],
  providers: []
})
export class AboutModule { }