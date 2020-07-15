import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccordionComponent } from "./accordion.component";
import { AccordionTitleComponent } from './accordion--title/accordion--title.component';
import { AccordionContentComponent } from './accordion--content/accordion--content.component';

@NgModule({
  declarations: [AccordionComponent, AccordionTitleComponent, AccordionContentComponent],
  imports: [CommonModule],
  exports: [AccordionComponent,AccordionTitleComponent, AccordionContentComponent]
})
export class AccordionModule {}
